import { defineStore } from "pinia";


export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        name: "kacem",
        tasks: [
            { id: 1, title: "Creer un adhérent", isFav: true },
            { id: 2, title: "Envoyer la demande d'export", isFav: true },
            { id: 3, title: "COMOP MMP ", isFav: false },
            { id: 4, title: "Test en Préprod ", isFav: true }

        ]

    }),
    getters: {
        favorite() {
            return this.tasks.filter((t) => t.isFav)
        },
        favoriteCount() {
            return this.favorite.length
        },
        taskCount() {
            return this.tasks.length
        }
    },
    actions: {
        // deleteTask(id) {
        //     filteredTasks = this.tasks.filter( (task) => task.id !== id)
        //     this.tasks=filteredTasks
        // }
        addTask(task) {
            this.tasks.push(task)
        },
        toggleFav(id) {
            const favTask = this.tasks.find(task => task.id === id)
            favTask.isFav = !favTask.isFav

        },
        deleteTask(id) {
            const tasks = this.tasks.filter(t => t.id !== id)
            this.tasks = tasks
            console.log("deleted")
        }




    }
})




