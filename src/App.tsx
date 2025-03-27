import React, { useState } from 'react';
import CadastroArea from './components/CadastroArea';
import CadastroProcesso from './components/CadastroProcesso';
import CadastroSubProcesso from './components/CadastroSubProcesso';
import { Area } from './models/Area';
import { Process } from './models/Processo';
import { SubProcess } from './models/SubProcesso';

const App: React.FC = () => {
  const [areas, setAreas] = useState<Area[]>([]);
  const [processos, setProcessos] = useState<Process[]>([]);
  const [subprocessos, setSubprocessos] = useState<SubProcess[]>([]);

  // Função para cadastrar nova área
  const cadastrarArea = (area: { nome: string; departamento: string; setor: string }) => {
    const novaArea: Area = { ...area, id: areas.length + 1, processos: [] };
    setAreas([...areas, novaArea]);
  };

  // Função para cadastrar novo processo
  const cadastrarProcesso = (processo: { nome: string; descricao: string; areaId: number }) => {
    const novoProcesso: Process = {
      ...processo,
      id: processos.length + 1,
      ferramentas: [],
      responsaveis: [],
      documentos: [],
      subprocessos: []
    };
    setProcessos([...processos, novoProcesso]);
  };

  // Função para cadastrar novo subprocesso
  const cadastrarSubProcesso = (subprocesso: SubProcess) => {
    setSubprocessos([...subprocessos, subprocesso]);
  };

  return (
    <div>
      <h1>Sistema de Cadastro de Processos</h1>

      <CadastroArea onCadastrar={cadastrarArea} />

      {areas.map((area) => (
        <div key={area.id}>
          <h2>{area.nome}</h2>
          <CadastroProcesso areaId={area.id} onCadastrar={cadastrarProcesso} />
          {processos
            .filter((processo) => processo.areaId === area.id)
            .map((processo) => (
              <div key={processo.id}>
                <h3>{processo.nome}</h3>
                <CadastroSubProcesso
                  processoId={processo.id}
                  processo={processo}
                  onCadastrar={cadastrarSubProcesso}
                />
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