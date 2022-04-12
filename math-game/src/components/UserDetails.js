import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName } from '../actions';

export default function UserDetails() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="container">
            <div className="form-wrapper">
                <form>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-form-label mr-2">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="col-sm-5 form-control"
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="button"
                            className="btn btn-secondary mr-2"
                            onClick={() => navigate('/')}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                navigate('/game');
                            }}
                        >
                            Start game
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
