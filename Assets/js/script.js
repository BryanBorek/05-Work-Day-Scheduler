// .saveBtn addClass 'fa-solid fa-floppy-disk'
var hourListEl = $('.container');
var hourInputEL = $('<textarea>');
var hourRow = $('<div>')
var hourBtnEl = $('<button>');
var hourTitle = $('<h3>');
var savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));

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

    //check for saved todo items
    if ((localStorage.getItem('saveTodos')) != null){
        hourArray = savedTodos;
    }

    // check every 10 minutes to update text area background in real time if hour changes
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

    //Build the schedule in HTML and set initial past, present, future text area background color
for (var i = 0; i <hourArray.length; i++) {
    hourRow = $('<div>');
    hourInputEL = $('<textarea>');
    hourBtnEl = $('<button>');
    hourTitle = $('<h3>');

    hourRow.addClass('row justify-content-center my-.5');
    hourTitle.text(hourArray[i].hour + ':00');
    hourTitle.addClass('col-2 hour text-right pt-4');
    hourInputEL.addClass('textarea col-8');
    hourInputEL.attr('id', hourArray[i].hour.toString());
    hourInputEL.text(hourArray[i].todo);

    //add initial colors on load
    if (hourArray[i].hour.toString() > currentHour) {
        hourInputEL.addClass('future');
    } else if (hourArray[i].hour.toString() < currentHour){
        hourInputEL.addClass('past');
    } else {
        hourInputEL.addClass('present');
    }

    hourBtnEl.addClass('h-100 col-1 saveBtn');
    hourBtnEl.attr('id', 'btn' + hourArray[i].hour);
    hourBtnEl.append('<i class="fas fa-save"></i>');
    hourRow.append(hourTitle);
    hourRow.append(hourInputEL);
    hourRow.append(hourBtnEl);
    hourListEl.append(hourRow);

    // Testing new way to make btns work without setting each manually. IT WORKED! Eliminated the neeed for over 100 lines of code
    var btnHit = 0;

    $("[id=btn" + hourArray[i].hour + "]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        btnHit = this.id.replace('b','').replace('t','').replace('n','');
        hourArray[btnHit - 8].todo = $("[id=" + btnHit + "]").val();
        $("[id=" + btnHit + "]").val(hourArray[btnHit - 8].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });
}