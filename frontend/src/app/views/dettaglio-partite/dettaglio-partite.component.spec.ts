import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioPartiteComponent } from './dettaglio-partite.component';

describe('DettaglioPartiteComponent', () => {
  let component: DettaglioPartiteComponent;
  let fixture: ComponentFixture<DettaglioPartiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioPartiteComponent]
    });
    fixture = TestBed.createComponent(DettaglioPartiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
