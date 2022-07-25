# GoWeb Test Task

## Макет:

[https://www.figma.com/file/4kWF5NeFyfb5TuH8y1CLuf/Land-(Copy)?node-id=2%3A146](<https://www.figma.com/file/4kWF5NeFyfb5TuH8y1CLuf/Land-(Copy)?node-id=2%3A146>)

## Критерії виконання:

- Верстка фіксована в рх.
- Верстка семантична (HTML5) та валідна, бонусом буде доступність (а11у).
- Використати Mobile first - підхід.
- Для збірки використати збірщик на ваш смак: parcel, gulp або webpack.
- Використання препроцессора SASS.
- Код html розбитий на окремі фрагменти.
- Відображення картинок в двох форматах: jpg та webp, з підтримкою
  Retina-дисплея.
- Фонове зображення секції hero (головне фото при загрузці) має чорну маску з
  коефіцієнтом прозорості 0.4

### Додаткове, але не обов'язкове завдання:

- При верстці блоків Business Cases та Our Professional Team скористатися
  алгоритмом CSS Grid.
- По бажанню можна використовувати бібліотеку React та створити веб-додаток.
  Стилізація в такому випадку може бути як module.css або styled-components; для
  інтеграції форми використовувати це
  [посилання](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/);
  для валідації форми по бажанню можна використовувати будь-яку бібліотеку -
  formik, react hook form, тощо

## Ефект ховера в макеті:

1. Лого 'FinanceLedger' - збільшується та змінює яскравість.
2. Лінки в навігації мають підкреслення.
3. Кнопка 'Read More' в секції hero та 'Send' в формі змінюють прозорість. Дві
   інших кнопки мають реверс кольорів.
4. Карточка в галереї (коли закрита) - змінює прозорість. У відкритому
   модальному вікні галереї - при ховері на правій частині фото з'являється
   стрілка вправо, при ховері на лівій - відповідно вліво, при переключені на
   наступне фото - бачимо loader (присутні в архіві). При ховері на Х (під фото)
   кнопка втрачає прозорість.
5. Секція Our Professional Team при ховері - збільшується саме фото, з'являється
   тінь навколо, фото отримує маску-filter з прозорістю 0.6 та соціальні іконки,
   які в свою чергу при ховері отримують прозорість 0.8.
6. Соціальні іконки в футері змінюють колір на #28a745

## Завдання по JavaScript:

1. Хедер при scroll отримує прозорість 0.8 та фіксовану позицію. З самого
   початку хедер повністю прозорий, зміни відбуваються як тільки ми проскролимо
   початкову висоту хедера, яка для mobile - 120px, tablet та desktop - 70px.
2. smoth scroll по якорьным сылкам

### Додаткове, але не обов'язкове завдання:

врахувати що при зміні розмірів хедера по висоті на версіях вказаних в
попередньому пункті змінюються вони і для функції smooth scroll. Найкраще
реалізувати це під час resize сторінки між типами девайсів.  
3. Валідація форми: обов'язкове поле має отримувати іконку warning.svg (наявна в
архіві) та напис "This is a required field".

## Матеріали:

1. [Архів](https://drive.google.com/file/d/14lGbGPjpZ2PeNBvYrwNptJcwYIdX3dXY/view)
   з картинками та іконками для макету.
2. Використати будь-яку галерею на свій вибір в проекті.
   [Приклад](https://lokeshdhakar.com/projects/lightbox2/)
3. [Інструкція](https://docs.netlify.com/forms/setup/) на форму Netlify (спрацює
   лише після завантаження на сервер).

## Що далі:

1. Після виконання завдання заливаємо build на
   [netlify.com](https://www.netlify.com/) та підключаємо форму.
2. Відправляємо на пошту dkhvorostianyi@goit.ua два посиланнямя на:

- репозиторій з кодом
- на готову сторінку з Netlify (назву змінити на читаєму)

3. Звіряємо ваш результат з очікуваним ось
   [тут](https://drive.google.com/file/d/1-1LvZD-aEcugqtHBtHPzHWMfJjKj0bZG/view)
4. Очікуємо на фідбек 😉
