<template>
  <div class="col-md-3 mt-3 py-3 content h-100">
    <div class="addPost d-flex flex-column">
      <button class="btn btn-primary mt-3 mb-3 w-75 align-self-center"
      @click="this.$emit('change')">
        張貼動態
      </button>
      <ul class="detail">
        <li class="d-flex align-items-center mb-4">
          <img :src="current.photo" alt="" class="ms-1 me-4 userphoto bgCover card-img" />
          <p class="mb-0 fw-bold">{{current.name}}</p>
        </li>
        <li class="d-flex mb-4 d-flex align-items-center">
          <div
            class="iconBox me-3 border d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-bell d-block fw-bold"></i>
          </div>
          <button class="mb-0 fw-bold btn">追蹤名單</button>
        </li>
        <li class="d-flex d-flex align-items-center">
          <div
            class="iconBox me-3 border d-flex align-items-center justify-content-center"
          >
            <i class="bi bi-hand-thumbs-up d-block fw-bold"></i>
          </div>
          <button  class="mb-0 fw-bold btn">我按讚的文章</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['current']
}
</script>
