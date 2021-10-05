<template>
  <div
    class="modal-mask"
    @click.self="$emit('close')"
    @keydown.esc="$emit('close')"
  >
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> default header </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> default body </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="$emit('close')">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "Modal",
  methods: {},
  setup(_, { emit }) {
    function onEscapeKeyDown(event: KeyboardEvent) {
      if (String(event.key).toLowerCase() === "escape") {
        emit("close");
      }
    }

    onMounted(() => {
      window.removeEventListener("keydown", onEscapeKeyDown);
    });

    onBeforeUnmount(() => {
      window.addEventListener("keydown", onEscapeKeyDown);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal-mask {
  background: rgba(0, 0, 0, 0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-wrapper {
  z-index: 20;
  width: 100%;
  background: var(--background);
  padding: 1.5rem;
  position: relative;
  border-radius: 0.25rem;
  max-width: 32rem;

  @media (min-width: 567px) {
    max-width: 36rem;
    padding: 2rem;
  }
}

.modal-container {
  width: 100%;
  height: 100%;
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
