import { Box, Typography, Link } from '@mui/material';
import { Phone, Email, Facebook, Instagram, WhatsApp } from '@mui/icons-material';
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
  handleSocialClick: (platform: 'facebook' | 'instagram' | 'whatsapp') => void;
}

export const FooterView = ({
  currentYear,
  organizationName,
  contactInfo,
  handlePhoneClick,
  handleEmailClick,
  handleSocialClick,
}: IFooterViewProps) => {
  return (
    <Box component="footer" sx={footerStyles.container}>
      <Box sx={footerStyles.content}>
        <Box sx={footerStyles.mainContent}>
          <Box sx={footerStyles.section}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>
              Sobre Nós
            </Typography>
            <Box sx={footerStyles.sectionContent}>
              <Typography sx={footerStyles.churchText}>
                Uma comunidade de fé dedicada ao crescimento espiritual e ao serviço ao próximo.
                Unidos pelo amor de Cristo, buscamos viver os valores do Reino de Deus.
              </Typography>
              <Typography sx={footerStyles.psalmText}>
                &ldquo;O Senhor é o meu pastor; nada me faltará. Deitar-me faz em verdes pastos,
                guia-me mansamente a águas tranquilas.&rdquo;
              </Typography>
              <Typography sx={footerStyles.psalmReference}>- Salmo 23:1-2</Typography>
            </Box>
          </Box>

          <Box sx={footerStyles.section}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>
              Fale Conosco
            </Typography>
            <Box sx={footerStyles.sectionContent}>
              <Box sx={footerStyles.contactContainer}>
                <Link
                  component="button"
                  onClick={handlePhoneClick}
                  sx={footerStyles.contactLink}
                  underline="none"
                >
                  <Phone sx={footerStyles.icon} />
                  <Typography sx={footerStyles.contactText}>{contactInfo.phone}</Typography>
                </Link>

                <Link
                  component="button"
                  onClick={handleEmailClick}
                  sx={footerStyles.contactLink}
                  underline="none"
                >
                  <Email sx={footerStyles.icon} />
                  <Typography sx={footerStyles.contactText}>{contactInfo.email}</Typography>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box sx={footerStyles.section}>
            <Typography variant="h6" sx={footerStyles.sectionTitle}>
              Encontre-nos nas Redes
            </Typography>
            <Box sx={footerStyles.sectionContent}>
              <Box sx={footerStyles.socialContainer}>
                <Link
                  component="button"
                  onClick={() => handleSocialClick('facebook')}
                  sx={footerStyles.socialLink}
                  underline="none"
                  title="Facebook"
                >
                  <Facebook sx={footerStyles.socialIcon} />
                </Link>
                <Link
                  component="button"
                  onClick={() => handleSocialClick('instagram')}
                  sx={footerStyles.socialLink}
                  underline="none"
                  title="Instagram"
                >
                  <Instagram sx={footerStyles.socialIcon} />
                </Link>
                <Link
                  component="button"
                  onClick={() => handleSocialClick('whatsapp')}
                  sx={footerStyles.socialLink}
                  underline="none"
                  title="WhatsApp"
                >
                  <WhatsApp sx={footerStyles.socialIcon} />
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography sx={footerStyles.copyright}>
          © {currentYear} {organizationName}. Todos os direitos reservados.
        </Typography>
      </Box>
    </Box>
  );
};
