import React, { useState, useEffect } from 'react';
import { addProcess, getAreas } from '../services/api';
import { render } from '@testing-library/react';

const AddProcessForm: React.FC = () => {
    const [name, setName] = useState('');
    const [areaId, setAreaId] = useState<number>(0);
    const [areas, setAreas] = useState<Array<{ id: number; name: string }>>([]);

    useEffect(() => {
        // Carregar as áreas existentes quando o componente for montado
        const fetchAreas = async () => {
            try {
                const response = await getAreas();  // Chamada para pegar áreas existentes
                setAreas(response);
            } catch (error) {
                console.error("Erro ao carregar áreas:", error);
            }
        };

        fetchAreas();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();  // Previne o comportamento padrão de recarregar a página
        console.log("Formulário submetido!");
    
        const newProcess = { name, areaId };
    
        try {
            await addProcess(newProcess);  // Chamada para a API para adicionar o processo
            setName('');  // Limpa o campo de nome
            setAreaId(0);  // Reseta a área selecionada
            alert("Processo adicionado com sucesso!");
        } catch (error) {
            console.error("Erro ao adicionar o processo:", error);
            alert("Erro ao adicionar o processo!");
        }
    };
    return "ok";
    
    /*render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Adicionar Novo Processo</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Nome do processo" 
                        required 
                    />
                    
                    <select 
                        value={areaId} 
                        onChange={(e) => setAreaId(Number(e.target.value))} 
                        required 
                    >
                        <option value={0}>Selecione uma área</option>
                        {areas.map(area => (
                            <option key={area.id} value={area.id}>
                                {area.name}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Adicionar Processo</button>
                </form>
            </div>
        );
    };*/
};

export default AddProcessForm;