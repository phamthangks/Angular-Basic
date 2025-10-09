import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '../shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../shared/pipes/CurrentcyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';
import { NgFor } from '@angular/common';

@Component({
  selector: 'home-root',
  imports: [RouterOutlet, FormsModule, CurrencyPipe, UpperCasePipe, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  products = [
    {name: 'samba og', price: 400000, image: 'assets/images/shoe1.png'},
    {name: 'nike f1', price: 500000, image: 'assets/images/shoe1.png'},
    {name: 'addidas f2', price: 600000, image: 'assets/images/shoe1.png'},
    {name: 'mlb f3', price: 700000, image: 'assets/images/shoe1.png'},
  ];


  handleClickMe():void {
    this.clickMessage = 'Button is clicked!';
  }

  updateField():void {
    console.log('Input is changed');
  }
}
