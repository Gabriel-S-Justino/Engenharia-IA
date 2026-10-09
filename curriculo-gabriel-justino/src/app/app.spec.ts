import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Responsabilidade do App é compor a página: garante que o Hero está montado.
  it('should render the hero', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-hero')).not.toBeNull();
  });

  // Garante o mapa de regiões: conteúdo principal e rodapé com o Contato.
  it('should render main and footer landmarks', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('main').length).toBe(1);
    expect(compiled.querySelector('footer app-contato')).not.toBeNull();
  });
});
