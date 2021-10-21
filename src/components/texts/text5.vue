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

    h1 {
      font-size: 80px;
      float: right;
      width: 400px;
      text-align: right;
      margin-left: 10px;
      color: #aaa;
      position: relative;
      &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        z-index: -1;
        width: 200px;
        height: 200px;
        border: 30px solid #eee;
      }


    }
    .txt {
      column-count: 2;
      column-gap: 30px;
      line-height: 1.6;
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