// .saveBtn addClass 'fa-solid fa-floppy-disk'
var hourListEl = $('.container');
var hourInputEL = $('<textarea>');
var hourRow = $('<div>')
var hourBtnEl = $('<button>');
var hourTitle = $('<h3>');

var today = moment();
$('#currentDay').text(today.format('MMM Do, YYYY'))
var currentHour = moment().format('HH');


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


    // Update text area background in real time if hour changes
    function checkHour() {
        if(currentHour != moment().format('HH')) {
            for (var i = 0; i < hourArray.length; i++) {
                if ($("[id=" + hourArray[i].hour + "]").attr('id') < moment().format('HH')){
                    $("[id=" + hourArray[i].hour + "]").removeClass('future').removeClass('present').addClass('past');
                    hourRow.append(hourInputEL);
                    hourRow.append(hourBtnEl);
                } 
                else if ($("[id=" + hourArray[i].hour + "]").attr('id') > moment().format('HH')){
                    $("[id=" + hourArray[i].hour + "]").removeClass('past').removeClass('present').addClass('future');
                    hourRow.append(hourInputEL);
                    hourRow.append(hourBtnEl);
                }
                else {
                    $("[id=" + hourArray[i].hour + "]").removeClass('future').removeClass('past').addClass('present');
                    hourRow.append(hourInputEL);
                    hourRow.append(hourBtnEl);
                }
            }
        }
    } setInterval(checkHour, 600000);

for (var i = 0; i <hourArray.length; i++) {
    hourRow = $('<div>');
    hourInputEL = $('<textarea>');
    hourBtnEl = $('<button>');
    hourTitle = $('<h3>');

    hourRow.addClass('row my-.5');
    hourTitle.text(hourArray[i].hour + ':00');
    hourTitle.addClass('col-2 hour text-right pt-4');
    hourInputEL.addClass('textArea col-9');
    hourInputEL.attr('id', hourArray[i].hour.toString());

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


