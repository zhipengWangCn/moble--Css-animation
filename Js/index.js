//第一页
//音乐
$(".musicPlay").click(function() {
		if ($(".love")[0].paused) {
			$(".love")[0].play();
			$(".musicPlay").attr("src", "../img/music.png")
		} else {
			$(".love")[0].pause();
			$(".musicPlay").attr("src", "../img/musicoff.png")
		};
	})
	//第二页
var i = 1;

function Rotate() {
	if (i < 48) {
		$(".ball").attr("src", "../img/diqiu/" + i + ".jpg")
		i++;
	}
	if (i == 47) {
		i = 1;
	}
}
var timer1 = setInterval(Rotate, 100);
//第四页
$("#mb>img").click(function() {
		$("#mb>img").css("opacity", "0");
		$("#noneDiv").css("opacity", "1");
		$("#noneDiv").css("z-index", "1");
		console.log($(this).index())
		console.log($("#noneDiv").css("z-index"));
		var a = $(this).index();
		$(".left").click(function() {
			a--;
			if (a == -1) {
				a = 7;
			}
			if (a == 0) {
				$(".show").attr("src", "../img/wqigins.png");
			} else if (a == 1) {
				$(".show").attr("src", "../img/anuoins.png");
			} else if (a == 2) {
				$(".show").attr("src", "../img/wxfins.png");
			} else if (a == 3) {
				$(".show").attr("src", "../img/gongyanins.png");
			} else if (a == 4) {
				$(".show").attr("src", "../img/wzins.png");
			} else if (a == 5) {
				$(".show").attr("src", "../img/niuins.png");
			} else if (a == 6) {
				$(".show").attr("src", "../img/slhins.png");
			} else if (a == 7) {
				$(".show").attr("src", "../img/madongins.png");
			};
		})
		$(".right").click(function() {
			a++;
			if (a == 8) {
				a = 0;
			}

			if (a == 0) {
				$(".show").attr("src", "../img/wqigins.png");
			} else if (a == 1) {
				$(".show").attr("src", "../img/anuoins.png");
			} else if (a == 2) {
				$(".show").attr("src", "../img/wxfins.png");
			} else if (a == 3) {
				$(".show").attr("src", "../img/gongyanins.png");
			} else if (a == 4) {
				$(".show").attr("src", "../img/wzins.png");
			} else if (a == 5) {
				$(".show").attr("src", "../img/niuins.png");
			} else if (a == 6) {
				$(".show").attr("src", "../img/slhins.png");
			} else if (a == 7) {
				$(".show").attr("src", "../img/madongins.png");
			};
		})

		if ($(this).index() == 0) {
			$(".show").attr("src", "../img/wqigins.png");
		} else if ($(this).index() == 1) {
			$(".show").attr("src", "../img/anuoins.png");
		} else if ($(this).index() == 2) {
			$(".show").attr("src", "../img/wxfins.png");
		} else if ($(this).index() == 3) {
			$(".show").attr("src", "../img/gongyanins.png");
		} else if ($(this).index() == 4) {
			$(".show").attr("src", "../img/wzins.png");
		} else if ($(this).index() == 5) {
			$(".show").attr("src", "../img/niuins.png");
		} else if ($(this).index() == 6) {
			$(".show").attr("src", "../img/slhins.png");
		} else if ($(this).index() == 7) {
			$(".show").attr("src", "../img/madongins.png");
		};
		$(".Down").click(function() {
			$("#mb>img").css("opacity", "1");
			$("#noneDiv").css("opacity", "0");
			$("#noneDiv").css("z-index", "-1");
		})
	})
	//整屏幕滚动
$("body").addClass("one");
$("#mb").addClass("two");
var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical',
	onSlideChangeEnd: function(swiper) {
		swiper.activeIndex //切换结束时，告诉我现在是第几个slide
		switch (swiper.activeIndex) {
			case 0:
				{
					$("#first div").css("opacity", "1");
					$("body").addClass("one");
					$("#second").removeClass("three");
					break
				}
			case 1:
				{
					$("#first div").css("opacity", "0");
					$("body").removeClass("one");
					$("#second").addClass("three");
					break
				}
			case 2:
				{
					$("#mb").css("opacity", "0");
					$("#mb").removeClass("two");
					$("#second").removeClass("three");
					break
				}
			case 3:
				{
					$("#mb").css("opacity", "1");
					$("#mb").addClass("two");
				}
		}
	}
})