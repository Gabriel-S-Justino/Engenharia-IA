import { Component, input, linkedSignal, output } from '@angular/core';
import { Filtro } from '../../models/skill';

// Apresenta os filtros como planetas em órbita. Não guarda estado:
// recebe os dados do pai (input) e avisa quando um planeta é escolhido (output).
@Component({
  imports: [],
  selector: 'app-orbita',
  styleUrl: './orbita.scss',
  templateUrl: './orbita.html',
})
export class Orbita {
  readonly categorias = input.required<readonly Filtro[]>();
  readonly ativo = input.required<Filtro>();
  readonly selecionar = output<Filtro>();

  // Ângulo da órbita. linkedSignal reage ao índice ativo (como um computed),
  // mas recebe o valor anterior — assim gira sempre pelo caminho mais curto
  // em vez de animar até o ângulo absoluto.
  protected readonly rotacao = linkedSignal<number, number>({
    source: () => this.categorias().indexOf(this.ativo()),
    computation: (indice, anterior) => {
      const passo = 360 / this.categorias().length;
      const alvo = -passo * indice;
      const atual = anterior?.value ?? alvo; // primeira vez: começa no alvo
      // diferença normalizada para (-180°, 180°]
      let diferenca = (alvo - atual) % 360;
      if (diferenca > 180) diferenca -= 360;
      if (diferenca <= -180) diferenca += 360;
      return atual + diferenca;
    },
  });
}
