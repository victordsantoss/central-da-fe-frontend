import { Box } from '@mui/material';
import Image from 'next/image';

interface CardHeaderProps {
  width?: number;
  height?: number;
}

const CardHeader = ({ width = 130, height = 130 }: CardHeaderProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Image
        src="/logo.jpg"
        alt="Logo Central da Fé"
        width={width}
        height={height}
        style={{ objectFit: 'cover', borderRadius: '50%', padding: 1 }}
      />
    </Box>
  );
};

export default CardHeader;
