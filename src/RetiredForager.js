var RetiredForagerBee = function() {
  Grub.call(this)
  ForagerBee.call(this)
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

RetiredForagerBee.prototype = Object.create(Grub.prototype);
//should have a `treasureChest` property inherited from foragerBee that is set to an empty array `[]`
RetiredForagerBee.prototype.forage = function () {
  return "I am too old, let me play cards instead"
};

//should have an always winning `gamble` method that allows the bee to add a `treasure` to the `treasureChest`
RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
}

RetiredForagerBee.prototype.constructor = RetiredForagerBee;
