<template>
  <div class="header">
    <div class="header__inner">
      <img src="@/assets/brace.svg" alt="logo">
      <div class="header__inner-text">
        <div>
          <span>Ozon Tech</span>
          <img src="@/assets/galka.svg" alt="item">
        </div>
        <span>Чат доставки</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeaderChat',
}
</script>


<style lang="scss">
.header {
  display: flex;
  justify-content: left;
  border-bottom: 0.67px solid rgba(255, 255, 255, 0.2);
  border-radius: 0 0 13px 13px;
  background: #0a3956;
  padding: 16px 0 16px 13px;
  z-index: 10000;
  position: fixed; 
  top: 0;
  left: 0;
  right: 0; 

  &__inner {
    display: flex;
    gap: 10px;
    align-items: center;


    &-text {
      span {
        font-family: var(--gte);
        font-weight: 400;
        font-size: 13px;
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
          font-size: 15px;
          line-height: 120%;
          color: #fff;
        }
      }
    }
  }
}
</style>
