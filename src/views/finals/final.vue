<template>
    <div class="page">
        <div class="header">
            <img src="@/assets/logo2.svg" alt="logo">
            <div class="header__menu" @click="openMenu">
                <img src="@/assets/hamb.svg" alt="menu">
                <span>Меню</span>
            </div>
        </div>

        <div class="text" v-show="showText">
            <span>
                Поздравляем, игра пройдена!
            </span>
            <span>
                Чтобы участвовать в розыгрыше, осталось только подписаться на телеграм Ozon Tech. Там много полезного и
                немного смешного.
            </span>
            <span>
                А ещё у нашего бота есть статьи про упомянутые в игре решения.
            </span>
        </div>

        <img src="@/assets/hello.png" alt="logo" class="goose">
        <div class="button">
            <span>Вакансии в Ozon Tech</span>
            <img src="@/assets/op.svg" alt="go">
        </div>
    </div>

    <TheMenu v-if="showMenu" @close="showMenu = false">
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
            showText: false,
            showMenu: false,
        };
    },
    mounted() {
        setTimeout(() => {
            this.showText = true;
        }, 800);
    },
    methods: {
        openMenu() {
            this.showMenu = true;
            document.body.style.overflow = 'hidden';
        },
        openLeaderboard() {
            this.$router.push('/finals/leaderboard');
            document.body.style.overflow = '';
        },
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
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.67px solid rgba(255, 255, 255, 0.2);
    border-radius: 0 0 13px 13px;
    background: #0a3956;
    z-index: 100;
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
        width: 215px;
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

.text {
    border-radius: 7px;
    padding: 10px 13px;
    backdrop-filter: blur(6.741573333740234px);
    background: #fff;
    text-align: center;
    margin: 120px 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
    animation: slideDown 1s forwards;

    span {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: #073049;
    }
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

@keyframes slideDown {
    0% {
        opacity: 0;
        margin: 50px 0 0 0;
    }

    100% {
        margin: 120px 0 0 0;
        opacity: 1;
    }
}
</style>
