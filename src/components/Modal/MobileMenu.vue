<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header">
          <slot name="header">
            <!-- <button type="button" class="btnClose" @click="close">X</button> -->
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
            <div class="menu">
             <ul>
              <li><a href="#">Dashboard</a></li>
              <li>
          <font-awesome-icon icon="sticky-note"></font-awesome-icon>


                <a href="#">News & Blog</a></li>
              <li><a href="#">Media</a></li>
              <li><a href="#">Discography</a></li>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Blocks</a></li>
              <li><a href="#">Comments</a></li>
              <li><a href="#">Users</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Admin</a></li>
              <li><a href="#">Sign Out</a></li>
            </ul>
            </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            The page footer
          </slot>

          <!-- <button class="btn-green" type="button" @click="close">Close me!</button> -->

        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btnClose {
  border: none;
  font-size: 20px;
  // padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.menu {
  // position: fixed;
  // // right: -100%;
  // top: 0;

  height: 200%;
  width: 250px;

  cursor: pointer;
  background-color: #efefef;

  transition: .53s transform;
  transition-timing-function: cubic-bezier(.38,.52,.37,1);

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      a {
        text-decoration: none;
        color: grey;
        padding: 20px;
        display: block;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}

</style>
