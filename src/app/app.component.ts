import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  flag=true;
  constructor(public translate: TranslateService){
    
    // Register translation languages
    translate.addLangs(['en', 'de']);
    // Set default language
    translate.setDefaultLang('en');
  }
  translateLanguageTo() {
    if (this.flag) {
      this.translate.use('de');
      let flage = document.getElementById("flag") as HTMLImageElement;
      flage.src ="/assets/img/united-kingdom.png";
      this.flag=false;
    }
    else{
      this.translate.use('en');
      let flage = document.getElementById("flag") as HTMLImageElement;
      flage.src ="/assets/img/germany.png";
      this.flag=true;
    }
  }
}
