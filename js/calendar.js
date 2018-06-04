class Calendar {

    constructor(date, days, locale) {
        this.date = date;
        this.days = days;
        this.locale = locale;
    }

    init() {

        alert(`${this.date} ${this.days} ${this.locale}`);

        const calendarTemplate = document.getElementById('calendar').content;
        const calendarClone = document.importNode(calendarTemplate, true);

        const calendarBody = calendarClone.querySelector('tbody');

        let tr = document.createElement('tr');

        for(let i = 0; i < 7; i++) {
            
            let td = document.createElement('td');
            td.classList.add('grey');

            tr.appendChild(td);
        }

        calendarBody.appendChild(tr);
        calendarClone.querySelector('h2').innerText = 'Test Month 2';
        
        document.getElementById('app').appendChild(calendarClone);
    }
}