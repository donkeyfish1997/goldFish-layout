<template>
  <input type="checkbox" id="side-switch" />
  <div class="side-menu">
    <div class="search">
      <input type="search" name="" id="" />
      <button><fa icon="search" /></button>
    </div>
    <nav>
      <a href="#"><fa class="fa" icon="angle-right" />鐵人賽</a>
      <a href="#"><fa class="fa" icon="angry" />暴力班</a>
      <a href="#"><fa class="fa" icon="search" />RWD 醬子</a>
      <a href="#"><fa class="fa" icon="angle-right" />金魚網頁</a>
      <a href="#"><fa class="fa" icon="angry" />金魚切版</a>
    </nav>
    <label for="side-switch"><fa class="fa" icon="angle-right" /></label>
  </div>
</template>


<style lang="scss" scoped>
#side-switch{
display: none;
&:checked + .side-menu {
  margin-left: 0px;
}
}

.side-menu {
  width: 300px;
  height: 100vh;
  background: linear-gradient(0deg, #3381b0, #c2196c);
  padding: 50px 10px;
  box-sizing: border-box;
  box-shadow: 10px 0px 10px hsla(240, 50%, 30%, 0.4);
  position: relative;
  margin-left: -300px;
  transition: 0.3s;
  .search {
    display: flex;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 100px;
    > * {
      padding: 10px 10px;
      border: none;
      background-color: transparent;
      color: white;
      &:focus {
        outline: none;
      }
    }
    input {
      width: 240px;
      padding-left: 25px;
    }
    button {
      width: 40px;
    }
  }

  nav {
    margin-top: 30px;
    a {
      display: block;
      color: #fff;
      text-decoration: none;
      font-size: 25px;
      padding: 15px 10px;
      .fa {
        width: 0.1%; //如果 0px的話會出錯，我猜是套件的問題
        transition: 0.5s;
      }
      & + a {
        border-top: 1px solid #fff;
      }
      &:hover .fa {
        // color: #000;
        width: 50px;
      }
    }
  }
  label {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.46);
    width: 40px;
    height: 80px;
    position: absolute;
    font-size: 40px;
    left: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    line-height: 80px;
  }
}
</style>