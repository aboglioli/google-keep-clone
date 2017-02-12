<template>
  <div class="note">

    <div class="heading">
      <h2>{{title}}</h2>
      <span>{{author}}</span>
    </div>

    <div class="body">
      {{body}}
    </div>

  </div>
</template>

<script>
  export default {
    name: 'note',
    data() {
      return {
        title: 'Title',
        author: 'Author',
        body: 'Description'
      };
    }
  }
</script>

<style>
  .note {
    float: left;
    display: inline-block;
    border: 2px solid #555;
    background-color: #eee;
  }
</style>
