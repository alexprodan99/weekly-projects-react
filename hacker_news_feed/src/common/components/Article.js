import React from 'react';

export default function Article({ title, author, url, tags, created_at }) {
    return (
        <div className="container-fluid mb-4">
            <h2>
                <a href={url} target="__blank">
                    {title}
                </a>
            </h2>
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
