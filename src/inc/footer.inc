@@if (footer.visibles==='show') { 
	<!-- 20211115 -->
	<ul class="quickmenu">
		<li><a href="#">로그아웃</a></li>
		<li><a href="#">로그인</a></li>
		<li><a href="#">고객센터</a></li>
		<li><a href="#">APP 다운</a></li><!-- 20211206 //--> 
		<!-- <li><a href="#">공지사항</a></li> 삭제 -->
	</ul>
	<!--// 20211115 -->
	<footer class="footer">
		<div class="row">
			<p class="logo"><span class="a11y">유한킴벌리</span></p>
			<div class="info">
				<p>유한킴벌리(주)</p><!-- 20211124 //-->
				<p><strong>고객센터 <a href="tel:080-500-5200">080-500-5200</a></strong></p>
				<p>평일 09:00 ~ 17:30 / 점심 12:00~13:00 <span>(주말/공휴일 휴무)</span></p>
			</div>
			<div class="etc">
				<!-- 20211115 -->
				<a href="@@webroot/custom/terms.html">이용약관</a>
				<!-- <a href="#">프리미엄 멤버십 이용약관</a> 삭제 //-->
				<a href="@@webroot/custom/alliance.html">제휴문의</a><!-- 20211206 //--> 
				<a href="@@webroot/custom/privacy.html" class="point">개인정보처리방침</a><!-- 20211206 //--> 
				<a href="#">사업자정보확인</a>
				<!--// 20211115 -->
			</div>
		</div>
	</footer>
}
	<script type="text/javascript" src="@@webroot/assets/js/ui.js"></script>

@@if (appbar.visibles==='show') { 
	<div class="app_bar">
		<div class="tabs">
			<button class="tab">
				<i class="ic-28 ic_app-home"></i>
				<span>홈</span>
			</button>
			<button class="tab _left">
				<i class="ic-28 ic_app-search"></i>
				<span>검색</span>
			</button>
			<button class="tab tab-challenge">
				<div class="top">
					<p class="mid"><i class="ic_app-challenge"></i></p>
        </div>
				<span>오늘<i></i>도전</span>
			</button>
			<button class="tab _right">
				<i class="ic-28 ic_app-my"></i>
				<span>마이</span>
			</button>
			<button class="tab">
				<i class="ic-28 ic_app-history"></i>
				<span>히스토리</span>
			</button>
		</div>
	</div>
} 