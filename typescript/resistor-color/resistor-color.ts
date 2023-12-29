export const colorCode = (color: string): number => {
    const index = COLORS.indexOf(color);
    if (index === -1) {
        throw new Error(`Invalid Color: ${color}`);
    }
    return index;
};

export const COLORS: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
