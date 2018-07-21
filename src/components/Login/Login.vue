<template>
  <div class="loginPage">
    <div class="loginContainer">
      <div class="panel">
        <input type="text" placeholder="User Name">
      </div>
      <div class="panel">
        <input type="password" placeholder="Password">
      </div>
      <div class="panel">
        <button disabled="disabled">Sign In</button>
      </div>
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

    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;

    .loginContainer {

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .panel {
        // background-color: tomato;
        flex: 1 0 50px;
        min-width: 300px;
        margin: 2px;
      }
    }

    input[type=text], input[type=password] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      font-size: 24px;
      display: inline-block;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }

    button {
      background-color: tomato;
      color: white;
      font-size: 24px;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
    }
  }


</style>
