gsap.registerEffect({
    name: "fade",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
    },
    defaults: { duration: 0.3 },
    extendTimeline: true,
});

document.addEventListener('DOMContentLoaded', () => {
    const botonCarta = document.querySelector('.botonCarta');

    botonCarta.addEventListener('click', () => {
        document.body.style.overflow = 'auto';
        gsap.effects.fade(botonCarta);

        if (screen.width > 737) {
            gsap.to(".sobreDerecha", { x: 1000, duration: 2.5 });
            gsap.to(".sobreIzquierda", { x: -1200, duration: 2.5 });
        } else {
            gsap.to(".sobreDerecha", { x: 300, duration: 1.5 });
            gsap.to(".sobreIzquierda", { x: -400, duration: 1.5 });
        }
    });
});