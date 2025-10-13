import { Component, Input, input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterOutlet } from "@angular/router";
import { CurrencyPipe } from "../pipes/CurrentcyPipe.pipe";
import { UpperCasePipe } from "../pipes/UpperCasePipe.pipe";
import { NgFor } from "@angular/common";
import { ProductItems } from "../types/productItem";

@Component({
  selector: 'app-product-item',
  standalone:true,
  imports: [RouterOutlet, FormsModule, CurrencyPipe, UpperCasePipe, NgFor, RouterLink],
  templateUrl: './productItem.component.html',
  styleUrl: './productItem.component.css'
})
export class ProductItemComponent {
    @Input() products : ProductItems[] = [];
}