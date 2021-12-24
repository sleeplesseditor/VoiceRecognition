import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../App.scss';

function TextDisplay() {
  const {transcript, resetTranscript} = useSpeechRecognition();

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null
  }

  return (
    <div className="page__container">
      <h1 className="page__container--heading">Text Display</h1>
      <div className="page__container--btns-container">
        <button onClick={SpeechRecognition.startListening}>Listen</button> 
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
      {transcript && (
          <p className="text-display">{transcript}</p>
      )}
    </div>
  );
}

export default TextDisplay;
