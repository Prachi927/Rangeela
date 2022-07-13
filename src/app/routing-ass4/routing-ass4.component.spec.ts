import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAss4Component } from './routing-ass4.component';

describe('RoutingAss4Component', () => {
  let component: RoutingAss4Component;
  let fixture: ComponentFixture<RoutingAss4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAss4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAss4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
