document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').addEventListener('click', () => {
        
        document.getElementById('calendarContainer').innerHTML = "";

        const date = document.getElementById('datePicker').value;
        const days = document.getElementById('days').value;
        const locale = document.getElementById('locale').value;

        let error = document.getElementById('datePickerError');

        if(!date) {

            error.classList.add('active');
            return;
        }
        else{
            error.classList.remove('active');
        }

        error = document.getElementById('daysError');

        if (!days) {    

            error.classList.add('active');
            return;;
        }
        else {
            error.classList.remove('active');
        }

        error = document.getElementById('localeError');

        if (!locale) {           

            error.classList.add('active');
            return;;
        }
        else {
            error.classList.remove('active');
        }

        const calendar = new Calendar(moment(date), Number.parseInt(days), locale);
        calendar.init();
    }, false);
})