import assert from "node:assert/strict";
import { after, test } from "node:test";
import { readFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { createServer } from "vite";

const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

after(async () => {
  await vite.close();
});

const loadModule = (path) => vite.ssrLoadModule(path);

const renderWithKnownWarningsSuppressed = (element) => {
  const originalError = console.error;
  const unexpectedErrors = [];

  console.error = (...args) => {
    const message = String(args[0] ?? "");
    if (message.includes("useLayoutEffect does nothing on the server")) {
      return;
    }

    unexpectedErrors.push(args);
    originalError(...args);
  };

  try {
    return renderToString(element);
  } finally {
    console.error = originalError;
    assert.deepEqual(unexpectedErrors, []);
  }
};

const renderPage = async (path, Page, lang = "en") => {
  const { LanguageProvider } = await loadModule("/src/contexts/LanguageContext.tsx");

  return renderWithKnownWarningsSuppressed(
    React.createElement(
      LanguageProvider,
      { initialLang: lang },
      React.createElement(
        MemoryRouter,
        { initialEntries: [path] },
        React.createElement(Page)
      )
    )
  );
};

test("home page smoke renders core hero copy", async () => {
  const { default: Index } = await loadModule("/src/pages/Index.tsx");
  const html = await renderPage("/", Index);

  assert.match(html, /3 million women a year/);
  assert.match(html, /Request Investor Deck/);
});

test("privacy page smoke renders under router and language context", async () => {
  const { default: PrivacyPage } = await loadModule("/src/pages/PrivacyPage.tsx");
  const html = await renderPage("/privacy", PrivacyPage);

  assert.match(html, /Privacy Policy/);
  assert.match(html, /Cookies and Tracking/);
});

test("privacy page renders French content when French is selected", async () => {
  const { default: PrivacyPage } = await loadModule("/src/pages/PrivacyPage.tsx");
  const html = await renderPage("/privacy", PrivacyPage, "fr");

  assert.match(html, /Politique de confidentialité/);
  assert.match(html, /Cookies et suivi/);
});

test("cookie banner links to the privacy route", async () => {
  const cookieConsent = await readFile("src/components/CookieConsent.tsx", "utf8");

  assert.match(cookieConsent, /href="\/privacy"/);
});

test("share metadata uses the production domain and real hero asset", async () => {
  const indexHtml = await readFile("index.html", "utf8");

  assert.match(indexHtml, /<link rel="canonical" href="https:\/\/choicemedical\.health\/" \/>/);
  assert.match(indexHtml, /property="og:url" content="https:\/\/choicemedical\.health\/"/);
  assert.match(indexHtml, /property="og:image" content="https:\/\/choicemedical\.health\/uploads\/hero-medical-guidance\.webp"/);
});
