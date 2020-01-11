import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  materialDefaultThemes: any[] = ["deeppurple-amber", "indigo-pink", "pink-bluegrey", "purple-green"];
  constructor() { }

  ngOnInit() {
  }

}
