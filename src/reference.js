import React, { useState, useEffect } from "react";

const App = () => {
  const questions = [
    {
      questionText: "Which is not an animal?",
      answerOptions: [
        { answerText: "tiger", isCorrect: false },
        { answerText: "lion", isCorrect: false },
        { answerText: "flying mantis", isCorrect: true },
        { answerText: "panther", isCorrect: false },
      ],
    },
    {
      questionText: "Find the odd one out?",
      answerOptions: [
        { answerText: "Lindt", isCorrect: false },
        { answerText: "Cadbury", isCorrect: false },
        { answerText: "Vatika", isCorrect: true },
        { answerText: "Amul", isCorrect: false },
      ],
    },
    {
      questionText: "Who was once the CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("yellowgreen");

  const [playerName, setPlayerName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const colors = ["yellowgreen", "blue", "violet", "orange"];

  // Load leaderboard from local storage on app load
  useEffect(() => {
    const savedLeaderboard = JSON.parse(localStorage.getItem("quizLeaderboard") || "[]");
    setLeaderboard(savedLeaderboard);
  }, []);

  // Timer countdown logic
  useEffect(() => {
    if (isNameEntered && !showScore) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleNextQuestion();
            return 10;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, isNameEntered, showScore]);

  // Handle next question
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setBackgroundColor(colors[nextQuestion % colors.length]);
      setTimeLeft(10);
    } else {
      setShowScore(true);
      updateLeaderboard();
    }
  };

  // Update leaderboard
  const updateLeaderboard = () => {
    const newEntry = { name: playerName, score: score, totalQuestions: questions.length };
    const updatedLeaderboard = [...leaderboard, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);

    setLeaderboard(updatedLeaderboard);
    localStorage.setItem("quizLeaderboard", JSON.stringify(updatedLeaderboard));
  };

  // Handle answer click
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    handleNextQuestion();
  };

  // Handle name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (playerName.trim()) {
      setIsNameEntered(true);
    }
  };

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setBackgroundColor("yellowgreen");
    setIsNameEntered(false);
    setPlayerName("");
    setTimeLeft(10);
  };

  // Render leaderboard
  const renderLeaderboard = () => {
    return (
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.score}/{entry.totalQuestions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Initial welcome screen
  if (!isNameEntered) {
    return (
      <div
        className="app"
        style={{ backgroundColor: backgroundColor, transition: "background-color 0.5s ease" }}
      >
        <div className="question-section">
          <div className="question-text" style={{ textAlign: "center", marginBottom: "20px" }}>
            Enter Your Name
          </div>
        </div>
        <div className="answer-section">
          <form
            onSubmit={handleNameSubmit}
            style={{ display: "flex", width: "100%", gap: "10px" }}
          >
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              required
              style={{
                flex: "1",
                padding: "12px",
                fontSize: "16px",
                border: "2px solid #333",
                borderRadius: "5px",
              }}
            />
            <button
              type="submit"
              style={{
                width: "120px",
                padding: "12px 20px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Start Quiz
            </button>
          </form>
          {playerName && (
            <div style={{ marginTop: "10px", textAlign: "center", color: "#333" }}>
              Welcome, <strong>{playerName}</strong>!
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="app"
      style={{ backgroundColor: backgroundColor, transition: "background-color 0.5s ease" }}
    >
      {showScore ? (
        <div className="score-section">
          <h1>
            {playerName}, you scored {score} out of {questions.length}
          </h1>
          <button className="btn" onClick={resetQuiz}>
            Try Again
          </button>
          {renderLeaderboard()}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1}/{questions.length}
              </span>
              <div
                style={{
                  float: "right",
                  color: timeLeft <= 3 ? "red" : "black",
                  fontWeight: "bold",
                }}
              >
                Time Left: {timeLeft}s
              </div>
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
