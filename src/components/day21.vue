<template>
  <div class="banner"></div>
  <div class="sec">
    <div class="container">
      <div class="item">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          repellendus explicabo asperiores nostrum perferendis consectetur
          repellat facere nemo earum consequatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laboriosam esse, architecto eveniet dolorem necessitatibus, sit eos
          unde ullam voluptas nulla enim assumenda suscipit!
        </p>
      </div>
      <div class="item">
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          repellendus explicabo asperiores nostrum perferendis consectetur
          repellat facere nemo earum consequatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          laboriosam esse, architecto eveniet dolorem necessitatibus, sit eos
          unde ullam voluptas nulla enim assumenda suscipit!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: url("https://picsum.photos/id/1025//2000/1800") no-repeat top /
    cover;
  width: 100%;
  height: 800px;
}
.sec {
  padding: 100px 0;
  position: relative;
  .container {
    display: flex;
    .item {
      padding: 0 20px;
      h2 {
        padding-bottom: 1.5em;
        position: relative;
      }
      p {
        line-height: 1.8;
        padding-bottom: 1em;
      }
    }
  }
  &::before {
    content: "";
    top: -100px;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
    box-shadow: 300px 10px 0 0px #fff, 400px 10px 0 30px #fff,
      700px 30px 0 20px #fff, 100px 50px 0 0px #fff, 570px 10px 0 -10px #fff,
      -300px 10px 0 0px #fff, -400px 10px 0 40px #fff, -700px 30px 0 20px #fff,
      -100px 50px 0 0px #fff, -570px 10px 0 -10px #fff,
      -180px 40px 0 10px #fff, 200px 50px 0 0px #fff,
      300px -20px 0 0px rgba(0, 0, 0, 0.72),
      370px -40px 0 30px rgba(0, 0, 0, 0.72),
      700px -20px 0 20px rgba(0, 0, 0, 0.72),
      100px 0px 0 0px rgba(0, 0, 0, 0.72),
      530px -70px 0 -10px rgba(0, 0, 0, 0.72),
      -300px 0px 0 0px rgba(0, 0, 0, 0.72),
      -400px -30px 0 50px rgba(0, 0, 0, 0.72),
      -700px 20px 0 20px rgba(0, 0, 0, 0.72),
      -100px 0px 0 0px rgba(0, 0, 0, 0.72),
      -590px -40px 0 -10px rgba(0, 0, 0, 0.72),
      -170px -40px 0 10px rgba(0, 0, 0, 0.72);
  }
}
</style>