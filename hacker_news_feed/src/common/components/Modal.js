import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getResultDetails, setModal } from '../../actions';
import CommentSection from './CommentSection';

export default function Modal() {
    const dispatch = useDispatch();
    const modalData = useSelector((state) => state.modalData);
    const id = modalData ? modalData.id : '';
    const title = modalData ? modalData.title : '';
    const url = modalData ? modalData.url : '';
    const text = modalData ? modalData.text : '';
    const comments = modalData ? modalData.comments : [];
    const author = modalData ? modalData.author : '';
    const likes = modalData ? modalData.likes : '';

    const updateModalDetails = async () => {
        if (!id) {
            return;
        }
        const resultDetails = await dispatch(getResultDetails(id));
        const comments = resultDetails.children;
        dispatch(
            setModal({
                title,
                url,
                text,
                comments,
                author,
                likes,
            })
        );
    };

    useEffect(() => {
        updateModalDetails();
    }, [updateModalDetails]);
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
                            {url ? (
                                <a href={url} target="__blank">
                                    {title}
                                </a>
                            ) : (
                                <div>{title}</div>
                            )}
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
                        <div>
                            <i class="bi bi-person"></i> {author}
                        </div>
                        <p
                            style={{
                                border: '1px solid black',
                                boxShadow: '2px 2px 2px black',
                            }}
                        >
                            {' '}
                            {text}
                        </p>
                        <span>
                            <i class="bi bi-chat"></i>{' '}
                            {comments ? comments.length : 0}{' '}
                            <i class="bi bi-hand-thumbs-up"></i> {likes}
                        </span>
                        {comments ? (
                            <CommentSection
                                comments={comments}
                                level={0}
                                index={0}
                            />
                        ) : (
                            <center>
                                <div
                                    class="spinner-border text-primary"
                                    style={{ width: '3rem', height: '3rem' }}
                                    role="status"
                                >
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </center>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
