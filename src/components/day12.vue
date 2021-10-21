<template>
  <div class="table">
    <table>
      <caption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
        libero?<a href="#">hihihi</a>
      </caption>
      <thead>
        <tr>
          <th scope="col">lorem</th>
          <th scope="col">lorem</th>
          <th scope="col">lorem</th>
          <th scope="col">lorem</th>
          <th scope="col">lorem</th>
          <th scope="col">lorem</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="#">loremlink</a></td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
        <tr>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
          <td>lorem</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>lorem</td>
          <td colspan="5">lorem</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style lang="scss" socped>
.table {
  width: 700px;
  margin: auto;
  padding: 100px;
  background-color: #fff;
  background: linear-gradient(90deg, #3d6894, #08c7a5);
  table {
    border: 3px double #000;
    background-color: #fff;
    border-radius: 10px;
    thead {
      background-color: #333;
      color: #fff;
      th:first-child {
        border-radius: 7px 0 0 0;
      }
      th:last-child {
        border-radius: 0 7px 0 0;
      }
    }
    tbody {
      tr:nth-child(even) {
        background-color: #ffa;
      }
      tr:hover {
        background-color: #fee;
      }
      a {
        color: #777;
      }
    }
    tfoot {
      td:first-child {
        border-radius: 0 0 0 7px;
      }
      td:last-child {
        border-radius: 0 0 7px 0;
      }
    }
    td,
    th {
      padding: 10px 20px;
      border: 1px solid #000;
    }
    caption {
      caption-side: bottom;
      text-align: right;
      padding: 10px 0;
      color: #ccc;
      a {
        color: #eee;
      }
    }
  }
}
</style>