import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../authentication-service.service';
import { EtatServiceService } from '../etat-service.service';

@Component({
  selector: 'app-etats',
  templateUrl: './etats.component.html',
  styleUrls: ['./etats.component.css']
})
export class EtatsComponent implements OnInit {


  private color: string = "#127bdc";

  constructor(private router: Router, private authService: AuthenticationServiceService,
    private etatService: EtatServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
  }

  saveEtat(data){
    console.log(data);
    data.codeCouleur = this.color;
    this.etatService.save(data).subscribe(resp=>{
      console.log(resp);
    }, error => {
      console.log(error);
    })
  }
}
