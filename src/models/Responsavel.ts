import { Process } from "./Processo";
import { SubProcess } from "./SubProcesso";

export interface Responsavel {
    id: number;
    nome: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
}