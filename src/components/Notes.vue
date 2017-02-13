<template>
  <div id="notes">
    <ul>
      <li v-for="note in notes">
        <Note :note="note" />
      </li>
      <div class="clearfix"></div>
    </ul>
  </div>
</template>

<script>
  import Note from './Note';

  export default {
    name: 'notes',
    data() {
      return {
        notes: [
          {title: 'Title', author: 'Admin', body: 'Description'},
          {title: 'Title', author: 'Admin', body: 'Description'},
          {title: 'Title', author: 'Admin', body: 'Description'},
          {title: 'Title', author: 'Admin', body: 'Description'},
          {title: 'Title', author: 'Admin', body: 'Description'}
        ]
      };
    },
    components: {
      Note
    }
  }
</script>

<style lang="scss">
  #notes {
    ul {
      li {
        list-style: none;
      }
    }
  }
</style>
