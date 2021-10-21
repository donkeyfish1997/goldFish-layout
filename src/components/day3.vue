<template>
  <div class="container">
    <div class="wrap">
      <div class="item" v-for="i in 3" :key="i">
        <img :src="'https://picsum.photos/300/300?random' + i" alt="" />
        <div class="txt">
          <h2>CSS 可樂</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            iusto illum amet tempore! Quasi, ad fugiat debitis perspiciatis
            molestiae possimus?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 1000px;
  background-color: #003;
  display: flex;
  align-items: center;
  .wrap {
    width: 1200px;
    display: flex;
    margin: auto;
    .item {
      width: 370px;
      margin: 15px;
      text-align: center;
      background-color: white;
      border: 1px solid #ccc;
      transform: translateY(0%);
      transition: transform 0.5s;
      &:hover {
        transform: translateY(-50px);
        .txt {
          background: linear-gradient(0deg, #fb8076, #feb85d);
          &::before {
            border-right: 184px solid #feb85d;
            border-left: 184px solid #feb85d;
          }
          h2,
          p {
            color: #fff;
            border-bottom-color: #fff;
          }
        }
      }
      img {
        width: 100%;
        vertical-align: top;
      }
      .txt {
        position: relative;
        padding: 20px;
        &:before {
          width: 0;
          height: 0;
          top: 0;
          left: 0;

          content: "";
          display: block;
          position: absolute;
          // border-bottom: 50px solid rgb(255, 255, 255);
          border-top: 50px solid transparent;
          border-right: 184px solid rgb(255, 255, 255);
          border-left: 184px solid rgb(255, 255, 255);
          transform: translateY(-100%);
        }
        h2 {
          border-bottom: 1px solid #000;
          padding-bottom: 0.3em;
          margin-bottom: 0.4em;
          font-weight: 900;
          transition: 0.25s;
        }
        p {
          line-height: 1.5;
          font-weight: 300;
          transition: 0.25s;
        }
      }
    }
  }
}
</style>