
@@if (headtype.layout==='default') {
	<header class="header">
		<div class="row">
			<h1 class="logo"><a href="/"><span class="a11y">오늘플러스</span></a></h1>

			<div class="util">
				<a href="#" class="ic-25 ic_notice" alt="알림"><span class="cnt">10</span><span class="a11y">알림</span></a>
				<a href="#" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='submain') {
	<header class="header">
		<div class="row">
			<div class="dropdown_list">
				<div class="dropdown_value" role="combobox" aria-expanded="false">
					<p class="headtxt">오늘<i></i> 마켓</p>
					<button type="button" aria-label="열기" class="btn_opener"><i></i></button>
				</div>
				<div class="item_box" role="listbox">
					<div class="list_box">
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 마켓</a></div>
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 톡</a></div>
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 도전</a></div>
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 정보</a></div>
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 이벤트</a></div>
						<div role="option"><a href="#">오늘<i class="ic-plus"></i> 브랜드</a></div>
					</div>
				</div>
			</div>

			<div class="util">
				<a href="#" class="ic-25 ic_cart" alt="장바구니"><span class="cnt">99</span><span class="a11y">장바구니</span></a>
				<a href="#" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype1') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<div class="util">
				<a href="#" class="ic-25 ic_cart" alt="장바구니"><span class="cnt">99</span><span class="a11y">장바구니</span></a>
				<a href="#" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype2') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" class="ic-25 ic_cart" alt="장바구니"><span class="cnt">99</span><span class="a11y">장바구니</span></a>
				<a href="#" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype3') {
	<header class="header sub-head">
		<div class="row">
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" class="page_close"><span class="a11y">닫기</span></a>
			</div>
		</div>
	</header>
}
@@if (headtype.layout==='subtype4') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" class="ic-25 ic_share" alt="공유하기"><span class="a11y">공유하기</span></a>
				<a href="#" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
	</header>
}