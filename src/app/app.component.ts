import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import alert from 'sweetalert2';
import { filter } from 'rxjs/operators';
 
declare var name: any;

declare const ga: any;
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codechefapp';
  router: string;
   

  constructor(private _router: Router ){
    

          this.router = _router.url; 
           
         
    }

    private initGoogleAnalyticsPageView() {
      const interval = setInterval(() => {
        if ((window as any).ga && (window as any).ga.getAll) {
          this._router.events.subscribe(event => {
            const ga = (window as any).ga
            if (event instanceof NavigationEnd) {
              const tracker = ga.getAll()[0]
              tracker.set('page', event.urlAfterRedirects)
              tracker.send('pageview')
            }
          })
          clearInterval(interval)
        }
      }, 50)
    }
    
    nologin(){
alert.fire('OOPS!','LOGIN SYSTEM WILL BE AVAILABLE SOON','info');

    }
    
    ngAfterViewInit() {
      this.initGoogleAnalyticsPageView()
    }
     
}


