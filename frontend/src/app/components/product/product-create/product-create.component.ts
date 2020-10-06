import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProdut(): void {
    this.ProductService.showMessage('Products successfully registered!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
