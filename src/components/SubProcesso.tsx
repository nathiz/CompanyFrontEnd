import React from 'react';
import { SubProcess } from '../models/SubProcesso';
import FerramentaComponent from './Ferramenta';
import DocumentoComponent from './Documento';
import ResponsavelComponent from './Responsavel';

interface SubProcessoProps {
    subprocesso: SubProcess;
}

const SubProcessoComponent: React.FC<SubProcessoProps> = ({ subprocesso }) => {
    return (
        <div>
        <h3>{subprocesso.nome}</h3>
        <p><strong>Processo:</strong> {subprocesso.processo.nome}</p>
        <h4>Subprocessos Filhos</h4>
        {subprocesso.subprocessosFilhos.map((sub) => (
            <div key={sub.id}>
            <p>{sub.nome}</p>
            </div>
        ))}

        <h4>Ferramentas</h4>
        {subprocesso.ferramentas.map((ferramenta) => (
            <FerramentaComponent key={ferramenta.id} ferramenta={ferramenta} />
        ))}

        <h4>Responsáveis</h4>
        {subprocesso.responsaveis.map((responsavel) => (
            <ResponsavelComponent key={responsavel.id} responsavel={responsavel} />
        ))}

        <h4>Documentos</h4>
        {subprocesso.documentos.map((documento) => (
            <DocumentoComponent key={documento.id} documento={documento} />
        ))}
        </div>
    );
};

export default SubProcessoComponent;