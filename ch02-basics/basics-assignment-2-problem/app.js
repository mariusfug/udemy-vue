const app = Vue.createApp({
    data() {
        return {
            alertText: 'This is an awesome alert!!!',
            inputText: '',
            confirmedInputText: ''
        }
    },
    methods: {
        showAlert() {
            alert(this.alertText)
        },
        setInputText(event) {
            this.inputText = event.target.value
        },
        confirmInputText(event) {
            this.confirmedInputText = this.inputText
        }
    }
})

app.mount('#assignment')