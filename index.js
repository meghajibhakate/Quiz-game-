
/**
 * @desc Toggle dropdown menu
 */
function eventsClick(){
    var events=document.getElementById("drop-events")

    if (events.style.display == "none") {
        events.style.display = "flex";
    } else {
        events.style.display = "none";
    } 
}


/**
 * @desc Toggle dropdown menu
 */
function aboutClick(){
    var about=document.getElementById("drop-about")

    if (about.style.display == "none") {
        about.style.display = "flex";
    } else {
        about.style.display = "none";
    } 
}



// Functions for Responsive Screen

/**
 * @desc Toggle hamburger menu
 */
function myFunction() {
     // check drop style display is none
     var hamburger=document.getElementById("drop")
    if (hamburger.style.display == "none") {    //dropdown display none
        hamburger.style.display = "flex";       //dropdown display flex 
    }   
    else {
        hamburger.style.display = "none";
    }
}


// create anFunction for Responsive Screen 
/**
 * @desc Toggle dropdown menu
 */
function eventClick(){
    var event=document.getElementById("drop-newevent")
    if (event.style.display == "none") {
        event.style.display = "flex";
    } else {
        event.style.display = "none";
    } 
}



 /**
 * @desc Toggle dropdown menu
 */
function newaboutClick(){
    var newabout=document.getElementById("drop-newabout")
    if (newabout.style.display == "none") {
        newabout.style.display = "flex";
    } else {
        newabout.style.display = "none";
    } 
}









// /**
//  * @param {number} index - index of tasklist
//  * description: 
//  * @return {number} incrementing index
//  */
// function btnClick(index){
//     console.log(index)
//     return index++
// }