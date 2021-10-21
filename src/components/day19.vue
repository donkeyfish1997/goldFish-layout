<template>
  <div class="wrap">
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam
      aperiam necessitatibus aliquid possimus quia architecto a harum itaque
      magnam.
    </p>
    <ul class="timeline">
      <li v-for="i in 6" :key="i">
        <a href="#">
          <h2>Lorem, ipsum.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            enim sed, culpa nemo dignissimos non necessitatibus praesentium
            recusandae odit at minus sunt iure ratione saepe quia assumenda,
            nobis quae. Vero?
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 960px;
  margin: auto;
  background-color: #edece1;
  h1 {
  }
  p {
  }
  .timeline {
    padding-top: 100px;
    li {
      width: 50%;
      box-sizing: border-box;
      padding: 20px 0;
      position: relative;
      z-index: 1;
      a {
        display: block;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #aaa;
        box-sizing: border-box;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 3px 3px 5px #888;

        h2 {
          color: #333;
          font-weight: 700;
        }
        p {
          color: #666;
          font-weight: 100;
        }
        &:hover {
          background-color: #6fa5f6;
          h2,
          p {
            color: #fff;
          }
        }
        &::before {
          content: "";
          display: block;
          position: absolute;
          background-color: #ccc;
          width: 100px;
          height: 1px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        background-color: #aaa;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      &:nth-child(odd) {
        float: left;
        padding-right: 100px;
        z-index: 0;
        &::before {
          content: "";
          display: block;
          position: absolute;
          background-color: #ccc;
          width: 1px;
          height: 100%;
          top: 0;
          right: 0px;
        }
        &::after {
          right: -10px;
        }
        a::before {
          right: 0;
        }
      }
      &:nth-child(even) {
        float: right;
        padding-left: 100px;
        transform: translateY(50%);
        &::after {
          left: -11px;
        }
        a::before {
          left: 0;
        }
      }
      &:last-child::before {
        height: 50%;
      }
      &:first-child::before {
        top: 50%;
        height: 50%;
      }
    }
  }
  padding-bottom: 200px;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>