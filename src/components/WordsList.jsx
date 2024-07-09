import {wordsData} from '../../db/dataBase'
import { useSpeechSynthesis } from 'react-speech-kit';


const WordsList = () => {
  const { speak, voices } = useSpeechSynthesis();

  const rate = 0.7; // Speed
  const pitch = 0.6;
  const voice = voices[2] // Voice type

  const handleListenWord = (item) => {
    speak({ text: item.word, voice, rate, pitch })
  }
  const handleListenSentence = (item) => {
    speak({ text: item.sentence, voice, rate, pitch })
  }


  return (
    <>
      <ul>
        {
          wordsData.map(item => (
            <li>
              <span onClick={() => handleListenWord(item)}>{item.word}</span> - {item.translation}<br/>
              <span onClick={() => handleListenSentence(item)}>{item.sentence}</span>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default WordsList
