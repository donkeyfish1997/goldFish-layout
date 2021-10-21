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
      <form class="header-search" action="">
        <input type="search" />
        <button><fa icon="search" /></button>
      </form>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  background: linear-gradient(0deg, #fe70d8, #3713c1);
  .container {
    display: flex;
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
    .header-search {
      display: block;
      border-radius: 200px;
      overflow: hidden;
      input,
      button {
        border: none;
        background-color: #fff;
        padding: 5px 10px;
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>