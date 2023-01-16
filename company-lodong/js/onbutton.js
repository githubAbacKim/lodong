

function port1_start() {

    const box_count = document.getElementById("lottie_port1");

    if (box_count.children.length ==0) {
        var lottieAnim_port1 = lottie.loadAnimation({
            container: document.getElementById("lottie_port1"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,

            path: 'https://assets3.lottiefiles.com/packages/lf20_4KuNZDfXTS.json' // the path to the animation json
        });
        lottieAnim_port1.play();


    }else{
        box_count.innerHTML='';
        var lottieAnim_port1 = lottie.loadAnimation({
            container: document.getElementById("lottie_port1"), // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,

            path: 'https://assets3.lottiefiles.com/packages/lf20_4KuNZDfXTS.json' // the path to the animation json
        });
        lottieAnim_port1.play();
    }


}

function port2_start() {

    // const box_count = document.getElementById("lottie_port1");
    //
    // if (box_count.children.length ==0) {
    //     var lottieAnim_port1 = lottie.loadAnimation({
    //         container: document.getElementById("lottie_port1"), // the dom element that will contain the animation
    //         renderer: 'svg',
    //         loop: false,
    //         autoplay: true,
    //
    //         path: 'https://assets3.lottiefiles.com/packages/lf20_4KuNZDfXTS.json' // the path to the animation json
    //     });
    //     lottieAnim_port1.play();
    //
    //
    // }else{
    //     box_count.innerHTML='';
    // }


}