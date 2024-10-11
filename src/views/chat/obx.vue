<template>
    <div class="page">
        <TheHeaderChat />
        <div class="chat">
            <div class="chat__right" :class="{ 'move-up': chatUp }">
                <div class="chat__right-bubble right-text-1">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Пора доставить подарок! Но на складе столько всего… боюсь запутаться. Хорошо, что
                                с нами Гоша, он проводит.</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-1">
                    <img src="@/assets/avatar_b.png" alt="avatar">
                </div>
            </div>

            <div class="chat__note left-note" v-if="showNote" @animationend="handleNoteAnimationEnd">
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left show-left-1" v-if="showLeft" :class="{ 'move-up': chatUp }">
                <div class="chat__left-bubble left-text-1">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <img src="@/assets/chat1.svg" alt="pic">
                                <span>Ты прав! У нас здесь настоящий хайлоад. Но не волнуйся, доставим тебя в
                                    срок.</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
                <div class="chat__left-avatar left-avatar-1">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
            </div>


            <div class="tap" v-if="showTap">
                <img src="@/assets/tap.svg" alt="tap" @click="addNewChat">
            </div>

            <div class="chat__right" v-if="showNewChat" :class="{ 'move-up': chatUp }">
                <div class="chat__right-bubble right-text-2">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Здесь же тысячи посылок, как бы нам всем поместиться в фургоны для
                                доставки?</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-2">
                    <img src="@/assets/avatar_b.png" alt="avatar">
                </div>
            </div>

            <div class="chat__note left-note" v-if="showSecondNote" @animationend="handleSecondNoteAnimationEnd">
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left" v-if="showLeftNewChat" :class="{ 'move-up': chatUp }">
                <div class="chat__left-bubble">
                    <TheChatBlue v-for="(message, index) in chatMessages" :key="index" v-show="showChatBlue[index]"
                        :isLast="index === chatMessages.length - 1">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>{{ message }}</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
            </div>

            <div class="tap2" v-if="showTap2">
                <img src="@/assets/tap.svg" alt="tap" @click="addFinalChat">
            </div>

            <div class="chat__right" v-if="showRightFinal" :class="{ 'move-up': chatUp }">
                <div class="chat__right-bubble right-text-3">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Ого, я везу что-то хрупкое!</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-3">
                    <img src="@/assets/avatar_b.png" alt="avatar">
                </div>
            </div>

            <div class="chat__note left-note-final" v-if="showThirdNote" @animationend="handleSecondNoteAnimationEnd">
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left" v-if="showLeftFinal" :class="{ 'move-up': chatUp }">
                <div class="chat__left-bubble">
                    <TheChatBlue v-for="(message, index) in chatFinalMessages" :key="index"
                        v-show="showChatBlueFinal[index]">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>{{ message }}</span>
                            </div>
                        </template>
                    </TheChatBlue>
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <img src="@/assets/obx.svg" alt="pic">
                                <span>А за измерение веса отвечают классические тензодатчики. </span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
            </div>

            <div>
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
    data() {
        return {
            showNote: false,
            showLeft: false,
            showTap: false,
            showNewChat: false,
            showSecondNote: false,
            showThirdNote: false,
            showLeftNewChat: false,
            chatMessages: [
                "Поможет сканер объёмно-весовых характеристик.",
                "Он за 2 секунды измеряет габариты и вес любых товаров. Это помогает оптимально разместить заказы на складе и запланировать загрузку машин.",
                "Обычно товары складывают в тарные ящики, а особенно хрупкие — в коробки."
            ],
            showChatBlue: [false, false, false],
            showTap2: false,
            showRightFinal: false,
            showLeftFinal: false,
            chatFinalMessages: [
                "Сканер, как и большинство других решений, на которых строится продукт, инженеры Ozon Tech разрабатывают сами.",
                "Для измерения габаритов предметов мы используем технологии машинного зрения и нейронных сетей.",
            ],
            showChatBlueFinal: [false, false],
            showButton: false,
            scrollUp: false,
        };
    },
    computed: {
        chatUp() {
            console.log(this.scrollUp);
            return this.scrollUp;
        },
        // changeStatus() {
        //     this.scrollUp = !this.scrollUp;
        // },
    },
    mounted() {
        setTimeout(() => {
            this.showNote = true;
        }, 3000);

        setTimeout(() => {
            this.showNote = false;
        }, 1000);

        setTimeout(() => {
            this.showLeft = true;
        }, 2000);

        setTimeout(() => {
            this.showTap = true;
        }, 10000); // Задержка до завершения всех анимаций
    },
    methods: {
        triggerMoveUp() {
            this.scrollUp = false;
            setTimeout(() => {
                this.scrollUp = true;
            }, 2000);
        },
        changeStatus() {
            this.scrollUp = !this.scrollUp;
        },
        handleNoteAnimationEnd() {
            this.showNote = false;
        },
        addNewChat() {
            this.showNewChat = true;
            this.showTap = false;
            setTimeout(() => {
                this.showSecondNote = true;
            }, 3000);
            setTimeout(() => {
                this.showSecondNote = false;
                this.showLeftNewChat = true;
                this.showChatMessages();
            }, 6000);
        },
        handleSecondNoteAnimationEnd() {
            this.showSecondNote = false;
        },
        showChatMessages() {
            setTimeout(() => {
                this.chatMessages.forEach((message, index) => {
                    setTimeout(() => {
                        this.showChatBlue[index] = true;
                    }, index * 1000);
                });
            }, 2000);
            // this.changeStatus();
            setTimeout(() => {
                this.showTap2 = true;
            }, 4000);
        },
        addFinalChat() {
            this.showRightFinal = true;
            this.showTap2 = false;
            setTimeout(() => {
                this.showThirdNote = true;
            }, 3000);
            setTimeout(() => {
                this.showThirdNote = false;
                this.showLeftFinal = true;
                this.showFinalMessages();
            }, 6000);
        },
        showFinalMessages() {
            setTimeout(() => {
                this.chatFinalMessages.forEach((message, index) => {
                    setTimeout(() => {
                        this.showChatBlueFinal[index] = true;
                    }, index * 1000);
                });
            }, 2000);
            setTimeout(() => {
                this.showButton = true;
            }, 6000);
        },
        goTo() {
            this.$router.push('/chat/sort');
        },
    }
}
</script>

