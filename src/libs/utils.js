export function getRandom4DigitNumber() {
    return Math.floor(1000 + Math.random() * 9000);
}

export function generateNumberBlock(count = 4) {
    return Array.from({ length: count }, () => getRandom4DigitNumber()).join(' ');
}

export function getAadharNumber() {
    return generateNumberBlock(3); // 4 blocks
}

export function getVIDNumber() {
    return generateNumberBlock(4); // 5 blocks
}

export function getRandomDate(start = new Date(1950, 0, 1), end = new Date()) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function getPhoneNumber() {
    return `+91 ${Math.floor(1000000000 + Math.random() * 9000000000)}`
}