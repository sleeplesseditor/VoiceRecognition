import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../App.scss';

function DrawShape() {
    const addASquare = () => {
        let square = document.createElement('div')
        square.style.height = "125px"
        square.style.width = "125px"
        square.style.backgroundColor = "green"
        square.style.margin = "auto"
        document.getElementById("shape-canvas").appendChild(square)
    }
    const addACircle = (color) => {
        let circle = document.createElement('div')
        circle.style.height = "105px"
        circle.style.width = "105px"
        circle.style.borderRadius = "55px"
        circle.style.margin = "auto"
        circle.style.backgroundColor = `${color}`
        // document.getElementById("display-container").appendChild("shape-canvas")
        document.getElementById("shape-canvas").appendChild(circle)
    }

    const commands = [
        {
            command: 'Make a square please',
            callback: () => addASquare()
        },
        {
            command: 'Make a * circle please',
            callback: (color) => addACircle(color)
        }
    ]
    
    const {transcript, resetTranscript} = useSpeechRecognition({ commands });

    if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        return null
    }

    return (
        <div className="page__container">
        <h1 className="page__container--heading">Shape Addition</h1>
        <h4 className="page__container--subheading">What would you like to add?</h4>
        {transcript && (
            <div id="display-container">
                <p className="text-display">{transcript}</p>
                <div id="shape-canvas" />
            </div>
        )}
            <div className="page__container--btns-container">
                <button onClick={SpeechRecognition.startListening}>Listen</button> 
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    );
}

export default DrawShape;
