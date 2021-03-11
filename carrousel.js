$(function () {

    var slider = $('#slider'),
        img = $('#slider img');
        indexImg = img.length - 1,
        i = 0,
        currentImg = img.eq(i);

    slider.prepend('<button class="prev">prev</button> <button class="next">next</button>');

    img.css('display', 'none');
    currentImg.css('display', 'block');

    $('.next').on('click', function (e) {

        e.preventDefault();
        i++;

        if (i <= indexImg) {
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display', 'block');
        } else {
            i =  indexImg;
        }
    });

    $('.prev').on('click', function (e) {

        e.preventDefault();
        i--;
        
        if (i >= 0) {
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display', 'block');
        } else {
            i = 0;
        }
    });

})