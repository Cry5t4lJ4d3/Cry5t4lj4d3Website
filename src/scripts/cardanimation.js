const cards = document.querySelector('.card');

cards.addEventListener("mousemove", function(e){
        //鼠标位置计算
    const l = e.offsetX;
    const t = e.offsetY;
    var h = cards.offsetHeight;
    var w = cards.offsetWidth;
    var px = Math.abs(Math.floor(100/w*l));
    var py = Math.abs(Math.floor(100/h*t));
        //倾斜角度计算
    var tp = ((px-50)/1.5)
    var lp = ((py-50)/1.5)
    var tx = (tp/2)*-1;
    var ty = (lp/1.5*.5);
    //css实现
    cards.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
    //css应用
    cards.style.setProperty('--mouse-x',`${lp}%`);
    cards.style.setProperty('--mouse-y',`${tp}%`);
})
cards.addEventListener("mouseout",function(){
    cards.style.transform = "";
    cards.style.removeProperty('--mouse-x');
    cards.style.removeProperty('--mouse-y');
});