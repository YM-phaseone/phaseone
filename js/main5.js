const dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.log(`サイコロの目は${dice}だった！`);

switch (dice) {
    case 1:
        console.log("大吉！");
        break;
    case 2:
        console.log("中吉！");
        break;
    case 3:
        console.log("小吉！");
        break;
    default:
        console.log("凶！");
        break;
}