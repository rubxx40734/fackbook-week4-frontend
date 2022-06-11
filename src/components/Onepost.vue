<template>
  <div class="col-md-8" v-for="item in data" :key="item.id">
    <div
      ref="postId"
      class="friendPost p-4 d-flex flex-column mb-3 bg-light">
      <div class="user d-flex align-items-center mb-4">
        <img
          :src="item.user.photo"
          alt=""
          class="me-3 userphoto bgCover card-img"
        />
        <div class="nameTime">
          <p class="mb-0 fw-bold">{{item.user.name}}</p>
          <p class="mb-0 createTime">{{item.user.createAt}}</p>
        </div>
      </div>
      <h1 class="fs-5 fw-bold mb-2">
        {{item.content}}
      </h1>
      <img v-if="item.image"
        :src="item.image"
        alt=""
        class="text-center imgSetting w-100"
      />
      <div class="addGreate mt-3">
        <!-- <div class="likebox d-flex mb-3">
          <button
            type="button"
            class="btn btn-outline-primary greatPost me-1 p-0"
          >
            <i class="bi bi-hand-thumbs-up"></i>
          </button>
          <button
            class="btn btn-link btn-sm d-block">
          </button>
        </div> -->

        <!-- <div class="input-group mb-3">
          <img
            src="../assets/user.png"
            alt=""
            class="me-3 userphoto bgCover card-img"
          />
          <input
            type="text"
            class="form-control"
            placeholder="留言..."
          />
          <button
            class="btn btn-primary w-25"
            type="button">
            留言
          </button>
        </div> -->
      <!-- </div>

      <div
        class="messageBox d-flex bg-warning p-3 mb-3"
      >
        <img
          src="../assets/user.png"
          alt=""
          class="me-3 userphoto bgCover card-img"
        /> -->
        <!-- <div class="comment">
          <p class="fw-bold">123</p>
          <p class="mb-0 createTime mb-2">123</p>
          <p>123</p>
        </div> -->
      </div>
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
.noContent {
  color: gray;
}
.colorBar {
  border-bottom: 2px solid black;
}
.red {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #de4b63;
}
.yellow {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #faa722;
}
.green {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #83c51d;
}
.userphoto {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.greatPost {
  width: 50px;
}
.messageBox {
  border-radius: 8px;
}
</style>

<script>
export default {
  data () {
    return {
      data: {}
    }
  },
  inject: ['emitter'],
  props: ['currentUser'],
  created () {
    console.log('11222', this.emitter)
    this.emitter.on('getone', (data) => {
      console.log('接收到的', data)
      this.data = data
    })
  }
}
</script>
