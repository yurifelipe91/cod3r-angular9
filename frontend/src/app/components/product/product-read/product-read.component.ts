import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'actions']
  emptyTableMsg: string

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(p => {
      this.products = p
    })

    if (this.products && this.products.length < 1) {
      this.emptyTableMsg = "Ta fora irmão"
    }

    if (!this.products) {
      this.emptyTableMsg = "Ta fora iraaaamão"
    }
  }

}
