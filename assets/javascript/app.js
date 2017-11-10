var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "At the beginning of the movie a pilot freezes up during an encounter with a MIG-28. Surely he is not an older woman who likes dating younger men even though his call sign might make you think that. What is his call sign?",
  answers: ["Merlin", "Cougar", "Jack Rabbit", "Iceman"],
  correctAnswer: "Cougar"
}, {
  question: "In the Top Gun briefing room: Ice: 'The plaque for the alternates is down in the ______.'",
  answers: ["Kitchen", "Men's Room", "Dumpster", "Ladies Room"],
  correctAnswer: "Ladies Room"
}, {
  question: "Charlie saunters up to Maverick in a theory class. Charlie: '________ __________ would work well in that situation.'",
  answers: ["Split S", "Reverse cross", "Barrel roll", "Rolling reversal"],
  correctAnswer: "Rolling reversal"
}, {
  question: "Who played Merlin",
  answers: ["Tommy Lee Jones", "Kevin Costner", "Bill Pullman", "Tim Robbins"],
  correctAnswer: "Tim Robbins"
}, {
  question: "Shortly after Goose's wife arrives, in a bar: Carol (Meg Ryan): 'He told me all about the time you went ballistic with __________.'",
  answers: ["Penny Benjamin", "Jamie Dennis", "Becky Willis", "Donna Reed"],
  correctAnswer: "Penny Benjamin"
}, {
  question: "What is the song that Goose plays on the piano in the bar?",
  answers: ["Johnny B. Goode", "Great Balls of Fire", "Jailhouse Rock", "You've lost that lovin' feeling"],
  correctAnswer: "Great Balls of Fire"
}
];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },
start
  start: function() {
    timer = setInterval(game.countdown, 10000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});