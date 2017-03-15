var name = "Robin";

function checkUser (username){
  if (username == "Robin"){
    console.log("Welcome, Authenticated user.");
  }
  else {
    console.log("Warning, unauthorized attempt.");
  }
}

checkUser(name);
