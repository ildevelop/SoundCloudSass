import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {AlertModule} from "ng2-bootstrap";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { SearchComponent } from './search/search.component';
import {SoundCloudApiService} from "./soundCloud.api.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
  ],
  providers: [SoundCloudApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

