# Используем Nginx для раздачи статических файлов
FROM nginx:alpine

# Устанавливаем рабочую директорию в Nginx
WORKDIR /usr/share/nginx/html

# Очищаем стандартные файлы Nginx
RUN rm -rf ./*

# Копируем собранные файлы фронтенда из dist
COPY dist .

# Экспонируем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
