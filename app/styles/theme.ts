export const theme = {
  colors: {
    primary: '#EF5350',
    secondary: '#42A5F5',
    background: '#FFFFFF',
    text: '#212121',
    lightText: '#757575',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  fontSizes: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
};

export type Theme = typeof theme;
