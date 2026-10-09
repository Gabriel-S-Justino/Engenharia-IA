import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Orbita } from './orbita';

describe('Orbita', () => {
  let component: Orbita;
  let fixture: ComponentFixture<Orbita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Orbita],
    }).compileComponents();

    fixture = TestBed.createComponent(Orbita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
