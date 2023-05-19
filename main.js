import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.getElementById('calendar');
  let calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ],
    initialView: 'dayGridMonth',
    aspectRatio: 2,
    locale: 'fr',
    firstDay: 1,
    events: [
      {
        id: 'a',
        title: 'my event',
        start: '2023-05-01'
      }
    ], 
  });
  calendar.render();
});

