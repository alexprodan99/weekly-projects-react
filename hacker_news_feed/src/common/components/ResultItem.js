import React from 'react';
import { useDispatch } from 'react-redux';
import { getResultDetails, setModal } from '../../actions';

export default function ResultItem({
    id,
    title,
    url,
    author,
    text,
    tags,
    created_at,
    likes,
}) {
    const dispatch = useDispatch();
    return (
        <div className="container-fluid mb-4 result-item">
            <h2>{title}</h2>
            <div>{text ? `${text.substring(0, 150)}...` : ''}</div>
            <div>
                {author} - <span className="opacity-50">{created_at}</span>{' '}
                <span>
                    <a
                        href="#"
                        data-toggle="modal"
                        data-target={`#modal`}
                        data-backdrop="static"
                        onClick={() => {
                            dispatch(getResultDetails(id)).then((res) => {
                                const comments = res.children;
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
                            });
                        }}
                    >
                        View More
                    </a>
                </span>
            </div>
            {tags.map((tag, index) => {
                return (
                    <div key={index} className="badge badge-primary mr-1">
                        {tag}
                    </div>
                );
            })}
        </div>
    );
}
