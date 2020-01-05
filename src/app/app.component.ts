import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = "Angular Material Theming";
  selectedTheme: string = "pink-theme";
  themes: any[] = ["pink-theme", "candi-theme", "blue-theme"];
  materialDefaultThemes: any[] = ["deeppurple-amber", "indigo-pink", "pink-bluegrey", "purple-green"];

  constructor(private overlayContainer: OverlayContainer)
  {
  }

  ngOnInit() 
  {
    document.body.classList.add(this.selectedTheme);  
    this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
  }

  changeTheme(theme: string)
  {
    this.selectedTheme = theme;

    // Certain components such as menu, select, dialog etc are are inside of a global 
    // overlay container, an additional step is required for those components to be 
    // affected by the theme's css class selector
    
    for (let theme of this.themes)
    {
      if (this.overlayContainer.getContainerElement().classList.contains(theme))
      {
        document.body.classList.remove(theme);
        this.overlayContainer.getContainerElement().classList.remove(theme);
      }
    }

    document.body.classList.add(this.selectedTheme);
    this.overlayContainer.getContainerElement().classList.add(this.selectedTheme);
  }
}
