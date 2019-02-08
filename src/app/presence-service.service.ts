import { Injectable } from '@angular/core';

import { AuthenticationServiceService } from './authentication-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EtatServiceService } from './etat-service.service';

@Injectable({
  providedIn: 'root'
})
export class PresenceServiceService {

  static base_url: string = 'http://localhost:8080/presence-service';

  static headers;
  static http;
  static authService;
  static etatService;

  constructor(private http: HttpClient, private authService: AuthenticationServiceService,
    private etatService: EtatServiceService) {
      PresenceServiceService.headers = new HttpHeaders({'Authorization': this.authService.jwt});
    PresenceServiceService.http = http;
    PresenceServiceService.authService = authService;
    PresenceServiceService.etatService = etatService;
  }

  static save(data){
    let newData = {};
    newData['personnelId'] = data['personnelId'];
    newData['date'] = data['date'];
    newData['etat'] = this.etatService.getUrlOneEtat(data['etat_id']);
    let myJSON = JSON.stringify(newData);
    const head = new HttpHeaders({'Authorization': this.authService.jwt, 'content-type': 'Application/json'});
    return this.http.post(this.base_url+'/presences',myJSON,{headers: head, observe: 'response'});
  }

  static getAllForEvents(idPersonnel){
    return this.http.get(this.base_url + '/events/'+idPersonnel);
  }

  static getUrlEvent(idPersonnel){
    return this.base_url + '/events/'+idPersonnel;
  }

}
