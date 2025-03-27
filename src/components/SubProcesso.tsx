import React from 'react'; // Importa a biblioteca React
import { SubProcess } from '../models/SubProcesso'; // Importa o modelo de dados SubProcesso
import FerramentaComponent from './Ferramenta'; // Importa o componente FerramentaComponent
import DocumentoComponent from './Documento'; // Importa o componente DocumentoComponent
import ResponsavelComponent from './Responsavel'; // Importa o componente ResponsavelComponent

// Define as propriedades do componente SubProcessoComponent
interface SubProcessoProps {
    subprocesso: SubProcess; // O componente recebe um objeto do tipo SubProcess
}

// Componente funcional para exibir as informações de um subprocesso e seus dados associados
const SubProcessoComponent: React.FC<SubProcessoProps> = ({ subprocesso }) => {
    return (
        <div>
            {/* Exibe o nome do subprocesso */}
            <h3>{subprocesso.nome}</h3>
            {/* Exibe o nome do processo associado ao subprocesso */}
            <p><strong>Processo:</strong> {subprocesso.processo.nome}</p>

            {/* Exibe os subprocessos filhos, se houver */}
            <h4>Subprocessos Filhos</h4>
            {subprocesso.subprocessosFilhos.map((sub) => (
                <div key={sub.id}>
                    <p>{sub.nome}</p> {/* Exibe o nome de cada subprocesso filho */}
                </div>
            ))}

            {/* Exibe as ferramentas associadas ao subprocesso */}
            <h4>Ferramentas</h4>
            {subprocesso.ferramentas.map((ferramenta) => (
                <FerramentaComponent key={ferramenta.id} ferramenta={ferramenta} /> // Exibe o componente FerramentaComponent para cada ferramenta
            ))}

            {/* Exibe os responsáveis associados ao subprocesso */}
            <h4>Responsáveis</h4>
            {subprocesso.responsaveis.map((responsavel) => (
                <ResponsavelComponent key={responsavel.id} responsavel={responsavel} /> // Exibe o componente ResponsavelComponent para cada responsável
            ))}

            {/* Exibe os documentos associados ao subprocesso */}
            <h4>Documentos</h4>
            {subprocesso.documentos.map((documento) => (
                <DocumentoComponent key={documento.id} documento={documento} /> // Exibe o componente DocumentoComponent para cada documento
            ))}
        </div>
    );
};

export default SubProcessoComponent; // Exporta o componente para ser utilizado em outras partes do projeto