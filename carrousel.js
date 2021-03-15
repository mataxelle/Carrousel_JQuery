$(function () {

    var slider = $('#slider'),
        img = $('#slider img');
        indexImg = img.length - 1,
        i = 0, // Initialisation compteur
        currentImg = img.eq(i);  // Ciblier l'image courante, qui possède l'index i (0 pour l'instant)

    slider.prepend('<i id="nav-prev" class="las la-chevron-left"></i><i id="nav-next" class="las la-chevron-right"></i>');

    var btnP = $('#nav-prev'),
        btnN = $('#nav-next');

    btnP.css({
        
    });

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

    function slide(){
        setTimeout(function() {
            if (i < indexImg) {  // Si compteur inférieur au dernier index
                i++; // on l'incrémente
            } else { // sinon, remis à 0 (première image)
                i = 0;
            }

            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.css('display', 'block');

            slide(); //on relance la fonction
        }, 2000);
    }

    slide();

})