import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Material Theming';
  theme: string;
  available_themes: any[] = ['Pink', 'indigo'];

  constructor(private overlayContainer: OverlayContainer)
  {
    this.theme = "pink-theme";
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  changeTheme(theme: string)
  {
    if (theme === "pink")
    {
      this.theme = "pink-theme";
    }
    else if (theme === "candi")
    {
      this.theme = "candi-theme";
    }
    else 
    {
      this.theme = "blue-theme"
    }

    // Certain components such as menu, select, dialog etc are are inside of a global 
    // overlay container, an additional step is required for those components to be 
    // affected by the theme's css class selector
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }


}
