const menuItems = document.querySelectorAll(".menui");


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }

    myTopnav.addEventListener("click", toggleMenu);
  }

  menuItems.forEach( 
    function(menui) { 
      menui.addEventListener("click", myFunction);
    }
  )

/*
const menu = document.querySelector(".right");

const hamburger= document.querySelector(".iconhamburguer");

function toggleMenu2() {
    
  if (menu.classList.contains("right")) {
    menu.classList.remove("right");
  } else {
    menu.classList.add("right");
  }
}

hamburger.addEventListener("click", toggleMenu2);

menuItems.forEach( 
  function(menui) { 
    menui.addEventListener("click", toggleMenu2);
  }
) */