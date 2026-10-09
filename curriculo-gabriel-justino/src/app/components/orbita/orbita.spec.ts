import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filtro } from '../../models/skill';
import { Orbita } from './orbita';

describe('Orbita', () => {
  let fixture: ComponentFixture<Orbita>;
  let elemento: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orbita],
    }).compileComponents();

    fixture = TestBed.createComponent(Orbita);
    // O teste faz o papel do pai: fornece os inputs obrigatórios.
    fixture.componentRef.setInput('categorias', ['Todos', 'Frontend', 'Mobile']);
    fixture.componentRef.setInput('ativo', 'Todos');
    await fixture.whenStable();
    elemento = fixture.nativeElement as HTMLElement;
  });

  const planeta = (nome: string) =>
    [...elemento.querySelectorAll<HTMLButtonElement>('.orbita__planeta')].find(
      (b) => b.textContent?.trim() === nome,
    )!;

  it('renderiza um planeta por categoria e marca o ativo', () => {
    expect(elemento.querySelectorAll('.orbita__planeta').length).toBe(3);
    expect(planeta('Todos').getAttribute('aria-pressed')).toBe('true');
    expect(planeta('Mobile').getAttribute('aria-pressed')).toBe('false');
  });

  it('emite a categoria ao clicar num planeta', () => {
    const emitidos: Filtro[] = [];
    fixture.componentInstance.selecionar.subscribe((c) => emitidos.push(c));

    planeta('Mobile').click();

    expect(emitidos).toEqual(['Mobile']);
  });
});
