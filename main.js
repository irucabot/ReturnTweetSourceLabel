function GetTweetSource(tweetID)
{
    function isKeyExists(obj, key){
        if( obj[key] == undefined ){
            return false;
        }else{
            return true;
        }
    }

    const urlbase = "https://api.irucabot.com/ReturnTweetSourceLabel/getsource";
    var query = encodeURI(`?TweetID=${tweetID}`);
    url = urlbase + query;
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (request.readyState != 4) {
            // リクエスト中
        } else if (request.status != 200) {
            // 失敗
        } else {
            var result = request.responseText;
            ShowLabel(result);
        }
    };
    request.send(null);
}

function isNumber(n) {      //数字か
    num = parseInt(n,10);
    return !isNaN(parseInt(n)) && isFinite(n);
}

function ShowLabel(Source)
{
    var labelField = document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2");
    if(labelField.length)
    {
        if(document.getElementById("RTSL_base") == null)
        {
            var base = document.createElement('span');
            base.setAttribute("id", "RTSL_base");
            labelField[0].appendChild(base);
            Incorporate(document.getElementById("RTSL_base"));
        }
        else
        {
            let base = document.getElementById("RTSL_base");
            base.innerHTML = "";
            Incorporate(document.getElementById("RTSL_base"));
        }
    }

    function Incorporate(base_ele)
    {
        var ele = document.createElement('span');
        ele.setAttribute("aria-hidden", "true");
        ele.classList.add("css-901oao", "css-16my406", "r-14j79pv", "r-1q142lx", "r-poiln3", "r-bcqeeo", "r-s1qlax", "r-qvutc0");
        ele.innerHTML = `<span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">·</span>`;
        base_ele.appendChild(ele);
        var div = document.createElement('div');
        div.style.display = 'none';
        div.id = "sourcetmp";
        div.innerHTML = Source; //html要素に変換
        document.body.appendChild(div); //bodyに追加
        let sourceLabel = document.getElementById('sourcetmp').getElementsByTagName("a")[0].textContent;
        document.body.removeChild(div); //bodyから削除
        var sourcelabelfield = document.createElement('a');
        sourcelabelfield.href = "https://help.twitter.com/using-twitter/how-to-tweet#source-labels";
        sourcelabelfield.setAttribute("rel", "noopener noreferrer nofollow");
        sourcelabelfield.setAttribute("target", "_blank");
        sourcelabelfield.setAttribute("role", "link");
        sourcelabelfield.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-14j79pv", "r-1loqt21", "r-poiln3", "r-bcqeeo", "r-1jeg54m", "r-qvutc0");
        sourcelabelfield.innerHTML = `<span class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0">${sourceLabel}</span>`;
        base_ele.appendChild(sourcelabelfield);
    }
}

function main()
{
    if(document.getElementsByClassName("css-1dbjc4n r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length)
    {
        var CurrentURL = location.href;
        if (CurrentURL.includes('https://twitter.com/'))
        {
            question_index = CurrentURL.indexOf('?');
            if (question_index > 0)
            {
                st_index = CurrentURL.indexOf('status/') + 7;
                q_index = CurrentURL.indexOf('?');
                status_id_str = CurrentURL.substring(st_index,q_index);
                if(isNumber(status_id_str) && !(status_id_str == LastTweetID)){
                    GetTweetSource(status_id_str);
                    LastTweetID = status_id_str;
                }
            }
            else
            {
                st_index = CurrentURL.indexOf('status/') + 7;
                status_id_str = CurrentURL.slice(st_index);
                if(isNumber(status_id_str) && !(status_id_str == LastTweetID))
                {
                    GetTweetSource(status_id_str);
                    LastTweetID = status_id_str;
                }
            }
        }    
    }
    else
    {
        LastTweetID = -1;
    }
}

var cookie = {
    getObj : function(){
        var cookie = document.cookie;
        var cookieObj = {};
        if(!!cookie){
            Array.prototype.forEach.call(cookie.split(';'),function(c){
                var array = [c][0].split('=').map(function(a){return a.trim()});
                var key = ~c.indexOf('=')? unescape(array[0]) : '';
                var val = ~c.indexOf('=')? unescape(array[1]) : unescape(array[0]);
                if(!cookieObj.hasOwnProperty(key)){
                    cookieObj[key] = [val];
                }else{
                    cookieObj[key].push(val);
                }
            });
        }
        return cookieObj;
    },
    getByName : function(name){
        var ret = [];
        var cookieObj = this.getObj();
        if(cookieObj.hasOwnProperty(name)){
            ret = cookieObj[name];
        }
        return ret;
    }
};

var LastTweetID = "";

let isInterval = false;
let deferred = false;
const RunMainWithInterval = () => {
  // 短時間に何回も実行しないようインターバルを設ける
  if (isInterval) {
    deferred = true;
    return;
  }
  isInterval = true;
  setTimeout(() => {
    isInterval = false;
    if (deferred) {
      main();
      deferred = false;
    }
  }, 300);
  main();
}; // ボタンを(再)設置


RunMainWithInterval(); // ページ全体でDOMの変更を検知し都度ボタン設置

  const observer = new MutationObserver(() => RunMainWithInterval());
  const target = document.querySelector('body');
  const config = {
    childList: true,
    subtree: true
  };
  observer.observe(target, config); // 設定反映のためのリスナー設置
/*
var observer = new MutationObserver(function (mutations) {
    console.log("change")
    main();
});
const target = document.querySelector('body');
// 監視を開始
observer.observe(target, {
    attributes: true, // 属性変化の監視
    attributeOldValue: true, // 変化前の属性値を mutations.oldValue に格納する
    characterData: false, // テキストノードの変化を監視
    characterDataOldValue: false, // 変化前のテキストを mutations.oldValue に格納する
    childList: false, // 子ノードの変化を監視
    subtree: false // 子孫ノードも監視対象に含める
});*/