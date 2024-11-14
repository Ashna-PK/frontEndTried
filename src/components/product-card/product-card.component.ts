import { Component,Input ,OnInit, inject} from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { HttpClient } from '@angular/common/http';


// interface Product {
//   Id: number;
//   Name: string;
//   Description: string;
//   Price: string;
//   quantity: string;
//   rating: number;
//   imageUrl:string
// }
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  products: any[] = [];

  // constructor(private productService: ProductService) {}

  // ngOnInit(): void {
  //   this.productService.getProducts().subscribe(
  //     (data) => {
  //       this.products = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   );
  // }


  http = inject(HttpClient)

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(){
    this.http.get("https://localhost:7162/api/Product").subscribe((res:any)=>{
      console.log(res)
      if (res) {
        this.products=res
      }
    })
  }
}
