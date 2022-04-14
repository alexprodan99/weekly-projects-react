import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    decrementLives,
    incrementScore,
    resetLives,
    resetScore,
    setQuestion,
    setResponse,
} from '../actions';
import { genExpression, evaluate, getRandomInt } from '../expressions';
import QuestionCard from './QuestionCard';

export default function GameScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector((state) => state.name);
    const question = useSelector((state) => state.question);
    const response = useSelector((state) => state.response);
    const score = useSelector((state) => state.score);
    const lives = useSelector((state) => state.lives);
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        dispatch(resetScore());
        dispatch(resetLives());
        setGameOver(false);
    };

    useEffect(() => {
        dispatch(setQuestion(genExpression(getRandomInt(1, 4))));
        resetGame();
    }, []);

    return (
        <div className="container">
            {gameOver ? (
                <div className="quiz-screen">
                    <h2>Game Over! Your Score is {score}</h2>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <button
                            type="button"
                            className="btn btn-primary mr-2"
                            onClick={() => resetGame()}
                        >
                            Play again
                        </button>
                        <button
                            type="buton"
                            className="btn btn-primary"
                            onClick={() => navigate('/')}
                        >
                            Back to main menu
                        </button>
                    </form>
                </div>
            ) : (
                <div className="quiz-screen">
                    <h1>Welcome to the impossible math game {name}!</h1>
                    <h2>You have {lives} chances!</h2>
                    <h2>Prepare to loose!</h2>

                    <h3>Your score is {score}</h3>
                    <QuestionCard text={question} />
                    <form onSubmit={(event) => event.preventDefault()}>
                        <div className="form-group row">
                            <input
                                id="name"
                                type="text"
                                value={response}
                                onChange={(event) =>
                                    dispatch(setResponse(event.target.value))
                                }
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        const correctResponse = parseFloat(
                                            evaluate(question)
                                        );
                                        const myResponse = parseFloat(response);
                                        dispatch(
                                            setQuestion(
                                                genExpression(
                                                    getRandomInt(1, 4)
                                                )
                                            )
                                        );
                                        dispatch(setResponse(''));

                                        if (myResponse === correctResponse) {
                                            dispatch(incrementScore());
                                        } else {
                                            dispatch(decrementLives());
                                            const currentLives = lives - 1;

                                            if (currentLives <= 0) {
                                                setGameOver(true);
                                                fetch(
                                                    'http://localhost:8000/highscore',
                                                    {
                                                        method: 'PUT',
                                                        body: JSON.stringify({
                                                            username: name,
                                                            score,
                                                        }),
                                                        headers: {
                                                            Accept: 'application/json',
                                                            'Content-Type':
                                                                'application/json',
                                                        },
                                                    }
                                                )
                                                    .then((response) =>
                                                        response.json()
                                                    )
                                                    .then((result) => {
                                                        console.log(result);
                                                    });
                                            }
                                        }
                                    }
                                }}
                                className="col-sm-15 form-control"
                            />
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
