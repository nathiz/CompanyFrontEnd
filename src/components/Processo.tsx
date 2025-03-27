import React from 'react';
import { Process } from '../models/Processo';

interface ProcessoProps {
    processo: Process;
}

const ProcessoComponent: React.FC<ProcessoProps> = ({ processo }) => {
    return (
        <div>
        <h3>{processo.nome}</h3>
        <p>{processo.descricao}</p>
        <h4>Subprocessos</h4>
        {processo.subprocessos.map((sub) => (
            <div key={sub.id}>
            <p>{sub.nome}</p>
            </div>
        ))}
        </div>
    );
};

export default ProcessoComponent;
