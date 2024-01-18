import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardSideComponent } from './news-card-side.component';

describe('NewsCardSideComponent', () => {
  let component: NewsCardSideComponent;
  let fixture: ComponentFixture<NewsCardSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCardSideComponent]
    });
    fixture = TestBed.createComponent(NewsCardSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
