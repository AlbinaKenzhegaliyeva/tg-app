<template>
    <div class="page">
        <TheHeaderChat />
        <div class="chat">
            <div class="chat__left chat__first">
                <div class="chat__left-avatar">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__left-bubble">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>Говорим «24/7», думаем о…</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
            </div>

            <div class="chat__right show-right-1" v-show="showRight">
                <div class="chat__right-bubble right-text-1">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Проджекте с вопросами о статусах по задачам?</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-1">
                    <img src="@/assets/ava_b.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__note left-note" v-if="showNote" @animationend="handleNoteAnimationEnd">
                <div class="chat__note-avatar">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left show-left-1" v-show="showLeftSecond">
                <div class="chat__left-avatar avatar-1">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__left-bubble">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>Вообще-то о конвейерной системе с автоматическими сортировщиками.
                                    Она отвечает за бесперебойную сборку и упаковку заказов.</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
            </div>

            <div class="tap" v-if="showTap">
                <img src="@/assets/tap.svg" alt="tap" @click="addNewChat">
            </div>

            <div class="chat__right show-right-1" v-show="showRightSecond">
                <div class="chat__right-bubble right-text-2">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>И Коробчиков?</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-1">
                    <img src="@/assets/ava_b.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__note left-note" v-show="showNote2" @animationend="handleNoteAnimationEnd">
                <div class="chat__note-avatar">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left" v-show="showLeftThird">
                <div class="chat__left-avatar avatar-2" ref="avatar">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__left-bubble">
                    <TheChatBlue v-for="(message, index) in chatMessages" :key="index" v-show="showChatBlue[index]"
                        :isLast="index === chatMessages.length - 1 && !finalMessageAdded">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>{{ message }}</span>
                            </div>
                        </template>
                    </TheChatBlue>
                    <TheChatBlue :isLast="true" v-if="clickedTap">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <img src="@/assets/image.png" alt="img">
                                <span>Коробчик, тебе сейчас предстоит то, о чём мечтают все инженеры.</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
            </div>

            <div class="tap" v-if="showTap2">
                <img src="@/assets/tap.svg" alt="tap" @click="addFinalChat">
            </div>

            <div ref="scrollAnchor"></div>

            <div class="chat__right show-right-3" v-show="showRightThird">
                <div class="chat__right-bubble">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Стать CTO?!</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar">
                    <img src="@/assets/ava_b.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left" v-show="showLeftFourth">
                <div class="chat__left-avatar avatar-3">
                    <img src="@/assets/ava_g.svg" alt="avatar">
                </div>
                <div class="chat__left-bubble left-text-4">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <img src="@/assets/laydown.png" alt="img">
                                <span>Нет, Коробчик, просто полежать.</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
            </div>

            <div ref="scrollAnchor1"></div>

            <div ref="scrollAnchor2">
                <button class="chat__button" v-if="showButton" @click="goTo">Начать игру</button>
            </div>
        </div>
    </div>
</template>


