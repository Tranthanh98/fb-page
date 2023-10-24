function login(){
    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    const infoSave = `,{email: ${email}, password:${pw}}`;

    console.log("info user:", infoSave);
}

