var fb = document.querySelector('.facebook h2')
var youtube = document.querySelector('.youtube h2')
var tiktok = document.querySelector('.tiktok h2')


function count(el, to) {
    var count = 0;
    var time = 270;
    var step = to / time

    let counting = setInterval(() => {

        count += step
        if (count > to) {
            clearInterval(counting)
            el.innerText = to
        } else {
            el.innerText = Math.round(count)
        }
    }, 1);
}

count(fb, 3300)
count(youtube, 1000)
count(tiktok, 2468)
