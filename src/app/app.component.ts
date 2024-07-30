import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OrderGridsComponent } from './order-grids/order-grids.component';
import { ProductGridsComponent } from './product-grids/product-grids.component';

interface Product {
  name: string;
  quantity: number | string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductGridsComponent, OrderGridsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient) { }
  order: Product[] = [];

  updateOrder(order: Product[]) {
    this.order = order;
  }

}


