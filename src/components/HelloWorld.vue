<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-if="user">
      <div v-for="use in user" :key="use.id">
        <h1>{{ use.Name }}</h1>
        <p>{{ use.title }}</p>
      </div>
        <!-- <div>
          <label for="UName">Enter Name</label><br />
          <input type="text" id="UName" v-model="User.Name" /><br /><br />
          <label for="title">Enter Title</label><br />
          <input type="text" id="title" v-model="User.title" /><br /><br />
          <button @click="Save">Add User</button>
        </div> -->
    </div>
    <div v-else><p>Loading ...</p></div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
data() {
  return {
  // User:{},
  }
},
computed: {
    // user() {
    //   return store.state.user;
    // },
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(["GetUserAct"]),
    Save() {
      // this.User.id++;
      // this.GetUserAct(this.User);
    }
  },
};
</script>

<style></style>