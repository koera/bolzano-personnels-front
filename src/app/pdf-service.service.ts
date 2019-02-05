import { Injectable } from '@angular/core';

import * as JSPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  constructor() { }

  downloadPDF(content, pdfName) {
    html2canvas(content).then(canvas => {
      // Few necessary setting options
      console.log('canvas.height', canvas.height);
      console.log('canvas.width', canvas.width);
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new JSPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(pdfName); // Generated PDF
    });
  }
}
