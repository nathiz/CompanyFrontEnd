import { Process } from "./Processo";

export interface DetalhamentoProcesso {
    id: number;
    ferramentasUtilizadas: string;
    responsaveis: string;
    documentacaoAssociada: string;
    processId: number;
    processo: Process;
}