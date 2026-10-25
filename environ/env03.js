let clockCount = 0;

let hauntedClock = {
    name: "The Haunted Clock",
    location: "The Hallway",

    times: [
        "12:00 AM",
        "3:33 AM",
        "6:15 AM",
        "9:45 PM",
        "11:59 PM",
        "2:17 AM"
    ],

    messages: [
        "The house falls silent.",
        "Someone is standing behind you.",
        "The front door unlocks itself.",
        "Footsteps echo from upstairs.",
        "The clock begins ticking backwards.",
        "A voice whispers your name."
    ]
};

$("#clock-button").click(function () {

    clockCount = clockCount + 1;

    let arrayPosition =
        (clockCount - 1) % hauntedClock.times.length;

    let currentTime =
        hauntedClock.times[arrayPosition];

    let currentMessage =
        hauntedClock.messages[arrayPosition];

    $("#clock-button").html("🕰️ " + currentTime);

    let message = "<p>Time: " + currentTime + "</p>";

    message = message +
        "<p>" + currentMessage + "</p>";

    $("#environment-output").html(message);

    console.log("Clock clicked:", clockCount);
    console.log("Current time:", currentTime);
});