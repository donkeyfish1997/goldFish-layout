<template>
  <header class="main-header">
    <div class="container">
      <a href="#" class="logo">
        <img src="~@/assets/logo.jpeg" alt="" />
      </a>
      <nav class="main-nav">
        <a href="">Lorem</a>
        <a href="">Lorem</a>
        <a href="">Lorem</a>
        <a href="">Lorem</a>
      </nav>
    </div>
  </header>
  <header class="main-header">
    <div class="container container2">
      <a href="#" class="logo">
        <img src="~@/assets/logo.jpeg" alt="" />
      </a>
      <nav class="main-nav">
        <a href="">Lorem</a>
        <a href="">Lorem</a>
        <a href="">Lorem</a>
        <a href="">Lorem</a>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  background: linear-gradient(0deg, #cc4380, #fb6c75);
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    align-items: center;
    max-width: 1200px;
    margin: auto;
    .logo {
      width: 100px;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
    .main-nav {
      margin: auto;
      display: flex;
      a {
        display: inline-block;
        position: relative;
        text-decoration: none;
        color: #fff;
        padding: 5px 1em;
        transition: 0.3s;

        &::after {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          right: 50%;
          border-bottom: 1px solid rgb(255, 255, 255);
          transition: 0.3s;
        }
        &:hover {
          transform: translateY(-5px);
          &::after {
            left: 0;
            right: 0;
          }
        }
      }
    }
  }
  .container2 {
    flex-direction: row;
    height: 100px;
    .logo {
      position: absolute;
    }
    .main-nav {
      margin: 0;
      a:nth-child(3) {
        padding-left: 200px;
      }
    }
  }
}
</style>