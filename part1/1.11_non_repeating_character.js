/*
 Question: How could you find the first non repeating char in a string?
 */

//array method
function firstNonRepeatChar(str) {
    let array = str.split('');
    let tmp;

    while (array.length) {
        tmp  = array[0];
        array.shift();
        if (array.indexOf(tmp) === -1) return tmp;
    }

    return false;
}

firstNonRepeatChar('the quick brown fox jumps then quickly blow air');

//pure string
function firstNonRepeatChar(str) {
    let tmp;

    while (str.length) {
        tmp  = str[0];
        str = str.substring(1);
        if (str.indexOf(tmp) === -1) return tmp;
    }

    return false;
}

firstNonRepeatChar('the quick brown fox jumps then quickly blow air');