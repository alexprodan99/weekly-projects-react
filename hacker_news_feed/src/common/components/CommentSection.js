import React from 'react';
// import parse from 'html-react-parser';

function Comment({ author, text, level }) {
    // function CommentText({text}) {
    //     return parse(text);
    // }
    return (
        <div
            style={{
                position: 'relative',
                left: `${level * 25}px`,
                border: '1px solid black',
                padding: '20px',
                boxShadow: '2px 2px 2px black',
                marginBottom: '5px',
            }}
        >
            {text ? (
                <div>
                    {' '}
                    <span>
                        <i class="bi bi-person"></i>
                        {author}
                    </span>{' '}
                    {text}
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

function CommentSection({ comments, level, index }) {
    const hasChildren = comments && comments.length;
    return (
        <div>
            {comments[index] ? (
                <Comment
                    text={comments[index].text}
                    author={comments[index].author}
                    level={level}
                />
            ) : (
                ''
            )}
            {hasChildren
                ? comments.map((item, index) => {
                      return (
                          <CommentSection
                              key={index}
                              level={level + 1}
                              index={index}
                              comments={item.children}
                          />
                      );
                  })
                : ''}
        </div>
    );
}

export default CommentSection;
