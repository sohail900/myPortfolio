export const cardAnimation = {
    initialValue: {
        x: -10,
        opacity: 0.2,
    },
    inView: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 3,
            bounce: 0.4,
        },
    },
}
