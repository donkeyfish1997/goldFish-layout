<template>
  <div class="wrap">
    <div class="login">
      <div class="form">
        <h2>會員登入</h2>
        <div class="group">
          <label for="user_id">帳號</label>
          <input type="text" id="user_id" />
        </div>
        <div class="group">
          <label for="passowrd">密碼</label>
          <input type="password" id="passowrd" />
        </div>
        <div class="btn-group">
          <button>登入</button>
          <button>取消</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: url("https://picsum.photos/2000/1600") no-repeat center
    center/cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    padding: 50px;
    width: 500px;
    background-color: #fff;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.397);
    border: 10px solid #fff;
    border-radius: 20px;
    backdrop-filter: blur(5px);
    .form {
        
      * {
        border-radius: 5px;
        border: none;
      }
      h2 {
        font-size: 3em;
      }
      .group {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        label {
          font-size: 1.5em;
        }
        input {
          margin-top: 10px;
          padding: 10px 20px;
          width: 100%;
          font-size: 1.3em;
          &:focus{outline: none;}
        }
      }

      .btn-group {
        margin-top: 50px;
        display: flex;
        button {
          width: 100%;
          font-size: 1.5em;
          padding: 10px;
          color: white;
          background-color: #1d9498;

          & + button {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>