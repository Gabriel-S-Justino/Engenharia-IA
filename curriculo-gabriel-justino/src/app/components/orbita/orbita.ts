import { Component, computed, input, output } from '@angular/core';
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

  // Derivado: ângulo que gira a órbita para o planeta ativo ficar no topo.
  protected readonly rotacao = computed(() => {
    const lista = this.categorias();
    const indice = lista.indexOf(this.ativo());
    return -(360 / lista.length) * indice;
  });
}
