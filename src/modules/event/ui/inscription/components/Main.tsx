import { Box, Typography, Button, useTheme, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Event } from '@/services/domain/event.types';

interface IMainProps {
  readonly eventData: Event.IGetEventResponse;
}

export function Main({ eventData }: IMainProps) {
  const theme = useTheme();
  const [expandedContent, setExpandedContent] = useState(false);

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap={{ xs: 1, md: 2 }}
        marginTop={{ xs: 1, md: 2 }}
      >
        <Typography variant="h4" fontWeight={700} color="text.primary">
          Descrição
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            textAlign: 'justify',
          }}
        >
          {eventData.description}
        </Typography>
      </Box>

      {eventData.content && (
        <Box display="flex" flexDirection="column" gap={{ xs: 1, md: 2 }}>
          <Typography variant="h4" fontWeight={700} color="text.primary">
            Mais Detalhes
          </Typography>
          <Box
            sx={{
              overflow: 'hidden',
              transition: 'max-height 1s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease-in-out',
              maxHeight: expandedContent ? '1000px' : '5.4em',
              opacity: expandedContent ? 1 : 0.95,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                textAlign: 'justify',
                margin: 0,
                display: expandedContent ? 'block' : '-webkit-box',
                WebkitLineClamp: expandedContent ? 'unset' : 3,
                WebkitBoxOrient: expandedContent ? 'unset' : 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {eventData.content}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Tooltip title={expandedContent ? "Ver menos" : "Ver mais"} placement="top" arrow>
              <IconButton
                color="primary"
                onClick={() => setExpandedContent(!expandedContent)}
              >
                {expandedContent ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      )}

      <Box display={{ xs: 'none', md: 'flex' }} justifyContent="flex-start">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          sx={{ width: { xs: '100%', md: 'auto' } }}
          onClick={() => console.log('OnClick')}
        >
          Inscrever-se Agora
        </Button>
      </Box>
    </>
  );
}
