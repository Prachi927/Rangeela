import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAss1Component } from './routing-ass1.component';

describe('RoutingAss1Component', () => {
  let component: RoutingAss1Component;
  let fixture: ComponentFixture<RoutingAss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAss1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
