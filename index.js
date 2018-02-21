var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}  

function nowServing(line){
  if(line === null){
    return "There is nobody waiting to be served!";
  } else {
    var nowServing = line.shift();
    return "Currently serving " + nowServing;
  }
}