import React from 'react';

interface KeyboardProps {
    keys: string[];
    className?: string;
}

export function Keyboard({ keys, className }: KeyboardProps) {
    return (
        <div className={"flex gap-2 flex-wrap" + (className ? ` ${className}` : "")}>
            {keys.map((key, idx) => (
                <div
                    key={idx}
                    className="px-3 py-2 rounded bg-[#F3F4F6] text-[#131927] font-roboto text-sm font-medium border border-[#D2D5DB]"
                >
                    {key}
                </div>
            ))}
        </div>
    );
}