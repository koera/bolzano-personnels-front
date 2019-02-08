import {Component, OnInit} from '@angular/core';
import {PersonnelsServiceService} from '../personnels-service.service';
import {AuthenticationServiceService} from '../authentication-service.service';

@Component({
  selector: 'app-personnels-form-add',
  templateUrl: './personnels-form-add.component.html',
  styleUrls: ['./personnels-form-add.component.css']
})
export class PersonnelsFormAddComponent implements OnInit {
  success: boolean = false;
  error: boolean = false;

  constructor(private service: PersonnelsServiceService, private authService: AuthenticationServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
  }

  savePersonnel(data) {
    this.service.add(data)
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

  scroll(id) {
    console.log(`scrolling to ${id}`);
    const el = document.getElementById(id);
    el.scrollIntoView();
  }

  onFileLoad(fileLoadedEvent) {
    const csvSeparator = ';';
    const txt = fileLoadedEvent.target.result;
    const csv = [];
    const lines = txt.split('\n');
    for (let i = 0; i < (lines.length - 1); i++) {
      const cols: string[] = lines[i].split(csvSeparator);
      csv.push(cols);
    }
    localStorage.setItem('listFromCsv', JSON.stringify(csv));
  }

  addElementFromcsv() {
    if (!localStorage.getItem('listFromCsv')) {
      alert('Veuillez telecharger un fichier csv');
      return false;
    }
    if (confirm('Ajoutez ces listes des personnels ?')) {
      const listFromCSV = localStorage.getItem('listFromCsv');
      const jsonList = JSON.parse(listFromCSV);
      for (const key in jsonList) {
        const personnels = {};
        personnels['nom'] = jsonList[key][0];
        personnels['prenom'] = jsonList[key][1];
        personnels['cin'] = jsonList[key][3];
        personnels['dateEmbauche'] = Date.parse(jsonList[key][4]);
        personnels['dateNaissance'] = Date.parse(jsonList[key][2]);
        personnels['dateDebauche'] = Date.parse(jsonList[key][10]);
        personnels['adresse1'] = jsonList[key][11];
        personnels['adresse2'] = jsonList[key][12];
        personnels['ville'] = jsonList[key][13];
        personnels['numeroPasseport'] = jsonList[key][9];
        personnels['cnaps'] = jsonList[key][5];
        personnels['ostie'] = jsonList[key][6];
        personnels['matricule'] = jsonList[key][7];
        personnels['posteActuel'] = jsonList[key][8];
        const list = JSON.stringify(personnels);

        this.service.add(list).subscribe(data => {
          console.log(data);
        }, err => {
          console.log(err);
        });
      }
      this.success = true;
      localStorage.removeItem('listFromCsv');
    }
  }


  onFileSelect(input: HTMLInputElement) {
    const files = input.files;
    if (files && files.length) {
      console.log('Filename: ' + files[0].name);
      console.log('Type: ' + files[0].type);
      // if (files[0].type !== 'application/vnd.ms-excel') {
      //   alert('Veuillez telecharger un fichier excel valide');
      //   return false;
      // }
      console.log('Size: ' + files[0].size + ' bytes');
      const fileToRead = files[0];
      const fileReader = new FileReader();
      fileReader.onload = this.onFileLoad;
      fileReader.readAsText(fileToRead, 'UTF-8');
    }
  }

}
