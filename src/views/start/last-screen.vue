<template>
    <div class="greetings">
        <img src="@/assets/back.png" alt="back" class="greetings__background">
        <img src="@/assets/open_eyes.png" alt="goose" class="greetings__goose">
        <img src="@/assets/Corobchik_neww.png" alt="box" class="greetings__corobchik">
        <div class="greetings__dialog">
            <img src="@/assets/text2.svg" alt="dialog">
            <span>В этой игре тебе предстоит доставить Коробчика имениннику.</span>
        </div>
        <button class="greetings__button" @mousedown="sayHello" @mouseup="resetStyle" ref="btn" @click="goTo">Не
            терпится начать!</button>
    </div>
</template>

<script>
export default {
    methods: {
        sayHello() {
            let el = this.$refs.btn;
            el.style.boxShadow = 'none';
        },
        resetStyle() {
            let el = this.$refs.btn;
            setTimeout(() => {
                el.style.boxShadow = '';
            }, 100);
        },
        goTo() {
            this.$router.push('/chat/obx');
        },
    },
}
</script>

<style lang="scss" scoped>
.greetings {
    position: relative;
    overflow: hidden;

    &__background {
        width: 100%;
        height: 100vh;
    }

    &__button {
        border-radius: 5px;
        box-shadow: 0 4px 0 0 #054fd4;
        background: #005bff;
        font-family: var(--gte);
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #fff;
        border: none;
        padding: 11px 87px;
        position: absolute;
        bottom: 30px;
        right: 13px;
        left: 13px;
        cursor: pointer;
        opacity: 0;
        white-space: nowrap;
        animation: fadeIn 0.5s forwards;

        @media (max-width: 430px) {
            bottom: 50px;
        }

        @media (max-width: 425px) {
            bottom: 30px;
        }

        @media (max-width: 420px) {
            bottom: 50px;
        }

        @media (max-width: 390px) {
            bottom: 30px;
        }
    }

    &__goose {
        position: absolute;
        left: 22%;
        top: 27%;
        width: 336px;
        opacity: 0;
        animation: fadeIn 1s forwards;

        @media (max-width: 800px) {
            top: 14%;
            left: 46%;
            width: 350px;
        }

        @media (max-width: 600px) {
            top: calc(50% - 260px);
            right: -80px;
            left: auto;
        }

        @media (max-width: 430px) {
            right: auto;
            top: calc(45% - 200px);
            left: 40%;
            width: 336px;
        }

        @media (max-width: 425px) {
            top: calc(44% - 200px);
        }

        @media (max-width: 420px) {
            top: calc(45% - 210px);
            left: 37%;
        }

        @media (max-width: 390px) {
            top: calc(47% - 210px);
            left: 35%;
        }

        @media (max-width: 375px) {
            top: calc(48% - 210px);
            left: 36%;
        }
    }

    &__corobchik {
        position: absolute;
        left: 0;
        top: 55%;
        opacity: 0;
        animation: fadeIn 1s forwards;
        width: 219px;

        @media (max-width: 800px) {
            top: 55%;
            left: 25%;
        }

        @media (max-width: 600px) {
            left: -10px;
            top: 50%;
        }

        @media (max-width: 430px) {
            top: 50%;
        }

        @media (max-width: 420px) {
            top: 49%;
        }

        @media (max-width: 390px) {
            top: 51%;
        }
    }

    &__dialog {
        position: absolute;
        top: 20px;
        right: 0;
        opacity: 0;
        animation: fadeIn 1s forwards;

        @media (max-width: 800px) {
            top: 20px;
            right: 180px;
        }

        @media (max-width: 600px) {
            top: 80px;
            right: 0;
        }

        @media (max-width: 430px) {
            top: 110px;
        }

        @media (max-width: 425px) {
            top: 30px;
        }

        @media (max-width: 420px) {
            top: 80px;
        }

        @media (max-width: 375px) {
            top: 50px;
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 16px;
            color: #073049;
            position: absolute;
            top: 20px;
            right: 0;
            left: 20px;
            opacity: 0;
            animation: fadeIn 2s forwards;
        }
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>