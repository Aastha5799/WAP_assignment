// Selecting elements using id
const Name = document.getElementById("name");       
const roll = document.getElementById("roll");
const address = document.getElementById("address");

// Selecting elements using class
const btn_output = document.querySelector(".btn_output");
const btn_submit = document.getElementById("btn_submit");
const entryform = document.getElementById("entryform");

// Output sections
const transcript = document.querySelector("aside");
const show_data = document.querySelector(".show_data");

/* -------------------- localStorage COUNTER ----------------------- */

let i = parseInt(localStorage.getItem("counter")) || 0;

/* -------------------- FUNCTION IMPLEMENTATIONS -------------------- */

// Function to dynamically render UI in transcript section
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}

// Function to dynamically render UI in output section
function ShowOutput(obj, j) {
    show_data.innerHTML += `
        <div class="border">
            <h2>User ${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}

/* -------------------- COMMON / REDUNDANT FUNCTION -------------------- */

function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>

            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>

            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}

/* -------------------- EVENT LISTENERS -------------------- */

// Handle form submission
entryform.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload
    
    // Validate roll number (must be a non-negative number)
    const rollNum = Number(roll.value);
    if (isNaN(rollNum) || rollNum < 0) {
        showTopAlert("roll cannot be negative");
        roll.focus();
        return;
    }

    // Create user object with current form values
    const user_object = {
        data_name: Name.value,
        data_roll: rollNum,
        data_address: address.value,
    };
    
    // Update transcript with current entry
    UpdateTranscript(user_object);
    
    // Store data in localStorage
    localStorage.setItem(`user${i}`, JSON.stringify(user_object));
    
    // Increment counter
    i++;
    localStorage.setItem("counter", i);
    
    // Clear form
    entryform.reset();
});

// Top alert helper
function showTopAlert(message, timeout = 4500) {
    const container = document.getElementById("top-alert");
    if (!container) {
        // fallback to native alert
        alert(message);
        return;
    }

    const msg = container.querySelector(".top-alert__message");
    const close = container.querySelector(".top-alert__close");

    msg.textContent = message;
    container.classList.add("show");

    // clear any previous timer
    if (container._timer) clearTimeout(container._timer);

    container._timer = setTimeout(() => {
        container.classList.remove("show");
    }, timeout);

    // close button behavior
    close.onclick = () => {
        container.classList.remove("show");
        if (container._timer) clearTimeout(container._timer);
    };
}

// Handle show output button
btn_output.addEventListener("click", function() {
    // Clear previous output
    show_data.innerHTML = "";
    
    // Get current counter value
    const total = parseInt(localStorage.getItem("counter")) || 0;
    
    // Display all stored users
    for (let j = 0; j < total; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`));
        if (user_retrieve) {
            ShowOutput(user_retrieve, j + 1);
        }
    }
});