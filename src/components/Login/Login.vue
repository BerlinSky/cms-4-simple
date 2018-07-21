<template>
  <div class="loginPage">
    <div class="loginContainer">
      <div class="panel">Name</div>
      <div class="panel">Password</div>
      <div class="panel">Login</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .loginPage {
    border: solid 5px #000;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    min-height: 100vh;
    // min-width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;

    .loginContainer {

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .panel {
        background-color: tomato;
        flex: 1 0 50px;
        min-width: 300px;
        font-size: 30px;
        margin: 2px;
      }
    }


  }
</style>
