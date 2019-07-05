Vue.component('modal-button', {
    methods: {
      showModal () {
        store.commit('toggleOverlay')
      }
    },
    template: '<button @click="showModal()" class="btn btn-sm btn-warning">Show Modal</button>'
  })