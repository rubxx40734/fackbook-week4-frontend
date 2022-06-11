<template>
<div class="modal-dialog modal-sm">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title text-light" id="exampleModalLabel">按讚的人</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-for="(item,index) in greateUser" :key="index">
             <div class="user d-flex align-items-center">
                 <img :src="item.photo" alt="" class="photo card-img bgCover me-3">
                 <p class="fw-bold">{{item.name}}</p>
             </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<style lang="scss">
.photo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
  props: ['greateUser'],
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
