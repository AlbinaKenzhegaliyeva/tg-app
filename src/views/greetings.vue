<template>
<TheLoader v-if="isLoading" />
    <div class="greetings">
        <img src="@/assets/back.png" alt="back" class="greetings__background">
        <img src="@/assets/hello.png" alt="goose" class="greetings__gosha_begin first-goose">
        <img src="@/assets/open_eyes.png" alt="goose" class="greetings__gosha_after second-goose" ref="secondGoose"
            v-show="!goose && !smirk">
        <div class="greetings__dialog" v-if="isVisible">
            <img src="@/assets/dialog.svg" alt="dialog" class="greetings__dialog-bubble">
            <span>Привет! На связи Гоша — всесторонне одарённый инженер.</span>
        </div>
        <div class="greetings__info" v-if="isVisible">
            <span>Одним крылом он поддерживает высокие нагрузки, другим — здоровую атмосферу в команде.<br>Оптимист,
                юморист и просто хороший <span class="crossed-text">человек</span> гусь!</span>
        </div>
        <button class="greetings__btn-hello" v-if="isVisible" @mousedown="sayHello" @mouseup="resetStyle"
            @click="moveGoose" ref="btn">Привет!</button>
        <img src="@/assets/smirkk.png" alt="goose" class="goose-smirk" v-show="smirk">
        <img src="@/assets/Corobchik.svg" alt="box" class="greetings__corobchik" v-show="corobchik">
        <div class="greetings__about-korobchik" v-if="corobchikVisible">
            <img src="@/assets/text.svg" alt="dialog" class="greetings__about-korobchik-bubble">
            <div class="greetings__about-korobchik-text">
                <span>А это Коробчик — подарок на день рождения и один из 6 100 000 ежедневных заказов на
                    Ozon.</span>
                <span>Над оперативностью доставки работают 6 000+ ИТ-специалистов в сложной системе с 6 100
                    микросервисами.</span>
            </div>
        </div>
        <button class="greetings__btn-korobchik" v-if="corobchikVisible" @mousedown="sayHello" @mouseup="resetStyle"
            @click="goToForm" ref="btn">Ого, сколько всего</button>
        <img src="@/assets/open_eyes.png" alt="goose" class="third-goose" v-show="goose">

        <img src="@/assets/corob-hand.png" alt="box" class="greetings__corobchik-hand" v-show="corobchik_hand">
        <div class="greetings__gosha-corobchik" v-show="corobchik_hand">
            <span>С Гошей и Коробчиком познакомились, твоя очередь представиться.</span>
        </div>
        <div class="greetings__form-btn" v-show="corobchik_hand">
            <button  @click="goToNextScreen">Заполнить данные</button>
            <div @click="openFormInfo">
                <img src="@/assets/in.svg" alt="info">
            </div>
        </div>
        <div class="greetings__form-bubble" v-show="clickInfo">
            <img src="@/assets/final-bubble.png" alt="dialog">
            <span>
                Мы собираем данные для формирования лидерборда и отправки подарков победителям, другие пользователи увидят только твой ник
            </span>
        </div>

        <div class="greetings__order-korobchik" v-show="orderVisible">
            <img src="@/assets/text2.svg" alt="dialog" class="greetings__order-korobchik-bubble">
            <span>В этой игре тебе предстоит доставить Коробчика имениннику.</span>
        </div>
        <button class="greetings__btn-order-korobchik" v-show="orderVisible" @mousedown="sayHello" @mouseup="resetStyle"
            ref="btn" @click="goTo">Не терпится начать!</button>
    </div>
</template>

<script>
import TheLoader from '@/components/TheLoader.vue';

