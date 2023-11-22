let contextMenu = document.querySelector(".content");
let menu = document.getElementsByClassName("menu-list");
let submenu = document.getElementsByClassName("sub-menu-list");
let childsubmenu = document.getElementsByClassName("child-sub-menu-list");
let mainMenu = document.querySelector(".main-menu");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();

  let x = e.offsetX,
    y = e.offsetY,
    winwidth = window.innerWidth,
    winheight = window.innerHeight,
    cmwidth = contextMenu.offsetWidth,
    cmheight = contextMenu.offsetHeight,
    menuLength = menu.length,
    subMenuLength = submenu.length,
    childSubMenuLength = childsubmenu.length;

  if (x > winwidth - cmwidth - 450) {
    console.log(true);
    for(let i = 0; i < menuLength; i++){
      menu[i].style.left = "-150px";
    }
    for(let i = 0; i < subMenuLength; i++){
      submenu[i].style.left = "-150px"
    }
    for(let i = 0; i < childSubMenuLength; i++){
      childsubmenu[i].style.left = "-150px"
    }
  } else {
    for(let i = 0; i < menuLength; i++){
      menu[i].style.right = "-150px";
      menu[i].style.left = "";
    }
    for(let i = 0; i < subMenuLength; i++){
      submenu[i].style.right = "-150px";
      submenu[i].style.left = "";
    }
    for(let i = 0; i < childSubMenuLength; i++){
      childsubmenu[i].style.right = "-150px";
      childsubmenu[i].style.left = "";
    }
  }

  x = x > winwidth - cmwidth ? winwidth - cmwidth : x;
  y = y > winheight - cmwidth ? winheight - cmheight : y;

  contextMenu.style.left = `${x}px`;
  contextMenu.style.top = `${y}px`;
  contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => {
  contextMenu.style.visibility = "hidden";
});