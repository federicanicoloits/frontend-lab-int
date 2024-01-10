import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewsNewsContainerComponent } from './page-news-news-container.component';

describe('PageNewsNewsContainerComponent', () => {
  let component: PageNewsNewsContainerComponent;
  let fixture: ComponentFixture<PageNewsNewsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNewsNewsContainerComponent]
    });
    fixture = TestBed.createComponent(PageNewsNewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
