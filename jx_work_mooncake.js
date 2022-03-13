let common = require("./function/common");
let $ = new common.env('京喜财富岛月饼红包');
let min = 5,
    help = $.config[$.filename(__filename)] || Math.min(min, $.config.JdMain) || min;
$.setOptions({
    headers: {
        'content-type': 'application/json',
        'user-agent': 'jdpingou;iPhone;5.4.0;13.7;a3b4e844090b28d5c38e7529af8115172079be4d;network/wifi;model/iPhone8,1;appBuild/100650;ADID/00000000-0000-0000-0000-000000000000;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/955;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
        'referer': 'https://st.jingxi.com/promote/2021/fortune_island_complex_v2/index.html?_s_c_ptag=139254.35.29&jxsid=16311944213560215004&_f_i_jxapp=1',
    }
});
eval(common.eval.mainEval($));
async function prepare() {
    $.ptag = `${$.rand(1001,9999)}.${$.rand(1,0)}.${$.rand(101,999)}`
    // $.thread = 1
}
async function main(id) {
    for (let i = 0; i < 16; i++) {
        await work(`https://m.jingxi.com/jxbfd/user/ComposePearlState?__t=${$.timestamp}&strZone=jxbfd&dwFirst=1&_=${$.timestamp}&sceneval=2&g_login_type=1&callback=jsonpCBKA&g_ty=ls`, 'ComposeGameState')
        common.assert($.ComposeGameState.iRet == 0, 'error')
        for (let kk = 0; kk < 7; kk++) {
            await $.wait($.rand(500, 1000))
            await work(`https://m.jingxi.com/jxbfd/user/ComposePearlAward?__t=1631289895120&strZone=jxbfd&type=4&size=1&strBT=${$.ComposeGameState.strDT}&_stk=__t%2Csize%2CstrBT%2CstrZone%2Ctype&_ste=1`)
            console.log($.source)
            if ($.source.sErrMsg.includes('红包溜走了')) {
                if (i == 0 && kk == 0) {
                    return
                }
                break
            }
            await work(`https://m.jingxi.com/jxbfd/user/RealTmReport?__t=1631265052456&dwIdentityType=0&strBussKey=composegame&strMyShareId=${$.ComposeGameState.strMyShareId}&ddwCount=10&_=1631265052459&sceneval=2&g_login_type=1&callback=jsonpCBKC&g_ty=ls`)
        }
    }
}
async function work(url, source = '') {
    let dec = await jxAlgo.dec(url)
    await $.curl(dec, source)
}
