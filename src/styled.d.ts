import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: string;

    colors: {
      main: string;
      secondary: string;
      light: string
    };
  }
}