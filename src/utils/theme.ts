const clearTheme = () => {
  localStorage.removeItem('theme');
  updateTheme();
};

const getTheme = () => {
  return localStorage.theme as string | undefined;
};

const setTheme = (theme: 'dark' | 'light' | 'system') => {
  if (theme === 'system') {
    return clearTheme();
  }

  localStorage.theme = theme;
  updateTheme();
};

// todo: This needs to be injected in the Head somehow
const updateTheme = () => {
  const theme = getTheme();
  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const theme = {
  clearTheme,
  getTheme,
  setTheme,
  updateTheme,
};

export default theme;
