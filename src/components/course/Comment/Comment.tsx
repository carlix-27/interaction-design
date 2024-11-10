import React from 'react';
import Icon from "../../../assets/icons/Icon";

interface CommentProps {
    authorName: string;
    content: string;
    isOnline?: boolean;
}

const Comment: React.FC<CommentProps> = ({ authorName, content, isOnline = false }) => {
    return (
        <div className="comment-container bg-grey-50 p-4 w-2/4 rounded-3xl shadow-md flex items-center">
            <div className="relative mr-4">
                <div className="w-16 h-16 rounded-full overflow-hidden" style={{backgroundColor: '#3f51b5'}}>
                    <Icon name='man_thinking'/>
                </div>
                {isOnline && (
                    <span
                        className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
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
