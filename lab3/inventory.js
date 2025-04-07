// === Лабораторная работа №3: Продвинутые объекты в JavaScript ===

/**
 * Класс, представляющий предмет инвентаря.
 */
class Item {
    /**
     * @param {string} name - Название предмета.
     * @param {number} weight - Вес предмета.
     * @param {string} rarity - Редкость (common, uncommon, rare, legendary).
     */
    constructor(name, weight, rarity) {
      this.name = name;
      this.weight = weight;
      this.rarity = rarity;
    }
  
    /**
     * Возвращает информацию о предмете.
     * @returns {string}
     */
    getInfo() {
      return `Name: ${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
    }
  
    /**
     * Изменяет вес предмета.
     * @param {number} newWeight
     */
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  /**
   * Класс, представляющий оружие — расширяет Item.
   */
  class Weapon extends Item {
    /**
     * @param {string} name
     * @param {number} weight
     * @param {string} rarity
     * @param {number} damage - Урон.
     * @param {number} durability - Прочность (от 0 до 100).
     */
    constructor(name, weight, rarity, damage, durability) {
      super(name, weight, rarity);
      this.damage = damage;
      this.durability = durability;
    }
  
    /**
     * Использует оружие, снижая прочность на 10 (если > 0).
     */
    use() {
      if (this.durability > 0) {
        this.durability -= 10;
        console.log(`${this.name} used. Durability now: ${this.durability}`);
      } else {
        console.log(`${this.name} is broken and can't be used.`);
      }
    }
  
    /**
     * Восстанавливает прочность до 100.
     */
    repair() {
      this.durability = 100;
      console.log(`${this.name} has been repaired.`);
    }
  
    /**
     * Переопределённый метод для вывода полной информации.
     * @returns {string}
     */
    getInfo() {
      return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
  }
  
  // === Тестирование ===
  
  const sword = new Item("Steel Sword", 3.5, "rare");
  console.log(sword.getInfo());
  sword.setWeight(4.0);
  console.log(sword.getInfo());
  
  const bow = new Weapon("Longbow", 2.0, "uncommon", 15, 100);
  console.log(bow.getInfo());
  bow.use();
  bow.use();
  console.log(bow.getInfo());
  bow.repair();
  console.log(bow.getInfo());
  
  const potion = new Item("Health Potion", 0.5, "common");
  console.log(potion.getInfo());
  
  const axe = new Weapon("Battle Axe", 5.0, "legendary", 35, 100);
  axe.use();
  axe.use();
  console.log(axe.getInfo());
  
  // === Дополнительно: опциональная цепочка ===
  let maybeItem = null;
  console.log(maybeItem?.getInfo()); // Не вызовет ошибку
  
  // === Функции-конструкторы ===
  
  /**
   * Функция-конструктор Item.
   * @constructor
   * @param {string} name
   * @param {number} weight
   * @param {string} rarity
   */
  function ItemConstructor(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
  }
  
  ItemConstructor.prototype.getInfo = function () {
    return `Name: ${this.name}, Weight: ${this.weight}kg, Rarity: ${this.rarity}`;
  };
  
  ItemConstructor.prototype.setWeight = function (newWeight) {
    this.weight = newWeight;
  };
  
  /**
   * Функция-конструктор Weapon, расширяющая Item.
   * @constructor
   * @param {string} name
   * @param {number} weight
   * @param {string} rarity
   * @param {number} damage
   * @param {number} durability
   */
  function WeaponConstructor(name, weight, rarity, damage, durability) {
    ItemConstructor.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
  }
  
  WeaponConstructor.prototype = Object.create(ItemConstructor.prototype);
  WeaponConstructor.prototype.constructor = WeaponConstructor;
  
  WeaponConstructor.prototype.use = function () {
    if (this.durability > 0) {
      this.durability -= 10;
    }
  };
  
  WeaponConstructor.prototype.repair = function () {
    this.durability = 100;
  };
  
  WeaponConstructor.prototype.getInfo = function () {
    return `${ItemConstructor.prototype.getInfo.call(this)}, Damage: ${this.damage}, Durability: ${this.durability}`;
  };
  
  // Пример использования конструктора
  const dagger = new WeaponConstructor("Shadow Dagger", 1.2, "rare", 20, 90);
  console.log(dagger.getInfo());
  dagger.use();
  console.log(dagger.getInfo());
  dagger.repair();
  console.log(dagger.getInfo());
  