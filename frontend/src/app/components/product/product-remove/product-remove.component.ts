import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-remove',
  templateUrl: './product-remove.component.html',
  styleUrls: ['./product-remove.component.scss']
})
export class ProductRemoveComponent implements OnInit {
  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.productService.readById(id).subscribe(p => {
      this.product = p
    })
  }

  removeProduct() {
    this.productService.remove(this.product.id).subscribe(() => {
      this.productService.showMessage('Product successfully deleted!')
      this.router.navigate(['/products'])
    })
  }

  cancel() {
    this.router.navigate(['/products'])
  }
}
