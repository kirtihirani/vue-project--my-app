<template>
    <div>
        <button v-on:click="updateTitle">Update title</button>
        <h2>{{ data1 }}</h2>
    </div>
</template>
<script>

export default {
   name:"Child",
   props:{
    data1:String,
   },
   methods:{
    updateTitle(){
        this.$emit('changeTitle','props has been passed')
    }
   }
}
</script>
