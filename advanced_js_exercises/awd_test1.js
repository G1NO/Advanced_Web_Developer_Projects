function countDown(seconds) {
  var intervalID = setInterval(function() {
    seconds --;
    if (seconds > 0) {
    console.log("Timer: ", seconds);
  } else {
    console.log("Ring Ring Ring!!!");
    clearInterval(intervalID);
  }
}, 1000);
}

countDown(4)

// --------------------------------------------------------------------------------

function halfValues(arr) {
  var newArr = [];
  arr.forEach(function(val){
    newArr.push(val / 2);
  })
  return newArr;
}

halfValues([2,4,6]);
