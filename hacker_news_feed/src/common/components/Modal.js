import React from 'react';

export default function Modal({ title, text }) {
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
                            {title}
                        </h4>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p> {text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
