import React from 'react';

interface CommentProps {
    authorName: string;
    content: string;
    authorIcon: string;
    isOnline?: boolean;
}

const Comment: React.FC<CommentProps> = ({ authorName, content, authorIcon, isOnline = false }) => {
    return (
        <div className="comment-container bg-white p-4 rounded-2xl shadow-md flex items-center">
            <div className="relative mr-4">
                <img
                    src={authorIcon}
                    alt="Author Icon"
                    className="w-12 h-12 rounded-full"
                    style={{ backgroundColor: '#3f51b5' }}
                />
                {isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                )}
            </div>
            <div>
                <h3 className="text-grey-900 font-semibold">{authorName}</h3>
                <p className="text-grey-400">{content}</p>
            </div>
        </div>
    );
};

export default Comment;
