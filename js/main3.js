const choice_1 = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

if (choice_1 == 1) {
    console.log(`今日は雨が降っている。傘を持っていこう。`);
} else {
    console.log(`今日は晴れ`);
}
console.log(`値：${choice_1}`);
