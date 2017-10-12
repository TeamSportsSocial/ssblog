import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePanelComponent } from './single-panel.component';

describe('SinglePanelComponent', () => {
  let component: SinglePanelComponent;
  let fixture: ComponentFixture<SinglePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
