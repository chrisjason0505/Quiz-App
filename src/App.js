import React, { useState, useEffect } from "react";
 
const App = () => {

  const quizzes = {
    GK: [
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
      questionText: "Which planet in our solar system is known as the 'Red Planet'?",
      answerOptions: [
      { answerText: "Earth", isCorrect: false },
      { answerText: "Mars", isCorrect: true },
      { answerText: "Jupiter", isCorrect: false },
      { answerText: "Saturn", isCorrect: false },
      ],
      },
      
      {
      questionText: "Who painted the famous painting 'The Starry Night'?",
      answerOptions: [
      { answerText: "Leonardo da Vinci", isCorrect: false },
      { answerText: "Vincent van Gogh", isCorrect: true },
      { answerText: "Pablo Picasso", isCorrect: false },
      { answerText: "Claude Monet", isCorrect: false },
      ],
      },
      
      {
      questionText: "Which river is the longest in the world?",
      answerOptions: [
      { answerText: "Nile River", isCorrect: true },
      { answerText: "Amazon River", isCorrect: false },
      { answerText: "Yangtze River", isCorrect: false },
      { answerText: "Mississippi River", isCorrect: false },
      ],
      },
      
      {
      questionText: "Who wrote the famous novel 'To Kill a Mockingbird'?",
      answerOptions: [
      { answerText: "F. Scott Fitzgerald", isCorrect: false },
      { answerText: "Harper Lee", isCorrect: true },
      { answerText: "Jane Austen", isCorrect: false },
      { answerText: "J.K. Rowling", isCorrect: false },
      ],
      },
      
      {
      questionText: "Which country is home to the ancient city of Machu Picchu?",
      answerOptions: [
      { answerText: "Brazil", isCorrect: false },
      { answerText: "Argentina", isCorrect: false },
      { answerText: "Peru", isCorrect: true },
      { answerText: "Chile", isCorrect: false },
      ],
      },
      
      {
      questionText: "Who was the first President of the United States?",
      answerOptions: [
      { answerText: "George Washington", isCorrect: true },
      { answerText: "Thomas Jefferson", isCorrect: false },
      { answerText: "Abraham Lincoln", isCorrect: false },
      { answerText: "Franklin D. Roosevelt", isCorrect: false },
      ],
      },
      
      {
      questionText: "Which artist is famous for his sculpture 'David'?",
      answerOptions: [
      { answerText: "Michelangelo", isCorrect: true },
      { answerText: "Leonardo da Vinci", isCorrect: false },
      { answerText: "Raphael", isCorrect: false },
      { answerText: "Donatello", isCorrect: false },
      ],
      },
      
      {
      questionText: "Which country is the largest in Scandinavia?",
      answerOptions: [
      { answerText: "Sweden", isCorrect: true },
      { answerText: "Norway", isCorrect: false },
      { answerText: "Denmark", isCorrect: false },
      { answerText: "Finland", isCorrect: false },
      ],
      },
      
      {
      questionText: "Who wrote the famous play 'Romeo and Juliet'?",
      answerOptions: [
      { answerText: "William Shakespeare", isCorrect: true },
      { answerText: "Christopher Marlowe", isCorrect: false },
      { answerText: "Ben Jonson", isCorrect: false },
      { answerText: "John Webster", isCorrect: false },
      ],
      },



      
    ],
    Technology: [
      {
        questionText: "Who was once the CEO of Tesla?",
        answerOptions: [
          { answerText: "Jeff Bezos", isCorrect: false },
          { answerText: "Elon Musk", isCorrect: true },
          { answerText: "Bill Gates", isCorrect: false },
          { answerText: "Tony Stark", isCorrect: false },
        ],
      },
      {
        questionText: "Which company developed React?",
        answerOptions: [
          { answerText: "Apple", isCorrect: false },
          { answerText: "Google", isCorrect: false },
          { answerText: "Facebook", isCorrect: true },
          { answerText: "Amazon", isCorrect: false },
        ],
      },

      {
        questionText: "Which one of these is an object oriented programming language",
        answerOptions: [
          { answerText: "C++", isCorrect: true },
          { answerText: "Kotlin", isCorrect: false },
          { answerText: "Python", isCorrect: false },
          { answerText: "Ruby on Rails", isCorrect: false },
        ],
      },


      {
        questionText: "Which one of these is a type of computer architecture?",
        answerOptions: [
          { answerText: "x11", isCorrect: false },
          { answerText: "ssd", isCorrect: false },
          { answerText:"x86", isCorrect: true },
          { answerText: "floppy disk", isCorrect: false },
        ],
      },

      
 {
questionText: "What does CPU stand for?",
answerOptions: [
{ answerText: "Central Power Unit", isCorrect: false },
{ answerText: "Central Processing Unit", isCorrect: true },
{ answerText: "Computer Processing Unit", isCorrect: false },
{ answerText: "Core Processing Unit", isCorrect: false },
],
},

 {
questionText: "Which programming language is used for web development and is known for its dynamic nature?",
answerOptions: [
{ answerText: "Java", isCorrect: false },
{ answerText: "Python", isCorrect: false },
{ answerText: "JavaScript", isCorrect: true },
{ answerText: "C++", isCorrect: false },
],
},

 {
questionText: "What is the term for a type of malware that demands payment in exchange for restoring access to data?",
answerOptions: [
{ answerText: "Virus", isCorrect: false },
{ answerText: "Worm", isCorrect: false },
{ answerText: "Trojan", isCorrect: false },
{ answerText: "Ransomware", isCorrect: true },
],
},

 {
questionText: "Which company developed the popular operating system Linux?",
answerOptions: [
{ answerText: "Microsoft", isCorrect: false },
{ answerText: "Apple", isCorrect: false },
{ answerText: "Google", isCorrect: false },
{ answerText: "Linus Torvalds", isCorrect: true },
],
},

 {
questionText: "What is the term for a network protocol that allows devices to communicate with each other?",
answerOptions: [
{ answerText: "HTTP", isCorrect: false },
{ answerText: "FTP", isCorrect: false },
{ answerText: "TCP/IP", isCorrect: true },
{ answerText: "DNS", isCorrect: false },
],
},

 {
questionText: "Which programming language is commonly used for machine learning and data science?",
answerOptions: [
{ answerText: "Python", isCorrect: true },
{ answerText: "Java", isCorrect: false },
{ answerText: "C++", isCorrect: false },
{ answerText: "R", isCorrect: false },
],
},

 {
questionText: "What is the term for a type of computer memory that temporarily stores data?",
answerOptions: [
{ answerText: "RAM", isCorrect: true },
{ answerText: "ROM", isCorrect: false },
{ answerText: "Cache", isCorrect: false },
{ answerText: "Hard Drive", isCorrect: false },
],
},

 {
questionText: "Which company developed the first commercially available smartphone?",
answerOptions: [
{ answerText: "Apple", isCorrect: false },
{ answerText: "IBM", isCorrect: true },
{ answerText: "Microsoft", isCorrect: false },
{ answerText: "Nokia", isCorrect: false },
],
},
 {
questionText: "What is the term for a type of network attack that involves flooding a system with traffic?",
answerOptions: [
{ answerText: "Phishing", isCorrect: false },
{ answerText: "Malware", isCorrect: false },
{ answerText: "Denial of Service (DoS)", isCorrect: true },
{ answerText: "Ransomware", isCorrect: false },
],
},

 {
questionText: "Which programming language is known for its simplicity and readability?",
answerOptions: [
{ answerText: "Java", isCorrect: false },
{ answerText: "Python", isCorrect: true },
{ answerText: "C++", isCorrect: false },
{ answerText: "JavaScript", isCorrect: false },
],
},
    ],
  };

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("yellowgreen");

  const [playerName, setPlayerName] = useState("");
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(10);

  const colors = ["yellowgreen", "blue", "grey", "orange"];

  // Load leaderboard from local storage on app load
  useEffect(() => {
    if (showScore) {
      const newEntry = {
        name: playerName,
        score: score,
        totalQuestions: quizzes[selectedQuiz].length,
        quiz: selectedQuiz,
      };
      const updatedLeaderboard = [...leaderboard, newEntry]
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
  
      setLeaderboard(updatedLeaderboard);
      localStorage.setItem("quizLeaderboard", JSON.stringify(updatedLeaderboard));
    }
  }, [showScore, score, playerName, selectedQuiz]);
  

  // Timer countdown logic
  useEffect(() => {
    if (isNameEntered && selectedQuiz && !showScore) {
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
  }, [currentQuestion, isNameEntered, selectedQuiz, showScore]);
  



  // Handle next question
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizzes[selectedQuiz].length) {
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
    const newEntry = { name: playerName, score: score, totalQuestions: quizzes[selectedQuiz].length, quiz: selectedQuiz };
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
    if (playerName.trim() && selectedQuiz) {
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
    setSelectedQuiz(null);
    setPlayerName("");
    setTimeLeft(10);
  };

  // Render leaderboard
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
            <th>Quiz</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.quiz}</td>
              <td>{entry.score}/{entry.totalQuestions}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          // Clear leaderboard data from localStorage
          localStorage.removeItem("quizLeaderboard");
          // Reset leaderboard state
          setLeaderboard([]);
        }}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          justifyContent: "center"
        }}
      >
          Reset 
      </button>
    </div>
  );
};


  // Initial welcome screen
  if (!isNameEntered) {
    return (

      <div className="container">
      <div 
        style={{
          textAlign: "center",
       
          fontSize: "64px",
          fontWeight: "bold",
          margin: "30px 0",
          color: "white",
        }}
      >
        Quiz Application
      </div>
      <div
        className="app"
        style={{ backgroundColor: backgroundColor, transition: "background-color 0.5s ease", padding: "20px" }}
      >
        <div className="question-section">
          <div className="question-text" style={{ textAlign: "center", marginBottom: "20px",color:"white"}}>
            Enter Your Name and Select a Quiz
          </div>
        </div>
        <div className="answer-section">
          <form
            onSubmit={handleNameSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}
          >
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              placeholder="Enter your name"
              required
              style={{
                width: "80%",
                padding: "12px",
                fontSize: "16px",
                border: "2px solid #333",
                borderRadius: "5px",
                color:"black"
              }}
            />
            <select
              onChange={(e) => setSelectedQuiz(e.target.value)}
              required
              style={{
                width: "80%",
                padding: "12px",
                fontSize: "16px",
                border: "2px solid #333",
                borderRadius: "5px",
                color:"black"
              }}
            >
              <option value="" style={{color:"black",backgroundColor:"white"}}>Select a Quiz</option>
              {Object.keys(quizzes).map((quizName) => (
                <option key={quizName} value={quizName} style={{color:"black",backgroundColor:"white"}}>
                  {quizName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              style={{
                width: "80%",
                padding: "12px",
                fontSize: "16px",
                backgroundColor: "#4CAF50",
                color: "black",
                borderRadius: "5px",
              }}
            >
              Start Quiz
            </button>
            {playerName && selectedQuiz && (
              <div style={{ marginTop: "10px", textAlign: "center", color: "#333" }}>
                Welcome, <strong>{playerName}</strong>! Get ready for the <strong>{selectedQuiz}</strong> quiz.
              </div>
            )}
          </form>
        </div>
      </div>
      </div>
    );
  }

  return (
    
    <div
      className="app"
      style={{ backgroundColor: backgroundColor, transition: "background-color 0.5s ease", padding: "20px" }}
    >


      {showScore ? (
        <div className="score-section">
          <h1>
            {playerName}, you scored {score} out of {quizzes[selectedQuiz].length}
          </h1>


           
          <button className="btn" onClick={resetQuiz}X>
      
            Try Again
          </button>
          {renderLeaderboard()}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>
                Question {currentQuestion + 1}/{quizzes[selectedQuiz].length}
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
            <div className="question-text">{quizzes[selectedQuiz][currentQuestion].questionText}</div>
          </div>
          <div className="answer-section" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {quizzes[selectedQuiz][currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                style={{
                  padding: "12px",
                  fontSize: "16px",
                  color: "black",
                  backgroundColor: "#ddd",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border: "1px solid #333",
                }}
              >
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
