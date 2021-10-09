<template>
    <div class="Child">
     <h1>This is child component</h1>
     <h2>{{id}}</h2>
    </div>
</template>

<script>
    export default {
        name:"Child",
        data() {
            return {
             
            }
        },
        props:{
            id:String,
        }
    }
</script>

<style lang="scss" scoped>

</style>