<template>
  <main>
    <header>
      <img src="./assets/logo-ipda.png" alt="logo-ipda">
      <h1>MMP TASKS</h1>
      
    </header>
    <div class="new-task-form">
      <TaskForm />
    </div>
    
    <!-- filter  -->
    <nav class="filter">
      
      <button @click=" filter = 'all'">ALL Tasks</button>
      <button @click=" filter = 'fav'">Favorite Tasks </button>
    </nav>
    <!-- Task list  -->

    <div class="task-list" v-if="filter === 'all' ">
      <h3> ALL TASK LIST ({{ taskStore.taskCount }})</h3>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />

      </div>
    </div>

    <!-- Fav Task list  -->
    <div class="task-list" v-if="filter === 'fav' ">
      <h3>FAVORITE TASK LIST ({{ taskStore.favoriteCount }})</h3>
      <div v-for="task in taskStore.favorite" :key="task.id">
        <TaskDetails :task="task" />

      </div>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { useTaskStore } from './stores/TaskStore';

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')

    return { taskStore,filter }
  }


}
</script>
