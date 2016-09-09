(function() {
	// Toggles Events
	// kqe.toggles.mouseenter(function(e) {
	// 	if(e.altKey) $(this).click();
	// });

	kqe.toggles.click(function(e) {
		var $this = $(this), cond = this.dataset.cond, val = ~~this.dataset.val;

		if(e.ctrlKey && !e.shiftKey) {
			if(val != 1) {
				kqd.dynmSearch = false;

				$('[data-cond='+cond+']:not([data-val='+val+']):not([data-val=1])').each(function() {
					$(this).addClass('on').removeClass('off').click();
				});

				kqd.dynmSearch = true;

				$this.removeClass('on').addClass('off').click();
			}
			else {
				kqd.dynmSearch = false;

				$('[data-cond='+cond+']:not([data-val=1])').each(function() {
					$(this).removeClass('on').addClass('off').click();
				});

				kqd.dynmSearch = true;

				$this.removeClass('on').addClass('off').click();
			}
		}
		else if(!e.ctrlKey && e.shiftKey) {
			if(val != 1) {
				kqd.dynmSearch = false;

				$('[data-cond='+cond+']:not([data-val='+val+']):not([data-val=1])').each(function() {
					$(this).addClass('off').removeClass('on').click();
				});

				kqd.dynmSearch = true;

				$this.removeClass('off').addClass('on').click();
			}
			else {
				kqd.dynmSearch = false;

				$('[data-cond='+cond+']:not([data-val=1])').each(function() {
					$(this).removeClass('off').addClass('on').click();
				});

				kqd.dynmSearch = true;

				$this.removeClass('off').addClass('on').click();
			}
		}
		else {
			$this.toggleClass('on').toggleClass('off');

			if(cond && val) {
				if($this.hasClass('on'))
					kq.conds[cond] |= 1<<(val-1);
				else
					kq.conds[cond] &= ~(1<<(val-1));

				if(kqd.dynmSearch) kq.query(function(param) { param.page = 1; }, kqf.dealer);
			}
		}
	});
})();

(function() {
	// Global Key Event
	$(document).keydown(function(e) {
		var ae = document.activeElement;
		if(ae.id == 'CondName') {
			if(e.keyCode == 13) {

				kqe.search.click();

				return false;
			}
		}
		else if(ae == $('.sPage')[0]) {
			if(e.keyCode == 13) {
				var $this = $(e.target), page = $this.html();

				if(page > 0 && page <= kqd.pageMax)
					kq.query(function(param) { param.page = page; },kqf.dealer);
				else
					$this.html(kqd.page);

				return false;
			}
		}
		else {
			if(e.keyCode == 9) {
				var next = kqe.rightNavi.filter('.active')[e.shiftKey?'prev':'next']();

				if(!next.length) next = kqe.rightNavi[e.shiftKey?'last':'first']();

				next.click();

				return false;
			}
			else if(e.keyCode == 33) { kqe.pagePrev.click(); return false; }
			else if(e.keyCode == 34) { kqe.pageNext.click(); return false; }
			else if(e.keyCode == 35) {
				kq.query(function(param) { param.page = kqd.pageMax; }, kqf.dealer);

				return false;
			}
			else if(e.keyCode == 36) {
				kq.query(function(param) { param.page = 1; }, kqf.dealer);

				return false;
			}
			else if(e.keyCode == 83 && e.ctrlKey) {
				kqe.condName.focus();

				return false;
			}
		}
	});
})();

(function() {
	kqe.search.click(function() {
		kq.conds.name = kqe.condName.val();
		kq.query(function(param) { param.page = 1; }, kqf.dealer);
	});
	kqe.pagePrev.click(function() {
		if(kqd.page > 1)
			kq.query(function(param) { param.page--; }, kqf.dealer);
	});
	kqe.pageNext.click(function() {
		if(kqd.page < kqd.pageMax)
			kq.query(function(param) { param.page++; }, kqf.dealer);
	});
})();

// Init
(function() {
	kqf.retab();
	$('.TabHead').filter('.active').click();
	kqe.search.click();
})();