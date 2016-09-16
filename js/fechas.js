/*
title: Argentinian phonenumber validator \ 
    Validador de números telefónicos argentinos.
autor: Agustín Bouillet
year: 2016
email: agustin.bouillet@gmail.com
website: www.bouillet.com.ar
gitHub: https://github.com/agustinbouillet/validador-de-numeros-de-telefono-argentinos
*/

/**
 * Valida un numero de telefono
 * @param  {string}  str
 * @return {Boolean | object}
 */
function Fechas(str) {
    this.input = str;
    this.separator = '-';
    this.getData = fecha;
    this.isValid = isValid;
    //this.invalidChars = invalidChars;

    // this.month = {
    //     1:{'ene','enero'},
    //     2:{'feb','febrero'},
    //     3:{'mar','marzo'},
    //     4:{'abr','abril'},
    //     5:{'may','mayo'},
    //     6:{'jun','junio'},
    //     7:{'jul','julio'},
    //     8:{'ago','agosto'},
    //     9:{'sep','septiembre'},
    //     10:{'oct','octubre'},
    //     11:{'nov','noviembre'},
    //     12:{'dic','diciembre'}
    // }
    //     this.day = {
    //     1:{'ene','enero'},
    //     2:{'feb','febrero'},
    //     3:{'mar','marzo'},
    //     4:{'abr','abril'},
    //     5:{'may','mayo'},
    //     6:{'jun','junio'},
    //     7:{'jul','julio'},
    //     8:{'ago','agosto'},
    //     9:{'sep','septiembre'},
    //     10:{'oct','octubre'},
    //     11:{'nov','noviembre'},
    //     12:{'dic','diciembre'}
    // }
}


function intMonth(num) {
    n = parseInt(num);
    if (Number.isInteger(n) && n > 0 && n <= 12) {
        return n;
    }
    return false;
}


function strReplace(str) {
    console.log(str);

    if (num = intMonth(str)) {
        return num;
    }

    var match;
    var reps = {
        'ene': 1,
        'feb': 2,
        'mar': 3,
        'abr': 4,
        'may': 5,
        'jun': 6,
        'jul': 7,
        'ago': 8,
        'sep': 9,
        'oct': 10,
        'nov': 11,
        'dic': 12,
        'enero': 1,
        'febrero': 2,
        'marzo': 3,
        'abril': 4,
        'mayo': 5,
        'junio': 6,
        'julio': 7,
        'agosto': 8,
        'septiembre': 9,
        'octubre': 10,
        'noviembre': 11,
        'diciembre': 12
    };

    str.replace(str, function(key, val) {
        match = reps[key];
    });

    return match != undefined ? match : false;
}


function setData(result) {
    console.log(result[12]);


    // Obtengo el dia
    day_list = [2, 8, 6];
    for (i = 0; i <= day_list.length - 1; i++) {
        if (result[parseInt(day_list[i])] !== undefined) {
            var day = parseInt(result[day_list[i]]);
            break;
        } else {
            var day = false;
        }
    }

    // Obtengo el mes
    month_list = [5, 3, 10];
    for (i = 0; i <= month_list.length - 1; i++) {
        if (result[month_list[i]] !== undefined) {
            var month = strReplace(result[month_list[i]]);
            break;
        } else {
            var month = false;
        }
    }

    // Obtengo el año
    year_list = [4, 7, 11];
    for (i = 0; i <= year_list.length - 1; i++) {
        if (result[parseInt(year_list[i])] !== undefined) {
            var year = parseInt(result[year_list[i]]);
            break;
        } else {
            var year = false;
        }
    }

    // Si se escribió hoy o now.
    if (result[12] !== undefined) {
        now = new Date();
        var day = now.getDate();
        var month = now.getMonth() + 1;
        var year = now.getFullYear();
    }


    var g = '-';
    date_obj = new Date(year, month - 1, day);
    var data = {
        day: date_obj.getDay(),
        date: day,
        month: month,
        year: year,
        date_format: year + g + zeroFill(month, 2) + g + zeroFill(day, 2),
    }

    return data
}

function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + "";
}


function fecha() {
    var regex = /^((3[0-1]|[0-2][\d]|[1-9])(?:[^\d]+?)(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:[^\d]*?)(\d{4}|\d{2})|(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:[^\d]+?)(3[0-1]|[0-2][\d]|[1-9])(?:[^\d]+?)(\d{4}|\d{2})|(3[0-1]|[0-2][\d]|[1-9])(\/|\-|\.)(1[\d]|0[\d]|[1-9])\9(\d{4}|\d{2})|(hoy|now))$/i;
    var result = this.input.match(regex);

    if (result !== null) {
        return setData(result);
    }

    return false;
}


/**
 * Telefono váliodo o inválido
 * @return {Boolean}
 */
function isValid() {
    return this.getData() ? true : false;
}
