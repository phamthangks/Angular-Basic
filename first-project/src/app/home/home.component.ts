import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';


@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterOutlet, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  products : ProductItems[] = [
    {id: 1, name: 'samba og', price: 400000, image: 'assets/images/shoe1.png'},
    {id: 2, name: 'nike f1', price: 500000, image: 'assets/images/shoe1.png'},
    {id: 3, name: 'addidas f2', price: 600000, image: 'assets/images/shoe1.png'},
    {id: 4, name: 'mlb f3', price: 700000, image: 'assets/images/shoe1.png'},
  ];

   ngOnInit(): void {
    console.log('Initalize Component 1');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  constructor() {
    console.log('Initalize Component 2');
  }

 

  handleClickMe():void {
    this.clickMessage = 'Button is clicked!';
  }

  updateField():void {
    console.log('Input is changed');
  }

  handleDelete = (id: number) => {
    const productIndex = this.products.findIndex(item => item.id === id);
    if(productIndex !== -1) {
      this.products.splice(productIndex, 1);
    }
  }
}
