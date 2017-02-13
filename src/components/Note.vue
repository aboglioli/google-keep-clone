<template>
  <div class="note">

    <div class="heading">
      <h2>{{note.title}}</h2>
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
    created() {
      console.log(this.note);
    }
  }
</script>

<style lang="scss">
  .note {
    float: left;
    padding: 1rem 2rem;
    /* border: 3px solid rgba(0, 0, 0, 0.1); */
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
    }

    .body {
      font-size: 0.9rem;
    }
  }
</style>
