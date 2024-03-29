$(document).ready(function(){
	var domain = "xxxx.com";
	$("#translate").click(function(){
        window.open("https://fanyi.baidu.com/");
    });
    $("#baidu").click(function(){
        window.open("http://www.baidu.com/");
    });
    $("#bdpan").click(function(){
        window.open("https://pan.baidu.com/");
    });
    $("#email163").click(function(){
        window.open("https://mail.163.com/");
    });
	$("#zhihu").click(function(){
        window.open("https://www.zhihu.com/");
    });
    $("#github").click(function(){
        window.open("https://github.com/");
    });
	$("#gitee").click(function(){
        window.open("https://gitee.com/");
    });
	$("#juejin").click(function(){
        window.open("https://juejin.im/");
    });
    $("#bilibili").click(function(){
        window.open("https://www.bilibili.com/");
    });
    $("#music163").click(function(){
        window.open("https://music.163.com/");
    });
	$("#diskStation").click(function(){
        window.open("https://" + domain + ":5001");
    });
    $("#wanwu").click(function(){
        window.open("http://" + domain + ":8283/owdl/index.html/");
    });
    $("#emby").click(function(){
		window.open("http://" + domain + ":8096/");
    });
	
})