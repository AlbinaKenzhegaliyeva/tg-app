<template>
    <TheLoader v-if="isLoading" />
    <div class="page">
        <div class="door">
            <img src="@/assets/door.png" alt="door" class="door-back" v-show="showDoor">
            <img src="@/assets/open_eyes.png" alt="together" class="door-gosha" v-show="showCharacters">
            <img src="@/assets/Corobchik.png" alt="box" class="door-corobchik" v-show="showCharacters">
            <div class="door__dialog" v-if="showMsg">
                <img src="@/assets/fignya1.png" alt="text" class="door__dialog-bubble">
                <span>О, мы как раз вовремя!</span>
            </div>
            <img src="@/assets/flag.png" alt="flag" v-show="showFlag" class="flag">
            <img src="@/assets/all.png" alt="together" v-show="showFinalCharacters" class="final-characters">
            <div class="lizard__dialog" v-show="showMsg2">
                <img src="@/assets/place.png" alt="text" class="lizard__dialog-bubble">
                <span>Ура, спасибо за подарки!</span>
            </div>

            <div class="points" v-show="showPoints">
                <p>Набранные баллы:</p>
                <span>1142</span>
            </div>

            <div v-show="showBtn">
                <button @click="goToPreFinal">Было интересно!</button>
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
            showCharacters: false,
            showMsg: false,
            showDoor: true,
            showFlag: false,
            showFinalCharacters: false,
            showMsg2: false,
            showPoints: false,
            showBtn: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
            this.showDoor = true;
        }, 2000);
        setTimeout(() => {
            this.showCharacters = true;
        }, 3000);
        setTimeout(() => {
            this.showMsg = true;
        }, 5000);
        setTimeout(() => {
            this.showMsg = false;
            this.showCharacters = false;
            this.showDoor = false;
            this.showFlag = true;
        }, 10000);
        setTimeout(() => {
            this.showFinalCharacters = true;
        }, 11000);
        setTimeout(() => {
            this.showMsg2 = true;
        }, 12000);
        setTimeout(() => {
            this.showPoints = true;
        }, 13000);
        setTimeout(() => {
            this.showBtn = true;
        }, 14000);
    },
    methods: {
        goToPreFinal() {
            this.$router.push('/pre-final');
        },
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

        @media (max-width: 800px) {
            height: -webkit-fill-available;
            width: auto;
            left: 30%;
        }

        @media (max-width: 430px) {
            left: 0;
            height: auto;
            width: 100%;
        }
    }

    &-gosha {
        position: absolute;
        bottom: -70px;
        left: -100px;
        z-index: 100;
        width: 100%;

        @media (max-width: 800px) {
            width: 350px;
            left: 20%;
        }

        @media (max-width: 430px) {
            width: 100%;
            left: -100px;
        }
    }

    &-corobchik {
        position: absolute;
        bottom: -50px;
        right: -30px;
        z-index: 100;
        width: 262px;

        @media (max-width: 800px) {
            width: 250px;
            left: 48%;
        }

        @media (max-width: 430px) {
            width: 262px;
            left: 40%;
        }
    }

    &__dialog {
        position: relative;

        &-bubble {
            position: absolute;
            // width: 250px;
            top: 250px;
            left: 90px;
            z-index: 100;

            @media (max-width: 800px) {
                top: 100px;
                left: 300px;
            }

            @media (max-width: 430px) {
                top: 240px;
                left: 90px;
            }

            @media (max-width: 420px) {
                top: 250px;
            }

            @media (max-width: 390px) {
                top: 200px;
            }

            @media (max-width: 375px) {
                top: 170px;
                left: 80px;
            }
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 20px;
            color: #073049;
            position: absolute;
            top: 270px;
            left: 115px;
            z-index: 101;

            @media (max-width: 800px) {
                top: 120px;
                left: 320px;
            }

            @media (max-width: 430px) {
                top: 260px;
                left: 115px;
            }

            @media (max-width: 420px) {
                top: 270px;
            }

            @media (max-width: 390px) {
                top: 220px;
            }

            @media (max-width: 375px) {
                top: 190px;
                left: 100px;
            }
        }
    }

    img {
        &.flag {
            width: 100%;

            @media (max-width: 800px) {
                height: 427px;
            }

            @media (max-width: 430px) {
                height: auto;
            }
        }
    }

    img {
        &.final-characters {
            position: absolute;
            bottom: -100%;
            left: 0;
            width: 575px;
            opacity: 0;
            z-index: 100;
            animation: slideUp 1s forwards;

            @media (max-width: 800px) {
                width: 500px;
                left: 150px;
                top: 230px;
            }

            @media (max-width: 430px) {
                width: 575px;
                left: -100px;
                top: 400px;
            }

            @media (max-width: 420px) {
                width: 575px;
                left: -100px;
                top: 350px;
            }

            @media (max-width: 390px) {
                width: 575px;
                left: -100px;
                top: 300px;
            }
        }
    }

    .lizard__dialog {
        position: relative;

        &-bubble {
            position: absolute;
            top: -80px;

            @media (max-width: 800px) {
                top: -160px;
                left: 210px;
            }

            @media (max-width: 430px) {
                top: -20px;
                left: 0;
            }

            @media (max-width: 420px) {
                top: -50px;
            }

            @media (max-width: 390px) {
                top: -80px;
            }

            @media (max-width: 375px) {
                top: -110px;
                left: -3px;
            }
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 13px;
            line-height: 120%;
            color: #000;
            position: absolute;
            top: -60px;
            left: 15px;

            @media (max-width: 800px) {
                top: -140px;
                left: 220px;
            }

            @media (max-width: 430px) {
                top: 0;
                left: 15px;
            }

            @media (max-width: 420px) {
                top: -30px;
            }

            @media (max-width: 390px) {
                top: -60px;
            }

            @media (max-width: 375px) {
                top: -90px;
            }
        }
    }

    .points {
        border-radius: 7px;
        padding: 10px 50px;
        backdrop-filter: blur(6.741573333740234px);
        background: #fff;
        margin: 0 88px;
        position: absolute;
        top: 160px;
        text-align: center;
        opacity: 0;
        animation: slideDown 0.8s forwards;

        @media (max-width: 800px) {
            animation: slideDownBigScreen 0.8s forwards;
            left: 200px;
        }

        @media (max-width: 430px) {
            animation: slideDown 0.8s forwards;
            left: 0;
        }

        p {
            margin: 0 0 3px 0;
            font-family: var(--gte);
            font-weight: 400;
            font-size: 14px;
            text-align: center;
            color: #073049;
            white-space: nowrap;
        }

        span {
            font-family: var(--gte);
            font-weight: 500;
            font-size: 43px;
            line-height: 100%;
            text-align: center;
            color: #3adf68;
        }
    }

    button {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 4px 0 0 #054fd4;
        background: #005bff;
        border: none;
        padding: 11px 101px;
        position: absolute;
        bottom: 35px;
        left: 10px;
        right: 10px;
        z-index: 1000;
        opacity: 0;
        animation: slideUpBtn 0.5s ease forwards;
    }
}

@keyframes slideUp {
    0% {
        bottom: -100%;
        opacity: 0;
    }

    100% {
        bottom: 0;
        opacity: 1;
    }
}

@keyframes slideUpBtn {
    0% {
        bottom: -100%;
        opacity: 0;
    }

    100% {
        bottom: 40px;
        opacity: 1;
    }
}

@keyframes slideDown {
    0% {
        top: -100%;
        opacity: 0;
    }

    100% {
        top: 160px;
        opacity: 1;
    }
}

@keyframes slideDownBigScreen {
    0% {
        top: -100%;
        opacity: 0;
    }

    100% {
        top: 120px;
        opacity: 1;
    }
}
</style>