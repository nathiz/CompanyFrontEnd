import React, { useState } from 'react';
import { addArea } from '../services/api';

const AddAreaForm: React.FC = () => {
  const [name, setName] = useState('');  // Estado para armazenar o nome da área
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o envio

  // Função chamada ao enviar o formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário

    // Verifica se o nome da área foi preenchido
    if (name.trim() === '') {
      alert('Por favor, insira um nome para a área');
      return;
    }

    const newArea = { name };  // Objeto com o nome da nova área

    try {
      setIsSubmitting(true);  // Define que estamos enviando o formulário
      await addArea(newArea);  // Chama a função para adicionar a área via API
      setName('');  // Limpa o campo de entrada após a adição
      alert("Área adicionada com sucesso!");  // Exibe um alerta de sucesso
    } catch (error) {
      console.error("Erro ao adicionar a área:", error);
      alert("Erro ao adicionar a área!");  // Exibe um alerta de erro
    } finally {
      setIsSubmitting(false);  // Desativa o estado de "enviando" após a tentativa
    }
  };

  return ("ok"
    /*<form onSubmit={handleSubmit}>
      <h3>Adicionar Nova Área</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // Atualiza o estado com o nome da área
        placeholder="Nome da área"
        required // O campo é obrigatório
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Adicionar Área'}
      </button>
    </form>*/
  );
};

export default AddAreaForm;