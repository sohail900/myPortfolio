export const frontendAnimation = {
    initialValue: {
        x: -30,
        opacity: 0,
    },
    inView: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.2,
        },
    },
}
export const backendAnimation = {
    initialValue: {
        x: 30,
        opacity: 0,
    },
    inView: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.2,
        },
    },
}
