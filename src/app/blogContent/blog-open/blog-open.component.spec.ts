import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOpenComponent } from './blog-open.component';

describe('BlogOpenComponent', () => {
  let component: BlogOpenComponent;
  let fixture: ComponentFixture<BlogOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
