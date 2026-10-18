import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sac } from './sac';

describe('Sac', () => {
  let component: Sac;
  let fixture: ComponentFixture<Sac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sac],
    }).compileComponents();

    fixture = TestBed.createComponent(Sac);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
