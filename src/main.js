import Vue from 'vue';
import App from './App';

import db from './db';

db.ref('/test').set({value: 28});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
