import { useState, useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Switch,
  Chip,
  Paper,
  TablePagination,
  Stack,
} from '@mui/material';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { formStyles } from '@/common/utils/styles';
import { mockInscriptions, type Inscription } from '../mock';

const getStatusColor = (status: Inscription['status']) => {
  switch (status) {
    case 'Confirmada':
      return 'success';
    case 'Pendente de pagamento':
      return 'warning';
    case 'Cancelada':
      return 'error';
    default:
      return 'default';
  }
};



const StatGroup = ({
  title,
  mainValue,
  mainDescription,
  icon,
  color = 'primary',
  children
}: {
  title: string;
  mainValue: string | number;
  mainDescription: string;
  icon: React.ReactNode;
  color?: string;
  children: React.ReactNode;
}) => (
  <Card sx={{ height: '100%' }}>
    <CardContent sx={{ p: { xs: 2, md: 3 } }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            p: { xs: 1, md: 1.5 },
            borderRadius: 1,
            backgroundColor: `${color}.light`,
            color: `${color}.contrastText`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mr: { xs: 1.5, md: 2 },
            minWidth: { xs: 32, md: 40 },
            height: { xs: 32, md: 40 },
          }}
        >
          {icon}
        </Box>
        <Typography
          variant="h6"
          sx={{
            color: 'text.primary',
            fontWeight: 600,
            fontSize: { xs: '1rem', md: '1.25rem' }
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 3 } }}>
        <Typography
          component="h3"
          variant="h1"
          color={color}
          fontWeight="bold"
          sx={{
            mb: 1,
            fontSize: { xs: '2rem', md: '3rem' }
          }}
        >
          {mainValue}
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
        >
          {mainDescription}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1, md: 1.5 } }}>
        {children}
      </Box>
    </CardContent>
  </Card>
);

const StatItem = ({
  label,
  value,
  color = 'text.secondary'
}: {
  label: string;
  value: string | number;
  color?: string;
}) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography
      variant="body2"
      color="text.primary"
      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
    >
      {label}
    </Typography>
    <Typography
      variant="body2"
      color={color}
      fontWeight="medium"
      sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
    >
      {value}
    </Typography>
  </Box>
);

