import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('cookie-consent') === 'accepted') {
      trackPageView(location.pathname);
    }
  }, [location]);

  return null;
};

export default RouteTracker;
