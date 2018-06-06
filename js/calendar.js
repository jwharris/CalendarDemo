class Calendar {

    constructor(date, days, locale) {
        this.date = date;
        this.days = days;
        this.locale = locale;
    }

    _createMonth(startDate, endDate) {

        const calendarTemplate = document.getElementById('calendar').content;
        const calendarClone = document.importNode(calendarTemplate, true);
        const calendarBody = calendarClone.querySelector('tbody');

        const numberOfWeeks = 1 + endDate.diff(startDate, 'weeks');
        const dayDiff = endDate.diff(startDate, 'days');

        let count = endDate.diff(startDate, 'days'),
            date = startDate.clone();

        calendarClone.querySelector('h2').innerText = date.format('MMMM YYYY');
        
        for(let i = 0; i < numberOfWeeks; i++) {

            let tr = document.createElement('tr');

            for(let j = 0; j < 7; j++) {

                let td = document.createElement('td');

                if(count === dayDiff && date.day() === j) {

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
                if(count > 0 && count < dayDiff) {
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
        
        document.getElementById('app').appendChild(calendarClone);
    }

    init() {
        
        const startDate = moment(this.date).clone();
        const endDate = moment(this.date).clone().add(this.days, 'days');
        const monthArray = moment(startDate).twix(endDate).toArray('month');

        for(let i = 0; i < monthArray.length; i++) {

            console.log(startDate.format());

            if (monthArray[i].twix(monthArray[i].clone().endOf('month')).contains(startDate) && monthArray[i].twix(monthArray[i].clone().endOf('month')).contains(endDate)) {
                console.log('Contained Month');

                this._createMonth(startDate.clone(), endDate.clone());
            }
            else if (monthArray[i].twix(monthArray[i].clone().endOf('month')).contains(startDate)) {

                console.log('Start Month');

                this._createMonth(startDate.clone(), monthArray[i].clone().endOf('month'));
            }
            else if (monthArray[i].twix(monthArray[i].clone().endOf('month')).contains(endDate)) {

                console.log('End Month');

                this._createMonth(monthArray[i].clone().startOf('month'), endDate);
            }
            else {

                console.log('Full Month');

                this._createMonth(monthArray[i].clone().startOf('month'), monthArray[i].clone().endOf('month'));
            }
        }
    }
}