clickableElements = document.querySelectorAll('.clickable')
planes = document.querySelectorAll('.planes')
cursor = document.querySelector('#cursor')
sky = document.querySelector('#sky')

var height = [4, 8, 8, 3.5, 3, 15];
var width = [4, 8, 8, 3.5, 3, 15];

function changeScene(scene_id) {
  if (scene_id == 1){
    sky.setAttribute("src", 'https://cdn.glitch.global/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/first_location.jpg?v=1710871787049')
    for (var i = 0; i < planes.length; i++) {
         if (i==0 || i==1){
           planes[i].setAttribute("height",height[i]);
           planes[i].setAttribute("width",width[i]);
         }else{
           planes[i].setAttribute("height",'0');
           planes[i].setAttribute("width",'0');
         }
    };
  }else if (scene_id == 2){
    sky.setAttribute("src", 'https://cdn.glitch.global/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/second_location.jpg?v=1710872708828')
    for (var i = 0; i < clickableElements.length; i++) {
         if (i==2 || i==3){
           planes[i].setAttribute("height",height[i]);
           planes[i].setAttribute("width",width[i]);
         }else{
           planes[i].setAttribute("height",'0');
           planes[i].setAttribute("width",'0');
         }
    };
  }else if (scene_id == 3){
    sky.setAttribute("src", 'https://cdn.glitch.global/ec91ced5-6ef7-497a-a10e-8f8f25b35ddc/third_location2.jpg?v=1710878611746')
    for (var i = 0; i < clickableElements.length; i++) {
         if (i==4 || i==5){
           planes[i].setAttribute("height",height[i]);
           planes[i].setAttribute("width",width[i]);
         }else{
           planes[i].setAttribute("height",'0');
           planes[i].setAttribute("width",'0');
         }
    };
  }else{
    alert('error')
  }
}

function changeCursorColor(elements){
  elements.forEach(element => {
    element.addEventListener('mouseenter', function () {
      cursor.setAttribute("color",'blue')
    });
    element.addEventListener('mouseleave', function () {
      cursor.setAttribute("color",'black')
    });
  });
  
}

changeCursorColor(clickableElements)


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