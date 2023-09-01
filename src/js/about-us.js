var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
                    number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
                },    100);
			}
		});
var number1 = document.querySelector('.number1'),
		number1Top = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end1 = +number1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number1Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval1 = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end1) {
						clearInterval(interval1);
					}
				}, 5);
			}
		});

var number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval2);
					}
				}, 5);
			}
		});

