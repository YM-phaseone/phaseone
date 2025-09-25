const month = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

console.log("月：" + month);

switch (month) {
    case 1:
        console.log("元日、成人の日");
        break;
    case 2:
        console.log("建国記念の日、天皇誕生日");
        break;
    case 3:
        console.log("春分の日");
        break;
    case 4:
        console.log("昭和の日");
        break;
    case 5:
        console.log("憲法記念日、みどりの日、こどもの日");
        break;
    case 7:
        console.log("海の日");
        break;
    case 8:
        console.log("山の日");
        break;
    case 9:
        console.log("敬老の日、秋分の日");
        break;
    case 10:
        console.log("体育の日");
        break;
    case 11:
        console.log("文化の日、勤労感謝の日");
        break;
    default:
        console.log("6月と12月は祝日無し");
        break;
}