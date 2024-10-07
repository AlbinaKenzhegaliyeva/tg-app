<template>
    <div class="greetings">
        <img src="@/assets/back.png" alt="back" class="greetings__background">
        <img src="@/assets/hello.svg" alt="goose" class="greetings__gosha_begin first-goose">
        <img src="@/assets/open_eyes.svg" alt="goose" class="greetings__gosha_after second-goose" ref="secondGoose" v-show="!goose && !smirk" >
        <div class="greetings__dialog" v-if="isVisible">
            <img src="@/assets/dialog.svg" alt="dialog" class="greetings__dialog-bubble">
            <span>Привет! На связи Гоша — всесторонне одарённый инженер.</span>
        </div>
        <div class="greetings__info" v-if="isVisible">
            <span>Одним крылом он поддерживает высокие нагрузки, другjим — здоровую атмосферу в команде. Оптимист,
                юморист и просто хороший <span class="crossed-text">человек</span> гусь!</span>
        </div>
        <button class="greetings__btn-hello" v-if="isVisible" @mousedown="sayHello" @mouseup="resetStyle"
            @click="moveGoose" ref="btn">Привет!</button>
        <img src="@/assets/smirk.svg" alt="goose" class="goose-image goose-image-2" v-show="smirk">
        <img src="@/assets/сorobchik.svg" alt="box" class="greetings__corobchik" v-if="corobchik">
        <div class="greetings__about-korobchik" v-if="corobchikVisible">
            <img src="@/assets/text.svg" alt="dialog" class="greetings__about-korobchik-bubble">
            <div class="greetings__about-korobchik-text">
                <span>А это Коробчик — подарок на день рождения и один из 6 100 000 ежедневных заказов на
                    Ozon.</span>
                <span>Над оперативностью доставки работают  6 000+ ИТ-специалистов в сложной системе с  6 100
                    микросервисами.</span>
            </div>
        </div>
        <button class="greetings__btn-korobchik" v-if="corobchikVisible" @mousedown="sayHello" @mouseup="resetStyle"
            @click="goToNextScreen" ref="btn">Ого, сколько всего</button>
        <img src="@/assets/gosha.svg" alt="goose" class="third-goose" v-show="goose">
        <div class="greetings__order-korobchik" v-show="orderVisible">
            <img src="@/assets/text2.svg" alt="dialog" class="greetings__order-korobchik-bubble">
            <span>В этой игре тебе предстоит доставить Коробчика имениннику.</span>
        </div>
        <button class="greetings__btn-order-korobchik" v-show="orderVisible" @mousedown="sayHello" @mouseup="resetStyle"
            ref="btn">Не терпится начать!</button>
    </div>
</template>

<script>
export default {
    name: 'Greetings',
    data() {
        return {
            isVisible: true,
            corobchikVisible: false,
            orderVisible: false,
            corobchik: false,
            goose: false,
            smirk: false,
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
            }, 500);
        },
        goToNextScreen() {
            this.corobchikVisible = false;
            this.orderVisible = true;
            this.corobchik = true;
            this.goose = true;
            this.smirk = false;

            // Убедимся, что анимация применится корректно
            this.$nextTick(() => {
                let thirdGoose = this.$el.querySelector('.third-goose');
                thirdGoose.classList.add('is-visible');
            });
        },
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
}

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
        right: 0;
        bottom: 0;
        width: 100%;
        transform: translateX(-50%) scale(1);
        transition: transform 3s ease-in-out;
        animation: zoomIn 6s forwards;
    }

    &__gosha_after {
        position: absolute;
        left: 50%;
        top: 45%;
        //top: 40%;
        right: 0;
        bottom: 0;
        width: 100%;
        transform: translateX(-50%) scale(1.4);
        transition: transform 3s ease-in-out;
        animation: zoomIn 6s forwards;
    }

    &__dialog {
        opacity: 0;
        animation: fadeDialogIn 1s forwards;
        animation-delay: 8s;

        &-bubble {
            position: absolute;
            top: 150px;
            right: 0;
            left: 0;
            width: 100%;
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
            animation-delay: 3s;
        }

        span {
            position: absolute;
            top: 170px;
            // right: 40px;
            left: 40px;
            font-family: var(--gte);
            font-weight: 400;
            font-size: 20px;
            color: #073049;
            opacity: 0;
            animation: fadeIn 1s ease-in forwards;
            animation-delay: 3s;
        }
    }

    &__info {
        border-radius: 7px;
        padding: 11px;
        margin: 0 13.5px;
        backdrop-filter: blur(5px);
        background: rgba(1, 25, 81, 0.85);
        position: absolute;
        bottom: 100px;
        opacity: 0;
        animation: fadeInfoIn 1s forwards;
        animation-delay: 10s;


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
        padding: 11px 144px;
        margin: 0 13.5px;
        position: absolute;
        bottom: 30px;
        opacity: 0;
        cursor: pointer;
        animation: fadeInfoIn 1s forwards;
        animation-delay: 10s;
    }

    &__corobchik {
        position: absolute;
        left: 0;
        top: 55%;
        right: 0;
        animation: fadeInBox 1s forwards;
        animation-delay: 0.5s;
    }

    &__about-korobchik {
        opacity: 0;
        animation: fadeDialogIn 1s forwards;
        animation-delay: 2s;

        &-bubble {
            position: absolute;
            top: 100px;
        }

        &-text {
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: absolute;
            top: 120px;
            left: 20px;
            right: 20px;

            span {
                font-family: var(--gte);
                font-weight: 400;
                font-size: 15px;
                color: #073049;
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
        margin: 0 17px;
        position: absolute;
        bottom: 30px;
        cursor: pointer;
        opacity: 0;
        animation: fadeDialogIn 1s forwards;
        animation-delay: 2s;
    }

    &__order-korobchik {
        opacity: 0;
        animation: fadeDialogIn 1s forwards;
        // animation-delay: 1s;

        &-bubble {
            position: absolute;
            top: 160px;
            right: 0;
        }

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 15px;
            color: #073049;
            position: absolute;
            top: 180px;
            right: 30px;
            left: 100px;
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
        margin: 0 17px;
        position: absolute;
        bottom: 30px;
        cursor: pointer;
        opacity: 0;
        animation: fadeDialogIn 1s forwards;
        // animation-delay: 2s;
    }
}

.first-goose {
    animation: zoomIn 6s forwards, fadeOut 1s forwards;
    animation-delay: 0s, 6s; // zoomIn выполняется, затем fadeOut
}

.second-goose {
    opacity: 0;
    animation: fadeIn 1s forwards;
    animation-delay: 6s; // появление после завершения zoomIn
}

.third-goose {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    left: 35%;
    top: 32%;
    right: 0;
    bottom: 0;

    &.is-visible {
        opacity: 1;
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
        transform: translateX(-50%) scale(1.35);
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

@keyframes fadeDialogIn {
    to {
        opacity: 1;
    }
}

@keyframes fadeInfoIn {
    to {
        opacity: 1;
    }
}


@keyframes fadeInBox {
    to {
        opacity: 1;
    }
}

.diagonal-move {
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    transform: translate(-90px, -150px) scale(0.9);
}

.goose-image {
    position: absolute;
    top: 32%;
    left: 33%;
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
}
</style>