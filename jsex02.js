
function fibonacciSet(max) {
    var fib_list = [1];
    var current_fib = 1;
    if (max > 1) {
        while(current_fib < max) {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length-1] + fib_list[fib_list.length-2];
        }
        return fib_list;
    }
    else {
        return [1, 1];
    }
}

function isEven(n) {
    return n % 2 === 0;
}

function filtereven(list) {
    var evenlist = [];
    for (var i = 0; i < list.length; i++){
        if (isEven(list[i]) === true) {
            evenlist.push(list[i]);
        }
    }
    return evenlist;
}

function sum(evenlist) {
    var totalsum = 0;
    for (var i = 0; i <evenlist.length; i++) {
        totalsum = totalsum + evenlist[i];
    }
    return totalsum;
}



list = fibonacciSet(4000000);
filteredlist = filtereven(list);
summedlist = sum(filteredlist);
console.log(summedlist);