const keys = document.querySelectorAll(".key")

const notes = {
  C:261.63,
  D:293.66,
  E:329.63,
  F:349.23,
  G:392.00,
  A:440.00,
  B:493.88
}

/* Mouse Click */

keys.forEach(key => {

  key.addEventListener("click", () => {

    const note = key.dataset.note

    playSound(notes[note])

    animateKey(key)

  })

})

/* Keyboard Controls */

const keyboardMap = {
  a:"C",
  s:"D",
  d:"E",
  f:"F",
  g:"G",
  h:"A",
  j:"B"
}

document.addEventListener("keydown", (e) => {

  const note = keyboardMap[e.key]

  if(note){

    playSound(notes[note])

    const activeKey =
      document.querySelector(`[data-note="${note}"]`)

    animateKey(activeKey)

  }

})

/* Play Sound */

function playSound(freq){

  const audioCtx =
    new (window.AudioContext || window.webkitAudioContext)()

  const oscillator =
    audioCtx.createOscillator()

  const gainNode =
    audioCtx.createGain()

  oscillator.type = "sine"

  oscillator.frequency.value = freq

  oscillator.connect(gainNode)

  gainNode.connect(audioCtx.destination)

  oscillator.start()

  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    audioCtx.currentTime + 1
  )

}

/* Key Animation */

function animateKey(key){

  key.style.transform = "translateY(5px)"
  key.style.background = "#ffffff"

  setTimeout(() => {

    key.style.transform = "translateY(0)"
    key.style.background = "#e5ba73"

  }, 100)

}
