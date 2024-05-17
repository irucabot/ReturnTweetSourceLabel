// Twitterロゴ復活
document.addEventListener('DOMContentLoaded', () => {
    const favicon = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        favicon.href = 'https://abs.twimg.com/favicons/twitter.ico';
    }

    waitForSelector('#react-root > div > div > div.css-175oi2r.r-18u37iz.r-13qz1uu.r-417010 > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg').then((logo) => {
        if (!logo) return;
        let body = document.body;
        let style = window.getComputedStyle(body);
        let colorvalue = style.getPropertyValue('background-color');
        console.log(colorvalue);
        if(colorvalue == "rgb(255, 255, 255)")
        {
            logo.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="#1DA1F2"></path> </g> </svg>';
        }
        else
        {
            logo.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
        }
    });

    waitForSelector('#placeholder > svg').then((splash) => {
        if (!splash) return;
        let body = document.body;
        let style = window.getComputedStyle(body);
        let colorvalue = style.getPropertyValue('background-color');
        if(colorvalue == "rgb(255, 255, 255)")
        {
            splash.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1p0dtai r-13v1u17 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="#1DA1F2"></path> </g> </svg>';
        }
        else
        {
            splash.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-1p0dtai r-13v1u17 r-4qtqp9 r-yyyyoo r-wy61xf r-1d2f490 r-ywje51 r-dnmrzs r-u8s1d r-zchlnj r-1plcrui r-ipm5af r-lrvibr r-1blnp2b"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
        }
    });

    RunMainWithInterval(); // ページ全体でDOMの変更を検知し都度ボタン設置

    const observer = new MutationObserver(() => RunMainWithInterval());
    const target = document.querySelector('body');
    const config = {
        childList: true,
        subtree: true
    };
    observer.observe(target, config); // 設定反映のためのリスナー設置
});

function ShowBirdIcon()
{
    waitForSelector('#react-root > div > div > div.css-175oi2r.r-13awgt0.r-12vffkv > header > div > div > div > div:nth-child(1) > div.css-175oi2r.r-dnmrzs.r-1vvnge1 > h1 > a > div > svg').then((logo) => {
        if (!logo) return;
        let body = document.body;
        let style = window.getComputedStyle(body);
        let colorvalue = style.getPropertyValue('background-color');
        console.log(colorvalue);
        if(colorvalue == "rgb(255, 255, 255)")
        {
            logo.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="#1DA1F2"></path> </g> </svg>';
        }
        else
        {
            logo.outerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" class="r-13v1u17 r-4qtqp9 r-yyyyoo r-16y2uox r-8kz0gk r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp"> <g> <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path> </g> </svg>';
        }
    });
}

function waitForSelector(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) return resolve(document.querySelector(selector));

        const logoobserver = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                logoobserver.disconnect();
            }
        });

        logoobserver.observe(document, {
            childList: true,
            subtree: true
        });
    });
}


function GetTweetSource(tweetID)
{
    function isKeyExists(obj, key){
        if( obj[key] == undefined ){
            return false;
        }else{
            return true;
        }
    }

    const urlbase = "https://x.com/i/api/graphql/zJvfJs3gSbrVhC0MKjt_OQ/TweetDetail";
    var query = encodeURI(`?variables={"focalTweetId":"${tweetID}","referrer":"home","controller_data":"DAACDAABDAABCgABCEAABEoCAAEKAAKAQAAAAAEBAAoACW6ei3WtrtOeCAALAAAABA8ADAMAAAAQAQACSgQAQAgAAQEAAABAgAoAEDHty/9MMBA1AAAAAA==","with_rux_injections":false,"includePromotedContent":true,"withCommunity":true,"withQuickPromoteEligibilityTweetFields":true,"withBirdwatchNotes":true,"withSuperFollowsUserFields":true,"withDownvotePerspective":false,"withReactionsMetadata":false,"withReactionsPerspective":false,"withSuperFollowsTweetFields":true,"withVoice":true,"withV2Timeline":true}&features={"rweb_tipjar_consumption_enabled":true,"responsive_web_graphql_exclude_directive_enabled":true,"verified_phone_label_enabled":false,"creator_subscriptions_tweet_preview_api_enabled":true,"responsive_web_graphql_timeline_navigation_enabled":true,"responsive_web_graphql_skip_user_profile_image_extensions_enabled":false,"communities_web_enable_tweet_community_results_fetch":true,"c9s_tweet_anatomy_moderator_badge_enabled":true,"articles_preview_enabled":true,"tweetypie_unmention_optimization_enabled":true,"responsive_web_edit_tweet_api_enabled":true,"graphql_is_translatable_rweb_tweet_is_translatable_enabled":true,"view_counts_everywhere_api_enabled":true,"longform_notetweets_consumption_enabled":true,"responsive_web_twitter_article_tweet_consumption_enabled":true,"tweet_awards_web_tipping_enabled":false,"creator_subscriptions_quote_tweet_preview_enabled":false,"freedom_of_speech_not_reach_fetch_enabled":true,"standardized_nudges_misinfo":true,"tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled":true,"tweet_with_visibility_results_prefer_gql_media_interstitial_enabled":true,"rweb_video_timestamps_enabled":true,"longform_notetweets_rich_text_read_enabled":true,"longform_notetweets_inline_media_enabled":true,"responsive_web_enhance_cards_enabled":false}`);
    url = urlbase + query;
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
            let instructions = parse_data["data"]["threaded_conversation_with_injections_v2"]["instructions"];
            for(let i = 0; i < instructions.length; i++)
            {
                if(instructions[i].type == "TimelineAddEntries")
                {
                    for(let j = 0; j < instructions[i].entries.length; j++)
                    {
                        if(instructions[i].entries[j]["content"]["entryType"] == "TimelineTimelineItem" && instructions[i].entries[j].entryId == `tweet-${tweetID}`)
                        {
                            if(isKeyExists(instructions[i].entries[j]["content"]["itemContent"]["tweet_results"]["result"], "tweet"))
                            {
                                ShowLabel(instructions[i].entries[j]["content"]["itemContent"]["tweet_results"]["result"]["tweet"]["source"]);
                            }
                            else
                            {
                                ShowLabel(instructions[i].entries[j]["content"]["itemContent"]["tweet_results"]["result"]["source"]);
                            }
                            break;
                        }
                    }
                    break;
                }
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
        ele.innerHTML = `<span class="r-1tl8opc css-901oao css-16my406 r-bcqeeo r-qvutc0">·</span>`;
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
    ShowBirdIcon();
}; // ボタンを(再)設置
