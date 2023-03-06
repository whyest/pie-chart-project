const descrLinks = document.querySelectorAll('.descr-menu a');
const pieChartLinks = document.querySelectorAll('.pie-chart a');

descrLinks.forEach(el => {
	el.addEventListener('mouseenter', e => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(
			`.pie-chart a[href="${selfClass}"]`
		);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath)
			currentPath.forEach(el => (el.style.cssText = `fill: ${color};`));
		self.classList.add('active');
	});

	el.addEventListener('mouseleave', e => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(
			`.pie-chart a[href="${selfClass}"]`
		);
		let currentPath = currentElement.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => (el.style.cssText = ``));
		self.classList.remove('active');
	});
});

pieChartLinks.forEach(el => {
	el.addEventListener('mouseenter', e => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let color = self.dataset.color;
		let currentElement = document.querySelector(
			`.descr-menu a[href="${selfClass}"]`
		);
		let currentPath = self.querySelectorAll('path');
		if (currentPath)
			currentPath.forEach(el => (el.style.cssText = `fill: ${color};`));
		currentElement.classList.add('active');
	});

	el.addEventListener('mouseleave', e => {
		let self = e.currentTarget;
		let selfClass = self.getAttribute('href');
		let currentElement = document.querySelector(
			`.descr-menu a[href="${selfClass}"]`
		);
		let currentPath = self.querySelectorAll('path');
		if (currentPath) currentPath.forEach(el => (el.style.cssText = ``));
		currentElement.classList.remove('active');
	});
});
