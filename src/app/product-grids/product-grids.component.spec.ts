import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridsComponent } from './product-grids.component';

describe('ProductGridsComponent', () => {
  let component: ProductGridsComponent;
  let fixture: ComponentFixture<ProductGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
