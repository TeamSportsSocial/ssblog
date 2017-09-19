import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBlogCardComponent } from './trending-blog-card.component';

describe('TrendingBlogCardComponent', () => {
  let component: TrendingBlogCardComponent;
  let fixture: ComponentFixture<TrendingBlogCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingBlogCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBlogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
