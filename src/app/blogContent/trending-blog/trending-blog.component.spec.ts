import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBlogComponent } from './trending-blog.component';

describe('TrendingBlogComponent', () => {
  let component: TrendingBlogComponent;
  let fixture: ComponentFixture<TrendingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
