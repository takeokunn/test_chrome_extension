(function() {
    // var item_nameText = document.getElementById("productTitle").innerHTML;
    // item_nameText = item_nameText.trim();
    // console.log(item_nameText)

    // if (document.getElementById("priceblock_saleprice")) {
    //     var item_priceText = document.getElementById("priceblock_saleprice").innerHTML;
    // } else {
    //     var item_priceText = document.getElementById("priceblock_ourprice").innerHTML;
    // }

    // var image_linkText = document.getElementById("amzn-ss-image-textarea").innerHTML;
    // image_linkText = image_linkText.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    // var item_link = document.getElementById("amzn-ss-image-textarea").innerHTML;
    // item_link = item_link.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

    // var cut_str = "><img";
    // var index = item_link.indexOf(cut_str);
    // var item_link = item_link.substring(0, index) + "class='amazon_btn'>amazonから購入</a>";
    // console.log(image_linkText);
    // console.log(item_link);

    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var nowTime = year + "/" + month + "/" + day;

    // if (image_linkText == "") {
    //     alert("ログイン後、商品ページ上部のAmazonアソシエイトツールバーの「画像」リンクをクリックしてから、もう一度拡張機能をクリックしてください。");
    // } else {
        var html = `
	<style type="text/css">
	.amazon_stage{
		max-width: 600px;
		padding: 0.5em 1em;
	    margin: 2em auto;
	    border: double 5px #4ec4d3;

	    text-align:left;
	    font-size:small;
	    zoom: 1;
	    overflow: hidden;
	}
	.amazon_image a img{
		float:left;
		margin:0px 10px 0px -5px;
		width: 120px;
		height: 120px;
		object-fit: contain;
	}
	.amazon_info{
		line-height:100%;
		zoom: 1;
		overflow: hidden;

		margin-top: auto;
		margin-bottom: auto;
	}
	.amazon_item_name{
		margin:10px 0;
		line-height:120%;
	}
	.amazon_btn {
		display: block;
		width: 100px;
		padding: 0.8em;
		text-align: center;
		text-decoration: none;
		color: #ffa500;
		border: 2px solid #ffa500;
		border-radius: 3px;
		transition: .4s;
		margin-top: 5px;
	}
	.amazon_btn:hover {
		background: #ffa500;
		color: #fff;
	}

	</style>
	<div class="amazon_stage">
		<div class="amazon_image">
			' + image_linkText + '
		</div>
		<div class="amazon_info">
			<div class="amazon_item_name">' + item_nameText + '</div>
			<div class="amazon_price">' + item_priceText + '(※' + nowTime + '時点)</div>
			' + item_link + '
		</div>
	</div>
	`;
        var copyFrom = document.createElement("textarea");
        copyFrom.textContent = html;
        var bodyElm = document.getElementsByTagName("body")[0];
        bodyElm.appendChild(copyFrom);
        copyFrom.select();
        var retVal = document.execCommand('copy');
        bodyElm.removeChild(copyFrom);
        // alert("コードが生成されました。任意の箇所でペーストしてください。");
    // }
})();
