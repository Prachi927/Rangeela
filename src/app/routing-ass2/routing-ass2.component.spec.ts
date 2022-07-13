import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAss2Component } from './routing-ass2.component';

describe('RoutingAss2Component', () => {
  let component: RoutingAss2Component;
  let fixture: ComponentFixture<RoutingAss2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAss2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAss2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
