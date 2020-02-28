/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
// import Axios from 'axios'

window.Vue = require('vue');
// window.axios = Axios

import VueTimeago from 'vue-timeago';

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/**
 * Generates a psuedo-random hex string.
 * @returns {string}
 */
window.generateHex = (length = 36) => {
  let minLength = 8;
  let minValue = Math.pow(16, Math.min(length, minLength) - 1);
  let maxValue = Math.pow(16, Math.min(length, minLength)) - 1;
  let generated = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  let output = generated.toString(16);
  while (output.length < length) {
    output = output + generateHex(length - minLength);
  }
  return output;
};

Vue.component('passport-clients', require('./components/passport/Clients.vue'));

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue')
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue')
);

Vue.component(
  'notification',
  require('./components/notifications/Notification.vue')
);

Vue.component('audit-account', require('./components/audit/account/Index.vue'));
Vue.component('audit-public', require('./components/audit/public/Index.vue'));

const app = new Vue({
  el: '#app'
});
