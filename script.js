function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("form-response").innerHTML = "Please fill in all fields.";
        document.getElementById("form-response").className = "response error";
        return false; 
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("form-response").innerHTML = "Please enter a valid email address.";
        document.getElementById("form-response").className = "response error";
        return false;  
    }

    document.getElementById("form-response").innerHTML = "Thank you for contacting us, " + name + ". We will get back to you soon!";
    document.getElementById("form-response").className = "response success";

    document.getElementById("contact-form").reset();
    
    return false;  
}
