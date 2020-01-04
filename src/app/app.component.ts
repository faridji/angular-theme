import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material Theming';
  theme: string;

  constructor()
  {
    this.theme = "pink-theme";
  }

  changeTheme(theme: string)
  {
    if (theme === "pink")
    {
      this.theme = "pink-theme";
    }
    else 
    {
      this.theme = "blue-theme"
    }
  }
}
