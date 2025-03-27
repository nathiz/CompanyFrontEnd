import { Process } from "./Processo";
import { SubProcess } from "./SubProcesso";

export interface Ferramenta {
    id: number;
    nome: string;
    descricao: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
} 