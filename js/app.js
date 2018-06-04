document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('submit').onclick = () => {
        
        const date = document.getElementById('datePicker').value;
        const days = document.getElementById('days').value;
        const locale = document.getElementById('locale').value;

        const calendar = new Calendar(date, days, locale);
        calendar.init();
    }
})