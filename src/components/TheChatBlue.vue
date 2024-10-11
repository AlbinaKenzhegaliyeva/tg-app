<template>
    <div class="chatting" :class="{ 'chatting--last': isLast }">
        <slot name="chattng__text"></slot>
    </div>
</template>

<script>
export default {
    props: {
        isLast: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style lang="scss" scoped>
.chatting {
    border-radius: 10px;
    padding: 7px;
    box-shadow: 3px 3px 13px 0 rgba(7, 48, 73, 0.4);
    background: #005bff;
    max-width: 256px;
    position: relative;
    background-attachment: fixed;
}

.chatting--last::before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: #005bff;
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
}

.chatting--last:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background: #005bff;
    border-bottom-right-radius: 20px;
    transform: skew(0.96turn, 358deg);
}
</style>