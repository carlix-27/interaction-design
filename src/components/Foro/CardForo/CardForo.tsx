import React from 'react';

interface ForumCardProps {
    className?: string;
    author: string;
    date: string;
    topic: string;
    question: string;
    commentCount: number;
}

export function ForumCard({
                              className,
                              author,
                              date,
                              topic,
                              question,
                              commentCount
                          }: ForumCardProps) {
    return (
        <div className={"flex w-[350px] max-w-full items-start gap-2 rounded-2xl border border-[#D2D5DB] bg-[#F9FAFB] h-[156px]" + (className ? ` ${className}` : "")}>
            <div className="flex p-4 flex-col items-start flex-1">
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex justify-center items-center gap-2">
                        <div className="text-[#131927] font-roboto text-sm font-bold leading-5">
                            {author}
                        </div>
                        <div className="text-[#9EA2AE] font-roboto text-sm font-normal leading-5">
                            {date}
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                        <div className="text-[#A80CE8] font-open-sans text-base font-bold leading-6">
                            {topic}
                        </div>
                        <div className="w-full text-[#4D5461] font-roboto text-sm font-normal leading-5">
                            {question}
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.73333 13.28L4.74933 12.4674L4.756 12.462C4.968 12.292 5.07533 12.2067 5.19467 12.146C5.30178 12.0914 5.41467 12.0518 5.53333 12.0274C5.666 12 5.804 12 6.08133 12H11.8687C12.614 12 12.9873 12 13.272 11.8547C13.5229 11.7269 13.7268 11.5229 13.8547 11.272C14 10.9867 14 10.6134 14 9.86935V4.79802C14 4.05269 14 3.67935 13.8547 3.39469C13.7267 3.14371 13.5225 2.93974 13.2713 2.81202C12.9867 2.66669 12.6133 2.66669 11.8667 2.66669H4.13333C3.38667 2.66669 3.01333 2.66669 2.728 2.81202C2.47713 2.93985 2.27316 3.14382 2.14533 3.39469C2 3.68002 2 4.05335 2 4.80002V12.4474C2 13.158 2 13.5134 2.14533 13.6954C2.20783 13.7738 2.28722 13.8372 2.3776 13.8807C2.46799 13.9242 2.56702 13.9468 2.66733 13.9467C2.90067 13.9467 3.178 13.724 3.73333 13.28Z" stroke="#9EA2AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="text-[#9EA2AE] font-roboto text-sm font-normal leading-5">
                            {commentCount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}