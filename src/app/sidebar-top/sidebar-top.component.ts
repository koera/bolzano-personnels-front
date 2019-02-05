import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';

@Component({
  selector: 'app-sidebar-top',
  templateUrl: './sidebar-top.component.html',
  styleUrls: ['./sidebar-top.component.css']
})
export class SidebarTopComponent implements OnInit {

  constructor(private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

}
