export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      problem: "Problem",
      technology: "Technology",
      market: "Market",
      team: "Team",
      contact: "Contact",
      requestDeck: "Request Deck",
      close: "Close",
      menu: "Menu",
      ariaLabel: "Choice Medical — go to top",
    },
    hero: {
      eyebrow: "Choice Medical",
      line1: "3 million women a year",
      line2: "are marked for life.",
      line3: "Most don't need to be.",
      sub: "We're changing that.",
      scroll: "Scroll",
    },
    contrast: {
      eyebrow: "The problem with today's markers",
      heading: "The standard hasn't changed in 30 years.",
      colConventional: "Conventional marker",
      colChoice: "Choice Medical",
      rows: [
        { before: "Permanent implant", after: "Fully biodegrades" },
        { before: "Marked for life", after: "No trace remains" },
        { before: "MRI interference", after: "Clean imaging, always" },
        { before: "Patient anxiety", after: "Patient peace of mind" },
      ],
    },
    science: {
      eyebrow: "The technology",
      heading1: "The first breast biopsy marker designed to",
      headingHighlight: "fully biodegrade",
      heading2: "— leaving nothing behind after clinical need ends.",
      body: "Developed from breakthrough biomaterial research, our marker gives clinicians full imaging visibility during the diagnostic window — then disappears completely. No permanent implant. No long-term consequences.",
      credentials: ["Patent Filed", "Paris Saclay University", "France 2030"],
    },
    market: {
      eyebrow: "The scale of the problem",
      proceduresLabel: "breast biopsy procedures per year",
      us: "United States",
      eu: "Europe",
      statement: "Zero fully biodegradable alternatives exist today.",
      body: "Every one of those procedures currently ends with a permanent marker left inside the patient.",
    },
    team: {
      eyebrow: "The people",
      heading1: "Science, medicine,",
      heading2: "and execution — combined.",
      advisorsLabel: "Advisors",
      advisorBios: {
        alexander: "Global health economist. Faculty at Columbia University.",
        julia: "Senior breast radiologist at Gustave Roussy and private practice. SIFEM board member. Breast cancer screening advocate in France.",
      },
    },
    cta: {
      eyebrow: "Seed Round",
      heading1: "We're building the future",
      heading2: "of breast care.",
      heading3: "Join us.",
      body: "If you see the opportunity we see, we'd love to connect. Request our investor deck or reach out directly.",
      button: "Request Investor Deck",
    },
    disclaimer: {
      srTitle: "FDA investigational-use disclaimer",
      text: "Caution — Investigational device. Limited by Federal law to investigational use. Not for sale.",
    },
    supported: {
      france2030: "This project was funded by the French government as part of France 2030",
      legal: "The products and solutions described on this website are currently under development and have not been cleared or approved by the U.S. Food and Drug Administration (FDA). They are not available for sale or distribution. The information provided is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment.",
      privacy: "Privacy Policy",
    },
    privacyPolicy: {
      ariaLabel: "Privacy Policy",
      title: "Privacy Policy",
      dataController: {
        title: "Data Controller",
        name: "Choice Medical Health",
        emailLabel: "Email",
      },
      dataWeCollect: {
        title: "Data We Collect",
        intro: "We collect minimal personal data when you contact us via email:",
        items: [
          "Email address (when you contact us)",
          "Any information you voluntarily provide in your message",
        ],
      },
      legalBasis: {
        title: "Legal Basis for Processing",
        intro: "We process your personal data based on:",
        items: [
          { label: "Legitimate Interest", text: "To respond to your inquiries and provide information about our medical devices" },
          { label: "Consent", text: "When you voluntarily contact us" },
        ],
      },
      howWeUse: {
        title: "How We Use Your Data",
        intro: "We use your personal data exclusively to:",
        items: [
          "Respond to your inquiries",
          "Provide information about our medical devices and research",
          "Maintain records of our communications for regulatory compliance",
        ],
      },
      dataSharing: {
        title: "Data Sharing",
        intro: "We do not sell, rent, or share your personal data with third parties except:",
        items: [
          "When required by law or regulatory authorities",
          "To protect our legal rights or safety",
        ],
      },
      rights: {
        title: "Your Rights",
        intro: "Under GDPR, you have the right to:",
        items: [
          { label: "Access", text: "Request a copy of your personal data" },
          { label: "Rectification", text: "Correct inaccurate personal data" },
          { label: "Erasure", text: "Request deletion of your personal data" },
          { label: "Portability", text: "Receive your data in a structured format" },
          { label: "Objection", text: "Object to processing based on legitimate interests" },
          { label: "Withdraw Consent", text: "Withdraw consent at any time" },
        ],
        contact: "To exercise these rights, contact us at: contactus@choicemedical.health",
      },
      dataRetention: {
        title: "Data Retention",
        body: "We retain your personal data only as long as necessary for the purposes outlined above, typically no longer than 2 years after our last communication, unless required by law to retain it longer.",
      },
      cookies: {
        title: "Cookies and Tracking",
        paragraphs: [
          "Our website uses essential cookies necessary for functionality (such as remembering your preferences). With your explicit consent, we may load analytics tools through Google Tag Manager and Google Analytics to understand how visitors use the site. We may also load the GPTEngineer platform script used to manage this website. These third-party tools may collect data according to their own privacy policies.",
          "You can manage your cookie preferences through the cookie consent banner. Essential cookies cannot be disabled as they are necessary for the website to function properly.",
        ],
      },
      contactComplaints: {
        title: "Contact and Complaints",
        paragraphs: [
          "For privacy-related questions or to exercise your rights, contact us at: contactus@choicemedical.health",
          "You also have the right to lodge a complaint with your local data protection authority.",
        ],
      },
      changes: {
        title: "Changes to This Policy",
        body: "We may update this privacy policy from time to time. The current version will always be available on this page with the effective date noted below.",
      },
      lastUpdated: "Last updated",
    },
  },
  fr: {
    nav: {
      problem: "Problème",
      technology: "Technologie",
      market: "Marché",
      team: "Équipe",
      contact: "Contact",
      requestDeck: "Demander le dossier",
      close: "Fermer",
      menu: "Menu",
      ariaLabel: "Choice Medical — aller en haut",
    },
    hero: {
      eyebrow: "Choice Medical",
      line1: "3 millions de femmes par an",
      line2: "sont marquées à vie.",
      line3: "La plupart ne le devraient pas.",
      sub: "Nous changeons cela.",
      scroll: "Défiler",
    },
    contrast: {
      eyebrow: "Le problème des marqueurs actuels",
      heading: "Le standard n'a pas changé depuis 30 ans.",
      colConventional: "Marqueur conventionnel",
      colChoice: "Choice Medical",
      rows: [
        { before: "Implant permanent", after: "Se biodégrade complètement" },
        { before: "Marquée à vie", after: "Aucune trace ne subsiste" },
        { before: "Interférences IRM", after: "Imagerie claire, toujours" },
        { before: "Anxiété de la patiente", after: "Sérénité de la patiente" },
      ],
    },
    science: {
      eyebrow: "La technologie",
      heading1: "Le premier marqueur de biopsie mammaire conçu pour se",
      headingHighlight: "biodégrader complètement",
      heading2: "— ne laissant aucune trace une fois le besoin clinique terminé.",
      body: "Issu de recherches pionnières en biomatériaux, notre marqueur offre aux cliniciens une visibilité d'imagerie complète pendant la fenêtre diagnostique — puis disparaît totalement. Aucun implant permanent. Aucune conséquence à long terme.",
      credentials: ["Brevet déposé", "Université Paris-Saclay", "France 2030"],
    },
    market: {
      eyebrow: "L'ampleur du problème",
      proceduresLabel: "biopsies mammaires par an",
      us: "États-Unis",
      eu: "Europe",
      statement: "Aucune alternative totalement biodégradable n'existe aujourd'hui.",
      body: "Chacune de ces procédures se termine actuellement avec un marqueur permanent laissé à l'intérieur de la patiente.",
    },
    team: {
      eyebrow: "L'équipe",
      heading1: "Science, médecine,",
      heading2: "et exécution — réunies.",
      advisorsLabel: "Conseillers",
      advisorBios: {
        alexander: "Économiste mondial de la santé. Professeur à l'Université Columbia.",
        julia: "Radiologue mammaire senior à Gustave Roussy et en cabinet privé. Membre du conseil de la SIFEM. Engagée dans le dépistage du cancer du sein en France.",
      },
    },
    cta: {
      eyebrow: "Tour d'amorçage",
      heading1: "Nous construisons l'avenir",
      heading2: "de la santé mammaire.",
      heading3: "Rejoignez-nous.",
      body: "Si vous voyez l'opportunité que nous voyons, nous serions ravis d'échanger. Demandez notre dossier investisseur ou contactez-nous directement.",
      button: "Demander le dossier investisseur",
    },
    disclaimer: {
      srTitle: "Avertissement FDA — usage expérimental",
      text: "Attention — Dispositif expérimental. Limité par la loi fédérale à un usage expérimental. Non commercialisé.",
    },
    supported: {
      france2030: "Ce projet a été financé par l'État dans le cadre de France 2030",
      legal: "Les produits et solutions décrits sur ce site sont actuellement en cours de développement et n'ont pas été autorisés ou approuvés par la Food and Drug Administration (FDA) des États-Unis. Ils ne sont pas disponibles à la vente ou à la distribution. Les informations fournies sont à titre informatif uniquement et ne constituent pas un substitut aux conseils médicaux professionnels, au diagnostic ou au traitement.",
      privacy: "Politique de confidentialité",
    },
    privacyPolicy: {
      ariaLabel: "Politique de confidentialité",
      title: "Politique de confidentialité",
      dataController: {
        title: "Responsable du traitement",
        name: "Choice Medical Health",
        emailLabel: "E-mail",
      },
      dataWeCollect: {
        title: "Données que nous collectons",
        intro: "Nous collectons un minimum de données personnelles lorsque vous nous contactez par e-mail :",
        items: [
          "Adresse e-mail (lorsque vous nous contactez)",
          "Toute information que vous fournissez volontairement dans votre message",
        ],
      },
      legalBasis: {
        title: "Base légale du traitement",
        intro: "Nous traitons vos données personnelles sur les bases suivantes :",
        items: [
          { label: "Intérêt légitime", text: "Répondre à vos demandes et vous fournir des informations sur nos dispositifs médicaux" },
          { label: "Consentement", text: "Lorsque vous nous contactez volontairement" },
        ],
      },
      howWeUse: {
        title: "Comment nous utilisons vos données",
        intro: "Nous utilisons vos données personnelles exclusivement pour :",
        items: [
          "Répondre à vos demandes",
          "Fournir des informations sur nos dispositifs médicaux et nos recherches",
          "Conserver des traces de nos échanges à des fins de conformité réglementaire",
        ],
      },
      dataSharing: {
        title: "Partage des données",
        intro: "Nous ne vendons, louons ni partageons vos données personnelles avec des tiers, sauf :",
        items: [
          "Lorsque la loi ou les autorités réglementaires l'exigent",
          "Pour protéger nos droits légaux ou notre sécurité",
        ],
      },
      rights: {
        title: "Vos droits",
        intro: "En vertu du RGPD, vous disposez des droits suivants :",
        items: [
          { label: "Accès", text: "Demander une copie de vos données personnelles" },
          { label: "Rectification", text: "Corriger des données personnelles inexactes" },
          { label: "Effacement", text: "Demander la suppression de vos données personnelles" },
          { label: "Portabilité", text: "Recevoir vos données dans un format structuré" },
          { label: "Opposition", text: "Vous opposer au traitement fondé sur nos intérêts légitimes" },
          { label: "Retrait du consentement", text: "Retirer votre consentement à tout moment" },
        ],
        contact: "Pour exercer ces droits, contactez-nous à : contactus@choicemedical.health",
      },
      dataRetention: {
        title: "Conservation des données",
        body: "Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités décrites ci-dessus, généralement pas plus de 2 ans après notre dernier échange, sauf si la loi impose une durée de conservation plus longue.",
      },
      cookies: {
        title: "Cookies et suivi",
        paragraphs: [
          "Notre site utilise des cookies essentiels nécessaires à son bon fonctionnement (par exemple pour mémoriser vos préférences). Avec votre consentement explicite, nous pouvons charger des outils d'analyse via Google Tag Manager et Google Analytics afin de comprendre comment les visiteurs utilisent le site. Nous pouvons également charger le script de la plateforme GPTEngineer utilisé pour gérer ce site. Ces outils tiers peuvent collecter des données conformément à leurs propres politiques de confidentialité.",
          "Vous pouvez gérer vos préférences de cookies via la bannière de consentement. Les cookies essentiels ne peuvent pas être désactivés car ils sont nécessaires au bon fonctionnement du site.",
        ],
      },
      contactComplaints: {
        title: "Contact et réclamations",
        paragraphs: [
          "Pour toute question liée à la confidentialité ou pour exercer vos droits, contactez-nous à : contactus@choicemedical.health",
          "Vous avez également le droit d'introduire une réclamation auprès de votre autorité locale de protection des données.",
        ],
      },
      changes: {
        title: "Modifications de cette politique",
        body: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. La version en vigueur sera toujours disponible sur cette page avec la date d'effet indiquée ci-dessous.",
      },
      lastUpdated: "Dernière mise à jour",
    },
  },
} as const;
