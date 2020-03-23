// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'FrontEnd';
// }

import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,interval, timer } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    
  }

  ngOnInit() {
  }

  isMenuOpen=true;
  contentMargin = 240;

  

  onToolbarMenuToggle(){
    console.log('On toolbar toggled',this.isMenuOpen);
    this.isMenuOpen=!this.isMenuOpen;
    if(!this.isMenuOpen) {
      this.contentMargin = 5;
    } else {
      this.contentMargin = 240;
    }
  }

 

}
