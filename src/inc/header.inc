
@@if (headtype.layout==='default') { <!-- 기본형(메인) //-->
	<header class="header">
		<div class="row">
			<h1 class="logo"><a href="/"><span class="a11y">오늘플러스</span></a></h1>

			<div class="util">
				<a href="#" class="ic-25 ic_notice"><span class="a11y">알림</span></a>
				<a href="#" class="ic-25 ic_menu"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype1') { <!-- 페이지 타이틀 없는 경우 //-->
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<div class="util">
				<a href="#" class="ic-25 ic_menu"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype2') { <!-- 페이지 타이틀 있는 경우 //-->
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" class="ic-25 ic_menu"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}