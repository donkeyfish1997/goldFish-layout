<template>
  <div class="wrap">
    <div class="item">
      <img src="https://picsum.photos/500/500?random=5" alt="" />
      <div class="txt">
        <h3>loream</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
          assumenda eligendi possimus? Tempore, possimus aperiam. A nam optio
          nemo.
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=1" alt="" />
      <div class="txt">
        <h3>loream</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
          assumenda eligendi possimus? Tempore, possimus aperiam. A nam optio
          nemo.
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=2" alt="" />
      <div class="txt">
        <h3>loream</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
          assumenda eligendi possimus? Tempore, possimus aperiam. A nam optio
          nemo.
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=3" alt="" />
      <div class="txt">
        <h3>loream</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
          assumenda eligendi possimus? Tempore, possimus aperiam. A nam optio
          nemo.
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=4" alt="" />
      <div class="txt">
        <h3>loream</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam
          assumenda eligendi possimus? Tempore, possimus aperiam. A nam optio
          nemo.
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wrap {
  width: 100%;
  .item {
    float: left;
    width: 25%;
    display: flex;
    position: relative;
    &:nth-of-type(1) {
      width: 50%;
    }
    img {
      width: 100%;
      vertical-align: middle;
    }
    .txt {
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.357);
      opacity: 0;
      transform: scale(0);
      transition: 0.5s;

      h3 {
        margin-bottom: 0.4em;
      }
      p {
        font-weight: 100;
      }
    }
    &:hover .txt {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>