export default {
    components: {
        TheLoader
    },
    name: 'Greetings',
    data() {
        return {
            isLoading: true,
            isVisible: true,
            corobchikVisible: false,
            orderVisible: false,
            corobchik: false,
            goose: false,
            smirk: false,
            corobchik_hand: false,
            clickInfo: false,
        }
    },
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
        moveGoose() {
            let goose = this.$refs.secondGoose;
            goose.classList.add('diagonal-move');
            this.isVisible = false;
            goose.addEventListener('transitionend', this.nextStep);
        },
        nextStep() {
            let goose = this.$refs.secondGoose;
            goose.removeEventListener('transitionend', this.nextStep);
            this.corobchikVisible = true;
            this.corobchik = true;
            setTimeout(() => {
                this.smirk = true;
            }, 0);
        },
        goToForm() {
            this.corobchik = false;
            this.corobchik_hand = true;
            this.goose = true;
            this.smirk = false;
            this.corobchikVisible = false;
        },
        openFormInfo() {
            this.clickInfo = !this.clickInfo;
        },
        goToNextScreen() {  //change!!!!
            this.orderVisible = true;
            this.corobchik = true;
            this.goose = true;
            this.corobchik_hand = false;
        },
        goTo() {
            this.$router.push('/chat/obx');
        },
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
}
</script>

