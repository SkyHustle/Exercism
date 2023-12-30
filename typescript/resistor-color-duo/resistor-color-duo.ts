export const decodedValue = (colors: string[]): number => {
    const firstTwoColors = colors.slice(0, 2);

    const colorsIndex = firstTwoColors.map((color) => {
        return COLORS.indexOf(color);
    });

    return Number(colorsIndex.join(""));
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
