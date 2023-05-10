const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("path");

module.exports = defineConfig({
    publicPath: "/",
    outputDir: "dist",

    // Использовать ли eslint-loader для линтинга при сохранении
    // Допустимые значения: true | false | "error"
    // Если установлено значение "error", ошибки lint приведут к сбою компиляции
    lintOnSave: process.env.NODE_ENV !== "production",

    // Специфические зависимости для транспила
    transpileDependencies: [
        "vue-echarts",
        "resize-detector"
    ],

    configureWebpack: {
        resolve: {
            alias: {
                // Алиас для пути к src
                "@": resolve(__dirname, "src/"),
            },
        },
    },

    css: {
        // Извлекать CSS в компонентах в один CSS-файл (только в продакшене)
        // Также может быть объектом опций для передачи в extract-text-webpack-plugin
        extract: true,

        // Включить сурсмапы?
        sourceMap: false,

        // Передавать пользовательские опции загрузчикам препроцессора
        // Например, чтобы передать опции sass-загрузчику
        loaderOptions: {},
    },

    // Следует использовать загрузчик потоков для babel & TS в prod сборке
    parallel: require("os").cpus().length > 1,
})
