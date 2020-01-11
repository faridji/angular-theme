import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'child-app',
  templateUrl: './child-app.component.html',
  styleUrls: ['./child-app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildAppComponent implements OnInit {

  @Input() data: string[];
  
  constructor(private _cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  onRefresh()
  {
    this._cdr.detectChanges();
  }
}
