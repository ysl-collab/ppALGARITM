
const contCourse = document.getElementById("cards")

const courseRaw = [
    {
        title: "💻 Общий курс - для любых возрастов",
        age: "8+",
        descr: "Этот курс предоставляет детям возможность" +
            " познакомиться с различными направлениями в мире IT. Участники попробуют свои силы в программировании," +
            " 3D-моделировании, работе с микроконтроллерами и создании простых электронных проектов. Курс подходит" +
            " для детей, которые хотят определить, какое направление им наиболее интересно.",
        timeCourse: "Длительность курса: от 1 уч. год",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🎨 Визуальное программирование",
        age: "7+",
        descr: "Курс для юных программистов, где дети с помощью интуитивно понятных инструментов осваивают основы программирования. Используя блоки кода, они создают свои первые программы и игры, развивая логическое мышление и творческие навыки.",
        timeCourse: "Длительность курса: 4,5 месяца",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🛠️ Roblox - 3D моделирование",
        age: "7+",
        descr: "Этот курс научит детей создавать уникальные 3D-модели в популярной игровой платформе Roblox. Участники освоят основные инструменты и техники 3D-моделирования, научатся проектировать собственные игровые объекты и миры, которые могут использовать в своих играх или делиться с сообществом Roblox.",
        timeCourse: "Длительность курса: 4,5 месяца",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "👾 Программирование в Roblox",
        age: "9+",
        descr: "На этом курсе дети изучат язык программирования Lua, который используется для создания игр в Roblox. Участники научатся программировать свои игры, настраивать механику, создавать интерактивные элементы и доводить свои проекты до завершения. Курс идеально подходит для детей, которые мечтают создавать собственные игры и делиться ими с друзьями.",
        timeCourse: "Длительность курса: 4,5 месяца",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🌐 Web-разработка",
        age: "10+",
        descr: "Ученики изучат основы HTML, CSS и JavaScript, а также познакомятся с принципами веб-дизайна. В процессе обучения дети создадут свой первый полноценный сайт, который сможет стать основой для их дальнейшего развития в области web-разработки.\n" +
            "Так же познакомитесь с конструкторами сайтов, такими как Wix и научитесь работать с ними.",
        timeCourse: "Длительность курса: 1 уч. год",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🎮 Unity разработка игр",
        age: "12+",
        descr: "Unity — одна из ведущих платформ для разработки игр, на этом курсе дети научатся использовать её для создания собственных игр. Ученики освоят основы работы с Unity, научатся программировать на C# и создавать интерактивные игры.",
        timeCourse: "Длительность курса: 1 уч. год",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🐍 Программирование на Python",
        age: "12+",
        descr: "Наш курс поможет детям освоить Python его с нуля. На занятиях дети научатся писать свои первые программы, познакомятся с некоторыми алгоритмами, используемыми в профессиональном программировании, научатся писать свои первые программы, разрабатывать игры и решать различные задачи.",
        timeCourse: "Длительность курса: 1 уч. год",
        timeLesson: "Длительность занятия: 1 час"
    },
    {
        title: "🤖 Робототехника",
        age: "7+",
        descr: "Курс по робототехнике с использованием Lego Spike предназначен для детей и подростков, стремящихся изучить основы программирования и конструирования роботов. В рамках курса учащиеся научатся собирать и программировать роботов, используя визуальные блоки кода и сенсоры, а также разовьют навыки логического мышления, решения задач и командной работы.",
        timeCourse: "Длительность курса: 1 уч. год",
        timeLesson: "Длительность занятия: 1,5 часа"
    },
    {
        title: "📈 Продвинутый курс",
        age: "?+",
        descr: "Ученики углубятся в сложные темы, такие как алгоритмы, структуры данных, работа с базами данных и создание комплексных проектов. Курс направлен на развитие аналитических и инженерных навыков, которые понадобятся для решения сложных задач и создания масштабных проектов.",
        timeCourse: "Длительность курса: 1 уч. год",
        timeLesson: "Длительность занятия: 1 час"
    },
]

window.onload = function () {
    courseRaw.forEach((course) => {
        contCourse.innerHTML += `
        <div class="card">
            <div class="title">
                <p class="nameCourse">${course.title}</p>
                <p class="age">${course.age}</p>
            </div>
            <div class="description">
                <p>${course.descr}</p>
            </div>
            <div class="parameters">
                <p class="timeCourse">${course.timeLesson}</p>
                <p class="timeLesson">${course.timeCourse}</p>
            </div>
        </div>
        `
    })
}

const doEffect = document.querySelectorAll(".doEffect")
const courseName = document.getElementById("nameCourse")
const closeDoEffect = document.getElementById("close")

closeDoEffect.addEventListener("click", function () {
    document.getElementById("modalWindow").style.display = "none"
})

courseRaw.forEach((course) => {
    courseName.innerHTML += `
        <option value="${courseRaw.indexOf(course)}">${course.title}</option>
    `
})

doEffect.forEach((btn) => {
    btn.addEventListener("click", function () {
        document.getElementById("modalWindow").style.display = "flex"
    })
})

const closeMenu = document.getElementById("closeMenu")

closeMenu.addEventListener("click", function () {
    document.getElementById("modalMenu").style.display = "none"
})

const openMenu = document.getElementById("openMenu")

openMenu.addEventListener("click", function () {
    document.getElementById("modalMenu").style.display = "flex"
})

const agreeCookie = document.getElementById("agreeCookie")

agreeCookie.addEventListener("click", function () {
    localStorage.setItem("cookie", "ok");
    document.getElementById("modalCookie").style.display = "none"
})

if (localStorage.getItem("cookie") === "ok") {
    document.getElementById("modalCookie").style.display = "none"
}