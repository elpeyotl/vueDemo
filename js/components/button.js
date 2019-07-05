// Define a new component called button-counter
Vue.component('button-counter', {
    props:{
        startValue: {
            type: Number,
            default: 0
          },
        important: {
          type: Boolean,
          default: false
        },
    },
    data: function () {
      return {
        count: this.startValue
      }
    },
    template: `<button :class="{'btn-danger': important}" v-on:click="count++" class="btn btn-sm btn-warning">You clicked me {{ count }} times.</button>`
  })