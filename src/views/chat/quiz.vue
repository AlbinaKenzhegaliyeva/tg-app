<template>
    <div class="page">
        <TheHeaderChat />
        <div class="chat">
            <div class="chat__right">
                <div class="chat__right-bubble right-text-1">
                    <TheChatWhite>
                        <template #chattng__text>
                            <img src="@/assets/ded.png" alt="pic">
                            <span>Ребята из Ozon Tech учитывают такие кейсы при расчёте времени доставки, но мы очень
                                торопимся.</span>
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

            <div class="chat__left" v-if="showLeft">
                <div class="chat__left-bubble">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>Коробчик, без паники, давай как на третьем подряд созвоне.</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
                <div class="chat__left-avatar left-avatar-1">
                    <img src="@/assets/avatar_g.png" alt="avatar">
                </div>
            </div>

            <div class="chat__right" v-if="showRight">
                <div class="chat__right-bubble right-text-1">
                    <TheChatWhite>
                        <template #chattng__text>
                            <span>Включаю режим созвоноустойчивости.</span>
                        </template>
                    </TheChatWhite>
                </div>
                <div class="chat__right-avatar right-avatar-1">
                    <img src="@/assets/avatar_b.png" alt="avatar">
                </div>
            </div>

            <div class="chat__watchman" v-if="showWatchman">
                <span>Вахтёр присоединился к чату</span>
            </div>

            <div class="chat__note left-note" v-if="showNote2" @animationend="handleNoteAnimationEnd">
                <div class="chat__left-avatar">
                    <img src="@/assets/avatar_w.png" alt="avatar">
                </div>
                <div class="chat__note-pen">
                    <img src="@/assets/pen.svg" alt="avatar" class="pen-animation">
                    <img src="@/assets/paper.svg" alt="avatar">
                </div>
            </div>

            <div class="chat__left" v-if="showLeftSecond">
                <div class="chat__left-bubble">
                    <TheChatBlue :isLast="true">
                        <template #chattng__text>
                            <div class="chat__left-bubble_inner">
                                <span>У меня пара вопросов. Ответишь - пропущу</span>
                            </div>
                        </template>
                    </TheChatBlue>
                </div>
                <div class="chat__left-avatar left-avatar-1">
                    <img src="@/assets/avatar_w.png" alt="avatar">
                </div>
            </div>

            <div>
                <button class="chat__button" v-if="showButton">Начать игру</button>
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
            this.showNote = true;
        }, 3000);

        setTimeout(() => {
            this.showLeft = true;
        }, 5000);

        setTimeout(() => {
            this.showRight = true;
        }, 6000);

        setTimeout(() => {
            this.showWatchman = true;
        }, 9000);

        setTimeout(() => {
            this.showNote2 = true;
        }, 11000);

        setTimeout(() => {
            this.showNote2 = false;
            this.showLeftSecond = true;
        }, 13000);

        setTimeout(() => {
            this.showButton = true;
        }, 14000);

    },
    data() {
        return {
            showLeft: false,
            showNote: false,
            showNote2: false,
            showRight: false,
            showWatchman: false,
            showLeftSecond: false,
            showButton: false,
        }
    },
    methods: {
        handleNoteAnimationEnd() {
            this.showNote = false;
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

.chat {
    padding: 100px 7px 0;

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
        margin: 34px 0 50px 0;
        white-space: nowrap;
    }

    &__watchman {
        border-radius: 24px;
        padding: 5px 10px;
        // height: 23px;
        backdrop-filter: blur(13.483146667480469px);
        background: rgba(255, 255, 255, 0.3);
        margin: 27px 95px;
        white-space: nowrap;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            font-family: var(--gte);
            font-weight: 500;
            font-size: 13px;
            line-height: 120%;
            color: #fff;
            text-align: center;
        }
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


.left-note {
    animation: fadeOut 1s ease-in forwards;
    animation-delay: 1s;
    opacity: 1;
}

.pen-animation {
    animation: penMove 0.5s ease-in-out infinite;
}

.right-avatar-1 {
    animation: fadeIn 1s ease-in forwards;
}

.right-text-1 {
    animation: fadeIn 1s ease-in forwards;
    animation-delay: 2s;
    opacity: 0;
}
</style>