import React from "react";

interface ForumQuestionProps {
    question: string;
}

const ForumQuestion: React.FC<ForumQuestionProps> = ({ question }) => {
    return (
        <div className="fontFamily-bodyFont flex h-[46px] w-[316px] max-w-md items-center justify-center rounded-[16px] bg-white px-4 py-2 text-center text-[14px] font-normal leading-[20px] text-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            {question}
        </div>
    );
};

export default ForumQuestion;
