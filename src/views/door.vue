<template>
    <div class="page">
        <div class="door">
            <img src="@/assets/door.png" alt="door" class="door-back">
            <img src="@/assets/open_eyes.png" alt="together" class="door-gosha" v-if="showCharacters">
            <img src="@/assets/Corobchik.png" alt="box" class="door-corobchik" v-if="showCharacters">
            <div class="door__dialog" v-if="showMsg">
                <img src="@/assets/fignya.png" alt="text" class="door__dialog-bubble">
                <span>О, мы как раз вовремя!</span>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            showCharacters: false,
            showMsg: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showCharacters = true;
        }, 3000);
        setTimeout(() => {
            this.showMsg = true;
        }, 6000);
    }
}
</script>


<style lang="scss">
.page {
    position: relative;
    overflow: hidden;
}

.door {
    width: 100%;
    height: 100vh;
    background: url(@/assets/door_back.png) no-repeat center fixed;
    background-size: cover;

    &-back {
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: 1;
    }

    &-gosha {
        position: absolute;
        bottom: -90px;
        left: -100px;
        z-index: 100;
        width: 100%;
    }

    &-corobchik {
        position: absolute;
        bottom: -50px;
        right: -30px;
        z-index: 100;
        width: 262px;
    }

    &__dialog {
        position: relative;

        &-bubble {
            position: absolute;
            width: 250px;
            top: 350px;
            left: 100px;
            z-index: 100;
            opacity: 0;
            animation: fadeDialogIn 1s forwards;

        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 20px;
            color: #073049;
            position: absolute;
            top: 370px;
            left: 115px;
            z-index: 101;
            opacity: 0;
            animation: fadeDialogIn 2s forwards;
        }
    }
}

@keyframes fadeDialogIn {
    to {
        opacity: 1;
    }
}
</style>