<template>
  <div class="main-footer">
    <div class="container">
      <div class="footer-item">
        <h4>Lorem ipsum dolor sit.</h4>
        <nav>
          <a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>Lorem ipsum dolor sit.</h4>
        <nav>
          <a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>Lorem ipsum dolor sit.</h4>
        <nav>
          <a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a
          ><a href=""><fa icon="angle-right" />hihihi</a>
        </nav>
      </div>
      <div class="footer-item footer-subs">
        <h4>訂閱電子報</h4>
        <form action="">
          <input type="text" />
          <input type="submit" value="訂閱" />
        </form>
      </div>
    </div>
    <div class="copyright">
      Copyright &copy; 2019 金魚都能懂的這個網頁畫面怎麼切
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-footer {
  padding: 150px 0 0;
  background: linear-gradient(-20deg, #3f5494, #08c7a5);
  .container {
    display: flex;
    width: 1200px;
    margin: auto;
    .footer-item {
      width: 0;
      flex-grow: 1;
      margin: 0px 20px;
      h4 {
        font-size: 24px;
        color: #fff;
        border-bottom: 1px dotted #fff;
        margin-bottom: 0.5em;
        padding-bottom: 0.5em;
      }
      nav {
        display: flex;
        flex-direction: column;
        a {
          color: #fff;
          line-height: 1.5;
          text-decoration: none;
          padding: 5px 0;
          &:hover {
            color: #fa0;
          }
        }
      }
    }
    .footer-subs {
      display: flex;
      flex-direction: column;
      form {
        display: flex;
        width: 100%;
        margin: auto;

        input {
          border: none;
          padding: 5px 10px;
          &[type="text"] {
            width: 0;
            flex-grow: 1;
          }
          &[type="submit"] {
            color: #70f6df;
            background-color: #3e5293;
          }
        }
      }
    }
  }
  .copyright {
    text-align: center;
    margin-top: 150px;
    padding: 10px 0;
    background-color: #3e5293;
    color: #70f6df;
    // width: 100%;
  }
}
</style>