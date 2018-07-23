<template>
  <div class="page">
    <div class="navigation">
      <div class="menuLauncher">
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </div>
      <div class="artistListContainer">
        My Artist Dropdown
      </div>
    </div>
    <div class="content">
      Landing
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .page {
    border: solid 5px #000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    min-height: 100vh;
    // min-width: 100vw;

    font-family: Arial, Helvetica, sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .navigation {
    background-color: tomato;
    width: 100%;
    flex: 0 0 65px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .menuLauncher {
      svg {
        margin: 10px;
        width: 40px;
        height: 40px;
      }
    }
    .artistListContainer {
      background-color: yellowgreen;
    }
  }

  .content {
    background-color: lightgray;
    width: 100%;
    flex: 1 1;
  }

</style>
