import React, { useState } from 'react';

interface CadastroProcessoProps {
    areaId: number;
    onCadastrar: (processo: { nome: string; descricao: string; areaId: number }) => void;
}

const CadastroProcesso: React.FC<CadastroProcessoProps> = ({ areaId, onCadastrar }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const novoProcesso = {
        id: Math.floor(Math.random() * 1000),
        nome,
        descricao,
        areaId,
        ferramentas: [],
        responsaveis: [],
        documentos: [],
        subprocessos: []
        };

        onCadastrar(novoProcesso);
        setNome('');
        setDescricao('');
    };

    return (
        <div>
        <h3>Cadastrar Processo</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome do Processo:</label>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Descrição:</label>
            <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
            />
            </div>
            <button type="submit">Cadastrar Processo</button>
        </form>
        </div>
    );
};

export default CadastroProcesso;