import '../../../index.scss'
import '../scss/style.scss'


// подключаем все скрипты из папки scripts
const modules = import.meta.glob('./scripts/*.js')
Object.values(modules).forEach((module) => module())


// тест енв
console.log(import.meta.env);
