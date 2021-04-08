$(function(){
    $("#link_reg").on("click",function(){
        $(".login-box").hide()
        $(".reg-box").show()
    });
    $("#link_login").on("click",function(){
        $(".login-box").show()
        $(".reg-box").hide()
    })
    var form = layui.form;
    var layer = layui.layer;
    form.verify({
        'pwd':[
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
          'repwd':function(value){
            var pwd =  $(".reg-box [name=password]").val();
            if(pwd!==value){
                return '两次输入的密码不一致'
            }

          }
    })

    //监听注册表单的提交事件
    // $('#form_reg').on('submit', function(e) {
    //   // 1. 阻止默认的提交行为
    //   e.preventDefault()
    //   // 2. 发起Ajax的POST请求
    //   var data = {
    //     username: $('#form_reg [name=username]').val(),
    //     password: $('#form_reg [name=password]').val()
    //   }
    //   $.post('/api/reguser', data, function(res) {
    //     if (res.status !== 0) {
    //       return layer.msg(res.message)
    //     }
    //     layer.msg('注册成功，请登录！')
    //     console.log("成功")
    //     // 模拟人的点击行为
     
    //   })
    // })
     
   $("#form-reg").on("submit",function(e){
     e.preventDefault()
     var data = {
       username:$('#form-reg [name=username]').val(),
       password:$('#form-reg [name=password]').val()
    }
    
    $.post('/api/reguser', data, function(res){
      if(res.status!==0){
        return layer.msg("失败",{time:2000})
      }
      layer.msg("成功",{time:2000})
      $("#link_login").click()
    })
   })
 




//监听登录表单的提交事件
})
