import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

function App() {
  const {transcript, resetTranscript} = useSpeechRecognition();

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null
  }

  return (
    <div className="App">
      <h1>React Voice Recognition</h1>
      <button onClick={SpeechRecognition.startListening}>Listen</button> 
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
