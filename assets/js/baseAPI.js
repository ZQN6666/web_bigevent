// 注意：每次调用$.get()或$.post()或$.ajax()时
// 会先调用ajaxPrefilter这个函数
// 在这个函数中可以拿到我们给Ajax提供的配置对象(即项目请求的根路径)
$.ajaxPrefilter(function(options){
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url='http://www.liulongbin.top:3007'+options.url
    console.log(options.url);
})