class WeekDays {
    daysEs = [
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabados",
        "Domingo"
    ]

    daysEn = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    constructor(language){
        this.language = language

        if(WeekDays.instance){
            return WeekDays.instance
        }

        WeekDays.instance = this
    }

    getDays(){
        return this.language === 'es' ? 
               this.daysEs :
               this.daysEn
    }
}


const weekDays = new WeekDays('en')
console.log(weekDays.getDays())

const weekDays2 = new WeekDays('es')
console.log(weekDays2.getDays())