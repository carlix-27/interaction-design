import React from "react";

interface QuestionQuizzProps {
    question: string;
    currentQuestion: number;
    totalQuestions: number;
    progress: number;
    className?: string;
}

export const QuestionQuizz = ({
                                  question,
                                  currentQuestion,
                                  totalQuestions,
                                  progress,
                                  className
                              }: QuestionQuizzProps) => {
    const baseClasses = "flex w-80 flex-col items-start rounded-2xl border border-gray-300 bg-gray-50";
    const allClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <div className={allClasses}>
            <div className="h-32 self-stretch relative flex flex-col justify-between p-6">
                <p className="text-gray-600 text-center font-roboto text-base font-normal leading-6 flex-1 flex items-center justify-center">
                    {question}
                </p>
                <div className="flex justify-end">
          <span className="text-gray-600 text-center font-inter text-xs font-medium leading-4 uppercase">
            {currentQuestion}/{totalQuestions}
          </span>
                </div>
            </div>
            <div
                className="w-full h-5 bg-purple-600 relative"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};