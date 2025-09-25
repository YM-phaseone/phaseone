const price = Math.floor(Math.random() * (350 - 250 + 1)) + 250;

console.log(`りんごの値段が${price}円でした！`);

if (price <= 300) {
    console.log('まさる君はりんごを買いました！');
} else {
    console.log('まさる君はりんごを買いませんでした！');
}
