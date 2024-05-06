var clickableElements = document.querySelectorAll('.clickable')
var planes = document.querySelectorAll('.planes')
var cursor = document.querySelector('#cursor')
var sky = document.querySelector('#sky')

var height = [4, 8, 6, 8, 3.5, 4, 2.5, 19, 4, 20, 4, 19];
var width = [4, 8, 7, 8, 3.5, 5, 2.5, 19, 11, 18, 11, 19];

function changeScene(scene_id) {
  if (scene_id == 1){
    sky.setAttribute("src", 'https://cdn.glitch.global/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/first_location.jpg?v=1710871787049')
    for (var i = 0; i < planes.length; i++) {
      if (i==0 || i==1 || i==2){
        planes[i].setAttribute("height",height[i]);
        planes[i].setAttribute("width",width[i]);
      }else{
        planes[i].setAttribute("height",'0');
        planes[i].setAttribute("width",'0');
      }
    };
  }else if (scene_id == 2){
    sky.setAttribute("src", 'https://cdn.glitch.global/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/second_location.jpg?v=1710872708828')
    for (var i = 0; i < planes.length; i++) {
      if (i==3 || i==4 || i==5){
        planes[i].setAttribute("height",height[i]);
        planes[i].setAttribute("width",width[i]);
      }else{
        planes[i].setAttribute("height",'0');
        planes[i].setAttribute("width",'0');
      }
    };
  }else if (scene_id == 3){
    sky.setAttribute("src", 'https://cdn.glitch.me/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/IMG2.jpg?v=1713975081843')
    for (var i = 0; i < planes.length; i++) {
      if (i==6 || i==7 || i==8 || i==9 || i==10 || i==11){
        planes[i].setAttribute("height",height[i]);
        planes[i].setAttribute("width",width[i]);
      }else{
        planes[i].setAttribute("height",'0');
        planes[i].setAttribute("width",'0');
      }
    };
  }else{
    alert('error');
  }
}


AFRAME.registerComponent('one-location',{
  schema: { },
  init: function (){
    var plane = this.el
    plane.addEventListener('mouseenter', function () {
      plane.addEventListener('click', function () {
        changeScene(1)
      });
    });
  }
})


AFRAME.registerComponent('two-location',{
  schema: { },
  init: function (){
    var plate = this.el
    plate.addEventListener('mouseenter', function () {
      plate.addEventListener('click', function () {
        changeScene(2)
      });
    });
  }
})


AFRAME.registerComponent('three-location',{
  schema: { },
  init: function (){
    var plate = this.el
    plate.addEventListener('mouseenter', function () {
      plate.addEventListener('click', function () {
        changeScene(3)
      });
    });
  }
})

function openInstructions() {
  var instructionsPopup = document.getElementById("instructionsPopup");
  instructionsPopup.style.display = "block";    
  setTimeout(function() {
    instructionsPopup.style.opacity = "1";
    instructionsPopup.style.transform = "translate(0%, 0%)";
  }, 100);  
}


function closeInstructions() {
  var instructionsPopup = document.getElementById("instructionsPopup");
  instructionsPopup.style.opacity = "0";
  instructionsPopup.style.transform = "translate(-100%, 0%)";
  setTimeout(function() {
    instructionsPopup.style.display = "none";
  }, 300);
  
}

function showInfo(item) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var allInfo = xhr.responseText.split('\n');
        var infoName;
        var infoImage;
        var infoDscr;
        var infoPrice;

        infoName = allInfo[(item-1)*10];
        infoDscr = allInfo[(item-1)*10+1];
        infoPrice = allInfo[(item-1)*10+2];
        infoImage = allInfo[(item-1)*10+3];

        document.getElementById('infoName').innerText = infoName;
        document.getElementById('infoPrice').innerText = infoPrice;
        document.getElementById('infoDscr').innerText = infoDscr;
        document.getElementById('infoImage').src = infoImage;
      }
      else {
        console.error('Ошибка загрузки информации о товаре');
      }
    }
  };
  xhr.open('GET', 'drinks.txt', true); 
  xhr.send();
  
  var menublock=document.getElementById('drinksMenu');
  var inf=document.getElementById('info');
  
  inf.style.display = 'block';
  menublock.style.opacity = '0';
  document.getElementById('closeMenu').style.opacity = "0";
  setTimeout(function() {
    inf.style.opacity = "1";
    menublock.style.display = 'none';
    document.getElementById('closeMenu').style.display = "none";
  }, 600);          
}

