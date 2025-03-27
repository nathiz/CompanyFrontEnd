import React, { useState, useEffect } from 'react';
import { addSubProcess } from '../services/api';
import { getProcess } from '../services/api';

const AddSubProcessForm: React.FC = () => {
    const [name, setName] = useState('');
    const [processId, setProcessId] = useState<number>(0);
    const [processes, setProcesses] = useState<Array<{ id: number; name: string }>>([]);

    useEffect(() => {
        // Carregar os processos existentes quando o componente for montado
        const fetchProcesses = async () => {
            try {
                const response = await getProcess(); // Chamada para pegar processos existentes
                setProcesses(response);
            } catch (error) {
                console.error("Erro ao carregar processos:", error);
            }
        };

        fetchProcesses();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newSubProcess = { name, processId };
        
        try {
            await addSubProcess(newSubProcess);  // Chamada para a API
            setName('');
            setProcessId(0);
            alert("Subprocesso adicionado com sucesso!");
        } catch (error) {
            console.error("Erro ao adicionar o subprocesso:", error);
            alert("Erro ao adicionar o subprocesso!");
        }
    };

    return ("ok"
        /*<form onSubmit={handleSubmit}>
            <h3>Adicionar Subprocesso</h3>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nome do subprocesso" 
                required
            />
            <select 
                value={processId} 
                onChange={(e) => setProcessId(Number(e.target.value))} 
                required
            >
                <option value={0}>Selecione um processo</option>
                {processes.map(process => (
                    <option key={process.id} value={process.id}>
                        {process.name}
                    </option>
                ))}
            </select>
            <button type="submit">Adicionar Subprocesso</button>
        </form>*/
    );
};

export default AddSubProcessForm;