import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPostComponent } from './list-post/list-post.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";

const routes = [
    {path: '', component:ListPostComponent},
    {path: 'user', component:UserComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    UserComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
