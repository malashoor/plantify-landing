import { Platform } from 'react-native';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      render: (element: HTMLElement, options: {
        sitekey: string;
        callback: (token: string) => void;
        'expired-callback': () => void;
        'error-callback': () => void;
      }) => number;
    };
  }
}

const RECAPTCHA_SITE_KEY = process.env.EXPO_PUBLIC_RECAPTCHA_SITE_KEY || '';

export const loadReCaptchaScript = (): Promise<void> => {
  if (Platform.OS !== 'web') return Promise.resolve();

  return new Promise((resolve, reject) => {
    if (document.querySelector('script[src*="recaptcha"]')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });
};

export const getReCaptchaToken = async (action: string): Promise<string> => {
  if (Platform.OS !== 'web') return '';

  try {
    await loadReCaptchaScript();
    return new Promise((resolve, reject) => {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('reCAPTCHA error:', error);
    throw error;
  }
};

export const renderReCaptcha = (
  element: HTMLElement,
  onSuccess: (token: string) => void,
  onExpired: () => void,
  onError: () => void
): number => {
  if (Platform.OS !== 'web') return 0;

  return window.grecaptcha.render(element, {
    sitekey: RECAPTCHA_SITE_KEY,
    callback: onSuccess,
    'expired-callback': onExpired,
    'error-callback': onError,
  });
}; 