// Функция для закрытия блока с информацией
function closeInfo() {
  
  var menublock=document.getElementById('drinksMenu');
  var inf=document.getElementById('info');
  
  inf.style.opacity = "0";
  menublock.style.display = 'block';
  document.getElementById('closeMenu').style.display = 'block';
  setTimeout(function() {
    inf.style.display = 'none';
    menublock.style.opacity = '1';
    document.getElementById('closeMenu').style.opacity = "1";
  }, 600);
}


function closerMenu(){
  var menus = document.querySelectorAll('.menu');

  var instr = document.getElementById('start');
  
  menus.forEach(function(menu) {
    menu.style.opacity = '0';
    document.getElementById('closeMenu').style.opacity = "0";
    instr.style.opacity = "1";
    setTimeout(function() {
      menu.style.display = 'none';
      document.getElementById('closeMenu').style.display = "none";
      instr.style.display = "block"; 
    }, 300);
  });
  
  for (var i = 0; i < planes.length; i++) {
    if (i==6 || i==7 || i==8 || i==9 || i==10 || i==11){
      planes[i].setAttribute("height",height[i]);
      planes[i].setAttribute("width",width[i]);
    }
    else{
      planes[i].setAttribute("height",'0');
      planes[i].setAttribute("width",'0');
    }
  };
}

function openMenu(menu) {
  var menus = document.querySelectorAll('.menu');
  var instr = document.getElementById('start');
  menus.forEach(function(menu) {
    menu.style.display = 'none';
  });

  document.getElementById(menu + 'Menu').style.display = "block";
  document.getElementById('closeMenu').style.display = "block";
  instr.style.opacity = "0";
  
  setTimeout(function() {
    document.getElementById(menu + 'Menu').style.opacity = "1";
    document.getElementById('closeMenu').style.opacity = "1";
    instr.style.display = "none"; 
  }, 300);
  
  var planes = document.querySelectorAll('.planes')
  planes.forEach(function(plane) {
    plane.setAttribute("height",'0');
    plane.setAttribute("width",'0');
  });
  
  planes[11].setAttribute("height",height[11]);
  planes[11].setAttribute("width",width[11]);
  planes[9].setAttribute("height",height[9]);
  planes[9].setAttribute("width",width[9]);
}


AFRAME.registerComponent('open-menu-drinks',{
  schema: { },
  init: function (){
    var plate = this.el
    plate.addEventListener('mouseenter', function () {
      plate.addEventListener('click', function () {
        openMenu('drinks')
      });
    });
  }
})


AFRAME.registerComponent('open-menu-food',{
  schema: { },
  init: function (){
    var plate = this.el
    plate.addEventListener('mouseenter', function () {
      plate.addEventListener('click', function () {
        openMenu('food')
      });
    });
  }
})
function toggleMenu() {
    var menuContainer = document.getElementById("menuContainer");
    let paragraph = document.querySelector('.hamburger-menu');
    if (!menuContainer.classList.contains('open')) {
        menuContainer.classList.add('open');
        paragraph.style.opacity = 0;
        setTimeout(function() {
          paragraph.innerHTML = '&#215;';
          paragraph.style.fontSize = '30px';
          paragraph.style.top = '10px';
          paragraph.style.opacity = 1;
        }, 100);

    } else {
        menuContainer.classList.remove('open');
        paragraph.style.opacity = 0;
        setTimeout(function() {
          paragraph.innerHTML = '&#9776;';
          paragraph.style.fontSize = '20px';
          paragraph.style.top = '13px';
          paragraph.style.opacity = 1;
        }, 100);
    }
}