import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastmatchContainerComponent } from './lastmatch-container.component';

describe('LastmatchContainerComponent', () => {
  let component: LastmatchContainerComponent;
  let fixture: ComponentFixture<LastmatchContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastmatchContainerComponent]
    });
    fixture = TestBed.createComponent(LastmatchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
