import { HostListener, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/index';
declare var $: any


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  openToggleMenu(event){
    $('#toggle').toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    //we'll do some stuff here when the window is scrolled
    if ($(window).scrollTop() > 1){
      $('header').addClass("sticky");
      $('body').addClass("sticky-b");
    }
    else{
      $('header').removeClass("sticky");
      $('body').removeClass("sticky-b");
    }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
  }

}
