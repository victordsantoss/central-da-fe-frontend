export interface Inscription {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataInscricao: string;
  status: 'Confirmada' | 'Pendente de pagamento' | 'Cancelada';
  pagamentoConfirmado: boolean;
}

export const mockInscriptions: Inscription[] = [
  {
    id: '1',
    nome: 'João Silva Santos',
    cpf: '123.456.789-00',
    email: 'joao.silva@email.com',
    telefone: '(11) 99999-1111',
    dataInscricao: '2024-01-15',
    status: 'Confirmada',
    pagamentoConfirmado: true,
  },
  {
    id: '2',
    nome: 'Maria Oliveira Costa',
    cpf: '987.654.321-00',
    email: 'maria.oliveira@email.com',
    telefone: '(11) 88888-2222',
    dataInscricao: '2024-01-16',
    status: 'Pendente de pagamento',
    pagamentoConfirmado: false,
  },
  {
    id: '3',
    nome: 'Pedro Henrique Lima',
    cpf: '456.789.123-00',
    email: 'pedro.lima@email.com',
    telefone: '(11) 77777-3333',
    dataInscricao: '2024-01-17',
    status: 'Confirmada',
    pagamentoConfirmado: true,
  },
  {
    id: '4',
    nome: 'Ana Carolina Ferreira',
    cpf: '789.123.456-00',
    email: 'ana.ferreira@email.com',
    telefone: '(11) 66666-4444',
    dataInscricao: '2024-01-18',
    status: 'Cancelada',
    pagamentoConfirmado: false,
  },
  {
    id: '5',
    nome: 'Carlos Eduardo Souza',
    cpf: '321.654.987-00',
    email: 'carlos.souza@email.com',
    telefone: '(11) 55555-5555',
    dataInscricao: '2024-01-19',
    status: 'Pendente de pagamento',
    pagamentoConfirmado: false,
  },
  {
    id: '6',
    nome: 'Fernanda Rodrigues Alves',
    cpf: '654.321.789-00',
    email: 'fernanda.alves@email.com',
    telefone: '(11) 44444-6666',
    dataInscricao: '2024-01-20',
    status: 'Confirmada',
    pagamentoConfirmado: true,
  },
  {
    id: '7',
    nome: 'Rafael Mendes Pereira',
    cpf: '147.258.369-00',
    email: 'rafael.pereira@email.com',
    telefone: '(11) 33333-7777',
    dataInscricao: '2024-01-21',
    status: 'Pendente de pagamento',
    pagamentoConfirmado: false,
  },
  {
    id: '8',
    nome: 'Juliana Santos Barbosa',
    cpf: '258.369.147-00',
    email: 'juliana.barbosa@email.com',
    telefone: '(11) 22222-8888',
    dataInscricao: '2024-01-22',
    status: 'Confirmada',
    pagamentoConfirmado: true,
  },
];
