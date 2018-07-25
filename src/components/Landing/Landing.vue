<template>
  <div class="page">
    <div class="navigation">
      <div class="menuLauncher">
        <button type="button" @click="showModal">
          <font-awesome-icon icon="bars"></font-awesome-icon>
        </button>
      </div>
      <div class="artistListContainer">
        <div>New Kids on the Block</div>
        <!-- <div class="select"> -->
          <!-- <select name="slct" id="slct">
            <option selected value="1">madonna.com</option>
            <option value="2">New Kids on the Block</option>
            <option value="3">GunsNRoses.com</option>
          </select>
        </div> -->
        <font-awesome-icon :icon="['fas', 'user']" :mask="['fas', 'circle']" size="2x"></font-awesome-icon>

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

  /* Reset Select */
  select {
    // appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background: transparent;
    background-image: none;
  }

  /* Custom Select */
  .select {
    position: relative;
    display: block;
    width: 300px;
    height: 48px;
    line-height: 3;
    background: transparent;
    overflow: hidden;
    border-radius: 0;
  }

  select {
    width: 100%;
    height: 100%;
    margin: 0;
    // padding: 0 0 0 2.5em;
    padding: 0 0 0 40px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  select::-ms-expand {
    display: none;
  }

  /* Arrow */
  .select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 30px;
    background: transparent;
    pointer-events: none;
    font-size: 16px;
  }

  /* Transition */
  .select:hover::after {
    color: #fff;
  }

  .select::after {
    transition: .25s all ease;
  }

</style>
