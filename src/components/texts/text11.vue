<template>
  <div class="wrap">
    <div class="container">
      <h1>CSS COKE IS AWESOME</h1>
      <div class="txt">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptas doloremque quam vel rerum, quos ipsa quae distinctio
          temporibus autem inventore sunt? Consectetur iste numquam culpa non.
          Necessitatibus libero debitis esse consequuntur magnam possimus, eius
          temporibus sunt pariatur animi quia ipsa nisi, similique non tempore
          voluptate asperiores! Earum, omnis soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptas doloremque quam vel rerum, quos ipsa quae distinctio
          temporibus autem inventore sunt? Consectetur iste numquam culpa non.
          Necessitatibus libero debitis esse consequuntur magnam possimus, eius
          temporibus sunt pariatur animi quia ipsa nisi, similique non tempore
          voluptate asperiores! Earum, omnis soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptas doloremque quam vel rerum, quos ipsa quae distinctio
          temporibus autem inventore sunt? Consectetur iste numquam culpa non.
          Necessitatibus libero debitis esse consequuntur magnam possimus, eius
          temporibus sunt pariatur animi quia ipsa nisi, similique non tempore
          voluptate asperiores! Earum, omnis soluta.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptas doloremque quam vel rerum, quos ipsa quae distinctio
          temporibus autem inventore sunt? Consectetur iste numquam culpa non.
          Necessitatibus libero debitis esse consequuntur magnam possimus, eius
          temporibus sunt pariatur animi quia ipsa nisi, similique non tempore
          voluptate asperiores! Earum, omnis soluta.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  padding: 10px 0;

  .container {
    width: 1200px;
    margin: auto;
    text-align: center;
    h1 {
      box-sizing: border-box;
      font-size: 70px;
      display: flex;
      &::before,
      &::after {
        content: "";
        display: block;
        flex-grow: 1;
        height: 5px;
        background-color: #aaa;
        margin: auto;
        margin-right: .5em;
      }
      &::after {
        margin-left: .5em;
      }
    }
    .txt {
      box-sizing: border-box;
      line-height: 1.6;
      padding: 10px;

      p:first-child::first-letter {
        font-size: 50px;
        float: left;
        padding-right: 10px;
      }
      p {
        margin-bottom: 20px;
      }
    }
  }
}
</style>