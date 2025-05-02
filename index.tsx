import React from 'react';
import { AppRegistry } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import LandingPage from './landing-content';
import SEO from './seo-config';

// Register the app
AppRegistry.registerComponent('PlantifyLanding', () => (
  <I18nextProvider i18n={i18n}>
    <SEO />
    <LandingPage />
  </I18nextProvider>
));

// Initialize the app
AppRegistry.runApplication('PlantifyLanding', {
  rootTag: document.getElementById('root'),
}); 