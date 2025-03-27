import React, { useState } from 'react';
import CadastroArea from './components/CadastroArea';
import CadastroProcesso from './components/CadastroProcesso';
import CadastroSubProcesso from './components/CadastroSubProcesso';
import { Area } from './models/Area';
import { Process } from './models/Processo';
import { SubProcess } from './models/SubProcesso';
import './App.css';

const App: React.FC = () => {
  // Estados para armazenar as áreas, processos e subprocessos
  const [areas, setAreas] = useState<Area[]>([]);  // Lista de áreas cadastradas
  const [processos, setProcessos] = useState<Process[]>([]);  // Lista de processos cadastrados
  const [subprocessos, setSubprocessos] = useState<SubProcess[]>([]);  // Lista de subprocessos cadastrados

  // Função para cadastrar uma nova área
  const cadastrarArea = (area: { nome: string; departamento: string; setor: string }) => {
    const novaArea: Area = { ...area, id: areas.length + 1, processos: [] };  // Cria um novo objeto de área com um id incremental
    setAreas([...areas, novaArea]);  // Atualiza o estado com a nova área
  };

  // Função para cadastrar um novo processo dentro de uma área
  const cadastrarProcesso = (processo: { nome: string; descricao: string; areaId: number }) => {
    const novoProcesso: Process = {
      ...processo,
      id: processos.length + 1,
      ferramentas: [],
      responsaveis: [],
      documentos: [],
      subprocessos: []
    };
    setProcessos([...processos, novoProcesso]);  // Adiciona o novo processo ao estado
    // Atualiza a área associada, incluindo o processo
    const areaAtualizada = areas.map((area) =>
      area.id === processo.areaId ? { ...area, processos: [...area.processos, novoProcesso] } : area
    );
    setAreas(areaAtualizada);  // Atualiza as áreas com o novo processo
  };

  // Função para cadastrar um novo subprocesso dentro de um processo
  const cadastrarSubProcesso = (subprocesso: SubProcess) => {
    setSubprocessos([...subprocessos, subprocesso]);  // Adiciona o novo subprocesso ao estado
    // Atualiza o processo associado, incluindo o subprocesso
    const processoAtualizado = processos.map((processo) =>
      processo.id === subprocesso.processId
        ? { ...processo, subprocessos: [...processo.subprocessos, subprocesso] }
        : processo
    );
    setProcessos(processoAtualizado);  // Atualiza os processos com o novo subprocesso
  };

  return (
    <div>
      <h1>Sistema de Cadastro de Processos</h1>

      {/* Componente para cadastrar novas áreas */}
      <CadastroArea onCadastrar={cadastrarArea} />

      {/* Mapeia todas as áreas cadastradas e exibe seus processos */}
      {areas.map((area) => (
        <div key={area.id}>
          <h2>{area.nome}</h2>
          {/* Componente para cadastrar novos processos dentro da área */}
          <CadastroProcesso areaId={area.id} onCadastrar={cadastrarProcesso} />
          
          {/* Mapeia e exibe os processos dessa área */}
          {processos
            .filter((processo) => processo.areaId === area.id)
            .map((processo) => (
              <div key={processo.id}>
                <h3>{processo.nome}</h3>
                {/* Componente para cadastrar novos subprocessos dentro do processo */}
                <CadastroSubProcesso
                  processoId={processo.id}
                  processo={processo}
                  onCadastrar={cadastrarSubProcesso}
                />
                
                {/* Lista os subprocessos do processo */}
                <ul>
                  {subprocessos
                    .filter((sub) => sub.processId === processo.id)
                    .map((sub) => (
                      <li key={sub.id}>{sub.nome}</li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default App;