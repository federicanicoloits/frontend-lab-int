import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitaDettaglioComponent } from './partita-dettaglio.component';

describe('PartitaDettaglioComponent', () => {
  let component: PartitaDettaglioComponent;
  let fixture: ComponentFixture<PartitaDettaglioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartitaDettaglioComponent]
    });
    fixture = TestBed.createComponent(PartitaDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
