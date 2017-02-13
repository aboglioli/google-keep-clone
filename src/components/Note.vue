<template>
  <div class="note">

    <div class="heading">
      <h2 v-if="!editTitle" v-on:click="editTitle = true">{{note.title}}</h2>
      <input v-if="editTitle" type="text" v-on:blur="blur()" v-model="note.title" autofocus />
      <span>{{note.author}}</span>
    </div>

    <div class="body">
      {{note.body}}
    </div>

  </div>

</template>

<script>
  import db from '../db';
  db.ref('/users').set({
    admin: {
      name: 'Admin',
      email: 'admin@admin.com'
    }
  });

  export default {
    name: 'note',
    props: ['note'],
    data() {
      return {
        editTitle: false
      };
    },
    created() {
      console.log(this.note);
    },
    watch: {
    },
    methods: {
      blur() {
        this.editTitle = false;
      }
    }
  }
</script>

<style lang="scss">
  .note {
    float: left;
    padding: 1rem 2rem;
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0.5rem;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 3px;

    .heading {
      margin-bottom: 1rem;

      h2 {
        font-size: 1.2rem;
        margin: 0;
        padding: 0.2rem 0;
      }
      span {
        color: #888;
        font-size: 0.8rem;
      }

      input {
        width: 100%;
        padding: 0.2rem 0.3rem;
      }
    }

    .body {
      font-size: 0.9rem;
    }
  }
</style>
