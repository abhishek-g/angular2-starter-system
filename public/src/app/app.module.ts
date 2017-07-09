import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {FavouriteComponent} from "./components/favourite.component";
import {LikesComponent} from "./components/likes.component";
import {VoterComponent} from "./components/voter.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, FavouriteComponent, LikesComponent ,VoterComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
