import {Component, OnInit} from '@angular/core';
import {AuthenticationServiceService} from '../authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;

  constructor(private service: AuthenticationServiceService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin(data) {
    this.service.login(data).subscribe(resp => {
      const jwt = resp.headers.get('Authorization');
      this.service.saveToken(jwt);
      this.router.navigateByUrl('/home');
    }, err => {
      this.error = true;
      console.log(err);
    });
  }

}
