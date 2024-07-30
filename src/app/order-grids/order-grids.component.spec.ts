import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGridsComponent } from './order-grids.component';

describe('OrderGridsComponent', () => {
  let component: OrderGridsComponent;
  let fixture: ComponentFixture<OrderGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderGridsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
