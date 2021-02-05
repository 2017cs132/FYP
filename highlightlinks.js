let clicked = false;

function test7(e) {
  let link = document.getElementsByTagName("a");

  // loop through it, since its an  HTMLCollection
  if (!clicked) {
    for (let i = 0; i < link.length; i++) {
      if (link[i].href.includes("")) {
        //link[i].classList.add("highlight");

        // change the link background color
        link[i].style.backgroundColor = "#1560bd";

        // change the text color
        link[i].style.color = "#ffffff";

        // change the font weight
        link[i].style.fontWeight = "bold";
      }
    }
    clicked = !clicked;
  } else {
    for (let i = 0; i < link.length; i++) {
      if (link[i].href.includes("")) {
        //link[i].classList.add("highlight");

        // change the link background color
        link[i].style.backgroundColor = "";

        // change the text color
        link[i].style.color = "";

        // change the font weight
        link[i].style.fontWeight = "";
      }
    }
    clicked = !clicked;
  }
}
// function test8(event) {
//   let link = document.getElementsByTagName("a");
//   for (let i = 0; i < link.length; i++) {
//     /* Check if the clicked target has the highlighted class. */
//     if (link[i].classList.contains("highlight")) {
//       /* If not, remove the class from any element on the page. */
//       link[i].classList.remove("highlight");
//     }
//   }
// }
