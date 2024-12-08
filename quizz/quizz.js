document.getElementById("submit-btn").addEventListener("click", function () {
    const form = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("result");
    const answers = form.querySelectorAll("input[type='radio']:checked");
    
    let score = 0;
  
    // Count correct answers
    answers.forEach((answer) => {
      if (answer.value === "correct") {
        score++;
      }
    });
  
    const totalQuestions = form.querySelectorAll(".question").length;
    resultDiv.textContent = `You got ${score} out of ${totalQuestions} questions correct!`;
  });
  