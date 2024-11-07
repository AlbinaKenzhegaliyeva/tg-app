<template>
    <div class="page">
        <div class="header">
            <div class="header__logo-back">
                <img src="@/assets/znak.svg" alt="symbol" @click="goBack">

                <div class="header__logo">
                    <img src="@/assets/brace.svg" alt="logo">
                    <div class="header__logo-text">
                        <div>
                            <span>Ozon Tech</span>
                            <img src="@/assets/galka.svg" alt="item">
                        </div>
                        <span>Таблица лидеров</span>
                    </div>
                </div>
            </div>
            <div class="header__menu" @click="openMenu">
                <img src="@/assets/hamb.svg" alt="menu">
                <span>Меню</span>
            </div>
        </div>

        <div class="leaders-top">
            <div class="leader">
                <img src="@/assets/2.svg" alt="2">
                <div>
                    <p>@username</p>
                    <span>1247</span>
                </div>
            </div>
            <div class="leader first-place">
                <img src="@/assets/1.svg" alt="1">
                <div>
                    <p>@username</p>
                    <span>1322</span>
                </div>
            </div>
            <div class="leader">
                <img src="@/assets/3.svg" alt="3">
                <div>
                    <p>@username</p>
                    <span>1199</span>
                </div>
            </div>
        </div>

        <div class="leaders-list">
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>4</p>
                        <img src="@/assets/4.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <!-- <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>5</p>
                        <img src="@/assets/5.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div> -->
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>6</p>
                        <img src="@/assets/6.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>7</p>
                        <img src="@/assets/7.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>8</p>
                        <img src="@/assets/8.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>9</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>10</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>11</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>12</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>13</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>14</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>22</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>24</p>
                        <img src="@/assets/9.svg" alt="avatar">
                    </div>
                    <span>@username</span>
                </div>
                <span>1122</span>
            </div>
            <div class="leaders-list__item user-place" :class="{ 'user-fixed': userPlaceNumber >= 10 }" id="user-place">
                <div class="leaders-list__item-inner">
                    <div>
                        <p>{{ userPlaceNumber }}</p>
                        <img src="@/assets/last.svg" alt="avatar">
                    </div>
                    <span>@testik</span>
                </div>
                <span>202</span>
            </div>
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
                    <img src="@/assets/op.svg" alt="item">
                    <span>Вакансии Ozon Tech</span>
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
            showMenu: false,
            userPlaceNumber: 15,
        };
    },
    mounted() {
        this.setInitialPosition();
        window.addEventListener('scroll', this.checkPosition);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.checkPosition);
    },
    methods: {
        openMenu() {
            this.showMenu = true;
            document.body.style.overflow = 'hidden';
        },
        goBack() {
            this.$router.push('/finals/final');
        },
        setInitialPosition() {
            const leaderItems = Array.from(document.querySelectorAll('.leaders-list__item'));
            let userPlace = null;
            let previousPlace = null;

            leaderItems.forEach(item => {
                const placeNumber = parseInt(item.querySelector('p').textContent.trim(), 10);
                if (placeNumber === this.userPlaceNumber) {
                    userPlace = item;
                } else if (placeNumber === this.userPlaceNumber - 1) {
                    previousPlace = item;
                }
            });

            if (userPlace) {
                if (this.userPlaceNumber < 10) {
                    if (this.userPlaceNumber === 4) {
                        userPlace.parentNode.insertBefore(userPlace, userPlace.parentNode.firstChild);
                    }
                    previousPlace.after(userPlace);
                    userPlace.style.boxShadow = 'none';
                } else {
                    userPlace.classList.add('user-fixed');
                }
            }
        },
        checkPosition() {
            const leaderItems = Array.from(document.querySelectorAll('.leaders-list__item'));
            let userPlace = null;
            let previousPlace = null;

            leaderItems.forEach(item => {
                const placeNumber = parseInt(item.querySelector('p').textContent.trim(), 10);
                if (placeNumber === this.userPlaceNumber) {
                    userPlace = item;
                } else if (placeNumber === this.userPlaceNumber - 1) {
                    previousPlace = item;
                }
            });

            if (userPlace && previousPlace && this.userPlaceNumber >= 10) {
                const rect = userPlace.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    previousPlace.after(userPlace);
                    userPlace.classList.remove('user-fixed');
                    userPlace.style.boxShadow = 'none';
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    overflow: hidden;
    position: relative;
    //height: 100vh;
    background-color: #02283E;
    background-image: url(@/assets/Vector.png);
    background-size: cover;
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
    padding: 16px 20px 16px 23px;

    &__logo-back {
        display: flex;
        gap: 20px;
        align-items: center;
    }


    &__logo {
        display: flex;
        gap: 10px;
        align-items: center;


        &-text {
            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 12px;
                line-height: 120%;
                color: #989ba0;
            }

            div {
                display: flex;
                align-items: center;
                gap: 4px;

                span {
                    font-family: var(--gte);
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 120%;
                    color: #fff;
                }
            }
        }
    }

    &__menu {
        border-radius: 25px;
        padding: 0 12px;
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
}

.leaders-top {
    display: flex;
    gap: 131px;
    justify-content: center;
    align-items: center;
    margin: 150px 0 0 0;

    .leader {
        display: flex;
        flex-direction: column;
        gap: 8px;

        div {
            display: flex;
            flex-direction: column;
            gap: 4px;

            p {
                font-family: var(--gte);
                font-weight: 500;
                font-size: 13px;
                line-height: 130%;
                text-align: center;
                color: #fff;
                margin: 0;
            }

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 12px;
                line-height: 130%;
                text-align: center;
                color: #fff;
            }
        }
    }

    .first-place {
        position: absolute;
        top: 130px;
    }
}

.leaders-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 23px 20px;

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        padding: 6px 20px 6px 13px;
        background: #383d46;

        &-inner {
            display: flex;
            align-items: center;
            gap: 13px;

            div {
                display: flex;
                align-items: center;
                gap: 7px;

                p {
                    font-family: var(--gte);
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 150%;
                    color: #fff;
                    text-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.25);
                }
            }

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 13px;
                line-height: 150%;
                color: #fff;
            }
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 13px;
            line-height: 150%;
            text-align: right;
            color: #fff;
        }
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

.leaders-list__item {
    transition: transform 0.5s ease, opacity 0.5s ease;
}

.user-place {
    background: #64cc84;
    box-shadow: 0 -7px 12px 10px #02283e;
    transform: translateY(0);
    transition: all 2s ease-in-out;
}

.user-fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    left: 20px;
    transition: all 2s ease-in-out;
}
</style>