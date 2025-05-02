import '@rneui/themed';

declare module '@rneui/themed' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      card: string;
    };
  }
} 