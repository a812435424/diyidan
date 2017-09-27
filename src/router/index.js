import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Message from '@/components/Message/Message'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/Message',
        name: 'Message',
        component: Message
    }],
    linkActiveClass: 'active'
})

Vue.component('wk-tooltip', {
    props: ['message', 'isShow', 'time'],
    template: '<div class="tooltip" v-if="isShow"><div class="tooltip_txt">{{message}}</div></div>',
    data() {
        return {
            myIsShow: this.isShow
        };
    },
    watch: {
        isShow(val) {
            this.myIsShow = val;
            this.close();
        },
        myIsShow(val) {
            this.$emit("on-isShow-change", val);
        }
    },
    mounted() {
        this.close()
    },
    methods: {
        close() {
            if (this.myIsShow == true) {
                var that = this
                setTimeout(function() {
                    that.myIsShow = false
                }, this.time);
            }
        },
        onResultChange(val) {
            this.isShow = val;
        }
    }
})