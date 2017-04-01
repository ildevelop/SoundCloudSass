/**
 * Created by ilya on 31/03/2017.
 */
import { Injectable } from '@angular/core';
import axios from 'axios';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs';
import {Http} from "@angular/http";

@Injectable()
export class SoundCloudApiService {

  public response: any;
  public key : string = 'd652006c469530a4a7d6184b18e16c81';
  constructor(private http: Http){}

  public getTracks(query: string){
  let project = new ReplaySubject(1);
   project.subscribe(result => this.setResult(result));
   return this.http.get(
      'https://api.soundcloud.com/tracks?client_id='+this.key+'&q='+query
    );
    // return this.response;
  }

  private setResult(result: any){
    this.response=result;
  }

  public getResponse(){
    return this.response;
  }

}
