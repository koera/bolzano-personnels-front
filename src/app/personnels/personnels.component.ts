import {Component, OnInit} from '@angular/core';
import {PersonnelsServiceService} from '../personnels-service.service';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../authentication-service.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  personnels;
  pageActif: number = 0;

  constructor(private service: PersonnelsServiceService, private router: Router, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.loadPersonnels(0, 5);
  }

  updatePersonnels(personnels) {
    this.router.navigateByUrl('/personnels/edit/' + personnels.id);
  }

  loadPersonnels(page: number, size: number) {
    this.service.getList(page, size).subscribe(data => {
      this.personnels = data;
      console.log(this.personnels);
      this.pageActif = page;
    }, error => {
      console.log(error);
    });
  }

  counter(i: number) {
    return new Array(i);
  }

}
