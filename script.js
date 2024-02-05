window.onload = function () {
  var nobtn = document.getElementById("No");
  var yesbtn = document.getElementById("Yes");
  var img = document.querySelector("#center img");

  var noResponses = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  nobtn.addEventListener("click", function () {
    var yesStyle = window.getComputedStyle(yesbtn);
    var noStyle = window.getComputedStyle(nobtn);
    var yesWidth = parseInt(yesStyle.width);
    var yesHeight = parseInt(yesStyle.height);
    yesbtn.style.width = yesWidth + 50 + "px";
    yesbtn.style.height = yesHeight + 50 + "px";
    var noWidth = parseInt(noStyle.width);
    var noHeight = parseInt(noStyle.height);
    if (noWidth > 5 && noHeight > 5) {
      nobtn.style.width = noWidth - 5 + "px";
      nobtn.style.height = noHeight - 5 + "px";
    }
    var randomIndex = Math.floor(Math.random() * noResponses.length);
    alert(noResponses[randomIndex]);
  });

  yesbtn.addEventListener("click", function () {
    img.src =
      "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    alert("I love you Kaitlyn <3");
  });
};
