import { Component, OnInit } from '@angular/core';
import { UtilsService } from './utils/utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unit-tests-sample';
  constructor(private utilService: UtilsService ) {}

  loaded = false;
  ngOnInit() {
    this.loadStartShips();
  }

  loadStartShips() {
    this.utilService.getStartShips().subscribe(() => {
      this.otherFunction();
      this.loaded = true;
    });
  }

  otherFunction() {
    console.log('other Function');
  }

}
