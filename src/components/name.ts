interface Word {
    text: string;
    className?: string; // Optional property for custom class name
}

const words: Word[] = [
    {
        text: "N",
    },
    {
        text: "Datta",
    },
    {
        text: "sai",
    },
    {
        text: "Ram",
    },
    {
        text: "kumar",
        className: "text-blue-500 dark:text-blue-500",
    },
];
export default words;