var str = "abcDEFg heLLO";
var num=123567

String.prototype.capitalaize=function()
{
  const words=this.split(' ');
  if(!words){
    return 'Please pass a valid string'
  }
  debugger
  let result=[];
  for (let ele of words){
    result.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase());
  }
  return result.join(" ");
}

console.log(str.capitalaize());



var arr = [1,2,3,4,5];
Array.prototype.getSum = function() {
  let result = 0;
  this.forEach(function(element, index) {
    result += element;
  });

  return result;
}

console.log(arr.getSum());