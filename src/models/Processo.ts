import { SubProcess } from './SubProcesso';
import { Ferramenta } from './Ferramenta';
import { Responsavel } from './Responsavel';
import { Documento } from './Documento';
import { Area } from './Area';

export interface Process {
    id: number;
    nome: string;
    descricao: string;
    areaId: number;
    area?: Area;
    subprocessos: SubProcess[];
    ferramentas: Ferramenta[];
    responsaveis: Responsavel[];
    documentos: Documento[];
}
