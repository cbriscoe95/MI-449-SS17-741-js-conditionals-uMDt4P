var startButton = document.getElementById('story-begin')

startButton.addEventListener('click', function () {
  // Initial prompt
  var potion = window.prompt(`You awaken in a wooden cabin with no memory, in front of you is a table.
    On the table there are two vials, one with a red liquid and one with blue.
    Next to the vials there is a sign that reads: "Choose one: "
    Which do you drink? (Red or Blue)`)

  // Normalize the string
  potion = potion.toLowerCase().trim()

// If the potion chosen is red
  if (potion === 'red') {
    window.alert(`Everything goes black. When you open your eyes, you are staring down
      a fearsome dragon! You remember, you are Grognara the Fierce and this black dragon is terrorizing
      the nearby village and you must slay it.`)

    // Dragon fight beginning prompt
    var dragonFight = window.prompt(`As an overly agressive hyper masculine barbarian, you carry far
        too many weapons: You have a spear, a sword, a shield, and an axe.
        Which will you use to slay the dragon?`)

    // Normalize the string
    dragonFight = dragonFight.toLowerCase().trim()

    // If the weapon chosen is a spear, sword, or axe
    if (dragonFight === 'spear' || dragonFight === 'sword' || dragonFight === 'axe') {
      window.alert('Ugh, of course you chose that. You kill the dragon with the ' + dragonFight + '.')
      var dragonIsDead = true
    // If the weapon chosen is a shield
    } else if (dragonFight === 'shield') {
      var randomNumber = Math.random()
      // User randomly succeeds
      if (randomNumber > 0.5) {
        window.alert('Surprisingly you kill the dragon with the shield')
        dragonIsDead = true
      // User randomly fails
      } else {
        window.alert('Unurprisingly you can\'t kill a dragon with a shield, it eats you.')
      }
    // If the user enters nothing during the dragon fight
    } else if (dragonFight === '') {
      window.alert('You attempt to pacify the dragon with no weapons, and it eats you.')
    // If the user enters a different weapon
    } else {
      window.alert('You imagine killing the dragon with a ' + dragonFight + ' but you don\'t have that weapon and the dragon eats you')
    }
    // If the player has killed the dragon
    if (dragonIsDead) {
      var dragonLoot = window.prompt('You carry the dragon carcus back to town but how many pounds will you carry?')
      if (dragonLoot !== null) {
        var takeLoot = window.confirm('Are you sure you want to take ' + dragonLoot + ' pounds back?')
      }
      if (takeLoot) {
        dragonLoot = parseInt(dragonLoot)
        // If the player tries to carry 50 or more pounds
        if (isNaN(dragonLoot)) {
          window.alert('That is not a number, you carry no loot back to town.')
        // If dragonLoot is greater than or equal to 50
        } else if (dragonLoot >= 50) {
          window.confirm('That is just too much dragon for one person to carry, you die of exhaustion.')
        // If dragonLoot is less than 50
        } else if (dragonLoot > 0 && dragonLoot < 50) {
          window.confirm('Hurray! You\'re the talk of the town and have some sick dragon armor!')
        } else {
          window.alert('Or you could just return to the town empty handed because that\'s not a number')
        }
      } else {
        window.alert('Very minimalist of you. You return to the town empty handed')
      }
    }
    // If potion chosen is blue
  } else if (potion === 'blue') {
    window.alert('You drink the blue potion but everyone knows blue potions are poisonous. You die.')
    potion = ''
  } else {
    window.alert('That is not an available potion and there is no room for indecision in vapid, binary choices! You are banished to the trying to the shadowrealm')
    potion = ''
  }
})
