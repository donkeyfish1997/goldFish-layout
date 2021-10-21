<template>
  <ul>
    <li
      class="box"
      :style="{ backgroundColor: i[1] }"
      v-for="i in [
        ['金魚', '#3ed0cd'],
        ['暴力網頁', '#b2e086'],
        ['切版', '#ef8899'],
        ['網頁入門', '#fc7b51'],
        ['css', '#2fccf9'],
        ['HTML', '#5f539b'],
        ['網頁教學', '#fce920'],
        ['RWD網頁', '#7cc85c'],
        ['Bootstrap', '#ffa55e'],
      ]"
      :key="i"
    >
      <p>{{ i[0] }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  width: 1000px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding: 100px 300px 200px 0px;
  .box {
    width: 200px;
    height: 200px;
    margin-left: 120px;
    margin-bottom: -40px;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    transform: rotate(45deg);
    p {
      transform: rotate(-45deg);
    }

    &:nth-child(6n),
    &:nth-child(6n-1),
    &:nth-child(6n-2) {
      transform: translate(160px) rotate(45deg);
    }
    &:hover{
      color: #fff;
      background-color: black !important;
    }
  }
}
</style>