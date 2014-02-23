var logo = Snap.select('#logo').attr({ opacity: 0 });

window.onload = function () {

    var parts      = [
            ['circle', 0, 170],
            ['right', -5, 0],
            ['left', 5, 0],
            ['combined', 0, 0]
        ],
        components = [],
        i          = 0,
        k          = 0;

    for (i = 0; i < parts.length; i++) {

        var el      = parts[i],
            elid    = el[0],
            element = logo.select('#' + elid);

        element.attr({
            opacity: 0,
            transform: 't' + (el[1]) + ',' + (el[2])
        });

        components.push(element);

    }

    logo.attr({ opacity: 1 });

    setTimeout(animateLogo, 100);

    function animateLogo() {

        if (!components[k]) {
            return;
        }

        components[k].animate({
            transform: 't' + (0) + ',' + (0),
            opacity: 1
        }, 250, mina.easeout);

        setTimeout(animateLogo, 150);
        k++;

    }

};
