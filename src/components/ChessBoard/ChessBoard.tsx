import React, { useState } from 'react';
import './ChessBoard.css';
const Chess = require('chess.js');

enum ErrorMessage {
    INVALID_DATA = 'Был введен неверный формат данных! Должно быть 4 значения (e2e4).',
    REQUIRED_FIELD = 'Поле обязательно для заполнения!',
    MOVE_IMPOSSIBLE = 'Такой ход невозможен',
    GAME_OVER = 'Игра была успешно завершена.'
}

const historyData: any[] = [];

const ChessBoard: React.FC = () => {
    const [img, setImg] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
    const [coordinates, setCoordinates] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [playerTurn, setPlayerMove] = useState('w');
    const [statusHistory, setStatusHistory] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const chess = new Chess(img);

    const handleMakeMove = (event: any) => {
        event.preventDefault();
        if (coordinates.length < 1){
            setErrorMessage(ErrorMessage.REQUIRED_FIELD);
            return false;
        } else if (coordinates.length < 4 || coordinates.length > 4){
            setErrorMessage(ErrorMessage.INVALID_DATA);
            return false;
        }

        const result = chess.move(coordinates, { sloppy: true });
        if(result) {
            setPlayerMove(result.color === 'w' ? 'b' : 'w');
            historyData.push(result);
            const newImg: string = chess.fen();
            setImg(newImg);
            setCoordinates('');
            setErrorMessage('');
            if(chess.game_over()) setGameOver(true);
        }else {
            setErrorMessage(ErrorMessage.MOVE_IMPOSSIBLE);
        }
    };

    const openHistoryBlock = (): void => {
        setStatusHistory(!statusHistory);
    };

    return(
        <div className="allWrapperPage">
            <div className="wrapperChessBoard">
                <h1>The game started</h1>
                <img className="imageChessBoard" src={`http://www.fen-to-image.com/image/double/coords/${img}`} alt=""/>
                <span className="playerTurn">Ход {playerTurn === 'w' ? 'белых' : 'черных'}</span>
            </div>
            {gameOver ?
                <span className="gameOverBlock">{ErrorMessage.GAME_OVER}</span>
                : <form className="formStrokeShape" onSubmit={handleMakeMove}>
                    <input
                        type="text"
                        value={coordinates}
                        onChange={(e) => setCoordinates(e.target.value)}
                    />
                    <button onClick={handleMakeMove}>Сделать ход</button>
                </form>
            }
            {errorMessage && <span className="errorMessage">{errorMessage}</span>}
            <div className="moveHistoryBlock">
                <button onClick={openHistoryBlock}>История ходов</button>
                {statusHistory && !!historyData.length &&
                    <ul>
                        {historyData.map((item) =>
                            <li key={item.from+item.to}><strong>Ход {item.color === 'w' ? 'белых' : 'черных'}</strong> From: {item.from} - To: {item.to}</li>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
};

export default ChessBoard;
