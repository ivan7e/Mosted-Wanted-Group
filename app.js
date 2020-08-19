"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){

  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;

  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchTraits(people);
      
      break;
      default:
    app(people); 
      break;
  }
  
  mainMenu(searchResults, people);
}


function mainMenu(person, people){


  if(!person){
    alert("Could not find that individual.");
    return app(people);
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person);
      console.log(person);
    break;

    case "family":
      console.log("This is a parent: " + searchById(person.parents[1], people));        
      console.log("This is a parent: " + searchById(person.parents[0], people));      
      console.log("This is a spouse: " + searchById(person.currentSpouse, people));

    break;

    case "descendants":
      console.log("This is a parent: " + searchById(person.parents[1], people));        
      console.log("This is a parent: " + searchById(person.parents[0], people)); 
      console.log("This is a grandparent: " + searchById(person.parents[0](person.parents[0]), people));
    

    break;

    case "restart":
    app(people);
    break;

    case "quit":
    return;
    default:
    return mainMenu(person, people);
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson[0];
}


function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){

  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse" + person.currentSpouse + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}


function chars(input){
  return true; 
}

let traitResults = [];

let heightResults = [];
let weightResults = [];
let genderResults = [];
let dobResults = [];
let occupationResults = [];
let eyeColorResults = [];

function searchTraits(people){
  let findTraits = promptFor("Search by 'Gender', 'Height', 'Weight', 'dob', 'eyeColor', 'Occupation'.", chars);
  let results = [];
  switch(findTraits){
    case 'Height': 
      results = searchByHeight(people);
      displayPeople (results);
      heightResults += (results);
      break;
    case 'Weight':
      results = searchByWeight(people);
      displayPeople (results);
      weightResults += (results);
    break;
    case 'Gender':
      results = searchByGender(people);
      displayPeople (results);
      genderResults += (results);
    break;
    case 'dob':
      results = searchByDob(people);
      displayPeople (results);
      dobResults += (results);
    break;
    case 'Occupation':
     results = searchByOccupation(people);      
      displayPeople (results);
      foundOccupation += (results);
    break;
    case 'eyeColor':
      results = searchByEyeColor(people);
      displayPeople (results);
      eyeColorResults += (results);
    break;
      default:
      return mainMenu(person, people); 
  }
  return results;
}

function searchByHeight(people){
  let input = promptFor("What is the person's height in inches?", chars);
  let foundHeight = people.filter(function(person){
    if(person.height === input){
      return true;
    }
      else{
        return false;
      }
  })
  console.log(foundHeight);
  return foundHeight;

}
function searchByWeight(people){
  let input = promptFor("What is the person's weight in pounds?", chars);
  let foundWeight = people.filter(function(person){
    if(person.weight === input){
      return true;
    }
      else{
        return false;
      }
  })
  console.log(foundWeight);
  return foundWeight;
}

function searchByGender(people){
  let input = promptFor("What is the person's gender?", chars);
  let foundGender = people.filter(function(person){
    if(person.gender === input){
      return true;
    }
    else{
      return false;
    }
  })
  console.log(foundGender);
  return foundGender;
}
function searchByDob(people){
  let input = promptFor("What is the person's date of birth XX/XX/XX?", chars);
  let foundDob = people.filter(function(person){
    if(person.dob === input){
      return true;
    }
    else{
      return false;
    }
  })
  console.log(foundDob);
  return foundDob;
}
function searchByOccupation(people){
  let input = promptFor("What is the person's occupation?", chars);
  let foundOccupation = people.filter(function(person){
    if(person.occupation === input){
      return true;
    }
    else{
      return false;
    }
  })
  console.log(foundOccupation);
  return foundOccupation;
}
function searchByEyeColor(people){
  let input = promptFor("What is the person's eye color?", chars);
  let foundEyeColor = people.filter(function(person){
    if(person.eyeColor === input){
      return true;
    }
    else{
      return false;
    }
  })
  console.log(foundEyeColor);
  return foundEyeColor;
}

function searchById(id, people){

  
  let foundId = people.filter(function(person){
    if(person.id === id){
      return true;
    }
    else{
      return false;
    }
    
  })
  return foundId[0].firstName + foundId[0].lastName;

}