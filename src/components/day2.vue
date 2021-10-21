<template>
  <div class="wrap">
    <div class="item" v-for="i in 4" :key="i">
      <img :src="'https://picsum.photos/300/200?random='+i" alt="" />
      <div class="txt">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
          perferendis facere cupiditate quis blanditiis reprehenderit.
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  display: flex;
  .item {
    width: 25%;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    &:hover {
      .txt {
        opacity: 1;
        h2:after{
          width: 100%;
        }
      }
  
    }
    .txt {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      flex-direction: column;
      opacity: 0;
      transition: opacity 0.5s;

      h2 {
        font-size: 32px;
        color: #ff0;
        font-weight: 500;
        &:after {
          content: "";
          display: block;
          width: 0%;
          height: 2px;
          margin: 10px 0;
          background-color: #ff0;
          transition: width 0.5s 0.3s;
        }
      }
      p {
        font-size: 18px;
        color: #fff;
        font-weight: 100;
      }
    }
  }
}
</style>