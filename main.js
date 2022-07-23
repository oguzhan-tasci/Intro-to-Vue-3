const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant : 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [{
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity : 50
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity : 0
                },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index;
            // console.log(index); Green : 0 , Blue : 1 
        }
    },

    // The benefit of computer properties is that they cash the value. So, it stores it away and only updates when it needs to.
    // When one of its dependencies change(Boosts performance).
    // For example, if the brand were to change from 'Vue Mastery' to 'Node Mastery',
    // our computer property would receive that new dependency then recalculate and return the new value.

                // Update image & inStock using computed properties
    // Each variant now has a quantity, and our green socks have 50 while the blue socks have zero.
    //  In other words, the blue socks are out of stock.
    //  Let's refactor our code, so we're updating the image and in stock with computer properties.

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity; 
        }
    }

})