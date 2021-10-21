<template>
  <div class="dialogue">
    <div class="user remote">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/200/200?random=1" alt="" />
        </div>
        <div class="name">wwife</div>
      </div>
      <div class="txt">老公你好帥！</div>
    </div>
    <div class="user local">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/200/200?random=2" alt="" />
        </div>
        <div class="name">csscoke</div>
      </div>
      <div class="txt">喔是喔是喔喔喔喔喔是喔是喔喔喔</div>
    </div>
    <div class="user remote">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/200/200?random=1" alt="" />
        </div>
        <div class="name">wwife</div>
      </div>
      <div class="txt">老公你今天會回家嗎！</div>
    </div>
    <div class="user local">
      <div class="avatar">
        <div class="pic">
          <img src="https://picsum.photos/200/200?random=2" alt="" />
        </div>
        <div class="name">csscoke</div>
      </div>
      <div class="txt">大概晚上九點喔喔<br>掰囉</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialogue {
  width: 500px;
  padding: 20px;
  background-color: #f4f5f7;
  box-shadow: 0 0 10px #3e92cc;
  .user {
    display: flex;
    margin-bottom: 20px;
    align-items: flex-start;

    .avatar {
      width: 60px;
      text-align: center;

      .pic {
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }

    .txt {
      position: relative;
      padding: 16px;
      border-radius: 10px;
      &::before {
        content: "";
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        top: 20px;
      }
    }

    &.remote {
      .txt {
        padding: 16px;
        margin-left: 20px;
        margin-right: 80px;
        background-color: #fff;
        color: #a1b4c5;
        &::before {
          left: -10px;
          border-right: 10px solid #fff;
        }
      }
    }
    &.local {
      justify-content: flex-end;
      .txt {
        margin-left: 80px;
        margin-right: 20px;
        order: -1;
        background-color: #3e92cc;
        color: #fff;
        &::before {
          right: -10px;
          border-left: 10px solid #3e92cc;
        }
      }
    }
  }
}
</style>