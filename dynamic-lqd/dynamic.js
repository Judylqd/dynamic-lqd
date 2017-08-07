window.onload=function(){    
var oLoginbg=document.getElementById('loginbg');   
var oLogin=document.getElementById('login');
var oBackgr=document.getElementById('backgr');
var oDrowbackBoder=document.getElementById('drowbackBoder');
var oDrowbackx=document.getElementById('drowbackx');
var oAccount=document.getElementById('account');
var oPassword=document.getElementById('password');
var arrUrl = ['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg'];
var oDiv=document.getElementById('pic');
var oImg = oDiv.getElementsByTagName('img')[0];
var oUl = oDiv.getElementsByTagName('ul')[0];
var aLi = oUl.getElementsByTagName('li');
var oPrev=document.getElementById('prev');
var oNext=document.getElementById('next');
var oBtn=document.getElementById('btn');  
var oTest=document.getElementById('test');
var oContent=document.getElementById('content');
var oUl1=oContent.getElementsByTagName('ul')[0];
var number=[];
var num=0;
var timer = null;


	//弹出的登录界面
	oLoginbg.onclick=function(){
		oLogin.style.display='block';  //显示弹出层
		oBackgr.style.height=document.body.scrollHeight+"px";   //设置隐藏层的高度为当前页面高度
		oBackgr.style.display='block';    //隐藏层
	}

	oDrowbackBoder.onclick=function(){   //点击登录退登录界面
		oLogin.style.display='none';
		oBackgr.style.display='none';
		if(oAccount.value != '' && oPassword.value != ''){
			alert('成功登录！');
		}
		else{
			alert('登录失败！');
		}
	}
   
	oDrowbackx.onclick=function(){    //点击红叉号退出登录界面
		oLogin.style.display='none';
		oBackgr.style.display='none';
	}
	oBackgr.onclick=function(){    //点击任何灰色区域退出界面
		oLogin.style.display='none';
		oBackgr.style.display='none';
	}

    //轮播
	for( var i = 0; i<arrUrl.length;i++ ){ //根据图片数组的长度决定li的数量
		oUl.innerHTML +='<li></li>';
	}

	function fnTab(){
		oImg.src = arrUrl[num];   
		for( var i =0; i<aLi.length; i++){   // 小圆点转换颜色
			aLi[i].className = '';
		}
		aLi[num].className = 'active';
    }
    fnTab();

	for( var i = 0;i<aLi.length;i++ ){   //点击小圆点对应相应的图片
		aLi[i].index = i;   // 索引值
		aLi[i].onclick = function(){
		num = this.index;
		fnTab();                   // 小圆点转换颜色
		}		
	}	
 
	function autoPlay(){
		timer = setInterval(function(){    // 定时器
			num++;
			num %= arrUrl.length;
			fnTab();
		},1500);  
	}
	autoPlay();

	oDiv.onmouseover= function(){    // 鼠标移入停止轮播
		clearInterval(timer);
	};

	oDiv.onmouseout = autoPlay;  // 鼠标移开继续轮播
		
	oPrev.onclick = function(){    //轮播停止,点击左箭头，图片前进
		num--;
		if(num == -1){
			num = arrUrl.length - 1;
		}
		fnTab();
	}
  
	oNext.onclick = function(){    //轮播停止,点击右箭头，图片后退
		num++;
		if(num == 4){
			num = arrUrl.length - 4;
		}
		fnTab();
	}

    //底部搜索
	oBtn.onclick=function(){
	 	var re=/^[^0-9\s]+大学$/g;
		if(re.test(oTest.value)){
			alert('搜索成功');
			if(oTest.value.length > 13){   //如果超出字符串长度则中间部分用***显示
	 			oTest.value = oTest.value.slice(4, 13)+'***大学';
	 		}
	 		number.unshift(oTest.value);  //向数组添加元素
	 		for(var i=1;i<number.length;i++){
	 			if(number[0] == number[i]){
	 				 number.splice(i,1);//若两个输入元素相同，则删除先输入的元素
	 			}
	 		}
	 		if(number.length == 11){  //数组长度达到11，就删除数组的最后一个元素
	 			number.pop(number[number.length-1]);
	 		}
	 		show();
	 		
		}
		else{
			alert('搜索错误');
		}
		oTest.value='';

	}

	function show(){  //根据数组的长度动态添加li标签
		var content='';
		for(var i=0;i<number.length;i++){
			content+='<li>'+number[i]+'</li>';
		}
		oUl1.innerHTML=content;
	}

}



 