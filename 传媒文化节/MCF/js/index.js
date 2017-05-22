$(function(){
	(function(){
		var $page=$("#xuanxiang .sel-page");
		var $_index=0;
		$(".next").click(function(){
			if($_index==$page.length-1) $_index=0;
			else{$_index++;}
			$page.eq($_index).show().siblings().hide();
		});
		$(".pass").click(function(){
			if($_index==0) $_index=$page.length-1;
			else{$_index--;}
			$page.eq($_index).show().siblings().hide();
		});
	})();
	(function(){
		var $submit=$("#submit");
		$submit.click(function(){
			var val=$('input:radio[name="inlineRadioOptions"]:checked').val();
			if (val==null){
				alert("请选择投票选项！");
			}
		});
	})();
	(function(){
		var $page=$("#news-banner ul");
		var $_index=0;
		$(".new-c-right").click(function(){
			if($_index==$page.length-1) $_index=0;
			else{$_index++;}
			$page.eq($_index).show().siblings().hide();
		});
		$(".new-c-left").click(function(){
			if($_index==0) $_index=$page.length-1;
			else{$_index--;}
			$page.eq($_index).show().siblings().hide();
		});
	})();
	(function(){
		var $page=$("#new-b-p .news-banner");
		var $_index=0;
		$(".kandian-show .button2").click(function(){
			if($_index==$page.length-1) $_index=0;
			else{$_index++;}
			$page.eq($_index).show().siblings().hide();
		});
		$(".button1").click(function(){
			if($_index==0) $_index=$page.length-1;
			else{$_index--;}
			$page.eq($_index).show().siblings().hide();
		});
	})();
	(function(){
		var $page=$("#index-bannerc .index-bc");
		var $_index=0;
		var $nav_text=$("#index-bt .nav-text");
		$(".index-b-s-s").eq(1).click(function(){
			if($_index==$page.length-1) $_index=0;
			else{$_index++;}
			$page.eq($_index).show().siblings().hide();
			$nav_text.eq($_index).addClass("text_active").siblings().removeClass("text_active");
		});
		$(".index-b-s-s").eq(0).click(function(){
			if($_index==0) $_index=$page.length-1;
			else{$_index--;}
			$page.eq($_index).show().siblings().hide();
			$nav_text.eq($_index).addClass("text_active").siblings().removeClass("text_active");
		});
		$nav_text.click(function(){
			$_index=$(this).index();
			$page.eq($_index).show().siblings().hide();
			$(this).addClass("text_active").siblings().removeClass("text_active");
		});
	})();
})