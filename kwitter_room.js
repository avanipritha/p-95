// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKJMGXAz84l8tndFy4mz9n_9GpJWhay2Y",
    authDomain: "kwitter-project-ab6ff.firebaseapp.com",
    projectId: "kwitter-project-ab6ff",
    storageBucket: "kwitter-project-ab6ff.appspot.com",
    messagingSenderId: "730956970846",
    appId: "1:730956970846:web:0b01e824030255d9c5edcf"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 user_name = localStorage.getItem("username");
 document.getElementById("user_name").innerHTML = " Welcome " + user_name+"!";

 function add_room() 
 {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room name",room_name);
    window.location="kwitter_page.html";
 }

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room name", name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";   
 document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function logout() {
   localStorage.removeItem("room_name");
   localStorage.removeItem("user_name");
     window.location = "index.html";
   
}
