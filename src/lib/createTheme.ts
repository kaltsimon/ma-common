import createMuiTheme, {
  Theme,
  ThemeOptions,
} from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    seal?: {
      valid: string;
      invalid: string;
      indeterminate: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    seal?: {
      valid: string;
      invalid: string;
      indeterminate: string;
    };
  }
}

export default function createTheme(options: ThemeOptions): Theme {
  return createMuiTheme({
    seal: {
      valid: 'hsla(120, 90%, 30%, 1)',
      invalid: 'hsla(0, 100%, 70%, 1)',
      indeterminate: 'rgba(0, 0, 0, 0.54)',
    },
    ...options,
  });
}
