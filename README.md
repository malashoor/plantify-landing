# Plantify Landing Page

The official landing page for Plantify - AI-powered plant care assistant.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
EXPO_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
EXPO_PUBLIC_APP_STORE_URL=your_app_store_url
EXPO_PUBLIC_PLAY_STORE_URL=your_play_store_url
```

## Building for Production

1. Set up environment variables in your deployment platform (Netlify/Vercel)

2. Build the project:
```bash
npm run build:prod
```

The build output will be in the `dist` directory.

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set the build command to: `npm run build:prod`
3. Set the publish directory to: `dist`
4. Add the following environment variables in Netlify:
   - `EXPO_PUBLIC_RECAPTCHA_SITE_KEY`
   - `EXPO_PUBLIC_APP_STORE_URL`
   - `EXPO_PUBLIC_PLAY_STORE_URL`

### Vercel

1. Connect your repository to Vercel
2. Set the build command to: `npm run build:prod`
3. Set the output directory to: `dist`
4. Add the environment variables in Vercel's project settings

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