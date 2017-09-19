import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalBlogComponent } from './normal-blog.component';

describe('NormalBlogComponent', () => {
  let component: NormalBlogComponent;
  let fixture: ComponentFixture<NormalBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
