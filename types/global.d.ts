// Type definitions for React Native on Web
declare module 'react-native' {
  export * from 'react-native-web';
}

// Window with reCAPTCHA
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

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    EXPO_PUBLIC_RECAPTCHA_SITE_KEY: string;
    EXPO_PUBLIC_APP_STORE_URL: string;
    EXPO_PUBLIC_PLAY_STORE_URL: string;
  }
} 