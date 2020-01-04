import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material Theming';
  selectedTheme: string = "pink-theme";
  themes: any[] = ["pink-theme", "candi-theme", "blue-theme"];
  materialDefaultThemes: any[] = ['Pink', 'indigo'];

  constructor(private overlayContainer: OverlayContainer)
  {
    this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
  }

  changeTheme(theme: string)
  {
    this.selectedTheme = theme;

    // Certain components such as menu, select, dialog etc are are inside of a global 
    // overlay container, an additional step is required for those components to be 
    // affected by the theme's css class selector
    this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
  }
}
