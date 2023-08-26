<template>
  <div>
    <Home />
  <h1>{{ title }}</h1>
  <Child v-on:changeTitle="updateTitleText($event)" data1="hello kirti" />
  <!-- <LoginForm /> -->
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your  App"/> -->
  <!-- <Navbar /> -->
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Child from './components/child.vue'
import LoginForm from './components/LoginForm.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Home,
    Child,
    LoginForm
  },
  data(){
    return{
      title:"Child to parent data"
    }
  },
  methods:{
    updateTitleText(title){
    this.title = title
  }
  }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
