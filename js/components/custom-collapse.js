// Define a new component called button-counter
Vue.component('custom-collapse', {
    props:{
        title: {
            type: String,
          },
    },
    data: function () {
      return {
        collapsed: false,
      }
    },
    template: `
    <div class="custom-collapse">
      <div @click="collapsed = !collapsed" class="custom-collapse__header">{{title}}</div>
      <transition name="fade">
          <div v-show="collapsed" class="custom-collapse__content">
            <slot></slot>
          </div>
      </transition>
    </div>`
  })