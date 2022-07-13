import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSigninComponent } from './routing-signin.component';

describe('RoutingSigninComponent', () => {
  let component: RoutingSigninComponent;
  let fixture: ComponentFixture<RoutingSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
