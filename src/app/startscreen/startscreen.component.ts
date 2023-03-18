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
      this.mobilemenu=false; 
    }
    else{
      document.getElementById('mobileMenu')?.classList.add('dnone');
      this.mobilemenu=true; 
    }
  
  }
  
}

