<template>
  <div class="wrap">
    <div class="item">
      <div class="icon">
        <fa class="fa" icon="angry" />
      </div>
      <div class="txt">
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          praesentium doloremque ex beatae iure pariatur!
        </p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <fa class="fa" icon="search" />
      </div>
      <div class="txt">
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          praesentium doloremque ex beatae iure pariatur!
        </p>
      </div>
    </div>
    <div class="item">
      <div class="icon">
        <fa class="fa" icon="angry" />
      </div>
      <div class="txt">
        <h3>Lorem, ipsum dolor.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          praesentium doloremque ex beatae iure pariatur!
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin: auto;
  background: linear-gradient(-45deg, #fffaf0, #f8c3c1);
  display: flex;
  padding: 200px 0;
  .item {
    width: 370px;
    margin: 0 15px;
    background-color: #fff;
    border: 10px solid #f9cec2;
    border-radius: 20px;
    text-align: center;
    box-shadow: 10px 20px 50px #f7b6a7;
    &:hover .fa{
      animation: shake .2s  linear infinite alternate ;
    }

    .icon {
      // position: relative;
      width: 150px;
      height: 150px;
      margin: -75px auto 0;
      background-color: orange;
      font-size: 85px;
      line-height: 150px;
      border-radius: 50%;
      background-color: rgb(255, 255, 255);
      color: #f5afac;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: -10px;
        left: -10px;
        border: 10px solid #f9cec2;
        border-left: 10px solid transparent;
        border-bottom: 10px solid transparent;
        transform: rotate(-45deg);
        border-radius: 50%;
      }
    }
    .txt {
      padding: 20px 20px 2em;
      h3 {
        color: #f5afac;
      }
      p {
        color: #ccc;
      }
    }
  }
}
@keyframes shake {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
</style>