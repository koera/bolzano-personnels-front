import { Component, OnInit } from '@angular/core';
import { PersonnelsServiceService } from '../personnels-service.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

declare let $: any;

@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  personnels;

  constructor(private personnelsService: PersonnelsServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getAllPersonnel();
  }

  getAllPersonnel(){
    this.personnelsService.getListNotPageable().subscribe(res =>{
      this.personnels = res;
    console.log(this.personnels)
    },err => {
      console.log(err);
    })
  }

  navigateToCalendar(){
    this.router.navigateByUrl('/presence/calendar/' + this.personnels[0].id);
  }

}
