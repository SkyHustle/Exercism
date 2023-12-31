const COLORS: string[] = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export const decodedResistorValue = (colors: string[]): string => {
    const firstColor = COLORS.indexOf(colors[0]).toString();
    const secondColor = COLORS.indexOf(colors[1]).toString();
    const numberOfZeros = "0".repeat(COLORS.indexOf(colors[2]));

    let inOhms = firstColor + secondColor + numberOfZeros;

    let metric;
    if (inOhms.length <= 3) {
        metric = " ohms";
    } else if (inOhms.length <= 6) {
        inOhms = inOhms.slice(0, -3);
        metric = " kiloohms";
    } else if (inOhms.length <= 9) {
        inOhms = inOhms.slice(0, -6);
        metric = " megaohms";
    } else {
        inOhms = inOhms.slice(0, -9);
        metric = " gigaohms";
    }

    // Remove leading zeros only if the value is not "00"
    if (inOhms !== "00") {
        inOhms = inOhms.replace(/^0+/, "");
    }

    // Special case for "0 ohms"
    if (inOhms === "00") {
        inOhms = "0";
    }

    return inOhms + metric;
};
