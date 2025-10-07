import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //Text
  title = {
    name: 'first-project',
    old: 2024,
  };

  //Properties
  isDisabled = false;

  //Atributes
  contentImage = 'Hi Thang'
}
