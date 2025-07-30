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

interface QuestionQuizProps
    extends Omit<HTMLAttributes<HTMLDivElement>, "any"> {
    question: string;
    currentQuestion: number;
    totalQuestions: number;
}

const QuestionQuiz: React.FC<QuestionQuizProps> = ({
    question,
    currentQuestion,
    totalQuestions,
}) => {
    return (
        <div className="relative flex h-44 w-80 flex-col items-center justify-center overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
            <div className="font-inter absolute left-1/2 top-2 -translate-x-1/2 transform text-center text-xs font-medium uppercase leading-4 text-grey-500">
                {currentQuestion}/{totalQuestions}
            </div>

            <h1 className="font-roboto mt-6 w-full text-center text-lg font-semibold leading-6 text-black">
                {question}
            </h1>

            <div className="absolute bottom-0 left-0 h-1 w-36 bg-primary-700"></div>
        </div>
    );
};

export default QuestionQuiz;
