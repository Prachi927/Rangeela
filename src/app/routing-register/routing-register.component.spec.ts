import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingRegisterComponent } from './routing-register.component';

describe('RoutingRegisterComponent', () => {
  let component: RoutingRegisterComponent;
  let fixture: ComponentFixture<RoutingRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
