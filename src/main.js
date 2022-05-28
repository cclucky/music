import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import * as API from '@/api'

import Smallcte from "@/components/smallCte";
import Player from "@/components/player";
import MusicLists from "@/components/MusicLists";
import MyNavb from "@/components/MyNavb";
import SideBar from "@/components/SideBar";
import Decision from "@/components/Decision";

Vue.component(Smallcte.name, Smallcte)
Vue.component(Player.name, Player)
Vue.component(MusicLists.name, MusicLists)
Vue.component(MyNavb.name, MyNavb)
Vue.component(SideBar.name, SideBar)
Vue.component(Decision.name, Decision)

import {
    Button,
    Input,
    Icon,
    Carousel,
    CarouselItem,
    Slider,
    MessageBox,
    Message,
    Form,
    FormItem,
    Table,
    TableColumn,
    Pagination
} from 'element-ui';
Vue.use(Pagination);
Vue.use(Button);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Slider);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$API = API
    },
    router,
    store
}).$mount('#app')