// .saveBtn addClass 'fa-solid fa-floppy-disk'
var hourListEl = $('.container');
var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'))
var currentHour = moment().format('HH');
//var currentHour = '12';

var hourArray = [{
        hour: '08',
        todo: '',
    },{
        hour: '09',
        todo: '',
    },{
        hour: '10',
        todo: '',
    },{
        hour: '11',
        todo: '',
    },{
        hour: '12',
        todo: '',
    },{
        hour: '13',
        todo: '',
    },{
        hour: '14',
        todo: '',
    },{
        hour: '15',
        todo: '',
    },{
        hour: '16',
        todo: '',
    },{
        hour: '17',
        todo: '',
    }];

function checkHour() {
         currentHour = moment().format('HH');//
         console.log(currentHour);
}
setInterval(checkHour, 1000);

for (var i = 0; i <hourArray.length; i++) {
    var hourRow = $('<div>')
    var hourInputEL = $('<textarea>');
    var hourBtnEl = $('<button>');
    var hourTitle = $('<h3>');

    hourRow.addClass('row my-.5');
    hourTitle.text(hourArray[i].hour + ':00');
    hourTitle.addClass('col-2 hour text-right pt-4');
    hourInputEL.addClass('col-9');
    hourInputEL.addClass(hourArray[i].hour.toString());

    if (hourArray[i].hour.toString() > currentHour) {
        hourInputEL.addClass('future');
    } else if (hourArray[i].hour.toString() < currentHour){
        hourInputEL.addClass('past');
    } else {
        hourInputEL.addClass('present');
    }

    hourBtnEl.addClass('h-100 col-1 saveBtn');
    hourBtnEl.append('<i class="fas fa-save"></i>');

    hourRow.append(hourTitle);
    hourRow.append(hourInputEL);
    hourRow.append(hourBtnEl);
    hourListEl.append(hourRow);
}