<style lang="scss">
.greetings {
    position: relative;
    overflow: hidden;

    &__background {
        width: 100%;
        height: 100vh;
    }

    &__gosha_begin {
        position: absolute;
        left: 50%;
        top: 32.5%;
        right: 0;
        bottom: 0;
        width: 100%;
        transform: translateX(-50%) scale(1);
        transition: transform 3s ease-in-out;

        @media (max-width: 800px) {
            top: 20%;
            width: -webkit-fill-available;
        }

        @media (max-width: 430px) {
            top: 22%;
            width: 100%;
        }

        @media (max-width: 375px) {
            top: 18%;
        }
    }

    &__gosha_after {
        position: absolute;
        left: 50%;
        top: 35%;
        right: 0;
        bottom: 0;
        width: 100%;
        transform: translateX(-47.5%) scale(1.32);
        transition: transform 3s ease-in-out;

        @media (max-width: 800px) {
            top: 23%;
            width: -webkit-fill-available;
        }

        @media (max-width: 430px) {
            transform: translateX(-47.5%) scale(1.32);
            top: 26%;
            width: 100%;
        }

        @media (max-width: 390px) {
            transform: translateX(-47.5%) scale(1.32);
        }

        @media (max-width: 375px) {
            transform: translateX(-47.5%) scale(1.32);
            top: 22%;
        }
    }

    &__dialog {
        opacity: 0;
        animation: fadeIn 0.8s forwards;
        animation-delay: 6s;

        &-bubble {
            position: absolute;
            top: calc(35% - 170px);
            right: 0;
            left: 0;
            width: auto;
            max-width: 100%;
            padding: 5px;

            @media (max-width: 800px) {
                width: 450px;
                top: 0;
                left: 180px;
                padding: 0;
            }

            @media (max-width: 430px) {
                top: calc(30% - 170px);
                right: 0;
                left: 0;
                width: auto;
                padding: 5px;
            }
        }

        span {
            position: absolute;
            top: calc(35% - 140px);
            left: 35px;
            right: 35px;
            font-family: var(--gte);
            font-weight: 400;
            font-size: 20px;
            color: #073049;

            @media (max-width: 800px) {
                top: 30px;
                left: 220px;
                right: 170px;
            }

            @media (max-width: 430px) {
                top: calc(30% - 140px);
                left: 35px;
                right: 35px;
            }

            @media (max-width: 375px) {
                top: calc(35% - 180px);
                left: 30px;
                right: 20px;
            }
        }
    }

    &__info {
        border-radius: 7px;
        padding: 11px;
        backdrop-filter: blur(5px);
        background: rgba(1, 25, 81, 0.85);
        position: absolute;
        bottom: 100px;
        right: 13.5px;
        left: 13.5px;
        opacity: 0;
        animation: fadeIn 1s forwards;
        animation-delay: 6.5s;

        @media (max-width: 430px) {
            bottom: 142px;
        }

        @media (max-width: 420px) {
            bottom: 125px;
        }

        @media (max-width: 390px) {
            bottom: 110px;
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 14px;
            color: #fff;
        }

        .crossed-text {
            position: relative;
            display: inline-block;
        }

        .crossed-text::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1.35px;
            background-color: #f06;
            transform: rotate(-10deg);
        }
    }

    &__btn-hello {
        border-radius: 5px;
        box-shadow: 0 4px 0 0 #054fd4;
        background: #005bff;
        border: none;
        font-family: var(--gte);
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #fff;
        padding: 11px 0;
        position: absolute;
        left: 13.5px;
        right: 13.5px;
        bottom: 30px;
        opacity: 0;
        cursor: pointer;
        animation: fadeIn 1s forwards;
        animation-delay: 6.5s;

        @media (max-width: 430px) {
            bottom: 70px;
        }

        @media (max-width: 420px) {
            bottom: 60px;
        }

        @media (max-width: 390px) {
            bottom: 50px;
        }
    }

    &__corobchik {
        position: absolute;
        left: 0;
        top: 55%;
        opacity: 0;
        animation: fadeIn 0.5s forwards;
        animation-delay: 0s;

        @media (max-width: 800px) {
            top: 55%;
            left: 25%;
        }

        @media (max-width: 430px) {
            top: 50%;
            left: 0;
        }

        @media (max-width: 420px) {
            top: 48%;
        }

        @media (max-width: 390px) {
            top: 51%;
        }
    }

    &__about-korobchik {
        opacity: 0;
        animation: fadeIn 1s forwards;
        animation-delay: 1s;

        &-bubble {
            position: absolute;
            top: calc(25% - 160px);
            left: 0;
            right: 0;
            margin: 0 auto;
            padding: 0;
            width: 100%;

            @media (max-width: 800px) {
                width: auto;
                left: 260px;
                margin: 0;
                top: 15px;
            }

            @media (max-width: 430px) {
                width: 100%;
                left: 0;
                margin: 0 auto;
                top: calc(25% - 160px);
            }
        }

        &-text {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: absolute;
            top: calc(25% - 140px);
            left: 0;
            right: 0;

            @media (max-width: 800px) {
                left: 260px;
                top: 35px;
                right: 150px;
            }

            @media (max-width: 430px) {
                top: calc(25% - 140px);
                left: 0;
                right: 0;
            }

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 15px;
                color: #073049;
                left: auto;
                right: auto;
                top: auto;
                padding: 0 20px;
            }
        }
    }

    &__btn-korobchik {
        border-radius: 5px;
        box-shadow: 0 4px 0 0 #054fd4;
        background: #005bff;
        font-family: var(--gte);
        font-weight: 400;
        font-size: 20px;
        text-align: center;
        color: #fff;
        border: none;
        padding: 11px 95px;
        position: absolute;
        bottom: 30px;
        right: 13px;
        left: 13px;
        white-space: nowrap;
        cursor: pointer;
        opacity: 0;
        animation: fadeIn 1s forwards;
        animation-delay: 1s;

        @media (max-width: 430px) {
            bottom: 50px;
        }

        @media (max-width: 420px) {
            bottom: 50px;
        }

        @media (max-width: 390px) {
            bottom: 30px;
        }
    }

    &__order-korobchik {
        opacity: 0;
        animation: fadeIn 0.5s forwards;

        &-bubble {
            position: absolute;
            top: 160px;
            right: 0;

            @media (max-width: 800px) {
                top: 20px;
                right: 170px;
            }

            @media (max-width: 430px) {
                top: 120px;
                right: 20px;
            }

            @media (max-width: 420px) {
                top: 100px;
                right: 20px;
            }

            @media (max-width: 390px) {
                top: 90px;
                right: 5px;
            }

            @media (max-width: 375px) {
                top: 50px;
            }
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 16px;
            color: #073049;
            position: absolute;
            top: 180px;
            right: 30px;
            left: 100px;

            @media (max-width: 800px) {
                top: 40px;
                left: 350px;
                right: 200px;
            }

            @media (max-width: 430px) {
                top: 140px;
                left: 115px;
                right: 30px;
            }

            @media (max-width: 420px) {
                top: 120px;
                left: 97px;
            }

            @media (max-width: 390px) {
                top: 110px;
                left: 100px;
            }

            @media (max-width: 375px) {
                top: 70px;
                right: 40px;
                left: 80px;
            }
        }
    }

    &__btn-order-korobchik {
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

        @media (max-width: 420px) {
            bottom: 50px;
        }

        @media (max-width: 390px) {
            bottom: 30px;
        }
    }

    &__corobchik-hand {
        position: absolute;
        left: 0;
        top: 55%;
        opacity: 0;
        animation: fadeIn 0.5s forwards;
        animation-delay: 0s;

        @media (max-width: 800px) {
            top: 55%;
            left: 25%;
        }

        @media (max-width: 430px) {
            top: 50%;
            left: 0;
        }

        @media (max-width: 420px) {
            top: 48%;
        }

        @media (max-width: 390px) {
            top: 51%;
        }
    }


    &__gosha-corobchik {
        border-radius: 7px;
        padding: 10px;
        backdrop-filter: blur(6.741573333740234px);
        background: rgba(1, 25, 81, 0.85);
        position: absolute;
        top: 20px;
        left: 13px;
        right: 13px;

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 19px;
            color: #fff;
        }
    }

    &__form-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 13px;
        position: absolute;
        bottom: 30px;
        right: 13px;
        left: 13px;

        button {
            border-radius: 5px;
            border: none;
            box-shadow: 0 4px 0 0 #054fd4;
            background: #005bff;
            font-family: var(--gte);
            font-weight: 400;
            font-size: 20px;
            text-align: center;
            color: #fff;
            padding: 11px 63px;
            white-space: nowrap;
            width: 100%;
            cursor: pointer;
        }

        div {
            border-radius: 5px;
            padding: 11px 11px 11px 13px;
            box-shadow: 0 4px 0 0 #054fd4;
            background: #005bff;
        }
    }

    &__form-bubble {
        position: relative;

        img {
            position: absolute;
            bottom: 70px;
            right: 0;
        }

        span {
            position: absolute;
            bottom: 105px;
            left: 80px;
            right: 20px;
            font-family: var(--gte);
            font-weight: 400;
            font-size: 14px;
            color: #073049;
        }
    }
}

