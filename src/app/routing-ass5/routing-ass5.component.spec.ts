import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingAss5Component } from './routing-ass5.component';

describe('RoutingAss5Component', () => {
  let component: RoutingAss5Component;
  let fixture: ComponentFixture<RoutingAss5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingAss5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingAss5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
