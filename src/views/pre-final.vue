<template>
    <TheLoader v-if="isLoading" />
    <div class="page">
        <div class="gosha">
            <img src="@/assets/open_eyes.png" alt="goose" class="gosha__img">

            <div class="gosha__dialog" v-show="showDialog">
                <img src="@/assets/soz.svg" alt="dialog">
                <span>Ты круто показал себя — справился с высокими нагрузками и доставил Коробчика.
                    <br>Если хочешь работать над решениями, которыми пользуются миллионы, смотри вакансии на нашем
                    сайте.</span>
            </div>

            <div class="gosha__buttons">
                <div class="gosha__buttons_blue">
                    <span>Вакансии в Ozon Tech</span>
                    <img src="@/assets/op.svg" alt="go">
                </div>
                <div class="gosha__buttons_white" @click="goToFinal">
                    <span>Перейти к призам</span>
                    <img src="@/assets/dis.svg" alt="dis">
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';

export default {
    components: {
        TheLoader
    },
    data() {
        return {
            isLoading: true,
            showDialog: false
        }
    },
    methods: {
        goToFinal() {
            this.$router.push('/finals/');
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
        setTimeout(() => {
            this.showDialog = true;
        }, 3000);
    }
}
</script>

<style lang="scss">
.page {
    overflow: hidden;
    position: relative;
}

.gosha {
    background: url(@/assets/fon.png) no-repeat center fixed;
    background-size: cover;
    width: 100%;
    height: 100vh;

    &__img {
        width: 100%;
        position: absolute;
        bottom: -70px;
        left: -90px;

        @media (max-width: 800px) {
            width: 400px;
        }

        @media (max-width: 430px) {
            left: -100px;
            width: 100%;
        }
    }

    &__dialog {
        position: absolute;
        top: 200px;
        left: 5px;

        @media (max-width: 800px) {
            top: 10px;
            left: 90px;
        }

        @media (max-width: 430px) {
            top: 130px;
            left: 20px;
        }

        @media (max-width: 420px) {
            top: 120px;
            left: 20px;
        }

        @media (max-width: 390px) {
            top: 100px;
            left: 10px;
        }

        @media (max-width: 375px) {
            top: 50px;
            left: 0;
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 16px;
            color: #073049;
            position: absolute;
            top: 25px;
            left: 20px;
            right: 15px;
        }
    }

    &__buttons {
        display: flex;
        flex-direction: column;
        gap: 14px;
        position: absolute;
        bottom: 50px;
        left: 17px;
        right: 17px;
        opacity: 0;
        animation: slideUpBtn 5s forwards;

        &_blue {
            border-radius: 5px;
            padding: 11px 13px;
            box-shadow: 0 4px 0 0 #054fd4;
            background: #005bff;
            display: flex;
            gap: 98px;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 20px;
                color: #fff;
            }
        }

        &_white {
            border-radius: 5px;
            padding: 11px 13px;
            box-shadow: 0 4px 0 0 #e4e1e6;
            background: #fff;
            display: flex;
            gap: 133px;
            align-items: center;
            justify-content: space-between;
            white-space: nowrap;

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 20px;
                color: #005bff;
            }
        }
    }
}

@keyframes slideUpBtn {
    0% {
        bottom: -100%;
        opacity: 0;
    }

    100% {
        bottom: 50px;
        opacity: 1;
    }
}
</style>