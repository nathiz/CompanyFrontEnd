import React, { useState } from 'react';
import { Process } from '../models/Processo';
import { SubProcess } from '../models/SubProcesso';

interface CadastroSubProcessoProps {
    processoId: number;
    processo: Process;
    onCadastrar: (subprocesso: SubProcess) => void;
}

const CadastroSubProcesso: React.FC<CadastroSubProcessoProps> = ({ processoId, processo, onCadastrar }) => {
    const [nome, setNome] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const novoSubProcesso: SubProcess = {
        id: Math.floor(Math.random() * 1000), 
        nome,
        processId: processoId,
        processo,
        subprocessosFilhos: [],
        ferramentas: [],
        responsaveis: [],
        documentos: []
        };

        onCadastrar(novoSubProcesso);
        setNome('');
    };

    return (
        <div>
        <h3>Cadastrar Subprocesso</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome do Subprocesso:</label>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            </div>
            <button type="submit">Cadastrar Subprocesso</button>
        </form>
        </div>
    );
};

export default CadastroSubProcesso;