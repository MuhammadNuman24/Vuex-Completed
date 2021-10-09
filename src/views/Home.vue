<template>
  <div class="home">
    <HelloWorld msg="Welcome to My Vue App"/>

    <div v-for="hero in heroes" :key=hero.fName>
      <p>{{hero.fName}}</p>
      <router-link :to="{name: 'Child', params:{id: hero.fName} }">Go to child</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
   data() {
     return {
       heroes:[
        {fName:'Sufyan',lName:'Khan'},
        {fName:'Numan',lName:'Khan'},
        {fName:'Abdulllah',lName:'Khan'},
       ]
     }
   },
  
}

</script>
