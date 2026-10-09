// Contrato dos dados de Skill. Tipos não geram JavaScript:
// existem só para o compilador recusar valores inválidos.

export type Categoria =
  | 'Frontend'
  | 'Backend e Dados'
  | 'Mobile'
  | 'Dados e Automação'
  | 'Ferramentas'
  | 'IA e Agentes';

export type Nivel = 'Domínio' | 'Uso' | 'Estudo';

export interface Skill {
  nome: string;
  categoria: Categoria;
  nivel: Nivel;
}
