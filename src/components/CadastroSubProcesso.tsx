import React, { useState } from 'react'; // Importa React e o hook useState
import { Process } from '../models/Processo'; // Importa o modelo de dados do processo
import { SubProcess } from '../models/SubProcesso'; // Importa o modelo de dados do subprocesso

// Define as propriedades do componente CadastroSubProcesso
interface CadastroSubProcessoProps {
    processoId: number; // Identificador do processo ao qual o subprocesso pertence
    processo: Process; // Objeto do processo associado ao subprocesso
    onCadastrar: (subprocesso: SubProcess) => void; // Função que será chamada ao cadastrar um novo subprocesso
}

// Componente funcional para cadastrar um novo subprocesso dentro de um processo
const CadastroSubProcesso: React.FC<CadastroSubProcessoProps> = ({ processoId, processo, onCadastrar }) => {
    // Define o estado local para o campo de nome do subprocesso
    const [nome, setNome] = useState(''); // Armazena o nome do subprocesso

    // Função chamada ao submeter o formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Cria um objeto com os dados do novo subprocesso
        const novoSubProcesso: SubProcess = {
            id: Math.floor(Math.random() * 1000), // Gera um ID aleatório para o subprocesso (em um sistema real, o ID seria gerado pelo backend)
            nome,
            processId: processoId, // Relaciona o subprocesso ao processo com o ID passado como prop
            processo, // Passa o objeto do processo associado ao subprocesso
            subprocessosFilhos: [], // Lista vazia de subprocessos filhos
            ferramentas: [], // Lista vazia de ferramentas associadas ao subprocesso
            responsaveis: [], // Lista vazia de responsáveis pelo subprocesso
            documentos: [] // Lista vazia de documentos associados ao subprocesso
        };

        // Chama a função "onCadastrar" com os dados do novo subprocesso
        onCadastrar(novoSubProcesso);

        // Reseta o campo do formulário após o cadastro
        setNome('');
    };

    return (
        <div>
            <h3>Cadastrar Subprocesso</h3>
            {/* Formulário para cadastro de um subprocesso */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Campo para o nome do subprocesso */}
                    <label>Nome do Subprocesso:</label>
                    <input
                        type="text"
                        value={nome} // O valor é controlado pelo estado "nome"
                        onChange={(e) => setNome(e.target.value)} // Atualiza o estado "nome" quando o usuário digita
                        required // Torna o campo obrigatório
                    />
                </div>
                {/* Botão de submissão do formulário */}
                <button type="submit">Cadastrar Subprocesso</button>
            </form>
        </div>
    );
};

export default CadastroSubProcesso; // Exporta o componente para ser utilizado em outras partes do projeto