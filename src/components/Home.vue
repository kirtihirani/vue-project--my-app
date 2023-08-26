<template>
<div class="home">
    <h1> this is home component</h1>
    <div style="width: 50%;height: 70%;padding: 10px; background-color: bisque;float:left; color: rebeccapurple;">
        <Users />
        <Products />
    </div>
    <div style="width: 50%;height: 70% ;padding: 10px;background-color: bisque;float:left; color: rebeccapurple;">
        <router-link to="/LoginForm">Login Here</router-link><br/><br/>
        <router-view></router-view>
    </div>
   
</div>

</template>
<script>
import Products from './Products.vue'
import Users from "./Users.vue"

export default {
    name:"Home",
    components:{
        Users,
        Products
    }
}
</script>

<style scoped>
.home{
    margin-top: 20%;
    background-color: aqua;
    height: 400px;
    padding: 10px;
}
</style>