function greetUser() {
    const hour = new Date().getHours();
    let message = "Hi there!"

    if (hour < 12) {
        message = "Good morning!";
    } else if (hour < 18) {
        message = "Good afternoon!";
    } else { message = "Good evening!";
    }


    document.getElementById("greet").innerText = message;
}
window.onload = greetUser; /* JS to greet the user based on time of day. Only used in index*/