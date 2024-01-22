import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioNewsComponent } from './dettaglio-news.component';

describe('DettaglioNewsComponent', () => {
  let component: DettaglioNewsComponent;
  let fixture: ComponentFixture<DettaglioNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglioNewsComponent]
    });
    fixture = TestBed.createComponent(DettaglioNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
