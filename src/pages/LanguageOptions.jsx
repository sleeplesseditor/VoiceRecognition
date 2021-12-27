import * as React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../App.scss';

function LanguageOptions() {
    const [display, setDisplay] = React.useState('');
    const commands = [
        {
            command: 'Hola cómo estás hoy',
            callback: () => setDisplay('Bien gracias, y tu?')
        }
    ]
    const {transcript, resetTranscript} = useSpeechRecognition({ commands });

    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null
    }

    return (
        <div className="page__container">
        <h1 className="page__container--heading">Language Options – Spanish</h1>
        <div className="page__container--btns-container">
            <button onClick={() => SpeechRecognition.startListening({ language: 'es-MX'})}>Listen</button> 
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
        </div>
        <>
            <h4>Preguntas:</h4>
            {transcript && (
                <p className="text-display">{transcript}</p>
            )}
        </>
        {display && (
            <p className="text-display">{display}</p>
        )}
        </div>
    );
}

export default LanguageOptions;
