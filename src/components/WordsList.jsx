import {wordsData} from '../../db/dataBase'

const WordsList = () => {
  return (
    <>
      <ul>
        {
          wordsData.map(item => (
            <li>
              {item.word} - {item.translation}<br/>
              {item.sentence}
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default WordsList
