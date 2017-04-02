import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/startWith';
import {SoundCloudApiService} from "../soundCloud.api.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Response} from "@angular/http";
import {isUndefined} from "util";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

public query :string ;
  stateCtrl: FormControl;
  filteredStates: any;
  public tracks: any [];
  public img_url:string = "../../assets/img/soundcloud.jpg";
  public sound:string;

  public queriesData : string [] ;
  constructor(public soundCloudApi: SoundCloudApiService) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterStates(name));
  }
  ngOnInit() {
    this.tracks = [];
      this.queriesData = [];
    let queries = JSON.parse(localStorage.getItem('queries'));
    if (queries != null && queries.length>1){
      for (let query of queries) {
        if (query !== null)
        this.queriesData.push(query);
      }
      this.queriesData = this.queriesData.reverse();
  }
  }


  searchQuery(query: string){
    let queries = JSON.parse(localStorage.getItem('queries'));
    this.queriesData.push(query);
    this.queriesData = this.queriesData.reverse();
    if (queries != null && queries.length>1 ){
    queries.push(query);
    }else {
      queries = this.queriesData;
    }
    let newQueries = queries;
    localStorage.setItem('queries', JSON.stringify(newQueries));
    this.soundCloudApi.getTracks(this.query).subscribe(res => {
      this.setMemorySearch(res)
    });
  }
  filterStates(val: string) {
    return val ? this.queriesData.filter((s) => new RegExp(val, 'gi').test(s)) : this.queriesData;
  }

  private setMemorySearch(res: Response) {
    this.tracks = [];
   let tracks = res.json();
    for (let track of tracks) {
      this.tracks.push(track);
    }
  }
  public applyTrack(img: string, sound:string){
    this.img_url=img;
    this.sound=sound+'?client_id=d652006c469530a4a7d6184b18e16c81';
  }
}
