<template>
    <form @submit.prevent="handleSubmit">
        <input 
        type="text" 
        placeholder="i need to ..." 
        v-model="taskText">
        <button> Add </button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
    export default {
        setup(){
            const taskStore = useTaskStore();
            const taskText = ref('');
            const handleSubmit = () => {
                if (taskText.value.length > 5 ) {
                    taskStore.addTask( { 
                        id: Math.floor(Math.random() * 50000), 
                        title: taskText.value , 
                        isFav: false })
                        taskText.value=""
                }
                
                    
            }



            return {taskStore, taskText , handleSubmit}
        }
    }
</script>