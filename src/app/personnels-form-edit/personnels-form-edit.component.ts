import {Component, OnInit} from '@angular/core';
import {PersonnelsServiceService} from '../personnels-service.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationServiceService} from '../authentication-service.service';

@Component({
  selector: 'app-personnels-form-add',
  templateUrl: './personnels-form-edit.component.html',
  styleUrls: ['./personnels-form-edit.component.css']
})
export class PersonnelsFormEditComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;

  personnels;

  constructor(private service: PersonnelsServiceService, private route: ActivatedRoute, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.service.getOne(this.route.snapshot.params.id).subscribe(data => {
      this.personnels = data;
    }, err => {
      console.log(err);
    });
  }

  editPersonnel(data) {
    this.service.edit(this.route.snapshot.params.id, data)
      .subscribe(resp => {
        if (resp.status >= 200 && resp.status < 300) {
          this.success = true;
        } else {
          this.error = true;
        }
      }, error => {
        console.log(error);
      });
  }
}
