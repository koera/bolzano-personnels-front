import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class EtatServiceService {

  base_url: string = 'http://localhost:8080/presence-service';
  headers;

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) {
    this.headers = new HttpHeaders({'Authorization': this.authService.jwt});
  }

  getAll() {
    return this.http.get(this.base_url + '/etats', {headers: this.headers});
  }

  getOne(id){
    return this.http.get(this.base_url + '/etats/' + id, {headers:this.headers});
  }

  getUrlOneEtat(id){
    return this.base_url + '/etats/' +id;
  }

  save(etat){
    const headers = new HttpHeaders({'Authorization': this.authService.jwt, 'content-type': 'Application/json'});
    return this.http.post(this.base_url+'/etats',etat,{headers: headers});
  }

  update(etatId,etat){
    const headers = new HttpHeaders({'Authorization': this.authService.jwt, 'content-type': 'Application/json'});
    return this.http.patch(this.getUrlOneEtat(etatId),etat,{headers : headers});
  }
}
