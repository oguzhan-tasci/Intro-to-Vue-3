const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            premium: true
        }
    },
    methods: {
        updateCart(){
            this.cart += 1;
        }
    }
})

// We already know that 'props' are a way to pass data down into a component,
// but what about when something happens within that component, like a 'button click' ? 
// How do we let other parts of our app know that event happened ?
// The answer is to 'emit' that event, telling the parent that it happened.
