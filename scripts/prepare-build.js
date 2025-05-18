const fs = require('fs');
const path = require('path');

// Environment variables or defaults
const APP_STORE_URL = process.env.APP_STORE_URL || 'https://apps.apple.com/app/plantify';
const PLAY_STORE_URL = process.env.PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.plantify.app';
const RECAPTCHA_SITE_KEY = process.env.RECAPTCHA_SITE_KEY || '6LdKCD8rAAAAABGPhIMkfbArviupEohtWxp9FyLG';

// Read the HTML file
const htmlPath = path.join(__dirname, '..', 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Replace placeholders
htmlContent = htmlContent
  .replace(/APP_STORE_URL_PLACEHOLDER/g, APP_STORE_URL)
  .replace(/PLAY_STORE_URL_PLACEHOLDER/g, PLAY_STORE_URL)
  .replace(/RECAPTCHA_SITE_KEY_PLACEHOLDER/g, RECAPTCHA_SITE_KEY)
  .replace(/EXPO_PUBLIC_APP_STORE_URL_PLACEHOLDER/g, APP_STORE_URL)
  .replace(/EXPO_PUBLIC_PLAY_STORE_URL_PLACEHOLDER/g, PLAY_STORE_URL);

// Write the modified content back
fs.writeFileSync(htmlPath, htmlContent, 'utf8');

console.log('Successfully prepared the build with environment variables:');
console.log(`- App Store URL: ${APP_STORE_URL}`);
console.log(`- Play Store URL: ${PLAY_STORE_URL}`);
console.log(`- reCAPTCHA Site Key: ${RECAPTCHA_SITE_KEY}`); 