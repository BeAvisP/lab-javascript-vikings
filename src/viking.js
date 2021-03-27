//Iteration 1
// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

//Iteration 2
// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage); //Health is modified
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

//Iteration 3
// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

//BONUS- Iteration 4: War
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let vikingIndex = Math.floor(Math.random()) * this.vikingArmy.length;
    let viking = this.vikingArmy[vikingIndex];
    let saxonIndex = Math.floor(Math.random()) * this.saxonArmy.length;
    let saxon = this.saxonArmy[saxonIndex];
    let message = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxonIndex, 1);
    }
    return message;
  }
  saxonAttack() {
    let vikingIndex = Math.floor(Math.random()) * this.vikingArmy.length;
    let viking = this.vikingArmy[vikingIndex];
    let saxonIndex = Math.floor(Math.random()) * this.saxonArmy.length;
    let saxon = this.saxonArmy[saxonIndex];
    let message = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(vikingIndex, 1);
    }
    return message;
  }
}