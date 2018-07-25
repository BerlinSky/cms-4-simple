<template>
  <div class="page">
    <div class="navigation">
      <div class="userMenuLauncher">
        <button type="button" @click="showModal">
          <font-awesome-icon :icon="['fas', 'user']" size="2x"></font-awesome-icon>
        </button>
      </div>
      <div class="currentArtist">
        <span>New Kids on the Block</span>
      </div>
      <div class="menuLauncher">
        <button type="button" @click="showModal">
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </button>
      </div>
    </div>
    <div class="content">
      Landing
    </div>

    <modal v-show="isModalVisible" @close="closeModal"></modal>
  </div>
</template>

<script>
import modal from '../Modal/MobileMenu';

export default {
  components: {
    modal,
  },
  data() {
    return {
      isModalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
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
    justify-content: space-between;
    align-items: center;

    .userMenuLauncher {
      svg {
        margin: 10px;
        width: 35px;
        height: 35px;
        // color: #fff;
      }
    }

    .menuLauncher {
      svg {
        margin: 10px;
        width: 40px;
        height: 40px;
      }
    }
    .artistListContainer {
      color: #fff;
      display: flex;
      justify-content: flex-end;
    }
  }

  .content {
    background-color: lightgray;
    width: 100%;
    flex: 1 1;
  }


</style>
