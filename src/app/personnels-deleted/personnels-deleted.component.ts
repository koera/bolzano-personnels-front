import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PersonnelsServiceService} from '../personnels-service.service';
import {Router} from '@angular/router';
import {AuthenticationServiceService} from '../authentication-service.service';
import * as JSPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {PdfServiceService} from '../pdf-service.service';

@Component({
  selector: 'app-personnels-deleted',
  templateUrl: './personnels-deleted.component.html',
  styleUrls: ['./personnels-deleted.component.css']
})
export class PersonnelsDeletedComponent implements OnInit {
  personnels;
  pageActif: number = 0;

  @ViewChild('content') content: ElementRef;

  constructor(private service: PersonnelsServiceService, private router: Router, private authService: AuthenticationServiceService,
              private pdfService: PdfServiceService) {
  }

  ngOnInit() {
    this.authService.loadToken();
    this.loadPersonnels(0, 5);
  }

  downloadPdf() {
    const content = this.content.nativeElement;
    this.pdfService.downloadPDF(content, 'personnels-deleted.pdf');
  }

  loadPersonnels(page: number, size: number) {
    this.service.getDeleted(page, size).subscribe(data => {
      this.personnels = data;
      this.pageActif = page;
    }, error => {
      console.log(error);
    });
  }

  counter(i: number) {
    return new Array(i);
  }
}
