import { Component, OnInit } from '@angular/core';

export interface Food {
  name: string;
  image: string;
}

@Component({
  selector: 'change-detection-strategy',
  templateUrl: './component.html',
  styleUrls: ['./component.scss']
})
export class ChangeDetectionStrategyComponent implements OnInit {

  foods: Food[] = [
    {
      name: 'Bacon',
      image: 'https://torange.biz/photo/53/IMAGE/bacon-meat-health-53087.jpg'
    },
    {
      name: 'Tomatoes',
      image: 'https://openphoto.net/volumes/sizes/pachd/15356/2.jpg'
    },
    {
      name: 'Lettuce',
      image: 'https://cdn.pixabay.com/photo/2017/07/03/18/14/lettuce-2468495_960_720.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addFood(name: string) {

    let food: Food = {
      name: name,
      image: ''
    }

    // If you are using OnPush Strategy in your child component than you have to pass new 
    // reference of the foods so that it can detect changes

    //this.foods = [...this.foods, food];

    // If you still want to mutate the array, and wants to get new food item than 
    // you have to use Change Detection Ref

    this.foods.push(food);
  }
  
}
