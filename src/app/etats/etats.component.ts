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

  public color: string = "#127bdc";
  etats;
  singleEtats : any= {
    nom: '',
    codeCouleur: ''
  }

  constructor(private router: Router, private authService: AuthenticationServiceService,
    private etatService: EtatServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.loadEtats();
  }

  saveEtat(data){
    console.log(this.singleEtats);
    data.codeCouleur = this.color;
    if(this.singleEtats.id){
      this.etatService.update(this.singleEtats.id,data).subscribe(resp=>{
        this.loadEtats();
      }, error => {
        console.log(error);
      })
    }else{
      this.etatService.save(data).subscribe(resp=>{
        this.loadEtats();
      }, error => {
        console.log(error);
      })
    }
    
  }

  loadEtats(){
    this.etatService.getAll().subscribe(data=>{
      this.etats = data;
      console.log(this.etats)
    })
  }

  updateEtat(etat){
    this.singleEtats = etat;
    this.color = etat.codeCouleur;
  }

  reset(){
    this.singleEtats = {
      nom: '',
      codeCouleur: ''
    }
  }
}
