import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/models/models';


@Component({
  selector: 'child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildAppComponent implements OnInit {

  @Input() data: Observable<any>;
  foods: Food[] = [];
  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit() 
  {
    this.data.subscribe( foods => {

      for (let food of foods)
      {
        this.foods.push(food);
        this._cdr.markForCheck();
      }
    })
  }

  onRefresh()
  {
    this._cdr.detectChanges();
  }
}
