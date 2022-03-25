import React from 'react';

export default function Question({
    title,
    author,
    story_text,
    tags,
    created_at,
}) {
    return (
        <div className="container-fluid mb-4">
            <h2>{title}</h2>
            <div>
                {author} - <span className="opacity-50">{created_at}</span>
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
