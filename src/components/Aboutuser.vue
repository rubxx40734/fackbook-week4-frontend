<template>
  <div class="col-md-3 mt-3 py-3 content h-100">
    <div class="addPost d-flex flex-column">
      <button class="btn btn-yellow fw-bold mt-3 mb-3 w-75 align-self-center"
      @click="this.$emit('change')">
        張貼動態
      </button>
      <ul class="detail">
        <li class="d-flex align-items-center mb-4">
          <img :src="current.photo" alt="" class="ms-1 me-3 userphoto bgCover card-img" />
          <button class="fw-bold btn btn-link" @click="this.$emit('emit-personPost')">{{current.name}}</button>
        </li>
        <li class="d-flex mb-4 d-flex align-items-center">
          <div
            class="iconBox me-3 d-flex align-items-center justify-content-center boxBorder"
          >
            <i class="bi bi-bell d-block fw-bold"></i>
          </div>
          <button class="mb-0 fw-bold btn btn-link" @click="this.$emit('emit-showFollow')">追蹤名單</button>
        </li>
        <li class="d-flex d-flex align-items-center">
          <div
            class="iconBox me-3 d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-hand-thumbs-up d-block fw-bold"></i>
          </div>
          <button  class="mb-0 fw-bold btn btn-link" @click="this.$emit('emit-gotoIclick')">我按讚的文章</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
export default {
  props: ['current']
}
</script>
