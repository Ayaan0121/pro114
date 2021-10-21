function setup(){
    Canvas= createCanvas(525 , 410);
    Canvas.position(515 , 135);
  //  Canvas.center();
}

function click_snapshot() {
    save('filter.png');
}