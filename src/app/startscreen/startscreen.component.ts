import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  mobilemenu=true;
  constructor(private scroller: ViewportScroller, public translate: TranslateService) { 
    // Register translation languages
    translate.addLangs(['en', 'de']);
    // Set default language
    translate.setDefaultLang('en');
  }
  flag=true;
  ngOnInit(): void {
  }

  goToAboutMe(event:any){
    this.scroller.scrollToAnchor(event);
  }

  goToMobileMe(event:any){
    this.scroller.scrollToAnchor(event);
    this.toggleMobileMenu();
  }

  toggleMobileMenu(): void {
    this.mobilemenu = !this.mobilemenu;
    this.toggleMobileMenuClass();
  }

  toggleMobileMenuClass(): void {
    let mobileMenu = document.getElementById('mobileMenu');
    let lines = document.querySelectorAll('#lines, #lines1, #lines2');
    if (mobileMenu && lines) {     
      mobileMenu.classList.toggle('dnone', this.mobilemenu);
      lines.forEach((line) => line.classList.toggle('bluecolor', !this.mobilemenu));

    }
  }

  translateLanguageTo() {
    let flage = document.getElementById("flag" ) as HTMLImageElement;
    let flagemobile = document.getElementById("flagmobile") as HTMLImageElement;
    if (this.flag) {
      this.translate.use('de');
      flagemobile.src ="/assets/img/united-kingdom.png";
      flage.src ="/assets/img/united-kingdom.png";
      this.flag=false;
    }
    else{
      this.translate.use('en');
      flagemobile.src ="/assets/img/germany.png";
      flage.src ="/assets/img/germany.png";
      this.flag=true;
    }
  }

}

