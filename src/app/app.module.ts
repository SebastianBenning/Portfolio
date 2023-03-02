import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    AboutmeComponent,
    SkillsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
