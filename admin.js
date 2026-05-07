 // Protect Admin Page

firebase.auth().onAuthStateChanged(function(user){

    if(user){

        console.log("Admin Logged In");

    }

    else{

        window.location.href =
        "login.html";

    }

});


// Firestore Database

const db = firebase.firestore();


// Save Festival

function saveFestival(){

    const year =
    document.getElementById("year").value;

    const title =
    document.getElementById("title").value;

    const instagram =
    document.getElementById("instagram").value;

    const description =
    document.getElementById("description").value;

    db.collection("festivals").add({

        year: year,
        title: title,
        instagram: instagram,
        description: description

    })

    .then(function(){

        document.getElementById("message")
        .innerHTML =
        "Festival Saved Successfully";

    })

    .catch(function(error){

        document.getElementById("message")
        .innerHTML =
        error.message;

    });

}


// Logout

function logout(){

    firebase.auth().signOut()

    .then(function(){

        window.location.href =
        "login.html";

    });

}