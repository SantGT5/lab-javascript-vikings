// Soldier
class Soldier {
constructor(health , strength){
    this.health = health
    this.strength = strength
  }
  attack(){
    return this.strength
  }
  receiveDamage(dano){
     this.health -= dano
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
  super(health, strength)
      this.name = name
      this.health = health
      this.strength = strength
  }
  receiveDamage(dano){
      let removeDa = this.health -= dano
      
      if(removeDa > 0){
        let vikingAlive = `${this.name} has received ${dano} points of damage`

          return vikingAlive
      }else{
        let vikingDies = `${this.name} has died in act of combat`

            return vikingDies
      }
  }
  battleCry(){
    let odin = "Odin Owns You All!"

      return odin
  }
}

// Saxon
class Saxon extends Soldier {


receiveDamage(dano){
    let removeDa = this.health -= dano
    
    
    if(removeDa > 0){
      let saxonAlive = `A Saxon has received ${removeDa} points of damage`

      return saxonAlive

    }else{
      let saxonDies = `A Saxon has died in combat`
      
      return saxonDies


    }



}



}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
