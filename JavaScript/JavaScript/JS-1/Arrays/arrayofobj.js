console.log('---------------- Iteration ------------------->');
const friuts=
    [
        {name:'Mango', isSeasonal:true},
        {name:'Berry', isSeasonal:false} ,
        {name:'Grapes', isSeasonal:true},
        {name:'Banana', isSeasonal:false},
        {name:'PineApple', isSeasonal:false},
        {name:'Avocado', isSeasonal:false}
    ];
    friuts.forEach(function(element, index){console.log(element)})
    // skip all isSeasonal
        for (let i=0; i<friuts.length; i++) 
        {
          if(!friuts[i].isSeasonal){
           continue; 
          }
          console.log(friuts[i])
        }
      

console.log('---------------- Sorting ------------------->');
        const arrayObj = 
        [
            {name: "Arnold",age: 25 },
            {name: "Tim",age: 6},
            {name: "Sheila",age: 56,},
            {name: "Zack",age: 32,},
            {name: "Tom",age: 82,},
        ];
  //
  function sortObj(arrayObj)
  {
    return arrayObj.sort(function(a, b) //typeof a & b -->object
    { 
    console.log(`a is:- ${JSON.stringify(a)} || b is:- ${JSON.stringify(b)}`)
      return a.age-b.age;
    })
  }
  console.log(sortObj(arrayObj))
  
  //
  function getAgeByName(personname)
  {
   for (let person of arrayObj)
   {
     if(person.name.toLowerCase()==personname.toLowerCase())
      return person.age;
   }
  }
  console.log(getAgeByName('tOM'))
  
  