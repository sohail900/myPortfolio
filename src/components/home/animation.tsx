export const homeAni = {
    initialValue: {
        x: -100,
        opacity: 0,
    },
    inView: {
        x: 0,
        opacity: 1,

        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.1,
        },
    },
}
