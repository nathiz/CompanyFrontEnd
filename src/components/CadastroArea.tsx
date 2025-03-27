import React, { useState } from 'react';
import { addArea } from '../services/api';  // Assumindo que a função addArea está em services/api

// Define as propriedades do componente CadastroArea, que espera uma função "onCadastrar"
interface CadastroAreaProps {
    onCadastrar: (area: { nome: string; departamento: string; setor: string }) => void; // Função que será chamada ao cadastrar uma nova área
}

// Componente funcional para cadastrar uma nova área
const CadastroArea: React.FC<CadastroAreaProps> = ({ onCadastrar }) => {
    // Definindo o estado local para os campos do formulário
    const [nome, setNome] = useState(''); // Armazena o nome da área
    const [departamento, setDepartamento] = useState(''); // Armazena o departamento da área
    const [setor, setSetor] = useState(''); // Armazena o setor da área

    // Função chamada ao submeter o formulário
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página

        const novaArea = { nome, departamento, setor }; // Cria um objeto com os dados do formulário
        
        try {
            // Chama a função do serviço para adicionar a área no backend
            const areaCriada = await addArea(novaArea);  // Retorna a área criada do backend
            onCadastrar(areaCriada); // Chama a função "onCadastrar" com os dados da nova área
            setNome(''); // Reseta o campo nome após o cadastro
            setDepartamento(''); // Reseta o campo departamento após o cadastro
            setSetor(''); // Reseta o campo setor após o cadastro
        } catch (error) {
            console.error("Erro ao cadastrar a área:", error); // Exibe o erro no console, se houver
        }
    };

    return (
        <div>
            <h3>Cadastrar Área</h3>
            {/* Formulário para cadastro da área */}
            <form onSubmit={handleSubmit}>
                <div>
                    {/* Campo para o nome da área */}
                    <label>Nome da Área:</label>
                    <input
                        type="text"
                        value={nome} // O valor é controlado pelo estado "nome"
                        onChange={(e) => setNome(e.target.value)} // Atualiza o estado "nome" quando o usuário digita
                        required // Torna o campo obrigatório
                    />
                </div>
                <div>
                    {/* Campo para o departamento */}
                    <label>Departamento:</label>
                    <input
                        type="text"
                        value={departamento} // O valor é controlado pelo estado "departamento"
                        onChange={(e) => setDepartamento(e.target.value)} // Atualiza o estado "departamento"
                        required // Torna o campo obrigatório
                    />
                </div>
                <div>
                    {/* Campo para o setor */}
                    <label>Setor:</label>
                    <input
                        type="text"
                        value={setor} // O valor é controlado pelo estado "setor"
                        onChange={(e) => setSetor(e.target.value)} // Atualiza o estado "setor"
                        required // Torna o campo obrigatório
                    />
                </div>
                {/* Botão de submissão do formulário */}
                <button type="submit">Cadastrar Área</button>
            </form>
        </div>
    );
};

export default CadastroArea; // Exporta o componente para ser utilizado em outras partes do projeto