import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [opened, setOpened] = useState(false);
  const [score, setScore] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [secretSurprise, setSecretSurprise] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const handleTyping = (event: KeyboardEvent) => {
      setTypedText((prev) => (prev + event.key).toLowerCase());
      if (typedText.includes("i love you")) {
        setSecretSurprise(true);
      }
    };
    window.addEventListener("keydown", handleTyping);
    return () => window.removeEventListener("keydown", handleTyping);
  }, [typedText]);

  const handleHeartClick = () => {
    if (score < 10) {
      setScore(score + 1);
    }
    if (score + 1 === 10) {
      setShowMessage(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setShowMessage(false);
  };

  return (
    <div className="container">
      <h1>❤️ Happy Valentine's Day! ❤️</h1>

      <button onClick={() => setOpened(true)}>Open Love Letter</button>

      {opened && (
        <div className="content">
          <div className="letter">
            <p>My Darling,</p>
            <p>
              <div className="poem">
                <span>Roses are red, violets are blue,</span>
                <span>No words could ever say how much I love you.</span>
                <span>Your smile is my sunrise, your laugh is my song,</span>
                <span>With you in my arms, I know I belong.</span>
              </div>
              ❤️
            </p>
            <p>Happy Valentine's Day D! 💖</p>
          </div>

          <div className="game">
            <h2>Catch the Hearts! 💖</h2>
            <p>Score: {score}</p>
            <div className="heart-container" onClick={handleHeartClick}></div>
          </div>

          {showMessage && (
            <div className="love-message">
              <p>Congratulations! You caught my heart. ❤️</p>
              <p>Always remember, you are deeply loved.</p>
              <p>Forever yours,</p>
              <p>
                <strong>Your Valentine,Onjiko</strong>
              </p>
              <button onClick={restartGame} className="restart-btn">
                Play Again
              </button>
            </div>
          )}
        </div>
      )}

      {secretSurprise && (
        <div className="secret-surprise">
          <h2>💖 You Found the Secret! 💖</h2>
          <p>"You are my forever love, and nothing will change that!"</p>
          <p>💖 Happy Valentine's Day! 💖</p>
        </div>
      )}

      <div className="heart-rain"></div>
    </div>
  );
}

export default App;
