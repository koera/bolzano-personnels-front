import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  host: string = 'http://localhost:8082';
  jwt: string;
  username: string;
  roles: Array<string>;

  constructor(private http: HttpClient, private router: Router) {
  }

  login(data) {
    return this.http.post(this.host + '/login', data, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJwt();
  }

  parseJwt() {
    const jwtHelper = new JwtHelperService();
    // if token is not expired
    if (jwtHelper.getTokenExpirationDate(this.jwt) > new Date()) {
      const objJwt = jwtHelper.decodeToken(this.jwt);
      this.username = objJwt.sub;
      this.roles = objJwt.roles;
    } else {
      this.logout();
    }
  }

  isAuthenticated() {
    return !this.roles !== undefined;
  }

  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }

  loadToken() {
    if (localStorage.getItem('token') != null) {
      this.jwt = localStorage.getItem('token');
      this.parseJwt();
    } else {
      this.logout();
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.initParams();
    this.router.navigateByUrl('/login');
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

}
