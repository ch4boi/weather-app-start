
var today = new Date;
var UTCHour = today.getUTCHours();

var losAngeles = -7;
var paris = +2;
var marseilles = +2;
var melbourne = + 12;
var london = +1;
var newYork = -5;

function cityTime (city){
    switch (city) {
        case 'Los Angeles' :
            return UTCHour+losAngeles;
            break;
        case 'Marseilles' :
            return UTCHour+marseilles;
            break;
        case 'Melbourne' :
            return UTCHour+melbourne;
            break;
        case 'London' :
            return UTCHour+london;
            break;
        case 'New York' :
            return UTCHour+newYork;
            break;
       case 'Paris' :
            return UTCHour+paris;
            break;
    }
}

/*

function calcTime(city, offset) {
    // create Date object for current location
    var now = new Date.getSec();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = now.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city"+ city +" is "+ nd.toLocaleString();
}

alert(calcTime('Bombay', '+5.5'));

};



// declare 'date' object
// Get hours + Get minutes as per UTC



