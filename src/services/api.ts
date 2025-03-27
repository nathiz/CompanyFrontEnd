import axios from 'axios';

// Configuração do axios com base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Funções para enviar os dados para o backend
export const addArea = async (area: { name: string }) => {
    try {
        const response = await api.post('/areas', area);  // Usando axios POST
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao adicionar área');
    }
};

export const addProcess = async (process: { name: string, areaId: number }) => {
    try {
        const response = await api.post('/processes', process);  // Usando axios POST
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao adicionar o processo');
    }
};

export const addSubProcess = async (subProcess: { name: string, processId: number }) => {
    try {
        const response = await api.post('/subprocesses', subProcess);  // Usando axios POST
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao adicionar subprocesso');
    }
};

// Funções para obter os dados
export const getAreas = async () => {
    try {
        const response = await api.get('/areas');  // Usando axios GET
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao buscar áreas');
    }
};

export const getProcess = async () => {
    try {
        const response = await api.get('/process');  // Usando axios GET
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao buscar processos');
    }
};

export const getSubProcess = async () => {
    try {
        const response = await api.get('/subprocess');  // Usando axios GET
        return response.data;  // Retorna os dados da resposta
    } catch (error) {
        throw new Error('Erro ao buscar subprocessos');
    }
};