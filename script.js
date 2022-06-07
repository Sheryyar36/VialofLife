function setContact() {
    let select = document.getElementById("contact methods");
    let value = select.value;
    console.log(value);
    const phone = "(012)-345-6789";
    const email = "life@email.com";
    const address = "555 Corporate drive, Hemmingway NJ 08762";

    if (value == "Phone"){
        document.getElementById("contact").innerHTML = phone;
    }
    else if (value == "Email"){
        document.getElementById("contact").innerHTML = email;
    }
    else{
        document.getElementById("contact").innerHTML = address;
    }
}