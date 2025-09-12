import { Box, Typography, Stack, IconButton, Snackbar, Alert, Tabs, Tab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import { Event } from '@/services/domain/event.types';
import { formStyles } from '@/common/utils/styles';
import { BasicData } from './components/basic-data';
import { InscriptionData } from './components/reports';

interface IEventDetailViewProps {
  eventData: Event.IGetEventResponse;
  onBackClick: () => void;
}

export const EventDetailView = ({ eventData, onBackClick }: IEventDetailViewProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [activeTab, setActiveTab] = useState(0);

  const handleCopyLink = async (link: string | undefined, platform: string) => {
    if (!link) return;

    try {
      await navigator.clipboard.writeText(link);
      setSnackbarMessage(`${platform} copiado para a área de transferência!`);
      setSnackbarOpen(true);
    } catch {
      setSnackbarMessage('Erro ao copiar link');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderTabContent = (tab: number) => {
    switch (tab) {
      case 0:
        return <BasicData eventData={eventData} onCopyLink={handleCopyLink} />;
      case 1:
        return <InscriptionData />;
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        gap={2}
      >
        <IconButton onClick={onBackClick} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowBackIcon sx={theme => ({ color: theme.palette.primary.main })} />
          <Typography
            variant="body1"
            sx={{ ...formStyles.title, textAlign: 'left', display: { xs: 'block', sm: 'none' } }}
          >
            Voltar
          </Typography>
        </IconButton>
        <Typography variant="h3" sx={{ ...formStyles.title, textAlign: 'left' }}>
          {eventData.name}
        </Typography>
      </Stack>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="event details tabs"
          sx={{
            '& .MuiTab-root': {
              color: 'grey.400',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          <Tab label="Detalhes do Evento" />
          <Tab label="Relatórios" />
        </Tabs>
      </Box>

      {renderTabContent(activeTab)}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
