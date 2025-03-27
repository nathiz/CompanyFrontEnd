import React from 'react';
import { Area } from '../models/Area';
import ProcessoComponent from './Processo';

interface AreaProps {
    area: Area;
}

const AreaComponent: React.FC<AreaProps> = ({ area }) => {
    return (
        <div>
        <h2>{area.nome}</h2>
        <p><strong>Departamento:</strong> {area.departamento}</p>
        <p><strong>Setor:</strong> {area.setor}</p>
        
        <h3>Processos</h3>
        {area.processos.map((processo) => (
            <div key={processo.id}>
            <ProcessoComponent processo={processo} />
            </div>
        ))}
        </div>
    );
};

export default AreaComponent;