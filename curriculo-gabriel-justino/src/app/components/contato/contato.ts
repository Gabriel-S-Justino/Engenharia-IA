import { Component, DestroyRef, inject, signal } from '@angular/core';

type Icone = 'github' | 'linkedin' | 'email';

interface Canal {
  nome: string;
  url: string;
  icone: Icone;
  externo: boolean; // abre em nova aba
}

// Estado do botão de copiar: um único signal com três valores possíveis
// evita combinações impossíveis (ex.: "copiado" e "erro" ao mesmo tempo).
type EstadoCopia = 'ocioso' | 'copiado' | 'erro';

@Component({
  imports: [],
  selector: 'app-contato',
  styleUrl: './contato.scss',
  templateUrl: './contato.html',
})
export class Contato {
  protected readonly email = 'gabrieljustino.dev@outlook.com';

  protected readonly canais = signal<Canal[]>([
    { nome: 'GitHub', url: 'https://github.com/Gabriel-S-Justino', icone: 'github', externo: true },
    { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-justino-dev', icone: 'linkedin', externo: true },
    { nome: 'E-mail', url: `mailto:${this.email}`, icone: 'email', externo: false },
  ]);

  protected readonly estadoCopia = signal<EstadoCopia>('ocioso');

  private temporizador?: ReturnType<typeof setTimeout>;

  constructor() {
    // Se o componente sair da tela, cancela o temporizador pendente.
    inject(DestroyRef).onDestroy(() => clearTimeout(this.temporizador));
  }

  protected async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email);
      this.estadoCopia.set('copiado');
    } catch {
      // Sem permissão ou contexto inseguro: o e-mail continua visível na tela.
      this.estadoCopia.set('erro');
    }
    // Cliques seguidos reiniciam a contagem de 2s a partir do último.
    clearTimeout(this.temporizador);
    this.temporizador = setTimeout(() => this.estadoCopia.set('ocioso'), 2000);
  }
}
