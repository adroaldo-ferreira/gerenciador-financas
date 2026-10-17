import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JurosCompostos } from './juros-compostos';

describe('JurosCompostos', () => {
  let component: JurosCompostos;
  let fixture: ComponentFixture<JurosCompostos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JurosCompostos],
    }).compileComponents();

    fixture = TestBed.createComponent(JurosCompostos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
