const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        remove(num) {
            this.counter = this.counter - num;
        },
        setName(event) {
            this.name = event.target.value;
        },
        submitInput() {
            alert('Submitted!');
        },
        checkKeyPress(event) {
            if (event.key === 'a') {
                this.confirmInput()
            }
        },
        confirmInput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount('#events');
