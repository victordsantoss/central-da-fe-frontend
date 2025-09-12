import { ThemeProvider } from '@mui/material/styles';
import '../configs/styles/reset.css';
import CssBaseline from '@mui/material/CssBaseline';
import defaultTheme from '@/configs/styles/theme/default-theme';
import { MetadataProvider } from '@/contexts/metadata.context';

export const metadata = {
  title: 'CDMOR',
  description: 'Igreja Assembléia de Deus Central da Fé - CDMOR',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline />
          <MetadataProvider>{children}</MetadataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
