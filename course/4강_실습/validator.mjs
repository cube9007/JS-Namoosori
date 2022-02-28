function isNumber( number ) {
    return !isNaN(parseInt(number));
}

function isOperation( operation ) {
    let operations = '+-*/=';
    return operations.indexOf (operation) !== -1 ;
}

export default {
    isNumber,
    isOperation
};  
