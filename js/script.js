console.log('Vue OK', Vue);

const { createApp } = Vue;
const app = createApp({
    data: () => ({
        name: 'VueToDoList',
        tasks: [
            { id: 1, done: false, text: 'Fare la spesa' },
            { id: 2, done: true, text: 'Lavare i capelli' },
            { id: 3, done: false, text: 'Comprare una marca da bollo' },
            { id: 4, done: false, text: 'Aggiornare il PC' }
        ],
        newTask: '',
    }),
    computed: {

    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push({
                    id: new Date().toISOString(),
                    done: false,
                    text: this.newTask
                });
                this.newTask = '';
            }
        },
        removeTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
    },
});

app.mount('#root');