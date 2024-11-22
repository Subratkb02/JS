let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age=22;

if(age>18 && (registeredEarly=true)){
  raceNumber+=1000;
}

if (age>18 && (registeredEarly=true)){
  console.log('They will race at 9:30 am-', raceNumber);
}
else if(age>18 && (registeredEarly)){
  console.log('They will race at 11:00 am-',raceNumber);
}
else if(age < 18){
  console.log('They will race at 12:30 pm-',raceNumber);
}
else{
  console.log('See the registration desk-',raceNumber)
}
