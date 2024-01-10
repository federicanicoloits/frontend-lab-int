import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTablesContainerComponent } from './football-tables-container.component';

describe('FootballTablesContainerComponent', () => {
  let component: FootballTablesContainerComponent;
  let fixture: ComponentFixture<FootballTablesContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballTablesContainerComponent]
    });
    fixture = TestBed.createComponent(FootballTablesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
