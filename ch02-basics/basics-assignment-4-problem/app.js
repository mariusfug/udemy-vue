const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            hideParagraph: false,
            backgroundColor: ''
        }
    },
    computed: {
        showParagraphClasses() {
            return {
                user1: this.inputClass === 'user1',
                user2: this.inputClass === 'user2',
                visible: !this.hideParagraph,
                hidden: this.hideParagraph
            }
        }
    },
    methods: {
        toggleParagraph() {
            this.hideParagraph = !this.hideParagraph
        }
    }
})

app.mount('#assignment')