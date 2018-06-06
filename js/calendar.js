class Calendar {

    constructor(date, days, locale) {
        this.date = date;
        this.days = days;
        this.locale = locale;
    }

    init() {

        const calendarTemplate = document.getElementById('calendar').content;
        const calendarClone = document.importNode(calendarTemplate, true);
        const calendarBody = calendarClone.querySelector('tbody');
        const numberOfWeeks = 1 + this.date.diff(this.days, 'weeks');

        let count = this.days,
            date = this.date;
        

        for(let i = 0; i < numberOfWeeks; i++) {

            let tr = document.createElement('tr');

            for(let j = 0; j < 7; j++) {

                let td = document.createElement('td');

                if(count === this.days && date.day() === j) {

                    if(date.day() === 0 || date.day() === 6)
                    {
                        td.classList.add('yellow');
                    }
                    else {
                        td.classList.add('green');
                    }  
                    
                    count--;
                    date = date.add(1, 'day');
                }
                if(count > 0 && count < this.days) {
                    if(date.day() === 0 || date.day() === 6)
                    {
                        td.classList.add('yellow');
                    }
                    else {
                        td.classList.add('green');
                    }

                    count--;
                    date = date.add(1, 'day');
                }
                else {
                    td.classList.add('grey');
                }

                tr.appendChild(td);

                
            }
            
            calendarBody.appendChild(tr);
        }

        
        calendarClone.querySelector('h2').innerText = date.format('MMMM');

        document.getElementById('app').appendChild(calendarClone);
    }
}