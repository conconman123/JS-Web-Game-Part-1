function newImage(imagePath, left, bottom){
    let object = document.createElement('img');
    object.src = imagePath;
    object.style.position = 'fixed';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
   return object
}
function newItem(imagePath, left, bottom){
    let object = newImage(imagePath, left, bottom)

    object.addEventListener('dblclick', function(){
        object.remove();
    })
}
function makeBackground(imagePath, left, bottom){
    let object = document.createElement('img');
    object.src = imagePath;
    object.style.position = 'fixed';
    object.style.zIndex = '-1';
    object.style.left = left + 'px';
    object.style.bottom = bottom + 'px';
    document.body.append(object);
   return object
}



newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);

newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);

for(let x = 0; x < (window.innerHeight * .6); x+=100){
    for(let i = 0; i < window.innerWidth; i+=100){
     makeBackground('assets/grass.png', i, x)
    }
}
for(let x = window.innerHeight; x > (window.innerHeight * .6); x-=100){
    for(let i = 0; i < window.innerWidth; i+=100){
     makeBackground('assets/sky.png', i, x)
    }
}