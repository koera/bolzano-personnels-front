import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
declare let $: any;
@Component({
  selector: 'app-presence',
  templateUrl: './presence.component.html',
  styleUrls: ['./presence.component.css']
})
export class PresenceComponent implements OnInit {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor() { }

  ngOnInit() {

    $('#external-events .fc-event').each(function() {

      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });
  
    });

    const data =[
      {
        title  : 'event1',
        start  : '2019-01-01'
      },
      {
        title  : 'event2',
        start  : '2019-01-05',
        end    : '2019-01-07'
      },
      {
        title  : 'event3',
        start  : '2019-01-09T12:30:00',
        allDay : false // will make the time show
      }
    ]

    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      droppable: true,
      eventDrop: function(e){
        console.log(e);
      },
      drop: function(e){
        console.log(e);
      },
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
      events: data
    };
  }

}
