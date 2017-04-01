import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/startWith';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {


  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }
  ngOnInit() {
  }

  stateCtrl: FormControl;
  filteredStates: any;

  states = [
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Florida',

  ];


  filterStates(val: string) {
    return val ? this.states.filter((s) => new RegExp(val, 'gi').test(s)) : this.states;
  }
}
