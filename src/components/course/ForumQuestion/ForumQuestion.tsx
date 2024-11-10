import React from 'react';

interface ForumQuestionProps {
    question: string;
}

const ForumQuestion: React.FC<ForumQuestionProps> = ({ question }) => {
    return (
        <div className="flex items-center justify-center w-[316px] h-[46px] bg-white text-black text-center font-['Roboto'] text-[14px] font-normal leading-[20px] py-2 px-4 rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] max-w-md">
            {question}
        </div>
    );
};

export default ForumQuestion;
