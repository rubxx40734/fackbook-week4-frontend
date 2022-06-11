<template>
    <div class="modal " tabindex="-1" ref="modal">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header bg-yellow">
            <h5 class="modal-title fw-bold">提示</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p class="fw-bold">{{folMessage}}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {}
    }
  },
  props: ['folMessage'],
  methods: {
    showModal () {
      this.modal.show()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
