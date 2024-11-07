<template>
    <div class="popup" @click.self="closeMenu" @touchstart="startSwipe" @touchend="endSwipe">
        <div class="popup__block">
        <div class="popup__header">
            <slot name="title"></slot>
            <img src="@/assets/handle.svg" alt="handle">
        </div>
        <div class="popup__body">
            <slot name="body"></slot>
        </div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        closeMenu() {
            this.$emit('close');
            document.body.style.overflow = '';
        },
        startSwipe(event) {
            this.startY = event.touches[0].clientY;
        },
        endSwipe(event) {
            const endY = event.changedTouches[0].clientY;
            if (endY - this.startY > 30) { // Порог в 50 пикселей для распознавания свайпа вниз
                this.closeMenu();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.popup {
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    z-index: 500;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 0 0;

    .popup__block {
        border-radius: 20px 20px 0px 0px;
        background: #0a3956;
        padding: 0 20px 49px 21px;

        .popup__header {
            display: flex;
            justify-content: center;
            padding: 10px 0 34px 0;
        }
    }
}
</style>