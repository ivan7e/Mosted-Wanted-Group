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
      searchResults = searchTraits(people);//this needs to hold multiples
      
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
      displayPerson(person);
      console.log(person);
    break;

    case "family":

      console.log(person.parents[0]);
      console.log(person.parents[1]);      
      console.log(person.currentSpouse);

    break;

    case "descendants":
    // TODO: get person's descendants
    break;

    case "restart":
    app(people); // restart
    break;

    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
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
  return foundPerson[0];//this is an array
}

// alerts a list of people
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

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
////////////////////////////////////////////
let traitResults = [];


function searchTraits(people){
  let findTraits = promptFor("Search by 'Gender', 'Height', 'Weight', 'dob', 'eyeColor', 'Occupation'.", chars);
  let results = [];
  switch(findTraits){
    case 'Height': 
      
      break;
    case 'Weight':

    break;
    case 'Gender':
      //console.log("Inside serachTraits function, variable person has value:" + person)
      results = searchByGender(people);
      displayPeople (results);
      traitResults += (results);

    break;

    case 'dob':

    break;

    case 'Occupation:':
      results = searchByOccupation(people);
    break;

    case 'eyeColor':

    break;

      default:
      return mainMenu(person, people); // ask again
  }
  return results;
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
  return foundOccupation;
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

function searchById(id, people){

  let foundId = people.filter(function(person){
    if(person.id === id){
      return true;
      //person.firstName && person.lastName;
    }
    else{
      return false;
    }
    
  })
 
  return foundId[0].firstName;
}
////////////////////////////////////////////////////////////////////





// function searchByWeight

// function searchByEyeColor

// function searchByOccupation

// function searchByParent