import { Ferramenta } from './Ferramenta';
import { Responsavel } from './Responsavel';
import { Documento } from './Documento';
import { Process } from './Processo';

export interface SubProcess {
    id: number;
    nome: string;
    processId: number;
    processo: Process;
    subprocessosFilhos: SubProcess[];
    ferramentas: Ferramenta[];
    responsaveis: Responsavel[];
    documentos: Documento[];
}