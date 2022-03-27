import React from 'react';
import CommentSection from './CommentSection';

export default function Modal({ title, text, comments }) {
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
                        <p
                            style={{
                                border: '1px solid black',
                                boxShadow: '2px 2px 2px black',
                            }}
                        >
                            {' '}
                            {text}
                        </p>
                        {comments ? (
                            <CommentSection
                                comments={comments}
                                level={0}
                                index={0}
                            />
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
