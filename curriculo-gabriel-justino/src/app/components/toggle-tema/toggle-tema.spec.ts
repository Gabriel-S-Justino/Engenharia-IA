import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleTema } from './toggle-tema';

describe('ToggleTema', () => {
  let component: ToggleTema;
  let fixture: ComponentFixture<ToggleTema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleTema],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleTema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
