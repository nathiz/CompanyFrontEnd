import React, { useState } from 'react';

interface CadastroAreaProps {
    onCadastrar: (area: { nome: string; departamento: string; setor: string }) => void;
}

const CadastroArea: React.FC<CadastroAreaProps> = ({ onCadastrar }) => {
    const [nome, setNome] = useState('');
    const [departamento, setDepartamento] = useState('');
    const [setor, setSetor] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const novaArea = { nome, departamento, setor };
        onCadastrar(novaArea);
        setNome('');
        setDepartamento('');
        setSetor('');
    };

    return (
        <div>
        <h3>Cadastrar Área</h3>
        <form onSubmit={handleSubmit}>
            <div>
            <label>Nome da Área:</label>
            <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Departamento:</label>
            <input
                type="text"
                value={departamento}
                onChange={(e) => setDepartamento(e.target.value)}
                required
            />
            </div>
            <div>
            <label>Setor:</label>
            <input
                type="text"
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
                required
            />
            </div>
            <button type="submit">Cadastrar Área</button>
        </form>
        </div>
    );
};

export default CadastroArea;