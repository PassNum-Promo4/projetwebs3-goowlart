import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './users/profil/profil.component';
import { NonExistetComponent } from './users/non-existet/non-existet.component';
import { UsersService } from "./users/users.service";
import { FeedComponent } from './feed/feed.component';
import { TweetComponent } from './tweet/tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    ProfilComponent,
    NonExistetComponent,
    FeedComponent,
    TweetComponent
  ],
  imports: [
    HttpModule,
    routing,
    BrowserModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
