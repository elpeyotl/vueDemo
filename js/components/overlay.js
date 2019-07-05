Vue.component('overlay', {
      computed: {
        showOverlay () {
            return store.state.overlay
        }
    },
    watch: {
        showOverlay: function () {
            if(this.showOverlay) {
                document.addEventListener('keyup', this.closeModal);
            } else {
                document.removeEventListener('keyup', this.closeModal);
            }
        }
    },
    methods: {
        closeModal() {
            if (event.keyCode === 27) {
                store.commit('toggleOverlay')
            }
        }
    },
    template: `
    <transition name="fade">
      <div v-if="showOverlay"  @keyup.esc="closeModal()" class="overlay"></div>
    </transition>
    `
  })