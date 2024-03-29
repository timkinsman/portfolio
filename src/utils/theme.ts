const clearTheme = () => {
  localStorage.removeItem('theme');
};

const getTheme = () => {
  return localStorage.theme as string | undefined;
};

const setTheme = (theme: 'dark' | 'light' | 'system') => {
  if (theme === 'system') {
    return clearTheme();
  }

  localStorage.theme = theme;
};

// todo: should make this easier; export darkTheme template from nayhoo?
const darkTheme = {
  colors: {
    primary: '#6200ee',
    primaryLighter: '#8133f1',
    primaryDarker: '#4400a6',
    primaryTextContrast: '#ffffff',

    // todo: should make a helper to create lighter/darker/contrast hexes from base
    secondary: '#58a6ff',
    secondaryLighter: '#35e1d1',
    secondaryDarker: '#02988a',
    secondaryTextContrast: '#000000',

    error: '#b00020',
    errorLighter: '#bf334c',
    errorDarker: '#7b0016',
    errorTextContrast: '#ffffff',

    background: '#121212',
    surface: '#121212',
    transparentSurface: 'hsl(0 100% 100% / 97%)',

    backgroundTextContrast: '#ffffff',
    surfaceTextContrast: '#ffffff',

    textDescription: '#666666',
    textDisabled: '#cccccc',
    textLabel: '#666666',
    textPlaceholder: '#999999',

    transparentHover: 'rgba(255, 255, 255, 0.04)',
    transparentFocus: 'rgba(255, 255, 255, 0.12)',
    transparentSelected: 'rgba(255, 255, 255, 0.04)',
    transparentActivated: 'rgba(255, 255, 255, 0.04)',
    transparentPressed: 'rgba(255, 255, 255, 0.12)',
    transparentDragged: 'rgba(255, 255, 255, 0.08)',
    transparentDisabled: '#f2f2f2',

    transparentOverlay: 'rgba(255, 255, 255, .15)',

    divider: 'rgba(255, 255, 255, 0.12)',
    shadow: 'rgba(255, 255, 255, 0.12)',
  },
};

const theme = {
  clearTheme,
  getTheme,
  setTheme,
  darkTheme,
};

export default theme;
