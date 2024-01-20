import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticheSquadraComponent } from './statistiche-squadra.component';

describe('StatisticheSquadraComponent', () => {
  let component: StatisticheSquadraComponent;
  let fixture: ComponentFixture<StatisticheSquadraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatisticheSquadraComponent]
    });
    fixture = TestBed.createComponent(StatisticheSquadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
