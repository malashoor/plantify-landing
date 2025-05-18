import React from 'react';
import {
  View as RNView,
  Text as RNText,
  Image as RNImage,
  TouchableOpacity as RNTouchableOpacity,
  StyleSheet as RNStyleSheet,
  ScrollView as RNScrollView,
  Platform as RNPlatform,
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

// Wrapper components to fix TypeScript issues with React Native Web
export const View: React.FC<React.ComponentProps<typeof RNView>> = props => <RNView {...props} />;
export const Text: React.FC<React.ComponentProps<typeof RNText>> = props => <RNText {...props} />;
export const Image: React.FC<React.ComponentProps<typeof RNImage>> = props => <RNImage {...props} />;
export const TouchableOpacity: React.FC<React.ComponentProps<typeof RNTouchableOpacity>> = props => (
  <RNTouchableOpacity {...props} />
);
export const ScrollView: React.FC<React.ComponentProps<typeof RNScrollView>> = props => (
  <RNScrollView {...props} />
);

// Export StyleSheet and Platform directly
export const StyleSheet = RNStyleSheet;
export const Platform = RNPlatform;

// Re-export types for better access
export type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageSourcePropType,
};

// Helper for window object in React Native Web
export const openExternalLink = (url: string): void => {
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
};

// Export a helper for safe style typing
export const asStyle = <T extends ViewStyle | TextStyle | ImageStyle>(style: any): StyleProp<T> => style as StyleProp<T>; 