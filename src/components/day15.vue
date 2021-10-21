<template>
  <input type="checkbox" id="side-menu-switch" />
  <div class="side-menu">
    <div class="search">
      <input type="search" name="" id="" />
      <button><fa icon="search" /></button>
    </div>
    <ul class="nav">
      <li>
        <a href="#"><fa class="fa" icon="angle-right" />鐵人賽</a>
        <ul>
          <li>
            <a>金魚都能懂的網頁設計入門</a>
            <ul>
              <li><a>day1</a></li>
              <li><a>day2</a></li>
              <li><a>day3</a></li>
            </ul>
          </li>
          <li>
            <a>金於都能懂的css選取器</a>
            <ul>
              <li><a>day1</a></li>
              <li><a>day2</a></li>
              <li><a>day3</a></li>
            </ul>
          </li>
          <li>
            <a>金魚都能懂的這個頁面畫面怎麼切</a>
            <ul>
              <li><a>day1</a></li>
              <li><a>day2</a></li>
              <li><a>day3</a></li>
            </ul>
          </li>
          <li>
            <a>連續30天的超食物網頁設計垂直置中教學</a>
            <ul>
              <li><a>day1</a></li>
              <li><a>day2</a></li>
              <li><a>day3</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href="#"><fa class="fa" icon="angry" />暴力班</a>
      </li>
      <li>
        <a href="#"><fa class="fa" icon="search" />RWD 醬子</a>
      </li>
      <li>
        <a href="#"><fa class="fa" icon="angle-right" />金魚網頁</a>
      </li>
      <li>
        <a href="#"><fa class="fa" icon="angry" />金魚切版</a>
      </li>
    </ul>
    <label for="side-menu-switch"><fa class="fa" icon="angle-right" /></label>
  </div>
</template>


<style lang="scss" scoped>
#side-menu-switch {
  display: none;
  &:checked + .side-menu {
    margin-left: 0px;
    label .fa {
      transform: scaleX(-1);
    }
  }
}

.side-menu {
  width: 300px;
  height: 100vh;
  background: linear-gradient(0deg, #3381b0, #c2196c);
  padding: 50px 0px;
  box-sizing: border-box;
  box-shadow: 10px 0px 10px hsla(240, 50%, 30%, 0.4);
  position: relative;
  margin-left: -300px;
  transition: 0.3s;
  .search {
    display: flex;
    margin: 0px 10px 50px;
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

  ul {
    color: #fff;
    width: 300px;
    li {
      position: relative; //父元素定位
      &:not(:first-child) > a {
        border-top: 1px solid #fff;
      }
      a {
        //a 的顏色
        color: #fff;
        font-size: 25px;
        margin: 10px;
        display: block;
        text-decoration: none;
        padding-top: 10px;

        .fa {
          width: 0.1%; //如果 0px的話會出錯，我猜是套件的問題
          transition: 0.5s;
        }
      }
      &:hover {
        .fa {
          width: 50px;
        }
        > ul {
          opacity: 1;
          display: block;
        }
      }
      ul {
        position: absolute;
        top: -3px;
        left: 300px;
        background-color: #aaa;
        box-shadow: 5px 5px 10px hsla(240, 400%, 15%, 0.6);
        display: none;
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
    border-radius: 0 10px 10px 0;
  }
}
</style>