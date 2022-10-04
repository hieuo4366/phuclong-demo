var kt = document.getElementsByClassName('slider')[0].clientWidth;
var sliderMain = document.getElementsByClassName('slider-main')[0];
var img = sliderMain.getElementsByTagName('img');
var max = kt * img.length;
max -= kt;
var chuyen = 0;
function Next() {
    if (chuyen < max)
        chuyen += kt;
    else (chuyen = 0)
    sliderMain.style.marginLeft = '-' + chuyen + 'px';

}
function Pre(){
    if(chuyen == 0)
    chuyen = max;
    else(chuyen -=kt)
    sliderMain.style.marginLeft = '-' + chuyen + 'px';
} 