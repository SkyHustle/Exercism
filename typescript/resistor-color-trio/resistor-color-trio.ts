function decodedResistorValue(colors: string[]): string {
    const colorCodeMap: { [color: string]: number } = {
        black: 0,
        brown: 1,
        red: 2,
        orange: 3,
        yellow: 4,
        green: 5,
        blue: 6,
        violet: 7,
        grey: 8,
        white: 9,
    };

    const value = (colorCodeMap[colors[0]] * 10 + colorCodeMap[colors[1]]) * Math.pow(10, colorCodeMap[colors[2]]);
    const units = ["ohms", "kiloohms", "megaohms", "gigaohms"];

    let unitIndex = 0;
    let resistance = value;
    while (resistance >= 1000 && unitIndex < units.length - 1) {
        resistance /= 1000;
        unitIndex++;
    }

    return `${resistance} ${units[unitIndex]}`;
}

export { decodedResistorValue };
