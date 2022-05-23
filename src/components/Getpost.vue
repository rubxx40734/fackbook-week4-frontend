<template>
  <div class="col-md-8">
    <div class="row">
      <div class="col-md-4">
        <select
          class="form-select borderSet"
          aria-label="Default select example"
          id="date"
          @change="selectDate"
          v-model="datePost"
        >
          <option value="" selected>排序</option>
          <option value="des">最新貼文</option>
          <option value="asc">由舊到新</option>
        </select>
      </div>
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control borderSet"
            placeholder="搜尋貼文"
            aria-label="搜尋貼文"
            aria-describedby="basic-addon1"
            @change="searchContent"
          />
          <button class="btn btn-primary input-group-text">
            <i class="bi bi-search"></i>
          </button>
          <!-- <input type="button" class="input-group-text" value="bi bi-search"> -->
        </div>
      </div>
    </div>
    <div class="friendPost p-4 d-flex flex-column mb-3">
      <div class="user d-flex align-items-center mb-4">
        <img src="../assets/user.png" alt="" class="me-3" />
        <div class="nameTime">
          <p class="mb-0 fw-bold">邊緣小杰(至頂版主)</p>
          <p class="mb-0 createTime">2022/1/10 12:00</p>
        </div>
      </div>
      <h1 class="fs-5 fw-bold mb-2">
        外面看起來就超冷....<br />
        我決定回被窩繼續睡.... @@
      </h1>
      <img src="../assets/image.png" alt="" class="text-center" />
    </div>

    <div
      class="friendPost p-4 d-flex flex-column mb-3"
      v-for="item in post"
      :key="item.id"
    >
      <div class="user d-flex align-items-center mb-4">
        <img :src="item.user.photo" alt="" class="me-3 userphoto bgCover card-img" />
        <div class="nameTime">
          <p class="mb-0 fw-bold">{{ item.user.name }}</p>
          <p class="mb-0 createTime">{{ item.createdAt }}</p>
        </div>
      </div>
      <h1 class="fs-5 fw-bold mb-2">
        {{ item.content }}
      </h1>
      <img :src="item.image" alt="" class="text-center imgSetting w-100" />
    </div>

    <div class="friendPost d-flex flex-column mb-3" v-if="this.postLength.length == 0">
      <div class="user d-flex align-items-center mb-4 colorBar p-0">
        <ul class="colorCur d-flex p-2">
            <li class="red border me-2"></li>
            <li class="yellow me-2"></li>
            <li class="green me-2"></li>
        </ul>
      </div>
      <h1 class="fs-5 fw-bold text-center noContent py-5">
          目前尚無動態，新增一則貼文吧！
      </h1>
    </div>
  </div>
</template>

<style lang="scss">

.friendPost {
  border: 2px solid black;
  border-radius: 6px;
}
.createTime {
  font-size: 12px;
  color: gray;
}
.borderSet {
  border: 2px solid black;
}
.imgSetting {
  height: 223px;
  object-fit: cover;
  object-position: center;
  border: 3px solid black;
  border-radius: 10px;
}
.noContent{
  color: gray;
}
.colorBar{
  border-bottom: 2px solid black;
}
.red{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #DE4B63;
}
.yellow{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #FAA722;
}
.green{
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #83C51D;
}
.userphoto{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
<script>
export default {
  data () {
    return {
      search: '',
      datePost: '',
      postLength: 0
    }
  },
  props: ['post'],
  methods: {
    searchContent () {
      console.log(this.search)
      this.$emit('searchKey', this.search)
    },
    selectDate () {
      console.log(this.datePost)
      this.$emit('dateKey', this.datePost)
    }
  },
  created () {
    console.log(this.post.length)
    this.postLength = this.post.length
  }
}
</script>
