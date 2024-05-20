const questions = [
    {
        question: "Что такое HTML и для чего он используется?",
        answers: [
            "Язык программирования для создания игр",
            "Язык разметки для создания веб-страниц",
            "Язык для описания стилей на веб-страницах",
            "Язык для управления сервером"
        ],
        correct: 1
    },
    {
        question: "Объясните разницу между блочными и строчными элементами в HTML.",
        answers: [
            "Блочные элементы отображаются в одну строку, строчные - в блок",
            "Блочные элементы занимают всю ширину, строчные - только необходимую",
            "Блочные элементы используют только CSS, строчные - только HTML",
            "Блочные элементы могут содержать только текст, строчные - только изображения"
        ],
        correct: 1
    },
    {
        question: "Что такое семантический HTML и почему он важен?",
        answers: [
            "HTML с таблицами для структурирования данных",
            "HTML, который описывает смысл содержимого",
            "HTML с комментариями для разработчиков",
            "HTML, использующий только встроенные стили"
        ],
        correct: 1
    },
    {
        question: "Как правильно подключить CSS к HTML документу?",
        answers: [
            "<link rel='stylesheet' href='styles.css'>",
            "<style src='styles.css'>",
            "<script href='styles.css'>",
            "<stylesheet link='styles.css'>"
        ],
        correct: 0
    },
    {
        question: "В чем разница между классами и идентификаторами в CSS?",
        answers: [
            "Классы используются для JavaScript, идентификаторы - для CSS",
            "Классы уникальны, идентификаторы можно использовать многократно",
            "Идентификаторы уникальны, классы можно использовать многократно",
            "Классы используются только для стилизации текста, идентификаторы - для всех элементов"
        ],
        correct: 2
    },
    {
        question: "Объясните модель блочной коробки (box model) в CSS.",
        answers: [
            "Модель, описывающая различные типы элементов",
            "Модель, описывающая, как браузер рендерит элемент",
            "Модель для создания сеток на странице",
            "Модель для создания адаптивного дизайна"
        ],
        correct: 1
    },
    {
        question: "Как работает flexbox и когда его использовать?",
        answers: [
            "Flexbox используется для создания 3D-графики",
            "Flexbox позволяет создавать сложные сетки",
            "Flexbox используется для создания гибких контейнеров",
            "Flexbox используется для стилизации текста"
        ],
        correct: 2
    },
    {
        question: "Что такое CSS Grid и для чего он используется?",
        answers: [
            "CSS Grid используется для анимаций",
            "CSS Grid используется для создания сложных сеток",
            "CSS Grid используется для управления сервером",
            "CSS Grid используется для управления данными"
        ],
        correct: 1
    },
    {
        question: "Как сделать элемент центрированным по горизонтали и вертикали?",
        answers: [
            "Использовать margin: auto",
            "Использовать flexbox и свойства justify-content и align-items",
            "Использовать position: absolute и transform",
            "Все вышеперечисленные методы"
        ],
        correct: 3
    },
    {
        question: "В чем разница между margin и padding?",
        answers: [
            "Margin - это внешний отступ, padding - внутренний отступ",
            "Padding - это внешний отступ, margin - внутренний отступ",
            "Margin используется для текстов, padding - для блоков",
            "Padding используется для блоков, margin - для текстов"
        ],
        correct: 0
    },
    {
        question: "Что такое переменные и как их объявить в JavaScript?",
        answers: [
            "Переменные - это контейнеры для хранения данных. Их можно объявить с помощью var, let и const.",
            "Переменные - это HTML элементы. Их можно объявить с помощью <var> тега.",
            "Переменные - это стили CSS. Их можно объявить с помощью var() функции.",
            "Переменные - это серверные данные. Их можно объявить с помощью SQL."
        ],
        correct: 0
    },
    {
        question: "Объясните разницу между `var`, `let` и `const`.",
        answers: [
            "`var` объявляет глобальную переменную, `let` и `const` - блочные переменные, причем `const` - неизменяемая.",
            "`var` объявляет неизменяемую переменную, `let` и `const` - изменяемые переменные.",
            "`var` и `let` - блочные переменные, `const` - глобальная переменная.",
            "`var` и `const` - глобальные переменные, `let` - блочная переменная."
        ],
        correct: 0
    },
    {
        question: "Что такое функции и как их объявить?",
        answers: [
            "Функции - это блоки кода, выполняющие определенную задачу. Их можно объявить с помощью function, стрелочных функций и функциональных выражений.",
            "Функции - это HTML элементы, используемые для создания форм. Их можно объявить с помощью <function> тега.",
            "Функции - это стили CSS. Их можно объявить с помощью function() функции.",
            "Функции - это серверные данные. Их можно объявить с помощью SQL."
        ],
        correct: 0
    },
    {
        question: "Объясните понятие замыкания (closure).",
        answers: [
            "Замыкание - это функция, которая может обращаться к переменным из своей внешней области видимости даже после того, как эта область была завершена.",
            "Замыкание - это метод объединения нескольких функций в одну.",
            "Замыкание - это техника для ускорения выполнения кода.",
            "Замыкание - это процесс оптимизации кода для лучшей производительности."
        ],
        correct: 0
    },
    {
        question: "Что такое объектно-ориентированное программирование (ООП) в JavaScript?",
        answers: [
            "ООП - это парадигма программирования, основанная на объектах, которые могут содержать данные и методы.",
            "ООП - это способ стилизации HTML элементов.",
            "ООП - это метод оптимизации CSS стилей.",
            "ООП - это техника управления серверными данными."
        ],
        correct: 0
    },
    {
        question: "В чем разница между `==` и `===`?",
        answers: [
            "`==` сравнивает значения без учета типа, `===` сравнивает и значения, и типы.",
            "`==` сравнивает и значения, и типы, `===` сравнивает только значения.",
            "`==` используется для сравнения строк, `===` - для чисел.",
            "`==` используется в HTML, `===` - в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Что такое промисы (promises) и как с ними работать?",
        answers: [
            "Промисы - это объекты, представляющие результат асинхронной операции, которые могут быть выполнены или отклонены.",
            "Промисы - это методы стилизации HTML элементов.",
            "Промисы - это функции для работы с сервером.",
            "Промисы - это способ управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Объясните концепцию async/await.",
        answers: [
            "Async/await - это синтаксический сахар для работы с промисами, позволяющий писать асинхронный код в синхронном стиле.",
            "Async/await - это методы оптимизации CSS стилей.",
            "Async/await - это техники для работы с HTML элементами.",
            "Async/await - это способы управления серверными данными."
        ],
        correct: 0
    },
    {
        question: "Что такое `this` и как оно работает в JavaScript?",
        answers: [
            "`this` - это ключевое слово, которое ссылается на объект, в контексте которого была вызвана функция.",
            "`this` - это метод для создания новых функций.",
            "`this` - это способ оптимизации JavaScript кода.",
            "`this` - это метод управления серверными данными."
        ],
        correct: 0
    },
    {
        question: "Что такое стрелочные функции и в чем их особенности?",
        answers: [
            "Стрелочные функции - это синтаксис для объявления функций, который не имеет собственного контекста `this`.",
            "Стрелочные функции - это функции, которые используют стрелки для обозначения параметров.",
            "Стрелочные функции - это методы стилизации HTML элементов.",
            "Стрелочные функции - это способы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Как получить доступ к элементу DOM?",
        answers: [
            "Использовать методы, такие как `getElementById`, `querySelector` и `querySelectorAll`.",
            "Использовать методы стилизации CSS.",
            "Использовать SQL запросы.",
            "Использовать HTML теги."
        ],
        correct: 0
    },
    {
        question: "Объясните разницу между `querySelector` и `getElementById`.",
        answers: [
            "`querySelector` возвращает первый элемент, соответствующий CSS селектору, `getElementById` возвращает элемент по ID.",
            "`querySelector` возвращает элемент по ID, `getElementById` возвращает элемент по селектору.",
            "`querySelector` используется для стилизации элементов, `getElementById` - для их создания.",
            "`querySelector` используется для работы с сервером, `getElementById` - для работы с базой данных."
        ],
        correct: 0
    },
    {
        question: "Как добавить, удалить и изменить элементы в DOM?",
        answers: [
            "Использовать методы, такие как `appendChild`, `removeChild` и `innerHTML`.",
            "Использовать методы стилизации CSS.",
            "Использовать SQL запросы.",
            "Использовать HTML теги."
        ],
        correct: 0
    },
    {
        question: "Что такое обработчики событий (event handlers) и как их добавить к элементам?",
        answers: [
            "Обработчики событий - это функции, которые выполняются при наступлении определенного события. Их можно добавить с помощью `addEventListener`.",
            "Обработчики событий - это методы стилизации HTML элементов.",
            "Обработчики событий - это SQL запросы для работы с сервером.",
            "Обработчики событий - это способы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "В чем разница между `event.preventDefault()` и `event.stopPropagation()`?",
        answers: [
            "`event.preventDefault()` предотвращает действие события, `event.stopPropagation()` останавливает распространение события.",
            "`event.preventDefault()` останавливает распространение события, `event.stopPropagation()` предотвращает действие события.",
            "`event.preventDefault()` используется для стилизации элементов, `event.stopPropagation()` - для их создания.",
            "`event.preventDefault()` используется для работы с сервером, `event.stopPropagation()` - для работы с базой данных."
        ],
        correct: 0
    },
    {
        question: "Как работает делегирование событий (event delegation)?",
        answers: [
            "Делегирование событий позволяет добавлять один обработчик события для родительского элемента вместо нескольких обработчиков для дочерних элементов.",
            "Делегирование событий используется для стилизации элементов.",
            "Делегирование событий - это SQL запросы для работы с сервером.",
            "Делегирование событий - это способы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Что такое события всплытия (event bubbling) и погружения (event capturing)?",
        answers: [
            "Всплытие - это когда событие сначала обрабатывается самым глубоким элементом, затем его родителями, погружение - наоборот.",
            "Всплытие - это когда событие обрабатывается родительским элементом, погружение - дочерним элементом.",
            "Всплытие и погружение - это методы стилизации элементов.",
            "Всплытие и погружение - это SQL запросы для работы с сервером."
        ],
        correct: 0
    },
    {
        question: "Как использовать Local Storage и Session Storage?",
        answers: [
            "Local Storage и Session Storage используются для хранения данных в браузере. Local Storage - для долговременного хранения, Session Storage - для временного.",
            "Local Storage и Session Storage используются для стилизации элементов.",
            "Local Storage и Session Storage - это SQL запросы для работы с сервером.",
            "Local Storage и Session Storage - это способы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Как сделать асинхронный запрос на сервер (AJAX)?",
        answers: [
            "Использовать объект `XMLHttpRequest` или функции `fetch`.",
            "Использовать методы стилизации CSS.",
            "Использовать HTML теги.",
            "Использовать методы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Объясните, что такое JSON и как с ним работать.",
        answers: [
            "JSON - это формат обмена данными, основанный на JavaScript. С ним можно работать с помощью методов `JSON.stringify` и `JSON.parse`.",
            "JSON - это язык программирования.",
            "JSON - это метод стилизации элементов.",
            "JSON - это SQL запрос для работы с сервером."
        ],
        correct: 0
    },
    {
        question: "Каковы основные методы отладки JavaScript-кода?",
        answers: [
            "Использование `console.log`, отладчика браузера и точки останова (breakpoints).",
            "Использование SQL запросов.",
            "Использование HTML тегов.",
            "Использование CSS стилей."
        ],
        correct: 0
    },
    {
        question: "Какие инструменты для разработчиков предоставляет браузер?",
        answers: [
            "Инструменты разработчика включают консоль, инспектор, отладчик, сеть и производительность.",
            "Инструменты разработчика включают стилизации CSS.",
            "Инструменты разработчика включают HTML теги.",
            "Инструменты разработчика включают SQL запросы."
        ],
        correct: 0
    },
    {
        question: "Что такое unit-тестирование и зачем оно нужно?",
        answers: [
            "Unit-тестирование - это метод тестирования отдельных модулей кода для проверки их правильности.",
            "Unit-тестирование - это способ стилизации элементов.",
            "Unit-тестирование - это SQL запросы для работы с сервером.",
            "Unit-тестирование - это способы управления памятью в JavaScript."
        ],
        correct: 0
    },
    {
        question: "Как использовать консоль для вывода данных и отладки?",
        answers: [
            "Использовать методы `console.log`, `console.error`, `console.warn` и другие.",
            "Использовать SQL запросы.",
            "Использовать HTML теги.",
            "Использовать методы стилизации CSS."
        ],
        correct: 0
    },
];


console.log(questions.length);


































let currentQuestionIndex = 0;
let shuffledQuestions = []; // Массив для перемешанных вопросов
let answerSelectedByKeyboard = false; // Флаг, указывающий, был ли выбран ответ с помощью клавиш
let correctAnswers = 0;
let wrongAnswers = 0;

// Функция для перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Функция для сохранения результатов в localStorage
function saveResults() {
    localStorage.setItem('quizResults', JSON.stringify({ correctAnswers, wrongAnswers }));
}

// Функция для загрузки результатов из localStorage
function loadResults() {
    const quizResults = JSON.parse(localStorage.getItem('quizResults')) || { correctAnswers: 0, wrongAnswers: 0 };
    correctAnswers = quizResults.correctAnswers;
    wrongAnswers = quizResults.wrongAnswers;
    updateResults();
}

// Функция для обновления интерфейса результатов
function updateResults() {
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
}

// Функция для сброса результатов
function resetResults() {
    correctAnswers = 0;
    wrongAnswers = 0;
    updateResults();
    saveResults();
}

function loadQuestion() {
    const questionContainer = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer");

    // Если перемешанный массив вопросов пуст, то перемешиваем исходный массив
    if (shuffledQuestions.length === 0) {
        shuffledQuestions = shuffle([...questions]); // Копия исходного массива
    }

    // Берем следующий вопрос из перемешанного массива
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    questionContainer.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.classList.remove("correct", "wrong"); // Убираем классы correct и wrong
        button.disabled = false; // Включаем кнопки перед каждым вопросом
    });

    document.getElementById("result").textContent = "";
    document.getElementById("next-button").style.display = "none";

    // Focus on the first answer button by default
    answerButtons[0].focus();

    answerSelectedByKeyboard = false; // Сбрасываем флаг при загрузке нового вопроса
}

function selectAnswer(index) {
    const correctIndex = shuffledQuestions[currentQuestionIndex].correct;
    const resultContainer = document.getElementById("result");

    if (!answerSelectedByKeyboard) {
        if (index === correctIndex) {
            resultContainer.textContent = "Correct!";
            document.querySelectorAll(".answer")[index].classList.add("correct");
            correctAnswers++;
        } else {
            resultContainer.textContent = "Wrong!";
            document.querySelectorAll(".answer")[index].classList.add("wrong");
            document.querySelectorAll(".answer")[correctIndex].classList.add("correct");
            wrongAnswers++;
        }

        // Disable all answer buttons after an answer is selected
        document.querySelectorAll(".answer").forEach(button => {
            button.disabled = true;
        });

        answerSelectedByKeyboard = true; // Устанавливаем флаг, что ответ был выбран с помощью клавиш
        document.getElementById("next-button").style.display = "block";

        // Обновляем результаты и сохраняем их в localStorage
        updateResults();
        saveResults();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question-container").style.display = "none";
        document.getElementById("result-container").textContent = "Congratulations! You've completed the game.";
        document.getElementById("next-button").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    loadResults(); // Загружаем результаты из localStorage

    // Add event listeners for answer buttons
    document.querySelectorAll(".answer").forEach((button, index) => {
        button.addEventListener("click", () => {
            selectAnswer(index);
        });
    });

    // Add event listener for key presses
    document.addEventListener("keydown", (event) => {
        const key = event.key;

        // Check if the key pressed is a number between 1 and 4
        if (key >= '1' && key <= '4' && !answerSelectedByKeyboard) {
            const answerIndex = parseInt(key) - 1;
            selectAnswer(answerIndex);
        }

        // Check if Enter key is pressed
        if (key === 'Enter' && answerSelectedByKeyboard) {
            event.preventDefault(); // Предотвращаем действие, если ответ уже был выбран
            nextQuestion();
        }
    });

    // Add event listener for reset button
    document.getElementById('reset-button').addEventListener('click', () => {
        resetResults();
    });
});
