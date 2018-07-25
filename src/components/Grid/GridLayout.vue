<template>
  <div class="container">
    <div class="header">
      Header
    </div>
    <div class="sidebar">
      Sidebar
    </div>
    <div class="title">
      <h2>Title Section</h2>
      Title
      What is it?
    </div>
    <div class="content">
      Content
    </div>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    display: grid;
    align-items: stretch;
    grid-template-columns: 75% 25%;
    grid-template-rows: 120px auto 1fr 130px;
    grid-template-areas:
      "header header"
      "title sidebar"
      "content sidebar"
      "footer footer";

    .header, .footer {
      background: tomato;
      border: 1px solid #fff;
    }

    .header {
      grid-area: header;
    }

    .sidebar {
      grid-area: sidebar;
      background: darkgreen;
    }

    .title {
      grid-area: title;
      background: lightblue;
    }

    .content {
      grid-area: content;
      background: yellow;
    }

    .footer {
      grid-area: footer;
    }
  }

</style>
