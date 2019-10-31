// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { 
  Button, Select ,Input, Row, Col, Option, Message, FormItem,
} from 'element-ui';
Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Input.name, Input);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Option.name, Option);
Vue.component(Message.name, Message);
// Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
/* eslint-disable no-new */
Vue.prototype.$message = Message;
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
