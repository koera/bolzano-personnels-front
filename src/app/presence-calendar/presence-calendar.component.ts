import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { EtatServiceService } from '../etat-service.service';
import {PresenceServiceService} from '../presence-service.service';
import { PersonnelsServiceService } from '../personnels-service.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

declare let $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './presence-calendar.component.html',
  styleUrls: ['./presence-calendar.component.css']
})
export class PresenceCalendarComponent implements OnInit {

  calendarOptions: Options;
  etats:any;
  personnels;
  events=new Array();
  selectedPersonnelId;
  navigationSubscription;

  constructor(private etatService: EtatServiceService, private presenceService: PresenceServiceService,
    private personnelsService: PersonnelsServiceService, private route: ActivatedRoute, private router: Router) { 
      this.navigationSubscription = router.events.subscribe(event=>{
        if(event instanceof NavigationEnd){
          this.selectedPersonnelId = this.route.snapshot.params.id;
          $('#calendar').fullCalendar('removeEvents');
          $('#calendar').fullCalendar('removeEventSources');
          $('#calendar').fullCalendar('addEventSource', PresenceServiceService.getUrlEvent(this.selectedPersonnelId) );
          // $('#calendar').fullCalendar('renderEvents');
          // $("#calendar").fullCalendar('refetchEventSources') 
        }
      });
  }

  ngOnInit() {
    this.loadEtats();
    this.getAllPersonnel();
  }
  // ngAfterViewInit
  ngAfterViewInit(){
    $('#external-events .fc-event').each(function() {
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true,// maintain when user navigates (see docs on the renderEvent method)
        backgroundColor: $(this).attr('data-bg')
      });
      
      //make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });
    });

    $('#calendar').fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true,
      events: PresenceServiceService.getUrlEvent(this.selectedPersonnelId),
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(date,e) {
        let mydata = [];
        mydata['personnelId'] = e.target.attributes[2].value;
        mydata['date'] = date.toDate();
        mydata['etat_id'] = e.target.attributes[3].value;
        PresenceServiceService.save(mydata).subscribe(resp=>{
          console.log("operation success");
        },error=>{
          console.log(error);
        })
      }
    });
  }

  loadEvents(idPersonnel){
    this.events = [];
    PresenceServiceService.getAllForEvents(idPersonnel).subscribe(resp=>{
      this.events = resp;
      console.log(resp);
    });
  }


  loadEtats(){
    this.etatService.getAll().subscribe(data=>{
      this.etats = data;
    },error=>{
      console.log(error);
    })
  }


  getAllPersonnel(){
    this.personnelsService.getListNotPageable().subscribe(res =>{
      this.personnels = res;
    },err => {
      console.log(err);
    })
  }

}
