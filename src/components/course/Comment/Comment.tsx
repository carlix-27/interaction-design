import React from "react";
import Icon from "../../../assets/icons/Icon";

interface CommentProps {
    authorName: string;
    content: string;
    isOnline?: boolean;
    picture: string;
}

const Comment: React.FC<CommentProps> = ({
    authorName,
    content,
    isOnline = false,
    picture,
}) => {
    return (
        <div className="comment-container flex items-center rounded-3xl bg-grey-50 px-4 py-2 shadow-md">
            <div className="relative mr-4">
                <div
                    className="h-16 w-16 overflow-hidden rounded-full"
                    style={{ backgroundColor: "#3f51b5" }}
                >
                    <Icon name={picture} />
                </div>
                {isOnline && (
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></span>
                )}
            </div>
            <div className={"text-left"}>
                <h3 className="font-semibold text-grey-900">{authorName}</h3>
                <p className="text-grey-400">{content}</p>
            </div>
        </div>
    );
};

export default Comment;
