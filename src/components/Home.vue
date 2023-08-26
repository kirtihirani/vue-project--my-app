<template>
<div class="home">
    <h1> this is home component</h1>
    <Users />
    <Products />
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