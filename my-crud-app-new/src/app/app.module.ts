import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './post/post.module';
import { HttpClientModule } from "@angular/common/http";
import { MacDefinationModule } from './mac-defination/mac-defination.module';
import { NetworkModule } from './network/network.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PostModule,
    MacDefinationModule,
    NetworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
