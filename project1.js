document.addEventListener('DOMContentLoaded', init)

function init () {
  var currentPlayer = 'A'
  var PlayerAScore = 0
  var PlayerBScore = 0
  var numberA = ''
  var numberB = ''
  var Answer = ''
  var questionBox = document.querySelectorAll('.boxLeft p')
  var startGamebutton = document.querySelector('.buttonsStart')
  var resetButton = document.querySelector('.buttonsReset')
  var playerInput = document.querySelector('input')

  console.log('good to go!')

  console.log(startGamebutton)
  console.log(PlayerAScore)
  console.log(numberA)
  console.log(Answer)
  console.log(playerInput.value)
  startGamebutton.addEventListener('click', startGame)
  resetButton.addEventListener('click', resetGame)

  function startGame () {
    startGamebutton.disabled = true
    playerInput.value = ''

    if (currentPlayer === 'A') {
      questionBox[0].innerHTML = 'Player ' + currentPlayer
    } else {
      questionBox[0].innerHTML = 'Player ' + currentPlayer
    }
    generateQuestion()
  }

  function generateQuestion () {
    numberA = Math.floor(Math.random() * Math.random() * 125)
    numberB = Math.floor(Math.random() * Math.random() * 250)
    Answer = numberA + numberB
    Answer = Answer.toString()

    questionBox[1].innerHTML = 'What is ' + numberA + ' + ' + numberB + ' ?'

    // now testing with onkeydown on html side....
    playerInput.addEventListener('keydown', playerEntersAnswer)
  // console.log('test  ' + Answer)
  }

  function playerEntersAnswer () {
    if (event.keyCode === 13) {
      console.log('i am the one 1' + Answer)
      checkAnswers()
    }
    console.log('i am the one 2' + Answer)
    console.log(PlayerAScore)
    console.log(numberA)
    console.log(Answer)
    console.log(playerInput.value)
  }

  function checkAnswers () {
    var isAnswerCorrect = true
    if (playerInput.value === Answer) {
      isAnswerCorrect = true
      document.querySelectorAll('.boxLeftBottom p')[0].innerHTML = 'Player ' + currentPlayer + ' Your Answer is .... CORRECT'
    //  = 'Your Answer is ....  CORRECT'
    } else {
      isAnswerCorrect = false
      document.querySelectorAll('.boxLeftBottom p')[0].innerHTML = 'Player ' + currentPlayer + ' Your Answer is .... WRONG'
    }

    console.log('playeranswer ' + isAnswerCorrect)
    updateScore(isAnswerCorrect)
  }

  function updateScore (alpha) {
    if (alpha === true) {
      if (currentPlayer === 'A') {
        PlayerAScore++
        document.querySelector('#PlayerAScore p').innerHTML = PlayerAScore
        console.log('aaa' + document.querySelector('#PlayerAScore p').innerHTML)
      } else {
        PlayerBScore++
        document.querySelector('#PlayerBScore p').innerHTML = PlayerBScore
      }
    }
    console.log('playA score ' + PlayerAScore)
    console.log('playB score ' + PlayerBScore)
    console.log(currentPlayer)

    checkWhoWin()
  }

  function checkWhoWin () {
    // assuming first to 3 or more, must win by at least 2 points. Current player wins.
    console.log('PLAYER A ' + PlayerAScore)
    console.log('PLAYER B ' + PlayerBScore)
    if (PlayerAScore >= 3 || PlayerBScore >= 3) {
      if (Math.abs(PlayerAScore - PlayerBScore) >= 2) {
        document.querySelectorAll('.boxLeftBottom p')[0].innerHTML = 'PLAYER ' + currentPlayer + ' WINZ WINZ WINZ'
        alert('Player ' + currentPlayer + ' Wins')
      // startGamebutton.disabled = false
      // location.reload()
      }
    }
    switchPlayer()
  }

  function switchPlayer () {
    if (currentPlayer === 'A') {
      currentPlayer = 'B'
    } else {
      currentPlayer = 'A'
    }
    console.log('switch ' + currentPlayer)
    startGame()
  }

  function resetGame () {
    var option = confirm('Want to reset?')
    if (option === true) {
      location.reload()
    }
  }
}
