const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskInput: '',
            showList: true
        }
    },
    computed: {
      listClasses() {
          return {
              visible: this.showList,
              hidden: !this.showList
          }
      }
    },
    methods: {
        addTask() {
            this.tasks.push(this.taskInput)
        },
        toggleShowList() {
            this.showList = !this.showList
        }
    }
});

app.mount('#assignment');