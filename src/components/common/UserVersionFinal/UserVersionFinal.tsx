import Rating from "../Rating/Rating";

interface UserProps {
    name: string;
    imageUrl: string;
    rating: number;
    date: string;
}

export const UserVersionFinal: React.FC<UserProps> = ({
    name,
    imageUrl,
    rating,
    date,
}) => (
    <div className="flex items-center gap-3">
        <img
            src={imageUrl}
            alt={name}
            className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-gray-800">{name}</span>
        <Rating rating={rating} date={date} />
    </div>
);
