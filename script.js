// javasciptのテンプレートリテラルは便利なので知っといた方がいいよ
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings

// 現在時刻を取得
function createDate () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    return `${year}/${month}/${day}`;
}

// 画像をいれる
function insertImg (element) {
    const extension_id = chrome.i18n.getMessage('@@extension_id');
    const image = document.createElement('img');
    image.id = 'take_chrome_extension';
    image.src = `chrome-extension://${extension_id}/img/logo.jpg`;
    image.style = 'width:30px;height:30px;border-radius:50%;';
    element.appendChild(image);
    return image;
}

// コピー( 参考: https://qiita.com/simiraaaa/items/2e7478d72f365aa48356 )
function execCopy (string) {
    const temp = document.createElement('div');
    temp.appendChild(document.createElement('pre')).textContent = string;
    document.body.appendChild(temp);
    document.getSelection().selectAllChildren(temp);
    const result = document.execCommand('copy');
    document.body.removeChild(temp);
    return result;
}

// click時のイベント
function handleClick (title) {
    const date = createDate();
    const html = `
        <p>現在時刻: ${date}</p>
        <p>${title}</p>
    `;
    const result = execCopy(html); // 成功(true) or 失敗(false)
    result? alert("成功！") : alert("失敗");
}

// ここから実行
function main() {
    const title_element = document.getElementById("productTitle");

    // productTitleが存在しなかった場合終了
    if (title_element === null) return;

    // titleを取得
    const title = title_element.innerHTML.trim();
    // title_elementがnullではなかった場合、insertImgを実行する
    const image = insertImg(title_element);

    // 画像がクリックされた時
    image.addEventListener('click', handleClick.bind(this, title));
}

main();
