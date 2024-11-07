<template>
    <div class="page">
        <div class="header">
            <img src="@/assets/logo2.svg" alt="logo">
            <div class="header__menu">
                <img src="@/assets/hamb.svg" alt="menu">
                <span>Меню</span>
            </div>
        </div>

        <div class="header__menu_wrap" v-show="menu">
            <div class="header__menu_overlay" @click="openMenu">
                <img src="@/assets/hamb.svg" alt="menu">
                <span>Меню</span>
            </div>
        </div>

        <img src="@/assets/strelka.svg" alt="arrow" class="arrow" v-show="showArrow">

        <div class="text" v-show="showText">
            <span>
                Нажми сюда, чтобы запустить игру заново, посмотреть таблицу лидеров или открыть телеграм-канал Ozon
                Tech.
            </span>
        </div>

        <div class="tap" v-show="showTap" @click="goToFinal">
            <img src="@/assets/tap.svg" alt="tap">
        </div>


        <img src="@/assets/hello.png" alt="logo" class="goose">
        <div class="button">
            <span>Вакансии в Ozon Tech</span>
            <img src="@/assets/op.svg" alt="go">
        </div>
    </div>

    <TheMenu v-if="showMenu" @close="closeMenu">
        <template #title></template>
        <template #body>
            <div class="menu">
                <div>
                    <img src="@/assets/reload.svg" alt="reload">
                    <span>Сыграть ещё раз</span>
                </div>
                <div @click="openLeaderboard">
                    <img src="@/assets/coin.svg" alt="coin">
                    <span>Открыть таблицу лидеров</span>
                </div>
                <div>
                    <img src="@/assets/tg.svg" alt="tg">
                    <span>Перейти в телеграм-канал Ozon Tech</span>
                </div>
            </div>
        </template>
    </TheMenu>
</template>

<script>
import TheMenu from '@/components/TheMenu.vue';

export default {
    components: {
        TheMenu
    },
    data() {
        return {
            menu: true,
            showText: false,
            showArrow: false,
            showTap: false,
            showMenu: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showArrow = true;
        }, 800);
        setTimeout(() => {
            this.showText = true;
        }, 1600);
        setTimeout(() => {
            this.showTap = true;
        }, 2000);
    },
    methods: {
        goToFinal() {
            this.$router.push('/finals/final');
        },
        openMenu() {
            this.showTap = false;
            this.showArrow = false;
            this.showText = false;
            this.menu = false;
            this.showMenu = true;
            document.body.style.overflow = 'hidden';
        },
        openLeaderboard() {
            this.$router.push('/finals/leaderboard');
            document.body.style.overflow = '';
        },
        closeMenu() {
            this.showMenu = false;
            this.$router.push('/finals/final');
            document.body.style.overflow = '';
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    overflow: hidden;
    position: relative;
    height: 100vh;
    background-color: #02283E;
    background-image: url(@/assets/Vector.png);
    background-size: cover;
    padding: 0 17px;

    &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 2;
    }

    .header {
        z-index: 1;


        &__menu {
            z-index: 10;
            pointer-events: all;
        }
    }
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.67px solid rgba(255, 255, 255, 0.2);
    border-radius: 0 0 13px 13px;
    background: #0a3956;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    &__menu {
        border-radius: 25px;
        padding: 6px 12px;
        height: 33px;
        background: #005bff;
        display: flex;
        gap: 7px;
        align-items: center;
        margin: 0 20px 0 0;

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 16px;
            color: #fff;
        }
    }
}

.goose {
    width: 254px;
    position: absolute;
    bottom: 60px;
    left: 80px;

    @media (max-width: 800px) {
        left: 300px;
        width: 238px;
    }

    @media (max-width: 430px) {
        left: 80px;
        width: 254px;
    }
}

.button {
    border-radius: 5px;
    padding: 11px 13px;
    box-shadow: 0 4px 0 0 #054fd4;
    background: #005bff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 60px;
    left: 17px;
    right: 17px;

    span {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 20px;
        color: #fff;
    }
}

.header__menu_wrap {
    border: 0.67px solid #005bff;
    border-radius: 27px;
    position: absolute;
    z-index: 100;
    top: 15px;
    right: 8px;
    padding: 13px 12px 13px 11px;
    background: #0a3956;
}

.header__menu_overlay {
    border-radius: 25px;
    padding: 6px 12px;
    height: 33px;
    background: #005bff;
    display: flex;
    gap: 7px;
    align-items: center;

    span {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 16px;
        color: #fff;
    }
}

.arrow {
    position: absolute;
    z-index: 100;
    top: 80px;
    right: 130px;
}

.text {
    border-radius: 7px;
    padding: 10px 13px;
    backdrop-filter: blur(6.741573333740234px);
    background: #fff;
    text-align: center;
    position: absolute;
    top: 150px;
    left: 28px;
    right: 28px;
    z-index: 100;

    span {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        text-align: center;
        color: #073049;
    }
}

.tap {
    position: absolute;
    z-index: 100;
    bottom: 50px;
    right: 18px;
    animation: heartbeat 1s infinite;
    cursor: pointer;
}

.menu {
    display: flex;
    flex-direction: column;
    gap: 27px;

    div {
        display: flex;
        gap: 13px;
        align-items: center;

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 16px;
            color: #fff;
        }
    }
}

@keyframes heartbeat {

    0%,
    20%,
    80%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    60% {
        transform: scale(1.2);
    }

    70% {
        transform: scale(1.2);
    }
}
</style>
