import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider, Button, Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EarlyAccessForm from './components/EarlyAccessForm';
import { 
  View, 
  Text, 
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  openExternalLink,
  asStyle,
  type StyleProp,
  type ViewStyle,
  type ImageStyle
} from './components/ui';

// Theme configuration
const theme = {
  light: {
    colors: {
      primary: '#4CAF50',
      secondary: '#8BC34A',
      background: '#FFFFFF',
      text: '#212121',
      card: '#F5F5F5',
    },
  },
};

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

// Feature Card Component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card containerStyle={asStyle<ViewStyle>(styles.featureCard)}>
    <View style={styles.featureIcon}>
      <Text style={styles.iconText}>{icon}</Text>
    </View>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </Card>
);

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => (
  <Card containerStyle={asStyle<ViewStyle>(styles.testimonialCard)}>
    <Text style={styles.quote}>{quote}</Text>
    <View style={styles.testimonialAuthor}>
      <Text style={styles.authorName}>{author}</Text>
      <Text style={styles.authorRole}>{role}</Text>
    </View>
  </Card>
);

// App Store URLs
const APP_STORE_URL = process.env.EXPO_PUBLIC_APP_STORE_URL || 'https://apps.apple.com/app/plantify';
const PLAY_STORE_URL = process.env.EXPO_PUBLIC_PLAY_STORE_URL || 'https://play.google.com/store/apps/details?id=com.plantify.app';
const RECAPTCHA_SITE_KEY = process.env.EXPO_PUBLIC_RECAPTCHA_SITE_KEY || '6LdKCD8rAAAAABGPhIMkfbArviupEohtWxp9FyLG';

// Screenshot Component
interface ScreenshotProps {
  src: string;
  alt: string;
  caption: string;
}

const Screenshot: React.FC<ScreenshotProps> = ({ src, alt, caption }) => (
  <View style={styles.screenshotContainer}>
    <Image
      source={{ uri: src }}
      style={asStyle<ImageStyle>(styles.screenshot)}
      accessibilityLabel={alt}
    />
    <Text style={styles.screenshotCaption}>{caption}</Text>
  </View>
);

