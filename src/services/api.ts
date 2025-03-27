import axios from 'axios';

// Configuração do axios com base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // URL base para chamadas API
});

// Função para adicionar uma nova área
export const addArea = async (area: { nome: string; departamento: string; setor: string }) => {
    try {
        // Envia uma solicitação POST para o backend para adicionar a área
        const response = await api.post('/areas', area);
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        console.error('Erro ao adicionar área:', error);
        throw new Error('Erro ao adicionar área'); // Lança um erro se algo falhar
    }
};

// Função para adicionar um novo processo
export const addProcess = async (process: { nome: string; descricao: string; areaId: number }) => {
    try {
        // Envia uma solicitação POST para o backend para adicionar o processo
        const response = await api.post('/processes', process);
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        throw new Error('Erro ao adicionar o processo'); // Lança um erro se algo falhar
    }
};

// Função para adicionar um novo subprocesso
export const addSubProcess = async (subProcess: { nome: string; processId: number }) => {
    try {
        // Envia uma solicitação POST para o backend para adicionar o subprocesso
        const response = await api.post('/subprocesses', subProcess);
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        throw new Error('Erro ao adicionar subprocesso'); // Lança um erro se algo falhar
    }
};

// Função para obter todas as áreas
export const getAreas = async () => {
    try {
        // Envia uma solicitação GET para o backend para obter todas as áreas
        const response = await api.get('/areas');
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar áreas'); // Lança um erro se algo falhar
    }
};

// Função para obter todos os processos
export const getProcess = async () => {
    try {
        // Envia uma solicitação GET para o backend para obter todos os processos
        const response = await api.get('/processes');
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar processos'); // Lança um erro se algo falhar
    }
};

// Função para obter todos os subprocessos
export const getSubProcess = async () => {
    try {
        // Envia uma solicitação GET para o backend para obter todos os subprocessos
        const response = await api.get('/subprocesses');
        
        // Retorna os dados da resposta do backend
        return response.data;
    } catch (error) {
        throw new Error('Erro ao buscar subprocessos'); // Lança um erro se algo falhar
    }
};