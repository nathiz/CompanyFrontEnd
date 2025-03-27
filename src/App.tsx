import React, { useEffect, useState } from 'react';
import { getAreas } from './services/api';
import './App.css';
import AddAreaForm from './form/AddAreaForm';
import AddProcessForm from './form/AddProcessForm';
import AddSubProcessForm from './form/AddSubProcessForm';

// Definindo os tipos de dados
interface SubProcess {
  id: number;
  name: string;
}

interface Process {
  id: number;
  name: string;
  subProcesses: SubProcess[];
}

interface Area {
  id: number;
  name: string;
  processes: Process[];
}

const App: React.FC = () => {
  const [areas, setAreas] = useState<Area[]>([]);

  // UseEffect para buscar dados da API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const areasResult = await getAreas(); // Chamada à API para pegar as áreas
        setAreas(areasResult); // Atualiza o estado 'areas' com os dados da API
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []); // Rodar apenas uma vez na montagem do componente

  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Process Management</h1>
      </header>

      {/* Formulários para adicionar novos itens */}
      <AddAreaForm />
      <AddProcessForm />
      <AddSubProcessForm />

      <div>
        {areas.length > 0 ? (
          areas.map(area => (
            <div key={area.id}>
              <h2>{area.name}</h2>
              <ul>
                {/* Verifica se existe 'processes' dentro da área e então itera sobre eles */}
                {area.processes.length > 0 ? (
                  area.processes.map(process => (
                    <li key={process.id}>
                      {process.name}
                      <ul>
                        {/* Verifica se existe 'subProcesses' dentro de cada processo */}
                        {process.subProcesses.length > 0 ? (
                          process.subProcesses.map(subProcess => (
                            <li key={subProcess.id}>{subProcess.name}</li>
                          ))
                        ) : (
                          <li>No subprocesses available</li>
                        )}
                      </ul>
                    </li>
                  ))
                ) : (
                  <li>No processes available</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No areas available</p>
        )}
      </div>
    </div>
  );
};

export default App;