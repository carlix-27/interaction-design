import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const questionQuizVariant = cva([
    "rounded-lg",
    "bg-white",
    "shadow-lg",
    "flex",
    "w-80",
    "h-44",
    "flex-col",
    "items-center",
    "justify-center",
]);

interface QuestionQuizProps extends Omit<HTMLAttributes<HTMLDivElement>, "any"> {
    question: string;
    currentQuestion: number;
    totalQuestions: number;
}

const QuestionQuiz: React.FC<QuestionQuizProps> = ({ question, currentQuestion, totalQuestions }) => {
    return (
        <div className="relative p-4 rounded-2xl overflow-hidden bg-white shadow-lg flex w-80 h-44 flex-col items-center justify-center">

            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-center font-inter text-xs font-medium leading-4 uppercase text-grey-500">
                {currentQuestion}/{totalQuestions}
            </div>


            <h1 className="text-center font-roboto text-lg font-semibold leading-6 w-full text-black mt-6">
                {question}
            </h1>


            <div className="absolute bottom-0 left-0 w-36 h-1 bg-primary-700 "></div>
        </div>
    );
};

export default QuestionQuiz;
