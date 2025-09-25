const dice = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

if (dice == 1) {
    console.log('アタリ！');
    console.log(`サイコロの目は${dice}だった！`);
} else {
    console.log(`サイコロの目は${dice}だった！`);
    console.log('ハズレ！');
}
