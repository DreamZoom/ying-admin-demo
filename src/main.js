// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import YingAdmin from "ying-admin"
import "ying-admin/dist/main.css"


import "./mocks/index"

Vue.config.productionTip = false

Vue.use(YingAdmin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
