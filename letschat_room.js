var firebaseConfig = {
    apiKey: "AIzaSyB2JUhe3M44OVagyB4r9Wk3CdH_-f5VZ-8",
  authDomain: "letschatweb-b216a.firebaseapp.com",
  databaseURL: "https://letschatweb-b216a-default-rtdb.firebaseio.com",
  projectId: "letschatweb-b216a",
  storageBucket: "letschatweb-b216a.appspot.com",
  messagingSenderId: "150026645239",
  appId: "1:150026645239:web:7c8b9334410045d9fbadf2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome " + username+ "!";

function redirectToRoomName(room_name){
    console.log(room_name);
    localStorage.setItem("room_name", room_name);
    window.location = "letschat_page.html";
}

function addroom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room_names "+ Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location="index.html";
}