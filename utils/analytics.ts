import { Platform } from 'react-native';
import posthog from 'posthog-js';

const POSTHOG_API_KEY = process.env.EXPO_PUBLIC_POSTHOG_API_KEY || '';
const POSTHOG_HOST = process.env.EXPO_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

export const initializeAnalytics = () => {
  if (Platform.OS !== 'web') return;

  posthog.init(POSTHOG_API_KEY, {
    api_host: POSTHOG_HOST,
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') {
        posthog.debug();
      }
    },
  });
};

export const trackEvent = (
  eventName: string,
  properties?: Record<string, any>
) => {
  if (Platform.OS !== 'web') return;

  posthog.capture(eventName, {
    ...properties,
    category: 'Landing',
    subcategory: 'EarlyAccess',
  });
};

// Early Access Form specific events
export const trackFormView = (variant: 'hero' | 'footer') => {
  trackEvent('early_access_form_view', { variant });
};

export const trackFormSubmit = (success: boolean, error?: string) => {
  trackEvent('early_access_form_submit', { success, error });
};

export const trackNewsletterOptIn = (optedIn: boolean) => {
  trackEvent('early_access_newsletter_opt_in', { optedIn });
};

export const trackReCaptchaError = (error: string) => {
  trackEvent('early_access_recaptcha_error', { error });
}; 