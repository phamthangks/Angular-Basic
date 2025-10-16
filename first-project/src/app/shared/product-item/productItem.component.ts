import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
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
export class ProductItemComponent implements OnChanges, OnDestroy{
    @Input() products : ProductItems[] = [];

    @Output() dataEvent = new EventEmitter<number>();

    get totalPrice(): string {
      const sum = this.products.reduce((total, item) => {
        return total + item.price;
      }, 0);

      return `Total Price ${sum}`
    }

    ngOnChanges(changes: SimpleChanges): void {
      console.log(changes['products'].currentValue);
      console.log(changes['products'].previousValue);
    }

    ngOnDestroy(): void {
      console.log('Component is removed from the DOM');
    }

    handleDelete = (id: number) => {
      //console.log('Delete item with id: ', id);
      this.dataEvent.emit(id);
    }
}