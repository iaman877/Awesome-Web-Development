//Object:-
      let user = new Object(); // "object constructor" syntax
    //  let user = {}; // "object literal" syntax

let myobj = {
    'first name': 'Aman', 
    channel: 'AmanTV',
    isActive: true,
    marks: [1,5,3,6]
}
console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)


const car= {      //CREATION
    'brand':'AUDI',
    'color':['red', 'blue', 'gray'],
    'gears':6,
   'registration':null,
    'isLaunched':true,
    'drive':function(gear){
    console.log(`Driving ${this.brand} on gear ${gear}`);
    }
  }
  car.drive();
  car.brand='BMW';//Reassignemnt
  car.drive(4);
  
  car.stop=function(gear){
    console.log(`Stopping ${this.brand} on gear ${gear}`)
  }
  car.stop(3);
  console.log(Object.keys(car));
  console.log(Object.values(car));