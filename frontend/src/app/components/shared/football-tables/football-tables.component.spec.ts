import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballTablesComponent } from './football-tables.component';

describe('FootballTablesComponent', () => {
  let component: FootballTablesComponent;
  let fixture: ComponentFixture<FootballTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballTablesComponent]
    });
    fixture = TestBed.createComponent(FootballTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
