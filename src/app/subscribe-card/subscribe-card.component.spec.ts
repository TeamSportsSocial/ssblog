import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeCardComponent } from './subscribe-card.component';

describe('SubscribeCardComponent', () => {
  let component: SubscribeCardComponent;
  let fixture: ComponentFixture<SubscribeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
