document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').addEventListener('click', () => {
        
        document.getElementById('calendarContainer').innerHTML = "";

        const date = document.getElementById('datePicker').value;
        const days = document.getElementById('days').value;
        const locale = document.getElementById('locale').value;

        const calendar = new Calendar(moment(date), Number.parseInt(days), locale);
        calendar.init();
    }, false);
})