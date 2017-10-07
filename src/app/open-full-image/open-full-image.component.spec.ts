import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenFullImageComponent } from './open-full-image.component';

describe('OpenFullImageComponent', () => {
  let component: OpenFullImageComponent;
  let fixture: ComponentFixture<OpenFullImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenFullImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenFullImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
