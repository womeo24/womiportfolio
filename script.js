// function clickMenu() {
//   const x = document.getElementById("myLinks");
//   x.style.display = x.style.display === "block" ? "none" : "block";
//   console.log("clickMenu yes the button was clicked");
// }



function clickMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    
    console.log("clickMenu yes the button was clicked");
  }