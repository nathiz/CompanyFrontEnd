import React from 'react';
import { Responsavel } from '../models/Responsavel';

interface ResponsavelProps {
    responsavel: Responsavel;
}

const ResponsavelComponent: React.FC<ResponsavelProps> = ({ responsavel }) => {
    return (
        <div>
        <h4>Responsável</h4>
        <p><strong>Nome:</strong> {responsavel.nome}</p>
        {responsavel.processo && <p><strong>Processo:</strong> {responsavel.processo.nome}</p>}
        {responsavel.subProcesso && <p><strong>Subprocesso:</strong> {responsavel.subProcesso.nome}</p>}
        </div>
    );
};

export default ResponsavelComponent;