//switch
let workday = "Monday";

switch (workday) {

    case "Monday":
        console.log("Today is start of the week");
        break;

    case "Friday":
        console.log("End of the week.");
        break;

    case "Saturday":
    case "Sunday":
        console.log("Its the weekend.");
        break;

    default:
        console.log("Just another day...");
}
