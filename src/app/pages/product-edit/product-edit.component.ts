import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product : IProduct = {
    name : "",
    price: 0,
    img:  ""
  }
  constructor(
    private productSevice: ProductService,
    private route: ActivatedRoute
  ){
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productSevice.getProductById(id).subscribe(product => {
        this.product = product;
      }, error => console.log(error.message))
    })
  }
  onHandleUpdate() {
    this.productSevice.updateProduct(this.product).subscribe(product => {
      console.log(product);
    })
  }
}
