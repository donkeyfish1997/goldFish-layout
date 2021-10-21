<template>
  <div class="wrap">
    <div class="item">
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=1" alt="" />
      </div>
      <div class="txt">
        <h2>Lorem ipsum, dolor sit amet</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          nobis ex architecto excepturi sint ratione corporis saepe at
          asperiores! Possimus odio tempore quod dolorem unde rem. Laudantium
          ducimus debitis aliquid!
        </p>
      </div>
    </div>
    <div class="item">
      <div class="txt">
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, aut
          fuga praesentium nihil ipsam voluptas mollitia quia ullam odit sit
          quam aspernatur delectus, alias fugiat doloremque necessitatibus
          corrupti tempore dicta.
        </p>
      </div>
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=2" alt="" />
      </div>
    </div>
    <div class="item">
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=3" alt="" />
      </div>
      <div class="txt">
        <h2>Lorem ipsum, dolor sit amet</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          nobis ex architecto excepturi sint ratione corporis saepe at
          asperiores! Possimus odio tempore quod dolorem unde rem. Laudantium
          ducimus debitis aliquid!
        </p>
      </div>
    </div>
    <div class="item">
      <div class="txt">
        <h2>Lorem ipsum, dolor sit amet</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          nobis ex architecto excepturi sint ratione corporis saepe at
          asperiores! Possimus odio tempore quod dolorem unde rem. Laudantium
          ducimus debitis aliquid!
        </p>
      </div>
      <div class="pic">
        <img src="https://picsum.photos/600/350?random=4" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  padding: 100px 0;
  background: linear-gradient(20deg, #3d5493, #1aa2a0) fixed center center/100% 100%;
  .item {
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    margin-top: 70px;

    .pic {
      width: 55%;
      flex-shrink: 0;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .txt {
      width: 55%;
      flex-shrink: 0;
      position: relative;
      padding: 50px 30px;
      box-sizing: border-box;
      h2 {
        font-weight: 900;
      }
      p {
        font-weight: 300;
      }
    }
    > :first-child {
      margin-right: -10%;
    }
    &:nth-child(1) .txt {
      background-color: #f0aec1a1;
    }
    &:nth-child(2) .txt {
      background-color: #2afdd0a1;
    }
    &:nth-child(3) .txt {
      background-color: #fec979a1;
    }
    &:nth-child(4) .txt {
      background-color: #95dbd6a1;
    }
  }
}
</style>