.first-goose {
    animation: zoomIn 2s forwards, fadeOut 1s forwards;
    // animation: zoomIn 2s forwards;
    animation-delay: 1s, 4s;
    transform-origin: center;
}

.second-goose {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 4s;
}

.third-goose {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    left: 22%;
    top: 27%;
    width: 336px;

    @media (max-width: 800px) {
        top: 14%;
        left: 46%;
        width: 350px;
    }

    @media (max-width: 430px) {
        top: 22%;
        left: 36%;
        width: 336px;
    }

    @media (max-width: 420px) {
        top: 19%;
        left: 35%;
    }

    @media (max-width: 390px) {
        top: 19%;
        left: 35%;
    }

    @media (max-width: 375px) {
        top: 17%;
        left: 36%;
    }
}

.diagonal-move {
    transform: translate(-22.5%, -27%) scale(0.9);
    opacity: 0;
    animation-duration: 1s;
    // transition: transform 1.5s ease-in-out, opacity 1.5s ease-in-out;

    @media (max-width: 800px) {
        transform: translate(-14%, -18%) scale(0.9);
    }

    @media (max-width: 430px) {
        transform: translate(-23%, -17%) scale(0.8);
    }

    @media (max-width: 420px) {
        transform: translate(-23%, -17%) scale(0.8);
    }

    @media (max-width: 390px) {
        transform: translate(-22.5%, -17%) scale(0.9);
    }

    @media (max-width: 375px) {
        transform: translate(-21%, -13%) scale(0.9);
    }
}

.goose-smirk {
    position: absolute;
    top: 25%;
    right: 0;
    left: 22%;
    opacity: 0;
    // width: 351px;
    // height: 481px;
    animation: fadeIn 0s forwards;

    @media (max-width: 800px) {
        left: 46%;
        top: 21%;
        width: 350px;
    }

    @media (max-width: 430px) {
        left: 37%;
        top: 27%;
        width: auto;
    }

    @media (max-width: 420px) {
        left: 35%;
        top: 25%;
    }

    @media (max-width: 375px) {
        left: 35%;
        top: 23%;
    }
}

@keyframes zoomIn {
    0% {
        transform: translateX(-50%) scale(1);
    }

    50% {
        transform: translateX(-50%) scale(1);
    }

    100% {
        transform: translateX(-50%) scale(1.26);
    }
}

@keyframes fadeOut {
    to {
        opacity: 0;
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}
</style>