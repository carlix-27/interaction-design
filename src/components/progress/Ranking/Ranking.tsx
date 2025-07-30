import React from 'react';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

// Medal Icon Components
const GoldMedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 16C14.866 16 18 12.866 18 9C18 5.13401 14.866 2 11 2C7.13401 2 4 5.13401 4 9C4 12.866 7.13401 16 11 16Z" stroke="#FFD700" strokeWidth="1.5"/>
        <path d="M6.35086 15L5.71386 17.323C5.08586 19.615 4.77186 20.761 5.19086 21.388C5.33786 21.608 5.53486 21.784 5.76386 21.901C6.41586 22.233 7.42386 21.708 9.43886 20.658C10.1089 20.308 10.4449 20.134 10.8009 20.096C10.9332 20.0828 11.0665 20.0828 11.1989 20.096C11.5549 20.134 11.8899 20.309 12.5609 20.658C14.5759 21.708 15.5839 22.233 16.2359 21.901C16.4649 21.784 16.6619 21.608 16.8089 21.388C17.2289 20.761 16.9139 19.615 16.2859 17.323L15.6489 15" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const SilverMedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="#C0C0C0" strokeWidth="1.5"/>
        <path d="M7.35086 15L6.71386 17.323C6.08586 19.615 5.77186 20.761 6.19086 21.388C6.33786 21.608 6.53486 21.784 6.76386 21.901C7.41586 22.233 8.42386 21.708 10.4389 20.658C11.1089 20.308 11.4449 20.134 11.8009 20.096C11.9332 20.0828 12.0665 20.0828 12.1989 20.096C12.5549 20.134 12.8899 20.309 13.5609 20.658C15.5759 21.708 16.5839 22.233 17.2359 21.901C17.4649 21.784 17.6619 21.608 17.8089 21.388C18.2289 20.761 17.9139 19.615 17.2859 17.323L16.6489 15" stroke="#C0C0C0" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const BronzeMedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="#CD7F32" strokeWidth="1.5"/>
        <path d="M7.35086 15L6.71386 17.323C6.08586 19.615 5.77186 20.761 6.19086 21.388C6.33786 21.608 6.53486 21.784 6.76386 21.901C7.41586 22.233 8.42386 21.708 10.4389 20.658C11.1089 20.308 11.4449 20.134 11.8009 20.096C11.9332 20.0828 12.0665 20.0828 12.1989 20.096C12.5549 20.134 12.8899 20.309 13.5609 20.658C15.5759 21.708 16.5839 22.233 17.2359 21.901C17.4649 21.784 17.6619 21.608 17.8089 21.388C18.2289 20.761 17.9139 19.615 17.2859 17.323L16.6489 15" stroke="#CD7F32" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

const DefaultMedalIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C15.866 16 19 12.866 19 9C19 5.13401 15.866 2 12 2C8.13401 2 5 5.13401 5 9C5 12.866 8.13401 16 12 16Z" stroke="#131927" strokeWidth="1.5"/>
        <path d="M7.35086 15L6.71386 17.323C6.08586 19.615 5.77186 20.761 6.19086 21.388C6.33786 21.608 6.53486 21.784 6.76386 21.901C7.41586 22.233 8.42386 21.708 10.4389 20.658C11.1089 20.308 11.4449 20.134 11.8009 20.096C11.9332 20.0828 12.0665 20.0828 12.1989 20.096C12.5549 20.134 12.8899 20.309 13.5609 20.658C15.5759 21.708 16.5839 22.233 17.2359 21.901C17.4649 21.784 17.6619 21.608 17.8089 21.388C18.2289 20.761 17.9139 19.615 17.2859 17.323L16.6489 15" stroke="#131927" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

// Type definitions for original API compatibility
export interface RankingItem {
    title: string;
    progress: string;
    medalType: 'gold' | 'silver' | 'bronze' | 'default';
    isHighlighted?: boolean;
}

interface RankingProps {
    subject?: string;
    items?: RankingItem[];
    showMore?: boolean;
    variant?: 'first' | 'second' | 'third' | 'fourth' | 'notMedal';
}

