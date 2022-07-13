import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAss3Component } from './routing-ass3.component';

describe('RoutingAss3Component', () => {
  let component: RoutingAss3Component;
  let fixture: ComponentFixture<RoutingAss3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAss3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAss3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
