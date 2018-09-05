import { Component, Input} from '@angular/core';
import { Product } from '../../services/product.service';


@Component({
    selector: 'auction-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input('product') prod: Product;
}