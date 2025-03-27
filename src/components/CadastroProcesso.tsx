import React, { useState } from 'react'; // Importa React e o hook useState
import { addProcess } from '../services/api'; // Função para adicionar processo no backend

// Define as propriedades do componente CadastroProcesso
interface CadastroProcessoProps {
    areaId: number; // Identificador da área à qual o processo pertence
    onCadastrar: (processo: { nome: string; descricao: string; areaId: number }) => void; // Função que será chamada ao cadastrar um novo processo
}

// Componente funcional para cadastrar um novo processo dentro de uma área
const CadastroProcesso: React.FC<CadastroProcessoProps> = ({ areaId, onCadastrar }) => {
    // Define o estado local para os campos do formulário
    const [nome, setNome] = useState(''); // Armazena o nome do processo
    const [descricao, setDescricao] = useState(''); // Armazena a descrição do processo
    const [loading, setLoading] = useState(false); // Estado para controlar o carregamento durante a requisição

    // Função chamada ao submeter o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Cria um objeto com os dados do novo processo
        const novoProcesso = {
            nome,
            descricao,
            areaId, // Relaciona o processo à área com o ID passado como prop
            ferramentas: [],
            responsaveis: [],
            documentos: [],
            subprocessos: []
        };

        setLoading(true); // Ativa o carregamento

        try {
            const processoCriado = await addProcess(novoProcesso);  // Chama o serviço para adicionar o processo
            onCadastrar(processoCriado); // Chama a função "onCadastrar" com o novo processo
            setNome(''); // Limpa o campo de nome
            setDescricao(''); // Limpa o campo de descrição
        } catch (error) {
            console.error("Erro ao cadastrar o processo:", error);
        } finally {
            setLoading(false); // Desativa o carregamento após a tentativa
        }
    };

    return (
        <div>
            <h3>Cadastrar Processo</h3>
            {/* Formulário para cadastro de um processo */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Campo para o nome do processo */}
                    <label>Nome do Processo:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {/* Campo para a descrição do processo */}
                    <label>Descrição:</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Cadastrando...' : 'Cadastrar Processo'}
                </button>
            </form>
        </div>
    );
};

export default CadastroProcesso;