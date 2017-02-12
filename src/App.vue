<template>
  <div id="app">
    <ul>
      <li v-for="note in notes">
        <Note :note="note" />
      </li>
    </ul>
  </div>
</template>

<script>
  import Note from './components/Note';

  export default {
    name: 'app',
    data() {
      return {
        notes: [
          {title: 'Title', author: 'Admin', body: 'Descriptipn'},
          {title: 'Title', author: 'Admin', body: 'Descriptipn'},
          {title: 'Title', author: 'Admin', body: 'Descriptipn'},
          {title: 'Title', author: 'Admin', body: 'Descriptipn'},
          {title: 'Title', author: 'Admin', body: 'Descriptipn'}
        ]
      };
    },
    components: {
      Note
    }
  }
</script>

<style lang="scss">
  #app {
    ul {
      li {
        list-style: none;
        margin-right: 5px;
      }
    }
  }
</style>
