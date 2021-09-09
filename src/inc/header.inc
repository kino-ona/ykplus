@@if (headtype.layout==='default') {
	<header class="header">
		<div class="row">
			<h1 class="logo"><a href="/"><span class="a11y">오늘플러스</span></a></h1>

			<div class="util">
				<a href="#" class="ic-25 ic_notice" alt="알림"><span class="cnt">10</span><span class="a11y">알림</span></a>
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
@@if (headtype.layout==='submain') {
	<header class="header">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
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
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
@@if (headtype.layout==='subtype1') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<div class="util">
				<a href="#" class="ic-25 ic_cart" alt="장바구니"><span class="cnt">99</span><span class="a11y">장바구니</span></a>
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
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
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
@@if (headtype.layout==='subtype3') {
	<header class="header sub-head">
		<div class="row">
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" class="page_close"><span class="a11y">닫기</span></a>
			</div>
		</div>
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
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
@@if (headtype.layout==='posthead') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i class="_w"></i><span class="a11y">이전페이지</span></a>
			</div>
			<div class="util">
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu_w" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
@@if (headtype.layout==='orderhead') {
	<header class="header sub-head">
		<div class="row">
			<div class="back">
				<a href="#" onclick="history.back(-1);"><i></i><span class="a11y">이전페이지</span></a>
			</div>
			<h1 class="page_title">@@subtitle</h1>
			<div class="util">
				<a href="#" id="gnbmenubtn" class="ic-25 ic_menu" alt="메뉴"><span class="a11y">메뉴</span></a>
			</div>
		</div>
}
		<div class="gnb-menu">
			<div class="gnb-head">
				<h2>
					<span class="bf_login">로그인 해주세요.</span>
					<span class="aftr_login"><i>김유한</i>님! 반갑습니다.</span>
					<div class="util">
						<a href="#" class="ic-25 gnb_btn-setting" alt="설정"><span class="a11y">설정</span></a>
						<a href="#" class="ic-25 gnb_btn-close" alt="닫기"><span class="a11y">닫기</span></a>
					</div>
				</h2>
				<div class="aftr_login">
					<ul class="myinfo">
						<li class="my"><a href="#">MY</a></li>
						<li class="order"><a href="#"><span>0</span>주문배송</a></li>
						<li class="coupon"><a href="#"><span>3</span>쿠폰</a></li>
						<li class="point"><a href="#"><span>630</span>포인트</a></li>
					</ul>
				</div>
			</div>
			<section class="today_market">
				<div class="sec_heading">
					<h2><i class="today_txt"><span class="a11y">오늘 플러스</span></i>마켓</h2>
					<a href="#" class="btn_all">전체보기 <i> </i></a>
				</div>
				<ul class="cate_list">
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd01.png" alt="디펜드"/></p>디펜드</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd02.png" alt="편안한 오늘"/></p>편안한 오늘</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd03.png" alt="건강한 오늘"/></p>건강한 오늘</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd04.png" alt="깨끗한 오늘"/></p>깨끗한 오늘</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd05.png" alt="아름다운 오늘"/></p>아름다운 오늘</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd06.png" alt="편리한 오늘"/></p>편리한 오늘</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd07.png" alt="간병케어"/></p>간병케어</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd08.png" alt="오늘의 도전"/></p>오늘의 도전</a></li>
				</ul>
			</section>
			<section class="today_talk">
				<div class="sec_heading">
					<h2><i class="today_txt"><span class="a11y">오늘 플러스</span></i>톡</h2>
					<a href="#" class="btn_all">전체보기 <i> </i></a>
				</div>
				<div id="utilSwp_talk" class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">트렌드 따라잡기</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img02.png);"><span class="label">톡톡퀴즈</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">오늘의 학습</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img02.png);"><span class="label">설문조사</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">이런 거 어때요?</span></p>
						</a></div>
					</div>
				</div>
			</section>
			<section class="gnb_map">
				<div class="sec_heading">
					<h2>카테고리</h2>
				</div>
				<ul class="cate_map">
					<li><a href="#"><span>디펜드</span></a></li>
					<li><a href="#"><span>누워있을 때</span></a></li>
					<li><a href="#"><span>욕실도구</span></a></li>
					<li><a href="#"><span>스킨케어</span></a></li>
					<li><a href="#"><span>헤어케어</span></a></li>
					<li><a href="#"><span>식사할 때</span></a></li>
					<li><a href="#"><span>풋케어</span></a></li>
					<li><a href="#"><span>간병용품</span></a></li>
					<li><a href="#"><span>앉아있을 때</span></a></li>
					<li><a href="#"><span>이동보조도구</span></a></li>
					<li><a href="#"><span>이동할 때</span></a></li>
					<li><a href="#"><span>욕실도구</span></a></li>
					<li><a href="#"><span>생활할 때</span></a></li>
					<li><a href="#"><span>주방도구</span></a></li>
				</ul>
			</section>
			<section class="today_info">
				<div class="sec_heading">
					<h2><i class="today_txt"><span class="a11y">오늘 플러스</span></i>정보</h2>
					<a href="#" class="btn_all">전체보기 <i> </i></a>
				</div>
				<div id="utilSwp_info" class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">건강정보</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img02.png);"><span class="label">커리어</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">자산관리</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img02.png);"><span class="label">여행/문화</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img01.png);"><span class="label">라이프스타일</span></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_img02.png);"><span class="label">요양/간병</span></p>
						</a></div>
					</div>
				</div>
			</section>
			<section class="today_brand">
				<div class="sec_heading">
					<h2><i class="today_txt"><span class="a11y">오늘 플러스</span></i>브랜드</h2>
					<a href="#" class="btn_all">전체보기 <i> </i></a>
				</div>
				<ul class="cate_list">
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd01.png" alt="디펜드"/></p>디펜드</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd09.png" alt="크리넥스"/></p>크리넥스</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd10.png" alt="좋은느낌"/></p>좋은느낌</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd11.png" alt="화이트"/></p>화이트</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd12.png" alt="라네이처"/></p>라네이처</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd13.png" alt="스카트"/></p>스카트</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd14.png" alt="크리넥스 마이비데"/></p>크리넥스 마이비데</a></li>
					<li><a href="#"><p class="img"><img src="../assets/images/sub/cate_brd15.png" alt="티엔"/></p>티엔</a></li>
				</ul>
			</section>
			<section class="today_event">
				<div class="sec_heading">
					<h2><i class="today_txt"><span class="a11y">오늘 플러스</span></i>이벤트</h2>
					<a href="#" class="btn_all">전체보기 <i> </i></a>
				</div>
				<div id="utilSwp_event" class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_eventbanner01.png);"></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_eventbanner02.png);"></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_eventbanner01.png);"></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_eventbanner02.png);"></p>
						</a></div>
						<div class="swiper-slide"><a href="#">
							<p class="imgbg" style="background-image: url(../assets/images/dummy/dummy_eventbanner01.png);"></p>
						</a></div>
					</div>
				</div>
			</section>
		</div>		
		<div class="overlay-dimmed"></div>
	</header>