import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartscreenComponent } from './startscreen/startscreen.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { JoinComponent } from './join/join.component';
import { SharkieComponent } from './sharkie/sharkie.component';

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    AboutmeComponent,
    SkillsetComponent,
    MyworkComponent,
    JoinComponent,
    SharkieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
