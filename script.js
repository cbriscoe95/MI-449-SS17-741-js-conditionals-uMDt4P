var startButton = document.getElementById('trial-begin')

startButton.addEventListener('click', function () {
  var potions = window.prompt(`You awaken in a wooden cabin with no memory, in front of you is a table.
    On the table there are two vials, one with a red liquid and one with blue.
    Next to the vials there is a sign that reads: "Choose one: "
    Which do you drink? (Red or Blue)`)

  potions = potions.toLowerCase().trim()

  if (potions === 'red') {
    window.confirm(`Everything goes black. When you open your eyes, you are staring down
      a fearsome dragon! You remember, you are Grognar the Fierce and this black dragon is terrorizing
      the nearby village and you must slay it.`)

    var dragonFight = window.prompt(`As an overly agressive hyper masculine barbarian you carry far
      too many weapons: You have a spear, a sword, a shield, and an axe.
      Which will you use to slay the dragon?`)

    dragonFight = dragonFight.toLowerCase().trim()

    if (dragonFight === 'spear' || 'sword' || 'axe') {
      window.confirm('Ugh, of course you chose that. You kill the dragon with the ' + dragonFight + '.')
    }
    if (dragonFight === 'shield') {
      var randomNumber = Math.random()
      if (randomNumber > 0.5) {
        window.alert('Surprisingly you kill the dragon with the shield')
      } else {
        window.alert('Unurprisingly you can\'t kill a dragon with a shield, it eats you.')
      }
    }
  } else {
    window.alert('You drank the blue potion')
  }
})