// List Item Component
interface ListItemProps {
    icon: React.ReactNode;
    title: string;
    progress: string;
    isHighlighted?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ icon, title, progress, isHighlighted = false }) => (
    <div className={`flex w-[340px] py-1 flex-col justify-center items-center rounded-lg border border-[#D2D5DB] ${
        isHighlighted ? 'bg-[#F3F4F6]' : 'bg-[#F9FAFB]'
    }`}>
        <div className="flex items-center w-full">
            <div className="flex px-4 flex-col justify-center items-start flex-1">
                <div className="flex items-center gap-3 w-full">
                    <div className="flex w-6 h-6 p-[2px] justify-center items-center">
                        {icon}
                    </div>
                    <div className="flex-1 text-[#394050] font-roboto text-base font-normal leading-6">
                        {title}
                    </div>
                </div>
            </div>
            <div className="flex w-[124px] py-2 px-4 pl-3 flex-col justify-center items-end">
                <div className="flex justify-end items-center gap-3 w-full">
                    <div className="flex-1 text-[#9EA2AE] text-right font-roboto text-xs font-normal leading-4">
                        {progress}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Header Component
const RankingHeader: React.FC<{ subject: string }> = ({ subject }) => (
    <div className="flex justify-center items-center gap-[212px] relative w-full">
        <div className="flex h-8 p-[5px] justify-center items-center gap-2 absolute left-0 top-0 w-[104px]">
            <div className="text-[#212936] font-roboto text-base font-medium leading-6">
                {subject}
            </div>
        </div>
        <div className="flex w-6 h-6 justify-center items-center absolute left-[316px] top-1">
            <ChevronRight className="w-6 h-6 text-[#212936]" strokeWidth={1.5} />
        </div>
    </div>
);

// Helper function to get medal icon
const getMedalIcon = (type: 'gold' | 'silver' | 'bronze' | 'default') => {
    switch (type) {
        case 'gold':
            return <GoldMedalIcon />;
        case 'silver':
            return <SilverMedalIcon />;
        case 'bronze':
            return <BronzeMedalIcon />;
        default:
            return <DefaultMedalIcon />;
    }
};

// Variant Components
const RankingFirst: React.FC = () => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1">
        <RankingHeader subject="Matemática I" />
        <div className="flex flex-col gap-0 w-full mt-6">
            <ListItem icon={<GoldMedalIcon />} title="Title" progress="100%" isHighlighted />
            <ListItem icon={<SilverMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<BronzeMedalIcon />} title="Title" progress="100%" />
        </div>
    </div>
);

const RankingSecond: React.FC = () => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1">
        <RankingHeader subject="Matemática I" />
        <div className="flex flex-col gap-0 w-full mt-6">
            <ListItem icon={<GoldMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<SilverMedalIcon />} title="Title" progress="100%" isHighlighted />
            <ListItem icon={<BronzeMedalIcon />} title="Title" progress="100%" />
        </div>
    </div>
);

const RankingThird: React.FC = () => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1">
        <RankingHeader subject="Matemática I" />
        <div className="flex flex-col gap-0 w-full mt-6">
            <ListItem icon={<GoldMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<SilverMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<BronzeMedalIcon />} title="Title" progress="100%" isHighlighted />
        </div>
    </div>
);

const RankingFourth: React.FC = () => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1">
        <RankingHeader subject="Matemática I" />
        <div className="flex flex-col gap-0 w-full mt-6">
            <ListItem icon={<GoldMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<SilverMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<BronzeMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<DefaultMedalIcon />} title="Title" progress="100%" isHighlighted />
        </div>
    </div>
);

const RankingNotMedal: React.FC = () => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1 relative h-[164px]">
        <RankingHeader subject="Matemática I" />
        <div className="flex flex-col gap-0 w-full mt-6">
            <ListItem icon={<GoldMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<SilverMedalIcon />} title="Title" progress="100%" />
            <ListItem icon={<BronzeMedalIcon />} title="Title" progress="100%" />
        </div>

        {/* More indicator */}
        <div className="inline-flex h-[17px] py-0 px-[138px] items-center gap-2 flex-shrink-0 absolute left-[26px] top-[177px] w-[300px] justify-center">
            <MoreHorizontal className="w-6 h-6 text-[#D2D5DB]" strokeWidth={2} />
        </div>

        {/* You section */}
        <div className="flex w-[360px] py-2 px-[10px] flex-col items-start gap-2 absolute left-0 top-[194px] h-14">
            <ListItem icon={<DefaultMedalIcon />} title="Title" progress="100%" isHighlighted />
        </div>
    </div>
);

// Legacy component for backward compatibility
const LegacyRanking: React.FC<{ subject: string; items: RankingItem[]; showMore?: boolean }> = ({
                                                                                                    subject,
                                                                                                    items,
                                                                                                    showMore = false
                                                                                                }) => (
    <div className="flex w-[360px] px-2 flex-col items-start gap-1">
        <RankingHeader subject={subject} />
        <div className="flex flex-col gap-0 w-full mt-6">
            {items.map((item, index) => (
                <ListItem
                    key={index}
                    icon={getMedalIcon(item.medalType)}
                    title={item.title}
                    progress={item.progress}
                    isHighlighted={item.isHighlighted}
                />
            ))}
        </div>
        {showMore && (
            <div className="inline-flex h-[17px] py-0 px-[138px] items-center gap-2 flex-shrink-0 left-[26px] w-[300px] justify-center">
                <MoreHorizontal className="w-6 h-6 text-[#D2D5DB]" strokeWidth={2} />
            </div>
        )}
    </div>
);

// Main Component
export const Ranking: React.FC<RankingProps> = ({ subject, items, showMore, variant }) => {
    // If variant is specified, use predefined variants
    if (variant) {
        switch (variant) {
            case 'first':
                return <RankingFirst />;
            case 'second':
                return <RankingSecond />;
            case 'third':
                return <RankingThird />;
            case 'fourth':
                return <RankingFourth />;
            case 'notMedal':
                return <RankingNotMedal />;
            default:
                return <RankingFirst />;
        }
    }

    // Legacy API: use provided props
    if (subject && items) {
        return <LegacyRanking subject={subject} items={items} showMore={showMore} />;
    }

    // Default fallback
    return <RankingFirst />;
};

export default Ranking;