<style lang="scss">
.page {
    background-color: #02283E;
    min-height: 100vh;
    background-image: url(@/assets/Vector.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}

// .chat__right,
// .chat__left {
//     border: 1px solid red;
// }

.chat {
    padding: 100px 7px 0;

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
        margin: 34px 0 50px 0;
        white-space: nowrap;
    }

    &__right {

        span {
            font-family: var(--gte);
            font-weight: 400;
            font-size: 13px;
            line-height: 120%;
            color: #000;
            position: relative;
            z-index: 100;
        }

        &-bubble {
            display: flex;
            justify-content: center;
            opacity: 0;
        }

        &-avatar {
            display: flex;
            justify-content: flex-end;
            opacity: 0;
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

    &__left {
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
                    font-size: 13px;
                    line-height: 120%;
                    color: #fff;
                    position: relative;
                    z-index: 100;
                }
            }
        }
    }

    .tap {
        position: fixed;
        bottom: 47px;
        right: 23px;
        animation: heartbeat 1.5s infinite;
        cursor: pointer;
    }

    .tap2 {
        animation: heartbeat2 2s infinite;
        cursor: pointer;
        position: relative;
        bottom: 40px;
        left: 0;
        display: flex;
        justify-content: flex-end;
        padding-right: 13px;
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

@keyframes heartbeat2 {

    0%,
    20%,
    30%,
    40%,
    60%,
    70%,
    80%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.08);
    }
}

.right-avatar-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 0.5s;
}

.right-text-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
    opacity: 0;
}

.left-note {
    animation: fadeOut 1s ease-in forwards;
    animation-delay: 4s;
    opacity: 1;
}

.left-note-final {
    animation: fadeOut 1s ease-in forwards;
    animation-delay: 4s;
    opacity: 1;
}

.show-left-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 6s;
    opacity: 0;
}

// .left-avatar-1 {
//     animation: fadeIn 1s ease-in-out forwards;
//     animation-delay: 5s;
// }

// .left-text-1 {
//     animation: fadeIn 1s ease-in forwards;
//     animation-delay: 5s;
//     opacity: 0;
// }

.right-avatar-2 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 1s;
}

.right-text-2 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
}

// .show-left-2 {
//     animation: fadeIn 1s ease-in forwards;
//     animation-delay: 8s;
//     /* Задержка для нового левого чата */
// }

// .left-avatar-2 {
//     animation: fadeIn 1s ease-in-out forwards;
//     animation-delay: 8s;
//     /* Задержка для нового левого аватара */
// }

// .left-text-2 {
//     animation: fadeIn 1s ease-in forwards;
//     animation-delay: 10s;
// }

.right-avatar-3 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 1s;
}

.right-text-3 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
    justify-content: flex-end;
    padding: 0 50px 0 0;
}

.pen-animation {
    animation: penMove 0.5s ease-in-out infinite;
}

.move-up {
    // transform: translateY(-80px);
    // animation: 0;
    // opacity: 1;
    animation: moveUp 0.5s ease forwards;
    opacity: 1;
}

@keyframes moveUp {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-60px);
    }
}
</style>
