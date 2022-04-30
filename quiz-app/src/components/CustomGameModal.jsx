import React, { useState } from 'react';
import { fetchCustomGame } from '../api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function CustomGameModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState('easy');
  const [nrOfQuestions, setNrOfQuestions] = useState(10);

  return (
    <div
      className={`modal fade`}
      id="modal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="modal-label"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="modal-label">
              Choose custom game options
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="difficulty">Difficulty</label>
                <select
                  id="difficulty"
                  className="form-control"
                  value={difficulty}
                  onChange={(event) => setDifficulty(event.target.value)}
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="nrOfQuestions">Nr of questions</label>
                <input
                  type="number"
                  id="nrOfQuestions"
                  className="form-control"
                  value={nrOfQuestions}
                  min={1}
                  onChange={(event) => {
                    const value = Math.abs(parseInt(event.target.value));
                    setNrOfQuestions(value);
                  }}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => {
                dispatch(fetchCustomGame(difficulty, nrOfQuestions)).then(
                  () => {
                    navigate('/game');
                  }
                );
              }}
            >
              Start game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