export const InscriptionData = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [inscriptions, setInscriptions] = useState<Inscription[]>(mockInscriptions);

  // Cálculos de estatísticas
  const statistics = useMemo(() => {
    const totalInscritos = inscriptions.length;
    const confirmadas = inscriptions.filter(i => i.status === 'Confirmada').length;
    const pendentes = inscriptions.filter(i => i.status === 'Pendente de pagamento').length;
    const canceladas = inscriptions.filter(i => i.status === 'Cancelada').length;

    // Simulando dados de tickets e vendas
    const totalTickets = 100; // Total de tickets disponíveis
    const ticketsUsados = confirmadas;
    const ticketsDisponiveis = totalTickets - ticketsUsados;
    const precoTicket = 50; // Preço por ticket
    const totalVendas = confirmadas * precoTicket;
    const vendasPendentes = pendentes * precoTicket;

    return {
      totalInscritos,
      confirmadas,
      pendentes,
      canceladas,
      totalTickets,
      ticketsUsados,
      ticketsDisponiveis,
      totalVendas,
      vendasPendentes,
    };
  }, [inscriptions]);


  // Dados para gráfico de inscrições por dia (simulado)
  const inscricoesPorDia = useMemo(() => {
    const dias = ['15/01', '16/01', '17/01', '18/01', '19/01', '20/01', '21/01', '22/01'];
    return dias.map((dia, index) => ({
      dia,
      inscricoes: inscriptions.filter(i =>
        new Date(i.dataInscricao).getDate() === 15 + index
      ).length,
    }));
  }, [inscriptions]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = inscriptions.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePaymentToggle = (id: string) => {
    setInscriptions((prev) =>
      prev.map((inscription) =>
        inscription.id === id
          ? {
            ...inscription,
            pagamentoConfirmado: !inscription.pagamentoConfirmado,
            status: !inscription.pagamentoConfirmado ? 'Confirmada' : 'Pendente de pagamento',
          }
          : inscription
      )
    );
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - inscriptions.length) : 0;

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Card>
        <CardContent sx={{ p: 3 }}>
          <Typography
            variant="h6"
            mb={3}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                p: 1,
                borderRadius: 1,
                backgroundColor: 'info.light',
                color: 'info.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ScheduleIcon fontSize="small" />
            </Box>
            Andamento e Inscrições
          </Typography>

          {/* Cards de Estatísticas Principais */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 3 }}
            sx={{ mb: { xs: 3, md: 4 } }}
          >
            {/* Card: Inscrições e Participação */}
            <Box sx={{ flex: 1 }}>
              <StatGroup
                title="Inscrições e Participação"
                mainValue={statistics.totalInscritos}
                mainDescription="Total de pessoas inscritas no evento"
                icon={<PeopleIcon sx={{ fontSize: 24 }} />}
                color="primary"
              >
                <StatItem
                  label="Confirmadas"
                  value={statistics.confirmadas}
                  color="success.main"
                />
                <StatItem
                  label="Pendentes"
                  value={statistics.pendentes}
                  color="warning.main"
                />
                <StatItem
                  label="Canceladas"
                  value={statistics.canceladas}
                  color="error.main"
                />
                <StatItem
                  label="Taxa de Conversão"
                  value={`${((statistics.confirmadas / statistics.totalInscritos) * 100).toFixed(1)}%`}
                  color="primary.main"
                />
              </StatGroup>
            </Box>

            {/* Card: Capacidade e Tickets */}
            <Box sx={{ flex: 1 }}>
              <StatGroup
                title="Capacidade e Tickets"
                mainValue={`${statistics.ticketsUsados}/${statistics.totalTickets}`}
                mainDescription={`${((statistics.ticketsUsados / statistics.totalTickets) * 100).toFixed(1)}% da capacidade ocupada`}
                icon={<ConfirmationNumberIcon sx={{ fontSize: 24 }} />}
                color="info"
              >
                <StatItem
                  label="Tickets Utilizados"
                  value={statistics.ticketsUsados}
                  color="info.main"
                />
                <StatItem
                  label="Tickets Disponíveis"
                  value={statistics.ticketsDisponiveis}
                  color="text.secondary"
                />
                <StatItem
                  label="Capacidade Total"
                  value={statistics.totalTickets}
                  color="text.primary"
                />
                <StatItem
                  label="Ocupação"
                  value={`${((statistics.ticketsUsados / statistics.totalTickets) * 100).toFixed(1)}%`}
                  color="info.main"
                />
              </StatGroup>
            </Box>

            {/* Card: Financeiro */}
            <Box sx={{ flex: 1 }}>
              <StatGroup
                title="Financeiro"
                mainValue={`R$ ${statistics.totalVendas.toLocaleString('pt-BR')}`}
                mainDescription="Receita confirmada de inscrições pagas"
                icon={<AttachMoneyIcon sx={{ fontSize: 24 }} />}
                color="success"
              >
                <StatItem
                  label="Vendas Confirmadas"
                  value={`R$ ${statistics.totalVendas.toLocaleString('pt-BR')}`}
                  color="success.main"
                />
                <StatItem
                  label="Vendas Pendentes"
                  value={`R$ ${statistics.vendasPendentes.toLocaleString('pt-BR')}`}
                  color="warning.main"
                />
                <StatItem
                  label="Receita Potencial"
                  value={`R$ ${(statistics.totalVendas + statistics.vendasPendentes).toLocaleString('pt-BR')}`}
                  color="primary.main"
                />
                <StatItem
                  label="Valor por Ticket"
                  value="R$ 50,00"
                  color="text.secondary"
                />
              </StatGroup>
            </Box>
          </Stack>

          {/* Gráficos */}
          <Box sx={{ mb: { xs: 3, md: 4 } }}>
            {/* Gráfico de Inscrições por Dia */}
            <Card>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                >
                  Inscrições por Dia
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={inscricoesPorDia}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="dia"
                      tick={{ fontSize: 12 }}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        fontSize: '0.875rem'
                      }}
                    />
                    <Line type="monotone" dataKey="inscricoes" stroke="#1976d2" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Box>

        </CardContent>
      </Card>
      <Card>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Typography
            variant="h6"
            mb={{ xs: 2, md: 3 }}
            sx={{
              ...formStyles.title,
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1, md: 1.5 },
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            <Box
              sx={{
                p: { xs: 0.75, md: 1 },
                borderRadius: 1,
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: { xs: 28, md: 32 },
                height: { xs: 28, md: 32 },
              }}
            >
              <PeopleIcon sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }} />
            </Box>
            Lista de Inscritos
          </Typography>

          {/* Card da Tabela */}
          <Card>
            <TableContainer
              component={Paper}
              sx={{
                overflowX: 'auto',
                '&::-webkit-scrollbar': {
                  height: 8,
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'grey.100',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: 'grey.400',
                  borderRadius: 4,
                },
              }}
            >
              <Table sx={{ minWidth: { xs: 600, md: 650 } }} aria-labelledby="tableTitle">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        sx={{ color: 'text.primary' }}
                        indeterminate={selected.length > 0 && selected.length < inscriptions.length}
                        checked={inscriptions.length > 0 && selected.length === inscriptions.length}
                        onChange={handleSelectAllClick}
                        inputProps={{
                          'aria-label': 'selecionar todas as inscrições',
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Nome</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>CPF</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Email</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Telefone</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Data de Inscrição</TableCell>
                    <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Status</TableCell>
                    <TableCell align="center" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>Pagamento Confirmado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inscriptions
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((inscription) => {
                      const isItemSelected = isSelected(inscription.id);
                      const labelId = `enhanced-table-checkbox-${inscription.id}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, inscription.id)}
                          tabIndex={-1}
                          key={inscription.id}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              sx={{ color: 'text.primary' }}
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}
                          >
                            {inscription.nome}
                          </TableCell>
                          <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {inscription.cpf}
                          </TableCell>
                          <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {inscription.email}
                          </TableCell>
                          <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {inscription.telefone}
                          </TableCell>
                          <TableCell sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                            {new Date(inscription.dataInscricao).toLocaleDateString('pt-BR')}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={inscription.status}
                              color={getStatusColor(inscription.status)}
                              size="small"
                              sx={{ fontSize: { xs: '0.625rem', md: '0.75rem' } }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Box sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: { xs: 0.5, md: 1 }
                            }}>
                              <Typography
                                variant="body2"
                                color={inscription.pagamentoConfirmado ? 'success.main' : 'text.disabled'}
                                fontWeight="medium"
                                sx={{ fontSize: { xs: '0.625rem', md: '0.75rem' } }}
                              >
                                {inscription.pagamentoConfirmado ? 'Sim' : 'Não'}
                              </Typography>
                              <Switch
                                checked={inscription.pagamentoConfirmado}
                                onChange={() => handlePaymentToggle(inscription.id)}
                                color="primary"
                                onClick={(e) => e.stopPropagation()}
                                size="small"
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height: 53 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={8} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={inscriptions.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="Linhas por página:"
              labelDisplayedRows={({ from, to, count }) => {
                const total = count !== -1 ? count : `mais de ${to}`;
                return `${from}-${to} de ${total}`;
              }}
            />
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
};
