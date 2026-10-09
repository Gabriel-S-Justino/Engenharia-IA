import { Component, computed, signal } from '@angular/core';
import { Categoria, Skill } from '../../models/skill';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  // Estado de origem: os dados. A ordem das categorias no filtro
  // segue a ordem da primeira aparição de cada uma aqui.
  protected readonly skills = signal<Skill[]>([
    { nome: 'HTML', categoria: 'Frontend', nivel: 'Domínio' },
    { nome: 'React', categoria: 'Frontend', nivel: 'Uso' },
    { nome: 'JavaScript', categoria: 'Frontend', nivel: 'Uso' },
    { nome: 'CSS/SCSS', categoria: 'Frontend', nivel: 'Uso' },
    { nome: 'TypeScript', categoria: 'Frontend', nivel: 'Estudo' },

    { nome: 'Flask', categoria: 'Backend e Dados', nivel: 'Estudo' },
    { nome: 'SQL', categoria: 'Backend e Dados', nivel: 'Estudo' },
    { nome: 'SQLite', categoria: 'Backend e Dados', nivel: 'Estudo' },
    { nome: 'PostgreSQL', categoria: 'Backend e Dados', nivel: 'Estudo' },

    { nome: 'React Native', categoria: 'Mobile', nivel: 'Uso' },

    { nome: 'Python', categoria: 'Dados e Automação', nivel: 'Uso' },
    { nome: 'Excel', categoria: 'Dados e Automação', nivel: 'Uso' },

    { nome: 'Git/GitHub', categoria: 'Ferramentas', nivel: 'Uso' },
    { nome: 'Docker', categoria: 'Ferramentas', nivel: 'Uso' },
    { nome: 'Linux/Ubuntu', categoria: 'Ferramentas', nivel: 'Uso' },

    { nome: 'Claude Code', categoria: 'IA e Agentes', nivel: 'Uso' },
    { nome: 'OpenAI Codex', categoria: 'IA e Agentes', nivel: 'Uso' },
    { nome: 'Engenharia de Prompts', categoria: 'IA e Agentes', nivel: 'Uso' },
    { nome: 'Desenvolvimento Assistido por IA', categoria: 'IA e Agentes', nivel: 'Uso' },
  ]);

  // Estado de origem: a escolha do usuário.
  protected readonly filtroAtivo = signal<Categoria | 'Todos'>('Todos');

  // Derivado: só categorias que têm skills cadastradas.
  protected readonly categorias = computed(() => {
    const unicas = new Set(this.skills().map((s) => s.categoria));
    return ['Todos', ...unicas] as const;
  });

  // Derivado: recalcula quando skills ou filtroAtivo mudam.
  protected readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    return filtro === 'Todos'
      ? this.skills()
      : this.skills().filter((s) => s.categoria === filtro);
  });

  protected selecionar(categoria: Categoria | 'Todos'): void {
    this.filtroAtivo.set(categoria);
  }
}
