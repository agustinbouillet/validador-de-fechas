/*
title: Validador de fechas.
autor: Agustín Bouillet
year: 2016
email: agustin.bouillet@gmail.com
website: www.bouillet.com.ar
gitHub: https://github.com/agustinbouillet/validador-de-fechas
*/

/**
 * Valida un numero de telefono
 * @param  {string}  str
 * @return {Boolean | object}
 */
function Fechas(str) {
    this.input = str;
    this.separator = '-';
    this.matchFormat = matchFormat;
    this.isValid = isValid;
    this.getData = setData;
    this.date = new Date();
    this.month_format = {
        1: {
            abbr: 'ene',
            normal: 'enero'
        },
        2: {
            abbr: 'feb',
            normal: 'febrero'
        },
        3: {
            abbr: 'mar',
            normal: 'marzo'
        },
        4: {
            abbr: 'abr',
            normal: 'abril'
        },
        5: {
            abbr: 'may',
            normal: 'mayo'
        },
        6: {
            abbr: 'jun',
            normal: 'junio'
        },
        7: {
            abbr: 'jul',
            normal: 'julio'
        },
        8: {
            abbr: 'ago',
            normal: 'agosto'
        },
        9: {
            abbr: 'sep',
            normal: 'septiembre'
        },
        10: {
            abbr: 'oct',
            normal: 'octubre'
        },
        11: {
            abbr: 'nov',
            normal: 'noviembre'
        },
        12: {
            abbr: 'dic',
            normal: 'diciembre'
        }
    };
    this.day_format = {
        0: {
            abbr: 'dom',
            normal: 'domingo'
        },
        1: {
            abbr: 'lun',
            normal: 'lunes'
        },
        2: {
            abbr: 'mar',
            normal: 'martes'
        },
        3: {
            abbr: 'mie',
            normal: 'miércoles'
        },
        4: {
            abbr: 'jue',
            normal: 'jueves'
        },
        5: {
            abbr: 'vie',
            normal: 'viernes'
        },
        6: {
            abbr: 'sab',
            normal: 'sábado'
        }
    };
    this.numeros = {
        'un': 1,
        'uno': 1,
        'dos': 2,
        'tres': 3,
        'cuatro': 4,
        'cinco': 5,
        'seis': 6,
        'siete': 7,
        'ocho': 8,
        'nueve': 9,
        'diez': 10
    }

}

function matchFormat() {
    var re = /^((3[0-1]|[0-2][\d]|[1-9])(?:\s[,.;\-\sd-e]+)(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:[,.;\-\sd-e]+)(\d{4}|\d{2})|(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:[,.;\-\sd-e]+)(3[0-1]|[0-2][\d]|[1-9])(?:[,.;\-\sd-e]+)(\d{4}|\d{2})|(3[0-1]|[0-2][\d]|[1-9])(\/|\-|\.)(1[0-2]|0[\d]|[1-9])\9(\d{4}|\d{2})|(3[0-1]|[0-2][\d]|[1-9])(?:[,.;\-\sd-e]+)(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)|(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)(?:\s|[,.;\-\sd-e]+)(3[0-1]|[0-2][\d]|[1-9])|([\d]{4})(\-|\/|\.)(1[0-2]|0[\d]|[1-9])\17(3[0-1]|[0-2][\d]|[1-9])|(hoy|today)|(mañana|manana|tomorrow)|(ayer|yesterday)|(h?ace|\-)(\s{0,3})(?:(10|[1-9])|(uno?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez))[a-z\s]*|(en|\+)(\s{0,3})(?:(10|[1-9])|(uno?|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez))[a-z\s]*)$/i;
    var result = this.input.match(re);

    if (result !== null) {
        return result;
    }

    // return false;
}

/**
 * Calcula si un año es bisiesto
 * @param  {integer}  year
 * @return {Boolean}
 */
function isBisiesto(year) {
    if ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0))) {
        return true;
    }

    return false;
}
/**
 * [dayRange description]
 * 30 dias tiene noviembre con abril junio y septiembre solo uno de 28 y 
 * los demas de 31 :)
 * @return {[type]} [description]
 */
