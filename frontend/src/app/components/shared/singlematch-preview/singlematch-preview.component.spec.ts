import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglematchPreviewComponent } from './singlematch-preview.component';

describe('SinglematchPreviewComponent', () => {
  let component: SinglematchPreviewComponent;
  let fixture: ComponentFixture<SinglematchPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglematchPreviewComponent]
    });
    fixture = TestBed.createComponent(SinglematchPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
