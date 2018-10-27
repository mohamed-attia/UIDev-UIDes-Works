$(document).ready(function () {

    $('#calendar').fullCalendar({
        header: {
            left: '',
            center: 'title',
            right: ''
        },
        height:1000,
        selectable: true,
        selectHelper: true,
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        contentHeight: 1000,
        defaultDate: '2017-05-12',
        navLinks: true, // can click day/week names to navigate views
        eventClick: function (event, jsEvent, view) {
            $('#modalTitle').html(event.title);
            $('#modalBody').html(event.description);
            $('#eventUrl').attr('href', event.url);
            $('#calendarModal').modal();
        },
        dayClick: function (date, jsEvent, view) {
            var title = prompt('Event Title:');
            if (title) {
                calendar.fullCalendar('renderEvent',
                    {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    },
                    true // make the event "stick"
                );
                /**
                 * ajax call to store event in DB
                 */
                jQuery.post(
                    "event/new" // your url
                    , { // re-use event's data
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }
                );
            }
            calendar.fullCalendar('unselect');
        },
        dayRender: function (date, cell) {
            cell.css("background-color", "#f5f7f8");
            cell.css("padding", "200px")
        },
        events: [
            {
                title: 'Booked',
                start: '2017-05-01',
                color: '#00aeef'
            },
            {
                title: 'Booked',
                start: '2017-05-07',
                color: '#87c332',
            },
            {
                title: 'Pending',
                start: '2017-05-09T16:00:00',
                color: '#87c332',
            },
            {
                title: 'Booked',
                start: '2017-05-16T16:00:00',
                color: '#00aeef'
            },
            {
                title: 'Pending',
                start: '2017-05-11',
                color: '#87c332',
            },
            {
                title: 'Booked',
                start: '2017-05-12T10:30:00',
                color: '#87c332',
            },
            {
                title: 'Pending',
                start: '2017-05-12T12:00:00',
                color: '#00aeef'
            },
            {
                title: 'Booked',
                start: '2017-05-12T14:30:00',
                color: '#87c332',
            },
            {
                title: 'Booked',
                start: '2017-05-12T17:30:00',
                color: '#00aeef'
            }
        ]
    });
});