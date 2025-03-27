import { Process } from "./Processo";
import { SubProcess } from "./SubProcesso";

export interface Documento {
    id: number;
    nome: string;
    tipo: string;
    processoId?: number;
    processo?: Process;
    subProcessId?: number;
    subProcesso?: SubProcess;
}