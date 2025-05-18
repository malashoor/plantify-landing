# Plantify Landing Page

A landing page for the Plantify app, built with pure HTML/CSS/JS for maximum performance and compatibility.

## Features

- Responsive design for all devices
- App store links for iOS and Android
- Feature overview with visual elements
- Screenshot gallery for app preview
- Early access waitlist signup form
- reCAPTCHA integration

## Development

1. Clone the repository:
```bash
git clone https://github.com/malashoor/plantify-landing.git
cd plantify-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Production Build

For a production build with environment variables:

```bash
APP_STORE_URL="https://apps.apple.com/app/plantify" \
PLAY_STORE_URL="https://play.google.com/store/apps/details?id=com.plantify.app" \
RECAPTCHA_SITE_KEY="your-recaptcha-site-key" \
npm run build:prod
```

## Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command to: `npm run build:prod`
3. Set publish directory to: `dist`
4. Add environment variables:
   - `APP_STORE_URL`: Your App Store URL
   - `PLAY_STORE_URL`: Your Google Play Store URL
   - `RECAPTCHA_SITE_KEY`: Your reCAPTCHA site key

## Environment Variables

The following environment variables are used:

| Variable | Description | Default |
|----------|-------------|---------|
| `APP_STORE_URL` | Apple App Store URL | https://apps.apple.com/app/plantify |
| `PLAY_STORE_URL` | Google Play Store URL | https://play.google.com/store/apps/details?id=com.plantify.app |
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA site key | 6LdKCD8rAAAAABGPhIMkfbArviupEohtWxp9FyLG |

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Parcel (for bundling)
- Node.js (for build scripts)

## License

© 2025 Plantify. All rights reserved.

## Screenshots

Place your app screenshots in the following directories:
- iOS screenshots: `screenshots/ios/`
- Android screenshots: `screenshots/android/`

Required screenshots:
- `home.png` - Home screen
- `scan.png` - Health scanning feature
- `journal.png` - Care journal
- `analytics.png` - Analytics dashboard

## Translations

Translations are managed in the `translations` directory. Add new languages by creating a new JSON file following the structure of `en.json`. 