const firebaseConfig = {
  apiKey: "AIzaSyDzbkprlOF3M1c55gre9oRrLq06ltkxuxI",
  authDomain: "chat-app-kwitter-dab3a.firebaseapp.com",
  projectId: "chat-app-kwitter-dab3a",
  storageBucket: "chat-app-kwitter-dab3a.appspot.com",
  messagingSenderId: "769164681433",
  appId: "1:769164681433:web:415e937fee496c4350dec8"
};


firebase.initalizeApp(firebaseConfig);

user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
