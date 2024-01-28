Vue.createApp({
    data() {
        return {
            name: 'Marius',
            age: 24,
            imageUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww'
        }
    },
    methods: {
        ageInFiveYears() {
            return this.age + 5
        },
        favoriteNumber() {
            return Math.random()
        }
    }

}).mount('#assignment');