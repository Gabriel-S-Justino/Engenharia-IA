import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {
  // Decisão consciente (Fase 3.1): dados estáticos em signal() por
  // consistência com o restante do projeto, mesmo sem mudar em runtime.
  protected readonly nome = signal('Gabriel Justino');
  protected readonly papel = signal('Dev / Tech Lead');
  protected readonly frase = signal('Transformando problemas reais em soluções com tecnologia');
  protected readonly avatarUrl = signal('avatar.jpg'); // arquivo em public/

  // Muda para true se a foto não carregar (evento error do <img>)
  protected readonly fotoFalhou = signal(false);
}
