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
          temporibus autem inventore sunt? Consecluptas doloremque quam vel rerum, quos ipsa quae distinctio
          temporibus autem inventore sunt? Consecluptas doloremque quam vel rerum, quos ipsa quae distinctio
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
      font-size: 90px;
      color: #aaa;
      text-align: center;
      margin-bottom: 30px;

      
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 70px;
        margin-top: -60px;
        background-color: #eee;
      }
    }
    .txt {
      column-count: 2;
      column-gap: 30px;
      p::first-letter {
        font-size: 60px;
        float: left;
        padding-right: 10px;

      }
    }
  }
}
</style>