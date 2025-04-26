document.addEventListener('DOMContentLoaded', () => {
    RunMainWithInterval(); // ページ全体でDOMの変更を検知し都度ボタン設置

    const observer = new MutationObserver(() => RunMainWithInterval());
    const target = document.querySelector('body');
    const config = {
        childList: true,
        subtree: true
    };
    observer.observe(target, config); // 設定反映のためのリスナー設置
});

function GetTweetSource(tweetID)
{
    function isKeyExists(obj, key){
        if( obj[key] == undefined ){
            return false;
        }else{
            return true;
        }
    }

    url = encodeURI(`https://api.x.com/graphql/zAz9764BcLZOJ0JU2wrd1A/TweetResultByRestId?variables={"tweetId":"${tweetID}","withCommunity":false,"includePromotedContent":false,"withVoice":false}&features={"creator_subscriptions_tweet_preview_api_enabled":true,"premium_content_api_read_enabled":false,"communities_web_enable_tweet_community_results_fetch":true,"c9s_tweet_anatomy_moderator_badge_enabled":true,"responsive_web_grok_analyze_button_fetch_trends_enabled":false,"responsive_web_grok_analyze_post_followups_enabled":false,"responsive_web_jetfuel_frame":false,"responsive_web_grok_share_attachment_enabled":true,"articles_preview_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"responsive_web_twitter_article_tweet_consumption_enabled":true,"tweet_awards_web_tipping_enabled":false,"responsive_web_grok_show_grok_translated_post":false,"responsive_web_grok_analysis_button_from_backend":false,"creator_subscriptions_quote_tweet_preview_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,"longform_notetweets_rich_text_read_enabled":true,"longform_notetweets_inline_media_enabled":true,"profile_label_improvements_pcf_label_in_post_enabled":true,"rweb_tipjar_consumption_enabled":true,"verified_phone_label_enabled":false,"responsive_web_grok_image_annotation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_enhance_cards_enabled":false}&fieldToggles={"withArticleRichContentState":true,"withArticlePlainText":false,"withGrokAnalyze":false,"withDisallowedReplyControls":false}`);
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.setRequestHeader("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs=1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA");
    request.setRequestHeader("x-csrf-token", cookie.getByName("ct0"));
    var gt = cookie.getByName("gt");
    if(gt.length)
    {
        request.setRequestHeader("x-guest-token", gt);
    }
    else
    {
        request.withCredentials = true;
    }
    request.onreadystatechange = function () {
        if (request.readyState != 4) {
            // リクエスト中
        } else if (request.status != 200) {
            // 失敗
        } else {
            var result = request.responseText;
            let parse_data = JSON.parse(result);
            if(isKeyExists(parse_data["data"]["tweetResult"]["result"], "tweet"))
            {
                ShowLabel(parse_data["data"]["tweetResult"]["result"]["tweet"]['source'])
            }
            else
            {
                ShowLabel(parse_data["data"]["tweetResult"]["result"]['source']);
            }
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
    var labelField = document.getElementsByClassName("css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2 r-1471scf");
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
        let body = document.body;
        let style = window.getComputedStyle(body);
        let colorvalue = style.getPropertyValue('background-color');
        let themeClass;
        switch(colorvalue)
        {
            case "rgb(255, 255, 255)":  // デフォルト
                themeClass = "r-14j79pv";
                break;
            case "rgb(21, 32, 43)":     // ダークブルー
                themeClass = "r-115tad6";
                break;
            case "rgb(0, 0, 0)":        // ブラック
                themeClass = "r-1bwzh9t";
                break;
            default:        // それ以外(検出不可)[デフォルトを適用]
                themeClass = "r-14j79pv";
                break;
        }
        var ele = document.createElement('span');
        ele.setAttribute("aria-hidden", "true");
        ele.classList.add("css-901oao", "css-16my406", "r-1q142lx", "r-poiln3", "r-bcqeeo", "r-s1qlax", "r-qvutc0", themeClass);
        ele.innerHTML = `<span class="r-1tl8opc css-901oao css-16my406 r-bcqeeo r-qvutc0"> · </span>`;
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
        sourcelabelfield.classList.add("css-4rbku5", "css-18t94o4", "css-901oao", "css-16my406", "r-1loqt21", "r-poiln3", "r-bcqeeo", "r-1jeg54m", "r-qvutc0", themeClass);
        sourcelabelfield.innerHTML = `<span class="r-1tl8opc css-901oao css-16my406 r-bcqeeo r-qvutc0">${sourceLabel}</span>`;
        base_ele.appendChild(sourcelabelfield);
    }
}

function main()
{
    if(document.getElementsByClassName("css-175oi2r r-1d09ksm r-1471scf r-18u37iz r-1wbh5a2").length)
    {
        var CurrentURL = location.href;
        if (CurrentURL.includes('x.com/'))
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
};
