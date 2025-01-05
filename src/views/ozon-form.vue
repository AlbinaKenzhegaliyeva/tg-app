<template>
  <div class="header">
    <img src="@/assets/arr.svg" class="header__back" v-if="!showBtn" @click="goBack">
    <img src="@/assets/logo-ozon.svg" class="header__logo">
  </div>

  <div class="content">
    <iframe id="ozon-form" src="https://forms.ozon.ru/form/149237e97f3389bab857dc4d8b209d1efa?embed=true"
      ref="ozonForm"></iframe>
    <button v-if="showBtn" @click="goToGame">Продолжить</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBtn: false,
    }
  },
  mounted() {
    document.body.style.overflow = 'hidden';
    // this.fetchCsrfToken();

    // Подписка на событие для отслеживания загрузки формы
    window.addEventListener('message', this.handleFormLoaded);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
    handleFormLoaded({ data }) {
      // Проверяем, что событие - это загрузка формы
      if (data && data.event === 'ozon-forms:form-loaded') {
        console.log("Форма загружена, устанавливаем фон");
        this.setBackgroundColor();
      }
      if (data && data.event === 'ozon-forms:submit-form') {
        this.showBtn = true;
      }
    },
    setBackgroundColor() {
      const iframe = this.$refs.ozonForm;
      const uuid = this.getCookie('uuid');
      console.log(uuid)

      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          event: 'ozon-forms:action-set-css-variable',
          name: '--custom-header-display',
          value: 'none'
        }, '*');
        iframe.contentWindow.postMessage({
          event: 'ozon-forms:action-set-font',
          font: 'GT Eesti Pro Display'
        }, '*');
        iframe.contentWindow.postMessage({
          event: 'ozon-forms:action-success-screen',
          title: 'Рады знакомству! ',
          caption: 'А теперь вперёд к игре ➡️',
        }, '*');
        iframe.contentWindow.postMessage({
          event: 'ozon-forms:utm-marks-message',
          utmContent: uuid, 
          utmSource: 'ozonhrbot',
        }, '*');
      } else {
        console.error("Не удалось получить доступ к contentWindow iframe");
      }
    },
    async fetchCsrfToken() {
      try {
        const response = await fetch('https://api.ozontechhrbot.ru/sanctum/csrf-cookie', {
          method: 'GET',
          credentials: 'include', // Включает отправку и получение cookies
          headers: {
            'Accept': 'application/json', // Указываем, что ожидаем JSON-ответ
          },
        });

        if (!response.ok) {
          throw new Error(`Ошибка получения CSRF-cookie: ${response.status} ${response.statusText}`);
        }

        console.log('CSRF-cookie успешно установлены.');
        // Если куки успешно установлены, они будут доступны для последующих запросов.
      } catch (error) {
        console.error('Ошибка при запросе CSRF-cookie:', error.message);
      }
    },
    getCookie(name) {
      const matches = document.cookie.match(new RegExp(
        `(?:^|; )${name.replace(/([$?*|{}()[\]\\/+^])/g, '\\$1')}=([^;]*)`
      ));
      return matches ? decodeURIComponent(matches[1]) : null;
    },
    async goToGame() {
      try {
        // Дожидаемся установки CSRF-токена
        await this.fetchCsrfToken();

        const csrfToken = this.getCookie('XSRF-TOKEN');
        const uuid = this.getCookie('uuid');

        // Проверяем наличие токенов
        if (!csrfToken) {
          console.error('CSRF-токен не найден в куках.');
          return;
        }

        if (!uuid) {
          console.error("Куки с именем 'uuid' не найдены.");
          return;
        }

        console.log('UUID:', uuid);

        const url = new URL('https://api.ozontechhrbot.ru/api/form/create'); // Создаем URL-объект

        // Формируем заголовки
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          "X-XSRF-TOKEN": csrfToken,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        };

        // Отправляем POST-запрос
        const response = await fetch(url.toString(), {
          method: 'POST',
          headers, // Подставляем заранее сформированные заголовки
          credentials: 'include', // Включаем cookies в запрос
          body: JSON.stringify({ code: uuid }), // Тело запроса
        });

        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }

        const data = await response.json(); // Парсим ответ в JSON
        console.log('Ответ сервера:', data);
        this.$router.push('/start/last-screen');
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #F9FAFC;
  display: flex;
  gap: 45px;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;

  &__logo {
    text-align: center;
  }

  &__back {
    position: absolute;
    left: 13px;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  background-color: #fff;
  height: 100vh;

  iframe {
    border: none;
    width: 100%;
    height: 90vh;
    z-index: 0;
  }

  button {
    border-radius: 5px;
    background: #005bff;
    font-family: var(--gte);
    font-weight: 400;
    font-size: 20px;
    color: #fff;
    border: none;
    box-shadow: 0 4px 0 0 #054fd4;
    background: #005bff;
    padding: 13px 118px;
    // position: absolute;
    // bottom: 20px;
    // left: 13px;
    // right: 13px;
    z-index: 1000;
    margin: 0 13px 100px;
    white-space: nowrap;
    cursor: pointer;
  }
}
</style>
