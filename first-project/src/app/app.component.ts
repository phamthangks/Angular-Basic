import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nameBtn = 'Click Me!';

  clickMessage = '';

  bindingMessage = '';

  handleClickMe():void {
    this.clickMessage = 'Button is clicked!';
  }

  updateField():void {
    console.log('Input is changed');
  }
}
