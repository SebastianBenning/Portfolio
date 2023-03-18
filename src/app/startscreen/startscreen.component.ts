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

  openMobileMenu(){
    if(this.mobilemenu){
      document.getElementById('mobileMenu')?.classList.remove('dnone');
      document.getElementById('lines')?.classList.add('bluecolor');
      document.getElementById('lines1')?.classList.add('bluecolor');
      document.getElementById('lines2')?.classList.add('bluecolor');
      this.mobilemenu=false; 
    }
    else{
      document.getElementById('mobileMenu')?.classList.add('dnone');
      document.getElementById('lines')?.classList.remove('bluecolor');
      document.getElementById('lines1')?.classList.remove('bluecolor');
      document.getElementById('lines2')?.classList.remove('bluecolor');
      this.mobilemenu=true; 
    }
  
  }
  
}

