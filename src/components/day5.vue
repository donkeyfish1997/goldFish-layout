<template>
  <div class="wrap">
    <div class="container">
      <div class="item" v-for="i in 3" :key="i">
        <div class="pic">
          <img src="https://picsum.photos/400/400?random=3" alt="" />
        </div>
        <div class="txt">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quae
            impedit maiores!
          </p>
          <a href="#" class="btn">more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(-30deg, #fdaecb, #e7595f, #fe8556);
  .container {
    width: 1200px;
    margin: auto;
    display: flex;

    .item {
      width: 368px;
      margin: 0 15px;
      display: flex;
      background-color: #fff;
      border: 1px solid #888;
      box-shadow: 0 10px 30px rgba(160,0,0,.5);
      .pic {
        width: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: middle;
        }
      }
      .txt {
        width: 50%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          margin-bottom: 0.4em;
          font-weight: 500;
        }
        p {
          font-weight: 300;
        }
        .btn {
          line-height: 1.5em;
          padding: 0 1em;
          border: 1px solid #ccc;
          align-self: flex-end;
          text-decoration: none;
          border-radius: 200px;
          margin-top: 1em;
          color: #aaa;
          &:hover{
            background-color: #ccc;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>