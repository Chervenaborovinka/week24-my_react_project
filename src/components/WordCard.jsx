import Button from './Button';
import { useState } from "react";

function WordCard({ id, word, transcription, translation, theme }) {

    const [isTranslationVisible, setTranslationVisible] = useState(false);

    const handleShowTranslation = () => {
        setTranslationVisible(true);
    };

    return (
        <tr className="wordCard">
            <td>{id}</td>
            <td>{word}</td>
            <td>{transcription}</td>
            {isTranslationVisible && <td>{translation}</td>}
            {!isTranslationVisible && <button onClick={handleShowTranslation}>Показать перевод</button>}
            <td>{theme}</td>
        </tr>
    );
}

export default WordCard;