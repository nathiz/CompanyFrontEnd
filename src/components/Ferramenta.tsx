import React from 'react';
import { Ferramenta } from '../models/Ferramenta';

interface FerramentaProps {
    ferramenta: Ferramenta;
}

const FerramentaComponent: React.FC<FerramentaProps> = ({ ferramenta }) => {
    return (
        <div>
        <h4>Ferramenta</h4>
        <p><strong>Nome:</strong> {ferramenta.nome}</p>
        <p><strong>Descrição:</strong> {ferramenta.descricao}</p>
        {ferramenta.processo && <p><strong>Processo:</strong> {ferramenta.processo.nome}</p>}
        {ferramenta.subProcesso && <p><strong>Subprocesso:</strong> {ferramenta.subProcesso.nome}</p>}
        </div>
    );
};

export default FerramentaComponent;
