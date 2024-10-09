<template>
    <div class="chatting">
        <slot name="chattng__text"></slot>
    </div>
</template>

<style lang="scss" scoped>
.chatting {
    border-radius: 10px;
    padding: 7px;
    box-shadow: 3px 3px 13px 0 rgba(7, 48, 73, 0.4);
    background: #fff;
    max-width: 257px;
}
</style>