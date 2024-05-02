export const aboutSecAnimation = {
    initialValue: {
        x: -40,
        opacity: 0.5,
    },
    inView: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.3,
        },
    },
}
export const aboutImageAnimation = {
    initialValue: {
        x: 40,
        opacity: 0.5,
        scale: 0.9,
    },
    inView: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.3,
        },
    },
}
