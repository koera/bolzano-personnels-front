import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationServiceService} from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsServiceService {

  base_url: string = 'http://localhost:8080/personnels-service';
  headers;

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) {
    this.headers = new HttpHeaders({'Authorization': this.authService.jwt});
  }

  getOne(id) {
    return this.http.get(this.base_url + '/personnels/' + id, {headers: this.headers});
  }

  getList(page: number, size: number) {
    return this.http.get(this.base_url + '/personnels/actif?page=' + page + '&size=' + size,
      {headers: this.headers}
    );
  }

  getDeleted(page: number, size: number) {
    return this.http.get(this.base_url + '/personnels/deleted?page=' + page + '&size=' + size,
      {headers: this.headers}
    );
  }

  add(data) {
    const head = new HttpHeaders({'Authorization': this.authService.jwt, 'content-type': 'Application/json'});
    return this.http.post(this.base_url + '/personnels', data, {headers: head, observe: 'response'});
  }

  edit(id, data) {
    return this.http.patch(this.base_url + '/personnels/' + id, data, {headers: this.headers, observe: 'response'});
  }

}
