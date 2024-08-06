import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
