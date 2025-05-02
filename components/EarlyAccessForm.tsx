import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';
import { Button, Text } from '@rneui/themed';
import { useTranslation } from 'react-i18next';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface EarlyAccessFormProps {
  variant?: 'hero' | 'footer';
}

export const EarlyAccessForm: React.FC<EarlyAccessFormProps> = ({ variant = 'hero' }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async () => {
    try {
      // Reset state
      setStatus('submitting');
      setErrorMessage('');

      // Validate inputs
      if (!name.trim()) {
        throw new Error(t('earlyAccess.errors.nameRequired'));
      }
      if (!validateEmail(email)) {
        throw new Error(t('earlyAccess.errors.invalidEmail'));
      }

      // Submit to Supabase
      const { error } = await supabase
        .from('early_access')
        .insert([
          {
            name: name.trim(),
            email: email.toLowerCase().trim(),
            newsletter_opt_in: newsletterOptIn,
          },
        ]);

      if (error) throw error;

      // Success!
      setStatus('success');
      setName('');
      setEmail('');
      setNewsletterOptIn(false);

      // Announce success to screen readers
      if (Platform.OS === 'web') {
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'alert');
        announcement.textContent = t('earlyAccess.success');
        document.body.appendChild(announcement);
        setTimeout(() => announcement.remove(), 1000);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : t('earlyAccess.errors.generic'));
    }
  };

  const isHeroVariant = variant === 'hero';
  const containerStyle = isHeroVariant ? styles.heroContainer : styles.footerContainer;
  const inputStyle = isHeroVariant ? styles.heroInput : styles.footerInput;

  return (
    <View style={containerStyle}>
      {status === 'success' ? (
        <View style={styles.successContainer}>
          <Text style={styles.successText} role="alert">
            {t('earlyAccess.success')}
          </Text>
        </View>
      ) : (
        <>
          <TextInput
            style={inputStyle}
            placeholder={t('earlyAccess.namePlaceholder')}
            value={name}
            onChangeText={setName}
            accessibilityLabel={t('earlyAccess.nameLabel')}
            aria-label={t('earlyAccess.nameLabel')}
            autoComplete="name"
          />
          <TextInput
            style={inputStyle}
            placeholder={t('earlyAccess.emailPlaceholder')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            accessibilityLabel={t('earlyAccess.emailLabel')}
            aria-label={t('earlyAccess.emailLabel')}
            autoComplete="email"
          />
          <View style={styles.checkboxContainer}>
            <Button
              type="clear"
              icon={{
                name: newsletterOptIn ? 'check-box' : 'check-box-outline-blank',
                type: 'material',
              }}
              onPress={() => setNewsletterOptIn(!newsletterOptIn)}
              accessibilityLabel={t('earlyAccess.newsletterLabel')}
              aria-checked={newsletterOptIn}
              role="checkbox"
            />
            <Text style={styles.checkboxLabel}>
              {t('earlyAccess.newsletterText')}
            </Text>
          </View>
          <Button
            title={t('earlyAccess.submitButton')}
            onPress={handleSubmit}
            loading={status === 'submitting'}
            disabled={status === 'submitting'}
            containerStyle={isHeroVariant ? styles.heroButton : styles.footerButton}
          />
          {status === 'error' && (
            <Text style={styles.errorText} role="alert">
              {errorMessage}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    gap: 16,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
  },
  heroInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  footerInput: {
    height: 36,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#666666',
    marginLeft: 8,
  },
  heroButton: {
    width: '100%',
  },
  footerButton: {
    minWidth: 120,
  },
  successContainer: {
    padding: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  successText: {
    color: '#2E7D32',
    textAlign: 'center',
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default EarlyAccessForm; 