export const aboutSecAnimation = {
    initialValue: {
        x: -20,
        opacity: 0.8,
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
