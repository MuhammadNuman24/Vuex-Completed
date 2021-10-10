<template>
  <div v-if="User">
    <v-card>
      <v-card-title>Users</v-card-title>
      <v-row>
        <v-col cols="4">
          <v-text-field
            label="Search"
            v-model="user"
            single-line
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <div class="text-center">
          <v-dialog v-model="dialog" width="700">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                plain
                text
                rounded
                class="primary mr-4"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account-plus</v-icon>
                <span>Add User</span>
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Enter New User Details
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="UserId"
                  v-model="todos.userId"
                ></v-text-field
                ><v-text-field label="ID" v-model="todos.id"></v-text-field
                ><v-text-field
                  label="Title"
                  v-model="todos.title"
                ></v-text-field
                ><v-text-field
                  label="Bio"
                  v-model="todos.completed"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="Save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="User"
          multi-sort
          :search="user"
          :items-per-page="6"
        >
          <template v-slot:item.menu="">
            <v-menu transition="scale-transition" origin="center center">
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">mdi-dots-vertical</v-icon>
              </template>
              <v-list>
                <v-list-item>
                  <v-dialog v-model="dialog" width="700">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        plain
                        text
                        rounded
                        class="primary mr-4"
                        v-bind="attrs"
                        v-on="on"
                      >
                        <span>Edit</span>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="text-h5 grey lighten-2">
                        Change User Details
                      </v-card-title>
                      <v-card-text>
                        <v-text-field
                          label="UserId"
                          v-model="todos.userId"
                        ></v-text-field
                        ><v-text-field
                          label="ID"
                          v-model="todos.id"
                        ></v-text-field
                        ><v-text-field
                          label="Title"
                          v-model="todos.title"
                        ></v-text-field
                        ><v-text-field
                          label="Bio"
                          v-model="todos.completed"
                        ></v-text-field>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn @click="Change">Save Changes</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-item>
                <v-list-item>
                  <v-btn plain text rounded class="primary mr-4">Delete </v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Hello-World",
  data() {
    return {
      user: "",
      dialog: false,
      User: [],
      todos: { userId: 0, id: 0, title: "", completed: "" },
      headers: [
        { text: "UserId", value: "userId" },
        { text: "ID", value: "id" },
        { text: "Title", value: "title" },
        { text: "Bio", value: "completed" },
        { text: "", value: "menu", sortable: false },
      ],
    };
  },
  methods: {
    loadData() {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
          this.User = json;
        });
    },
    Save() {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(this.todos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => this.User.push(json));
      this.dialog = false;
    },
    delete() {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "DELETE",
        body: JSON.stringify(this.todos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => (this.User = json));
    },
    Change() {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "PUT",
        body: JSON.stringify(this.todos),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => (this.User = json));
      this.dialog = false;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
</style>