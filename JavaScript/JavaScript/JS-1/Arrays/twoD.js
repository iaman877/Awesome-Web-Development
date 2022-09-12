var cars=[['BMW', 'TESLA', 'MASERATI'], ['AUDI', 'TATA', 'JAGUAR'], ['HONDA', 'PORSCHE', 'BENTLEY'], 'MARUTI'];
for (let carArr of cars)
{
  if(Array.isArray(carArr))
    {
        for (let car of carArr)
        {
            console.log(car)
        }
    }
}