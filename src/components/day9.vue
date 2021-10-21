<template>
  <div class="wrap">
    <ol class="breadcrumb">
      <li><a href="">abcdef</a></li>
      <li><a href="">abcdef</a></li>
      <li><a href="">abcdef</a></li>
      <li><a href="">abcdef</a></li>
      <li><a href="">abcdef</a></li>
      <li><a href="">abcdef</a></li>
    </ol>
  </div>
</template>


<style lang="scss" scoped>
.wrap {
  padding: 10px;
  background-color: #ec008b;
  box-shadow: 0px 5px 5px #000;
  .breadcrumb {
    display: flex;
    margin: auto;
    li {
      padding-right: 20px;
      & + li::before {
        content: ">";
        color: #fff;
        padding-right: 20px;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      &:last-child a,a:hover {
      color: #ffa;
    }
    }
    
  }
}
</style>