import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrentcyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, CurrencyPipe, UpperCasePipe],
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
