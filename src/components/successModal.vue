<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body text-center">
        <p class="modalTxt fs-3 fw-bold"><i class="bi bi-check-circle-fill"></i>更新新增成功!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</template>
<style lang="scss">
.modalTxt{
    color : rgb(5, 127, 5)
}
</style>
<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data () {
    return {
      modal: {}
    }
  },
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
