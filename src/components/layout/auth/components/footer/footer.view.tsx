import { Box, Typography, Link } from '@mui/material';
import { Phone, Email } from '@mui/icons-material';
import { footerStyles } from './styles';

interface IFooterViewProps {
  currentYear: number;
  organizationName: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  handlePhoneClick: () => void;
  handleEmailClick: () => void;
}

export const FooterView = ({
  currentYear,
  organizationName,
  contactInfo,
  handlePhoneClick,
  handleEmailClick,
}: IFooterViewProps) => {
  return (
    <Box component="footer" sx={footerStyles.container}>
      <Box sx={footerStyles.content}>
        <Typography variant="body2" sx={footerStyles.text}>
          © {currentYear} {organizationName}. Todos os direitos reservados.
        </Typography>

        <Box sx={footerStyles.contactContainer}>
          <Link
            component="button"
            onClick={handlePhoneClick}
            sx={footerStyles.contactLink}
            underline="none"
          >
            <Phone sx={footerStyles.icon} />
            <Typography variant="body2" sx={footerStyles.contactText}>
              {contactInfo.phone}
            </Typography>
          </Link>

          <Link
            component="button"
            onClick={handleEmailClick}
            sx={footerStyles.contactLink}
            underline="none"
          >
            <Email sx={footerStyles.icon} />
            <Typography variant="body2" sx={footerStyles.contactText}>
              {contactInfo.email}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
