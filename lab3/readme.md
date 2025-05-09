# Лабораторная работа №3: Продвинутые объекты в JavaScript

##  Описание

Данная лабораторная работа посвящена работе с объектно-ориентированными возможностями JavaScript: использованием классов, наследования, а также функций-конструкторов. Реализована и протестирована система предметов инвентаря, включая оружие с характеристиками урона и прочности.

##  Содержание
## Шаг 1. Создание класса Item
- Поля класса:
- name – название предмета.
- weight – вес предмета.
- rarity – редкость предмета (common, uncommon, rare, legendary).
- Методы:
- getInfo() – возвращает строку с информацией о предмете.
- setWeight(newWeight) – изменяет вес предмета.

![alt text](image-3.png)

## Шаг 2. Создание класса Weapon
Создайте класс **Weapon**, который расширяет **Item**.

*Дополнительные поля*:
- damage – урон оружия.
- durability – прочность (от 0 до 100).
**Методы**:
- use() – уменьшает durability на 10 (если durability > 0).
- repair() – восстанавливает durability до 100.
![alt text](image-4.png)
### Классы

- **Item** — базовый класс, представляющий предмет.
  - Свойства: `name`, `weight`, `rarity`
  - Методы:
    - `getInfo()` — выводит информацию о предмете
    - `setWeight(newWeight)` — изменяет вес предмета

- **Weapon** — подкласс от `Item`, представляет оружие.
  - Дополнительные свойства: `damage`, `durability`
  - Дополнительные методы:
    - `use()` — использует оружие, уменьшая прочность на 10
    - `repair()` — восстанавливает прочность до 100
    - Переопределённый `getInfo()` — возвращает полную информацию
## Шаг 3. Тестирование
- Создайте несколько объектов классов Item и Weapon.
- Вызовите их методы, чтобы убедиться в правильности работы.
![alt text](image-5.png)


## Контрольные вопросы
# - 1. Какое значение имеет this в методах класса?
        
        this внутри методов класса ссылается на текущий экземпляр (объект), созданный с помощью new

# - 2.  Как работает модификатор доступа # в JavaScript?

    Символ *#* перед именем свойства или метода делает его приватным — доступ к нему возможен только внутри класса.

# - 3. В чем разница между классами и функциями-конструкторами?

Классы — более современный и удобочитаемый синтаксис.

Функции-конструкторы — старый способ, но работают аналогично при использовании new.

Классы поддерживают синтаксис наследования и приватные поля более естественно.