<script>
import TheChatWhite from '@/components/TheChatWhite.vue';
import TheHeaderChat from '@/components/TheHeaderChat.vue';
import TheChatBlue from '@/components/TheChatBlue.vue';
export default {
    components: {
        TheHeaderChat, TheChatWhite, TheChatBlue
    },
    mounted() {
        setTimeout(() => {
            this.showRight = true;
        }, 2000);

        setTimeout(() => {
            this.showNote = true;
        }, 5000);

        setTimeout(() => {
            this.showLeftSecond = true;
        }, 7000);

        setTimeout(() => {
            this.showTap = true;
        }, 10000);

        setTimeout(() => {
            this.chatMessages.forEach((message, index) => {
                setTimeout(() => {
                    this.showChatBlue[index] = true;
                }, index * 1000);
            });
        }, 2000);
    },
    data() {
        return {
            showRight: false,
            showRightSecond: false,
            showRightThird: false,
            showNote: false,
            showNote2: false,
            showLeftSecond: false,
            showLeftThird: false,
            showLeftFourth: false,
            chatMessages: [
                "И Коробчиков. Сканер системы по штрихкодам на коробках направляет их в нужные окна, откуда их грузят по машинам.",
                "Чтобы всё работало как часы, инженеры Ozon Tech проектируют платы и пишут ПО для датчиков и контроллеров."
            ],
            showChatBlue: [false, false, false],
            showButton: false,
            showTap: false,
            showTap2: false,
            clickedTap: false,
            finalMessageAdded: false,
        }
    },
    methods: {
        scrollToElement(refName) {
            this.$nextTick(() => {
                const targetElement = this.$refs[refName];
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
                }
            });
        },
        handleNoteAnimationEnd() {
            this.showNote = false;
        },
        addNewChat() {
            this.showRightSecond = true;
            this.showTap = false;
            setTimeout(() => {
                this.showNote2 = true;
            }, 4000);
            setTimeout(() => {
                this.showNote2 = false;
                this.showLeftThird = true;
                this.showTap2 = true;
            }, 5000);
        },
        addFinalChat() {
            let el = this.$refs.avatar;
            el.classList.add('avatar-padding');
            this.clickedTap = true;
            this.scrollToElement("scrollAnchor");
            this.showTap2 = false;
            this.finalMessageAdded = true;
            setTimeout(() => {
                this.showRightThird = true;
                this.scrollToElement("scrollAnchor1");
            }, 3000);
            setTimeout(() => {
                this.showLeftFourth = true;
                this.scrollToElement("scrollAnchor2");
                this.showButton = true;
            }, 6000);
        },
        goTo() {
            this.$router.push('/chat/routes');
        },
    }
}
</script>


<style lang="scss" scoped>
.page {
    background-color: #02283E;
    min-height: 100vh;
    background-image: url(@/assets/Vector.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}

.chat {
    padding: 90px 7px 0;
    transition: transform 0.5s ease;
    position: relative;

    &__first {
        margin: 17px 0 0 0;
    }

    &__left {
        display: flex;
        gap: 5px;
        justify-content: start;
        align-items: start;
        margin: 13px 0 0 0;

        &-avatar {
            padding: 10px 0 0 0;
        }

        &-bubble {
            display: flex;
            flex-direction: column;
            gap: 4px;
            align-items: center;

            &_inner {
                display: flex;
                flex-direction: column;
                gap: 3px;

                img {
                    border-radius: 4px;
                }

                span {
                    font-family: var(--gte);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 120%;
                    color: #fff;
                    position: relative;
                    z-index: 100;
                }
            }
        }
    }

    &__right {
        display: flex;
        gap: 5px;
        justify-content: end;
        align-items: end;
        margin: 13px 0 0 0;

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 14px;
            line-height: 120%;
            color: #000;
            position: relative;
            z-index: 100;
        }

        &-bubble {
            display: flex;
            justify-content: center;
            margin: 0 0 20px 0;
            // opacity: 0;
        }

        &-avatar {
            display: flex;
            justify-content: flex-end;
            // opacity: 0;
        }
    }

    &__note {
        display: flex;
        gap: 17px;
        margin: 13px 0 0 0;
        opacity: 0;

        &-pen {
            display: flex;
            flex-direction: column;
            gap: 1.35px;
        }
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
        padding: 11px 124px;
        width: 100%;
        // position: absolute;
        // bottom: 20px;
        margin: 34px 0 50px 0;
        white-space: nowrap;
    }
}

@keyframes penMove {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(10px);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeOut {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
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

.left-note {
    animation: fadeOut 1s ease-in forwards;
    animation-delay: 2s;
    opacity: 1;
}

.pen-animation {
    animation: penMove 0.5s ease-in-out infinite;
}

.right-text-2 {
    justify-content: flex-end;
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 1s;
}

.tap {
    position: fixed;
    bottom: 47px;
    right: 23px;
    animation: heartbeat 2s infinite;
    cursor: pointer;

    @media (max-width: 800px) {
        bottom: 10px;
    }

    @media (max-width: 430px) {
        bottom: 47px;
    }
}

.show-right-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
    opacity: 0;
}

.right-avatar-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 0.1s;
}

.right-text-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
}

.show-left-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
    opacity: 0;
}

.show-right-3 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 1s;
    opacity: 0;
}

.avatar-1 {
    padding: 60px 0 0 0;
}

.avatar-2 {
    padding: 150px 0 0 0;
}

.avatar-3 {
    padding: 200px 0 0 0;
}

.avatar-padding {
    padding: 400px 0 0 0;
}
</style>