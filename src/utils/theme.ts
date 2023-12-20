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

const theme = {
  clearTheme,
  getTheme,
  setTheme,
};

export default theme;