function dayRange() {

    var d31 = [1, 3, 5, 7, 8, 10, 12];
    var d30 = [11, 4, 6, 9];

}

/**
 * Agrega o resta dias
 * @param {object} date
 * @param {integer} days Dias que se quiere incrementar o decrementar.
 */
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    return result;
}


function between(num, from, to) {
    n = parseInt(num);
    if (Number.isInteger(n) && n > from && n <= to) {
        return n;
    }
    return false;
}



function strReplace(str) {

    if (num = between(str, 1, 12)) {
        return num;
    }

    var str = str.toLowerCase();

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


function setData() {

    if (!this.isValid) {
        return false;
    }

    result = this.matchFormat();

    var sep = this.separator;
    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();

    // Obtengo el dia
    day_list = [2, 8, 6, 19, 15, 12];
    for (i = 0; i <= day_list.length - 1; i++) {
        if (result[parseInt(day_list[i])] !== undefined) {
            var day = parseInt(result[day_list[i]]);
            break;
        } else {
            var day = false;
        }
    }

    // Obtengo el mes
    month_list = [5, 3, 10, 18, 14, 13];
    for (i = 0; i <= month_list.length - 1; i++) {
        if (result[month_list[i]] !== undefined) {
            var month = strReplace(result[month_list[i]]);
            break;
        } else {
            var month = false;
        }
    }

    // Obtengo el año
    year_list = [4, 7, 11, 16];
    for (i = 0; i <= year_list.length - 1; i++) {
        if (result[parseInt(year_list[i])] !== undefined) {
            var year = parseInt(result[year_list[i]]);
            break;
        }
    }

    // Si se escribió hoy o now.
    if (result[20] !== undefined) {
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
    }

    // Si se escribió ayer
    if (result[22] !== undefined) {
        yesterday = addDays(this.date, -1);
        var day = yesterday.getDate();
        var month = yesterday.getMonth() + 1;
        var year = yesterday.getFullYear();
    }

    // Si se escribió mañana.
    if (result[21] !== undefined) {
        tomorrow = addDays(this.date, 1);
        var day = tomorrow.getDate();
        var month = tomorrow.getMonth() + 1;
        var year = tomorrow.getFullYear();
    }

    // Si se escribió "h?ace n" dias.
    if (result[25] !== undefined) {
        tomorrow = addDays(this.date, -parseInt(result[25]));
        var day = tomorrow.getDate();
        var month = tomorrow.getMonth() + 1;
        var year = tomorrow.getFullYear();
    }

    // Si se escribió "hace un/uno" dias.
    if (result[26] !== undefined) {
        var tomorrow = addDays(
            this.date, -this.numeros[result[26].toLowerCase()]
        );
        var day = tomorrow.getDate();
        var month = tomorrow.getMonth() + 1;
        var year = tomorrow.getFullYear();
    }

    // Si se escribió "en n" dias.
    if (result[29] !== undefined) {
        var tomorrow = addDays(this.date, parseInt(result[29]));
        var day = tomorrow.getDate();
        var month = tomorrow.getMonth() + 1;
        var year = tomorrow.getFullYear();
    }

    // Si se escribió "en un/uno" dias...
    if (result[30] !== undefined || result[30]) {
        var tomorrow = addDays(this.date,
            this.numeros[result[30].toLowerCase()]);
        var day = tomorrow.getDate();
        var month = tomorrow.getMonth() + 1;
        var year = tomorrow.getFullYear();
    }

    date_obj = new Date(year, month - 1, day);

    // Praparo la información de retrono
    var data = {
        day: date_obj.getDay(),
        day_tostring: this.day_format[date_obj.getDay()],
        month_tostring: this.month_format[month],
        date: day,
        month: month,
        year: date_obj.getFullYear(),
        date_format: date_obj.getFullYear() + sep + zeroFill(month, 2) +
            sep + zeroFill(day, 2),
    }

    return data
}

/**
 * zfill
 * @param  {integer} number
 * @param  {integer} width Cantidad de ceros
 * @return {string} 
 */
function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
    }
    return number + "";
}

/**
 * Telefono váliodo o inválido
 * @return {Boolean}
 */
function isValid() {
    return this.matchFormat() ? true : false;
}