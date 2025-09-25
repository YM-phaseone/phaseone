const tanakaSneezes = Math.floor(Math.random() * 3) == 0;
const yamadaSneezes = Math.floor(Math.random() * 3) == 0;

console.log(`田中：${tanakaSneezes}`);
console.log(`山田：${yamadaSneezes}`);

if (tanakaSneezes) {
    console.log('田中さんがくしゃみをしました。');
}

if (yamadaSneezes) {
    console.log('山田さんがくしゃみをしました。');
}

if (tanakaSneezes && yamadaSneezes) {
    console.log('\nシンクロしました！');
}
