var play = true;
function Play() {
    if (play)
        $('.carousel').carousel('pause');
    else
        $('.carousel').carousel('cycle');

    play = !play;
};

function Left() {
    $('.carousel').carousel('prev');
}

function Right() {
    $('.carousel').carousel('next');
}