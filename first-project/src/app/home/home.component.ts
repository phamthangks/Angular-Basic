import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItems } from '../shared/types/productItem';
import { ProductItemComponent } from '../shared/product-item/productItem.component';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../services/BlogService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, DoCheck, OnDestroy {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  isVisible = true;

  getBlogApi: Subscription;

  products: ProductItems[] = [
    {
      id: 1,
      name: 'samba og',
      price: 400000,
      image: 'assets/images/shoe1.png',
    },
    { id: 2, name: 'nike f1', price: 500000, image: 'assets/images/shoe1.png' },
    {
      id: 3,
      name: 'addidas f2',
      price: 600000,
      image: 'assets/images/shoe1.png',
    },
    { id: 4, name: 'mlb f3', price: 700000, image: 'assets/images/shoe1.png' },
  ];

  ngOnInit(): void {
    console.log('Initalize Component 1');
    this.getBlogApi = this.blogService.getBlogs().subscribe(({ data, message }) => {
      this.products = data.map((item: any) => {
        return {
          ...item,
          name: item.title,
          price: Number(item.body),
          image: 'assets/images/shoe1.png',
        };
      });
    });
  }

  constructor(private blogService: BlogService) {
    console.log('Initalize Component 2');
    this.getBlogApi = new Subscription();
  }

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      console.log('getBlogApi unsubscribed');
    }
  }

  ngDoCheck(): void {
    console.log('Check Component');
  }

  handleClickMe(): void {
    this.clickMessage = 'Button is clicked!';
  }

  updateField(): void {
    console.log('Input is changed');
  }

  handleDelete = (id: number) => {
    // const productIndex = this.products.findIndex(item => item.id === id);
    // if(productIndex !== -1) {
    //   this.products.splice(productIndex, 1);
    // }
    this.products = this.products.filter((item) => item.id !== id);
  };

  handleChangeVisible = () => {
    this.isVisible = !this.isVisible;
  };
}
