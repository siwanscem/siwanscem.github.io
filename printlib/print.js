document.addEventListener('DOMContentLoaded', function () {
	

	document.querySelector('#btn-one').addEventListener('click', function () {
		html2canvas(document.querySelector('#card')).then((canvas) => {
			let base64image = canvas.toDataURL('image/svg');
			// console.log(base64image);
			let pdf = new jsPDF('p', 'px', [2480, 3508]);
			pdf.addImage(base64image, 'px', 284, 231, 1911, 3045);
			pdf.save('Youridcard.pdf');
		});
	});

});