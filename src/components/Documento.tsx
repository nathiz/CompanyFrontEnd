import React from 'react';
import { Documento } from '../models/Documento';

interface DocumentoProps {
    documento: Documento;
}

const DocumentoComponent: React.FC<DocumentoProps> = ({ documento }) => {
    return (
        <div>
        <h4>Documento</h4>
        <p><strong>Nome:</strong> {documento.nome}</p>
        <p><strong>Tipo:</strong> {documento.tipo}</p>
        {documento.processo && <p><strong>Processo:</strong> {documento.processo.nome}</p>}
        {documento.subProcesso && <p><strong>Subprocesso:</strong> {documento.subProcesso.nome}</p>}
        </div>
    );
};

export default DocumentoComponent;