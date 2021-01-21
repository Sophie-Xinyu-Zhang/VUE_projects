<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Nav />
    <Blogs />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Blogs from './Blogpost'

export default {
  name: 'app',
  components:{
    Nav: Navbar,
    Blogs
  },
  data () {
    return {
      title: 'My first VUE app, wooo ;)',

    }
  },
  methods: {

  }
}
</script>

<style>
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
