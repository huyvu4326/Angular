import { ProductService } from 'src/app/services/product.service';
import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  // product : IProduct = {
  //   name : "",
  //   price: 0,
  //   img:  ""
  // }
  // constructor (private productService: ProductService) {

  // }
  // onHandleAdd() {
  //   this.productService.addProduct(this.product).subscribe(product => {
  //     console.log(product);
  //   })
  // }

 productForm = this.FormBuilder.group({
  name: [""],
  price: [0]
 })
 constructor(
  private productService: ProductService,
  private FormBuilder: FormBuilder) {
 }
 onHandleSubmit(){
  console.log(this.productForm.value);
  
 }

}
