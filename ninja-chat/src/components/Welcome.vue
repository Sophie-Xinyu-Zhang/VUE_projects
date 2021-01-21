<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class = "teal-text">Welcome</h2>
        <form @submit.prevent = "enterChat">
          <label for="name">Enter your name: </label>
          <input type="text" name = "name" v-model = "name">
          <p v-if = "feedback" class = "red-text">{{ feedback }}</p>
          <button class = "btn teal">Enter chat</button>
        </form>
        {{data}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null,
      data: null
    }
  },
  methods:{
    async enterChat(){
      console.log('test')
      await axios.post(`http://localhost:3000/add`,
        {
          'task': 'sophie go buy justin bilibili',
        }
      )
      .then(response => {
      // JSON responses are automatically parsed.
        console.log(response.data)
        this.data = response.data
      })
      .catch(e => console.log(e))

      console.log("sup after api")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.welcome{
  max-width: 400px;
  margin-top: 100px;
}
.welcome h2{
  font: 3em;
}
.welcome button{
  margin:30px auto;
}
</style>
