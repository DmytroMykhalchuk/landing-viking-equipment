import { createTheme } from "@mui/material";

export const globalTheme = {
   dark: createTheme({
      palette: {
         mode: "dark",
         background: {
            // default: "#F1F1F1",
            // paper: "#252525",
         },
         fpage: {
            dark: '#fff',
            main: '#fff',
            light: '#fff',
         },
      },
   }),
   light: createTheme({
      palette: {
         mode: "light",
         background: {
            // default: "#F1F1F1",
         },
         fpage: {
            dark: '#000',
            main: '#000',
            light: '#000',
         },
      },
   }),
};

declare module '@mui/material/styles' {

   interface PaletteOptions {
      fpage?: PaletteOptions['primary'];
   }
}

