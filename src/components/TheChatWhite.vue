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
    position: relative;
    
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.chatting::before {
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 0;
    right: 0;
    height: 10px;
    width: 10px;
    background: #fff;
    background-attachment: fixed;
    border-bottom-left-radius: 15px;
    transform: skew(0.04turn, 17deg);
}
</style>