export const cardAnimation = {
    initialValue: {
        y: 40,
        opacity: 0,
    },
    inView: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 2,
            bounce: 0.3,
        },
    },
}
