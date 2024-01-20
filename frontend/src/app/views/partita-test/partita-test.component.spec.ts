import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitaTestComponent } from './partita-test.component';

describe('PartitaTestComponent', () => {
  let component: PartitaTestComponent;
  let fixture: ComponentFixture<PartitaTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartitaTestComponent]
    });
    fixture = TestBed.createComponent(PartitaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
