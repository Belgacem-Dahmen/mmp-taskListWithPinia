<template>
    <div class="task">
       <div>
        <h3 v-if="editMode==false">{{ task.title}}</h3>
        <input class="" type="text" v-model="task.title" v-else>
       
        
        
        
    </div>
        <div class="icons">
            <i 
            class="material-icons"
            @click ="editMode = !editMode"> edit</i>
            <i 
            class="material-icons"
            @click ="taskStore.deleteTask(task.id)"> delete</i>
            <i 
            class="material-icons"
            :class="{ active : task.isFav}"
            
            
            @click="taskStore.toggleFav(task.id)"> favorite</i>
        </div>    
    </div>
</template>

<script>
import { ref } from 'vue';
    import { useTaskStore } from '../stores/TaskStore';
    export default {
        
        props : ['task'] ,
        setup() {
            const taskStore = useTaskStore()
            const editMode = ref(false)
            return { taskStore, editMode }
        }
    }
</script>