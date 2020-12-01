var speed = 50;

function getNumbersToIncrease(num, count) {
    var getName = document.getElementsByClassName(num);
    //console.log('elt = ' + getName);
    var result = Number(document.getElementsByClassName(num)[count].innerHTML);
    //console.log('result = ' + result);
    increaseNumber(0, result, getName, count);
}

function increaseNumber(i, result, getName, count) {
    if (i <= result) {
        getName[count].innerHTML = i;
        setTimeout(function () {
            increaseNumber(i + Math.floor(result/10), result, getName, count);
        }, speed);
    }
}
function countingNumber() {
    var nodeList = document.getElementsByClassName('count-number').length;
    var count = 0;
    for (count = 0; count < nodeList; count++) {
        getNumbersToIncrease('count-number', count);
    }
}
var waypoint = new Waypoint({
    element: document.getElementById('px-offset-waypoint'),
    handler: function (direction) {
        if (direction === 'down') {
            countingNumber();
        }
    },
    offset: 400
})