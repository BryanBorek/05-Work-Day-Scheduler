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

    //Build the schedule in HTML and set initial past, present, future text area background color
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
    hourInputEL.text(hourArray[i].todo);

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
    
    // Testing new way to make btns work without setting each manually
    // $("[id=btn" + hourArray[i].hour + "]").on('click', function(event){
    //     event.stopPropagation();
    //     event.stopImmediatePropagation();
    //     console.log('works');
    // });

    $("[id=btn08]").on('click', function(event){ 
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[0].todo = $("[id=08]").val();
        $("[id=08]").val(hourArray[0].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });
    
    $("[id=btn09]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[1].todo = $("[id=09]").val();
        $("[id=09]").val(hourArray[1].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn10]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[2].todo = $("[id=10]").val();
        $("[id=10]").val(hourArray[2].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn11]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[3].todo = $("[id=11]").val();
        $("[id=11]").val(hourArray[3].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn12]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[4].todo = $("[id=12]").val();
        $("[id=12]").val(hourArray[4].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn13]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[5].todo = $("[id=13]").val();
        $("[id=13]").val(hourArray[5].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn14]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[6].todo = $("[id=14]").val();
        $("[id=14]").val(hourArray[6].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn15]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[7].todo = $("[id=15]").val();
        $("[id=15]").val(hourArray[7].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn16]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[8].todo = $("[id=16]").val();
        $("[id=16]").val(hourArray[8].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });

    $("[id=btn17]").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();

        hourArray[9].todo = $("[id=17]").val();
        $("[id=17]").val(hourArray[9].todo);

        localStorage.setItem('saveTodos', JSON.stringify(hourArray));
        savedTodos = $(JSON.parse(localStorage.getItem('saveTodos')));
    });
}