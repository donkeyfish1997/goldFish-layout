<template>
  <div class="banner">
    <div class="container">
      <div class="banner-text">
        <h1>
          金魚都能懂的
          <small>這個網頁畫面怎麼切</small>
        </h1>
        <h2>圖文滿版區塊</h2>
        <p>
          這個畫面實在常見，在各種樣板網站可說是設計常客<br />金魚切不出來實在說不過去啊
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;

  background: linear-gradient(115deg, #7bf 50%, transparent 50%) center / 100%
      100%,
    url("https://picsum.photos/seed/picsum/1200/600?random=1") right center /
      auto 100%;
  // background-color: #ccc;
  // https://picsum.photos/seed/picsum/300/200?random=1

  .container {
    height: 700px;
    width: 100%;
    max-width: 1440px;
    margin: auto;
    .banner-text {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      h1 {
        font-size: 80px;
        border-bottom: 1px solid #000;
        font-weight: 900;
        padding-bottom: 0.3em;
        margin-bottom: 0.3em;
        small {
          display: block;
          font-size: 53px;
          font-weight: 700;
        }
      }
      h2 {
        font-size: 50px;
        font-weight: 700;
      }
      p {
        font-size: 30px;
        font-weight: 300;
      }
    }
  }
}
</style>