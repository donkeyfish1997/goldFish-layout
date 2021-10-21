<template>
  <div class="wrap">
    <ol class="list">
      <li><fa class="fa" icon="file-alt" />收到訂單</li>
      <li class="active"><fa class="fa" icon="archive" />檢獲中</li>
      <li><fa class="fa" icon="truck" />運送中</li>
      <li><fa class="fa" icon="check-circle" />送達</li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  background-color: #546377;
  padding: 10px;
  position: relative;
  z-index: -2;
  .list {
    margin: auto;
    display: flex;
    position: relative;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(9deg, #185a9d, #43cea2);
      box-shadow: 0px 0px 0px 4px #fff;

      font-size: 30px;
      position: relative;
      // z-index: 3;
      .fa {
        font-size: 60px;
        margin-bottom: 10px;
      }
      & + li {
        margin-left: 100px;
        &::before {
          content: "";
          display: block;
          position: absolute;
          z-index: -1;
          right: 100%;
          width: 100px;
          height: 5px;
          background-color: #43cea2;
          box-shadow: 0 0 0 3px #fff;
        }
      }
      &.active ~ li {
        background: linear-gradient(9deg, #999, #ccc);
        &::before {
          background: #999;
        }
      }
    }
  }
}
</style>