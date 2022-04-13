import React, { useEffect } from 'react';
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

    useEffect(() => {
        dispatch(setQuestion(genExpression(getRandomInt(1, 4))));
        dispatch(resetScore());
        dispatch(resetLives());
    }, []);

    return (
        <div className="container">
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
                                            genExpression(getRandomInt(1, 4))
                                        )
                                    );
                                    dispatch(setResponse(''));

                                    if (myResponse === correctResponse) {
                                        dispatch(incrementScore());
                                    } else {
                                        dispatch(decrementLives());
                                        const currentLives = lives - 1;

                                        if (currentLives <= 0) {
                                            navigate('/');
                                        }
                                    }
                                }
                            }}
                            className="col-sm-15 form-control"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
