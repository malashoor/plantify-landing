import React from 'react';
import {
  View as RNView,
  Text as RNText,
  Image as RNImage,
  TouchableOpacity as RNTouchableOpacity,
  ScrollView as RNScrollView,
  StyleSheet,
  Platform
} from 'react-native-web';

export const View = (props: React.ComponentProps<typeof RNView>) => 
  <RNView {...props} />;

export const Text = (props: React.ComponentProps<typeof RNText>) => 
  <RNText {...props} />;

export const Image = (props: React.ComponentProps<typeof RNImage>) => 
  <RNImage {...props} />;

export const TouchableOpacity = (props: React.ComponentProps<typeof RNTouchableOpacity>) => 
  <RNTouchableOpacity {...props} />;

export const ScrollView = (props: React.ComponentProps<typeof RNScrollView>) => 
  <RNScrollView {...props} />;

export { StyleSheet, Platform };

export const openExternalLink = (url: string): void => {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}; 