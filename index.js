var katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + (line.length) + " in line."
}  

function nowServing(line){
  if(line.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var nowServing = line.shift();
    return "Currently serving " + nowServing + ".";
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty."
  } else {
    var text = "The line is currently: ";
    for(var i = 0; i < line.length; i++){
      text += i + ". " + line[i] + ", ";
    }
    text.splice(-2, 2);
    return text;
  }
}