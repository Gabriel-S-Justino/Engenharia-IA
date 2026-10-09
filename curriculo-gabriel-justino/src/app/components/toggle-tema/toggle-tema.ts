import { Component, effect, signal } from '@angular/core';

type Tema = 'dark' | 'light';

@Component({
  imports: [],
  selector: 'app-toggle-tema',
  styleUrl: './toggle-tema.scss',
  templateUrl: './toggle-tema.html',
})
export class ToggleTema {
  // Começa com o tema que o script do index.html já aplicou.
  protected readonly tema = signal<Tema>(
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark',
  );

  constructor() {
    // effect: sincroniza o signal com algo FORA do Angular (o atributo do <html>).
    effect(() => {
      document.documentElement.setAttribute('data-theme', this.tema());
    });
  }

  protected alternar(): void {
    this.tema.update((t) => (t === 'dark' ? 'light' : 'dark'));
    // Salva só quando o visitante ESCOLHE. Sem escolha, o site segue o sistema.
    try {
      localStorage.setItem('tema', this.tema());
    } catch {
      // armazenamento bloqueado: o tema vale só nesta visita
    }
  }
}