// Landing Page Component
const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  const handleAppStorePress = () => {
    openExternalLink(APP_STORE_URL);
  };

  const handlePlayStorePress = () => {
    openExternalLink(PLAY_STORE_URL);
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme.light}>
        <ScrollView style={styles.container}>
          {/* Hero Section */}
          <View style={styles.hero}>
            <Text style={styles.heroTitle}>
              {t('landing.hero.title', 'Grow smarter, from seed to harvest.')}
            </Text>
            <Text style={styles.heroSubtitle}>
              {t('landing.hero.subtitle', 'AI-powered plant care assistant for modern gardeners')}
            </Text>
            <View style={styles.ctaButtons}>
              <Button
                title={t('landing.cta.appStore', 'Download on App Store')}
                containerStyle={asStyle<ViewStyle>(styles.storeButton)}
                onPress={handleAppStorePress}
              />
              <Button
                title={t('landing.cta.playStore', 'Get it on Google Play')}
                containerStyle={asStyle<ViewStyle>(styles.storeButton)}
                onPress={handlePlayStorePress}
              />
            </View>
            <EarlyAccessForm variant="hero" />
          </View>

          {/* Features Section */}
          <View style={styles.features}>
            <Text style={styles.sectionTitle}>
              {t('landing.features.title', 'Smart Features for Better Growth')}
            </Text>
            <View style={styles.featureGrid}>
              <FeatureCard
                icon="🌱"
                title={t('landing.features.seed.title', 'Smart Seed-to-Harvest Guide')}
                description={t('landing.features.seed.description', 'Track your plant\'s journey with AI-powered insights')}
              />
              <FeatureCard
                icon="🔍"
                title={t('landing.features.health.title', 'AI Health Detection')}
                description={t('landing.features.health.description', 'Identify issues before they become problems')}
              />
              <FeatureCard
                icon="📝"
                title={t('landing.features.journal.title', 'Reminders & Journal')}
                description={t('landing.features.journal.description', 'Never miss a care task with smart notifications')}
              />
              <FeatureCard
                icon="📊"
                title={t('landing.features.admin.title', 'Admin Dashboard (Pro)')}
                description={t('landing.features.admin.description', 'Advanced analytics for serious growers')}
              />
              <FeatureCard
                icon="🎯"
                title={t('landing.features.accessibility.title', 'Voice & Accessibility')}
                description={t('landing.features.accessibility.description', 'Inclusive design for all gardeners')}
              />
            </View>
          </View>

          {/* Screenshots Section */}
          <View style={styles.screenshots}>
            <Text style={styles.sectionTitle}>
              {t('landing.screenshots.title', 'See Plantify in Action')}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.screenshotScroll}>
              <Screenshot
                src="/screenshots/ios/home.png"
                alt={t('landing.screenshots.home.alt', 'Plantify home screen showing plant dashboard')}
                caption={t('landing.screenshots.home.caption', 'Smart Dashboard')}
              />
              <Screenshot
                src="/screenshots/ios/scan.png"
                alt={t('landing.screenshots.scan.alt', 'Plant health scanning feature')}
                caption={t('landing.screenshots.scan.caption', 'AI Health Scanner')}
              />
              <Screenshot
                src="/screenshots/ios/journal.png"
                alt={t('landing.screenshots.journal.alt', 'Plant care journal and reminders')}
                caption={t('landing.screenshots.journal.caption', 'Care Journal')}
              />
              <Screenshot
                src="/screenshots/ios/analytics.png"
                alt={t('landing.screenshots.analytics.alt', 'Growth analytics and insights')}
                caption={t('landing.screenshots.analytics.caption', 'Growth Analytics')}
              />
            </ScrollView>
          </View>

          {/* Testimonials Section */}
          <View style={styles.testimonials}>
            <Text style={styles.sectionTitle}>
              {t('landing.testimonials.title', 'What Our Users Say')}
            </Text>
            <View style={styles.testimonialGrid}>
              <TestimonialCard
                quote={t('landing.testimonials.quote1', 'Plantify has transformed how I care for my garden. The AI detection is incredible!')}
                author="Sarah M."
                role={t('landing.testimonials.role1', 'Urban Gardener')}
              />
              <TestimonialCard
                quote={t('landing.testimonials.quote2', 'The reminders and journal features keep me organized. Best gardening app ever!')}
                author="John D."
                role={t('landing.testimonials.role2', 'Hydroponic Enthusiast')}
              />
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <View style={styles.footerLinks}>
                <TouchableOpacity onPress={() => console.log('Privacy policy')}>
                  <Text style={styles.footerLink}>
                    {t('landing.footer.privacy', 'Privacy Policy')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Terms of use')}>
                  <Text style={styles.footerLink}>
                    {t('landing.footer.terms', 'Terms of Use')}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Contact us')}>
                  <Text style={styles.footerLink}>
                    {t('landing.footer.contact', 'Contact Us')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.storeButtons}>
                <Button
                  title={t('landing.cta.appStore', 'Download on App Store')}
                  containerStyle={asStyle<ViewStyle>(styles.footerStoreButton)}
                  onPress={handleAppStorePress}
                />
                <Button
                  title={t('landing.cta.playStore', 'Get it on Google Play')}
                  containerStyle={asStyle<ViewStyle>(styles.footerStoreButton)}
                  onPress={handlePlayStorePress}
                />
              </View>
              <EarlyAccessForm variant="footer" />
              <Text style={styles.copyright}>
                {t('landing.footer.copyright', '© 2025 Plantify. All rights reserved.')}
              </Text>
            </View>
          </View>
        </ScrollView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  hero: {
    padding: 40,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    color: '#666666',
  },
  ctaButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  primaryButton: {
    width: 200,
  },
  features: {
    padding: 40,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 24,
  },
  featureCard: {
    width: '48%',
    borderRadius: 12,
    padding: 20,
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconText: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666666',
  },
  screenshots: {
    padding: 40,
    backgroundColor: '#F5F5F5',
  },
  testimonials: {
    padding: 40,
  },
  testimonialGrid: {
    gap: 24,
  },
  testimonialCard: {
    borderRadius: 12,
    padding: 24,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  testimonialAuthor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorName: {
    fontWeight: 'bold',
  },
  authorRole: {
    color: '#666666',
  },
  footer: {
    padding: 40,
    backgroundColor: '#F5F5F5',
  },
  footerContent: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    gap: 24,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 16,
  },
  footerLink: {
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
  copyright: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 24,
  },
  screenshotContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  screenshot: {
    width: 280,
    height: 560,
    borderRadius: 20,
    marginBottom: 12,
  },
  screenshotCaption: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  screenshotScroll: {
    paddingHorizontal: 20,
  },
  storeButton: {
    width: 180,
    marginHorizontal: 8,
  },
  footerStoreButton: {
    width: 160,
    marginHorizontal: 8,
  },
  storeButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default LandingPage; 