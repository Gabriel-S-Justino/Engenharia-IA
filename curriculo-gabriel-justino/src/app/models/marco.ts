// Contrato de um marco da Trajetória (formação, projeto ou evento).

export type TipoMarco = 'formacao' | 'projeto' | 'evento';

// Só as situações em uso; novas entram quando aparecer um caso real.
export type Situacao = 'Cursando' | 'Em preparação' | 'Em desenvolvimento' | 'Em produção';

export interface Marco {
  titulo: string;
  periodo: string; // texto de exibição: '2026' ou '2026 – 2029'
  descricao: string;
  tipo: TipoMarco; // define o visual do nó
  situacao: Situacao; // aparece no selo
  tecnologias?: string[]; // opcional: só projetos têm
  destaque?: boolean; // opcional: nó maior, com anel
}
