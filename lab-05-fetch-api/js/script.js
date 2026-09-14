function submitRegistration() {

    let name = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("studentEmail").value;
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }

    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };

    let jsonData = JSON.stringify(registration);

    localStorage.setItem("registration", jsonData);

    document.getElementById("jsonOutput").textContent = jsonData;

    message.textContent = "Registration saved successfully.";
}


function showSavedRegistration() {

    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);

    output.textContent =
        registration.name + " registered for " + registration.workshop + ".";
}


function clearRegistration() {

    localStorage.removeItem("registration");

    document.getElementById("jsonOutput").textContent =
        "No registration saved yet.";

    document.getElementById("savedMessage").textContent =
        "Saved registration cleared.";
}
function submitRegistration() {

    let name = document.getElementById("studentName").value;
    let studentId = document.getElementById("studentId").value;
    let email = document.getElementById("studentEmail").value;
    let workshop = document.getElementById("workshop").value;
    let message = document.getElementById("formMessage");

    if (name === "") {
        message.textContent = "Please enter your full name.";
        return;
    }

    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    if (workshop === "") {
        message.textContent = "Please select a workshop.";
        return;
    }

    let registration = {
        name: name,
        studentId: studentId,
        email: email,
        workshop: workshop
    };

    let jsonData = JSON.stringify(registration);

    localStorage.setItem("registration", jsonData);

    document.getElementById("jsonOutput").textContent = jsonData;

    message.textContent = "Registration saved successfully.";
}


function showSavedRegistration() {

    let savedData = localStorage.getItem("registration");
    let output = document.getElementById("savedMessage");

    if (savedData === null) {
        output.textContent = "No saved registration was found.";
        return;
    }

    let registration = JSON.parse(savedData);

    output.textContent =
        registration.name + " registered for " + registration.workshop + ".";
}


function clearRegistration() {

    localStorage.removeItem("registration");

    document.getElementById("jsonOutput").textContent =
        "No registration saved yet.";

    document.getElementById("savedMessage").textContent =
        "Saved registration cleared.";
}
async function loadWorkshop() {

    document.getElementById("loadMessage").textContent =
        "Loading...";

    const response =
        await fetch("data/workshop.json");


    if (response.status === 200) {

        const workshop =
            await response.json();


        document.getElementById("workshopTitle").textContent =
            workshop.title;

        document.getElementById("workshopDate").textContent =
            workshop.date;

        document.getElementById("workshopVenue").textContent =
            workshop.venue;

        document.getElementById("workshopSeats").textContent =
            workshop.seats;
            document.getElementById("workshopDuration").textContent =
    workshop.duration;

        document.getElementById("loadMessage").textContent =
            "Workshop data loaded successfully.";

    } else {

        document.getElementById("loadMessage").textContent =
            "Could not load workshop data.";

    }
}
async function loadSampleUser() {
    const response =
        await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (response.status === 200) {
        const user = await response.json();

        document.getElementById("apiUser").textContent =
            user.name + " - " + user.email;
    } else {
        document.getElementById("apiUser").textContent =
            "Could not load API data.";
    }
}