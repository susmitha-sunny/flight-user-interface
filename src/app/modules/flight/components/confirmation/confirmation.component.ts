import { Component, Inject, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BookResponse } from 'src/app/models/booking/book-response.model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  bookResponse: BookResponse;

  paxCount: number;

  constructor(@Inject(BookingService) private bookingService: BookingService,
    private router: Router) { }

  ngOnInit(): void {
    this.bookResponse = this.bookingService.bookResponse;
    this.paxCount = this.bookResponse.reservation.adultCount + this.bookResponse.reservation.childCount + this.bookResponse.reservation.infantCount;
  }

  downloadPdf() {
    console.log("Downloading pdf")
    var element = document.getElementById('myDivToPrint');
    html2canvas(element).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
       
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('confirmation.pdf'); // Generated PDF
      });
  }

  goHome() {
    this.router.navigateByUrl('/home')

  }
}
