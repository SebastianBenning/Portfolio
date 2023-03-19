import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {
  mobilemenu=true;
  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  goToAboutMe(event:any){
    this.scroller.scrollToAnchor(event);
  }

  goToMobileMe(event:any){
    this.scroller.scrollToAnchor(event);
    document.getElementById('mobileMenu')?.classList.add('dnone');
      this.mobilemenu=true;
  }

  toggleMobileMenu(): void {
    this.mobilemenu = !this.mobilemenu;
    this.toggleMobileMenuClass(!this.mobilemenu);
  }

  toggleMobileMenuClass(open: boolean): void {
    let mobileMenu = document.getElementById('mobileMenu');
    let lines = document.querySelectorAll('#lines, #lines1, #lines2');
    if (mobileMenu && lines) {
      mobileMenu.classList.toggle('dnone', open);
      lines.forEach((line) => line.classList.toggle('bluecolor', !open));
    }
  }
  
}

