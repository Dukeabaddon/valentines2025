import './index.css';
import Start from './components/Start.jsx';
import Months from './components/Months.jsx';
import Gallery from './components/Gallery.jsx';
import Message from './components/Message.jsx';
import Valentines from './components/Valentines.jsx';
import music from "./components/marilag.mp3";
import { useState, useRef, useEffect } from 'react';

function App() {
  const [showMonths, setShowMonths] = useState(false);
  const [showStart, setShowStart] = useState(true);
  const [showGallery, setShowGallery] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showValentines, setShowValentines] = useState(false);
  
  // Reference to the audio element
  const audioRef = useRef(null);

  const handleStartClick = () => {
    setShowMonths(true);
    setShowStart(false);
    
    // Play the audio when the Start button is clicked
    if (audioRef.current) {
      audioRef.current.volume = 0; // Start volume at 0
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });

      // Fade in effect
      const fadeInInterval = setInterval(() => {
        if (audioRef.current.volume < 2) {
          audioRef.current.volume = Math.min(audioRef.current.volume + 0.1, 1); // Increase volume
        } else {
          clearInterval(fadeInInterval); // Stop the interval when volume reaches 1
        }
      }, 200); // Adjust the interval time as needed
    }
  };

  const handleImageClick = () => {
    setShowGallery(true);
    setShowMonths(false);
  };

  const handleBackToMonths = () => {
    setShowGallery(false);
    setShowMonths(true);
  };

  const handleShowMessage = () => {
    setShowGallery(false);
    setShowMessage(true);
  };

  const handleBackToGallery = () => {
    setShowGallery(true);
    setShowMessage(false);
  };

  const handleShowValentine = () => {
    setShowValentines(true);
    setShowMessage(false);
  };

  const handleBackToMessage = () => {
    setShowMessage(true);
    setShowValentines(false);
  };

  return (
    <>
      {/* Audio element for background music */}
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {showStart && <Start onClick={handleStartClick} />}
      {showMonths && <Months onImageClick={handleImageClick} />}
      {showGallery && <Gallery onBackClick={handleBackToMonths} onMessageClick={handleShowMessage} />}
      {showMessage && <Message onBackClick={handleBackToGallery} onValentineClick={handleShowValentine} />}
      {showValentines && <Valentines onBackClick={handleBackToMessage} />}
    </>
  );
}

export default App;