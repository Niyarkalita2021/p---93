var firebaseConfig = {
    apiKey: "AIzaSyCN5_eHw9R-IfThC7zPFfXbWg0dZCZvY7E",
    authDomain: "kwitter-269ad.firebaseapp.com",
    databaseURL: "https://kwitter-269ad-default-rtdb.firebaseio.com",
    projectId: "kwitter-269ad",
    storageBucket: "kwitter-269ad.appspot.com",
    messagingSenderId: "773161555743",
    appId: "1:773161555743:web:3d3646460706c2e266022a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addroom()
  {
        room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
