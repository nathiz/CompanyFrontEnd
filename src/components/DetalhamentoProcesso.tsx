import React from 'react';
import { DetalhamentoProcesso } from '../models/DetalhamentoProcesso';

interface DetalhamentoProcessoProps {
  detalhamento: DetalhamentoProcesso;
}

const DetalhamentoProcessoComponent: React.FC<DetalhamentoProcessoProps> = ({ detalhamento }) => {
  return (
    <div>
      <h4>Detalhamento do Processo</h4>
      <p><strong>Ferramentas Utilizadas:</strong> {detalhamento.ferramentasUtilizadas}</p>
      <p><strong>Responsáveis:</strong> {detalhamento.responsaveis}</p>
      <p><strong>Documentação Associada:</strong> {detalhamento.documentacaoAssociada}</p>
    </div>
  );
};

export default DetalhamentoProcessoComponent;