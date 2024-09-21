document.addEventListener('DOMContentLoaded', function () {
	

	document.querySelector('#btn-one').addEventListener('click', function () {
		html2canvas(document.querySelector('#card')).then((canvas) => {
			let base64image = canvas.toDataURL('image/svg');
			// console.log(base64image);
			let pdf = new jsPDF('p', 'px', [3300, 4800]);
			pdf.addImage(base64image, 'px', 100, 100, 637, 1015);
			pdf.save('Youridcard.pdf');
		});
	});

});