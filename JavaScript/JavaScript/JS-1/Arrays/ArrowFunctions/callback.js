function finished() {
    console.log('Task finished');
  }
  function doTask(task, callback) {
    console.log(arguments);
    console.log("Started " + task);
    setTimeout(callback, 3000);
  }
  doTask('homework', finished)
  
  
  
  var arr = [32, 654, 12, 665, 08, 23];
  function sortCallback(a, b) {
    return a - b;
  }
  console.log(arr.sort(sortCallback));
  
  
  var arr1 = [32, 654, 12, 665, 08, 23];
  function forEachCallback(item, index) {
    console.log('Printing Element: ' + item)
  
  }
  arr1.forEach(forEachCallback);