import { memo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getThemeMode } from '../../../src/redux/app/appSelector';
import { globalTheme } from '../../configs/theme/theme';
import { ThemeProvider } from '@mui/system';
import { useSelector } from 'react-redux';

type ThemeWrapperType = {
   children: JSX.Element
};

export const ThemeWrapper: React.FC<ThemeWrapperType> = memo(({ children }) => {
   const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
   const currentTheme = useSelector(getThemeMode);

   return (<>
      <ThemeProvider theme={globalTheme[currentTheme
         ? currentTheme === 'dark' ? 'dark' : 'light'
         : prefersDarkMode ? 'dark' : 'light']}
      >
         {children}
      </ThemeProvider>
   </>
   );
});
