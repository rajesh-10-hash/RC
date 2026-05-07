 function login() {

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    console.log(email);
    console.log(password);

    firebase.auth()
    .signInWithEmailAndPassword(email, password)

    .then(function () {

        alert("Login Successful");

        window.location.href =
        "admin.html";

    })

    .catch(function (error) {

        console.log(error);

        document.getElementById("message")
        .innerHTML = error.message;

    });

}