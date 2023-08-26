<template>
    <div>
        <input type="text" v-model="loginDetails.username" placeholder="enter username" ><br><br>
        <input type="password" v-model="loginDetails.password" placeholder="enter passowrd"><br><br>
        <button v-on:click="getLoginDetails">Submit</button>
    </div>
</template>
<script>
export default {
    name:"LoginForm",
    data(){
        return{
            loginDetails:{
            username:null,
            password:null
        }
        }
        
    },
    methods:{
        getLoginDetails(){
            console.log(this.loginDetails)
        }
    }
}
</script>