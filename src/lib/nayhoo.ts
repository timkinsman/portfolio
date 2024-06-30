import { createTheme } from "@nayhoo/components";
import Theme from '@/utils/theme';

export const customLightTheme = createTheme('light', { colors: { secondary: '#0000ee' } });
export const customDarkTheme = createTheme('dark', Theme.darkTheme);
