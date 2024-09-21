document.addEventListener('DOMContentLoaded', function () {
	

	document.querySelector('#btn-one').addEventListener('click', function () {
		html2canvas(document.querySelector('#idcard')).then((canvas) => {
			let base64image = canvas.toDataURL('image/png');
			// console.log(base64image);
			let pdf = new jsPDF('p', 'px', [2480, 3508]);
			pdf.addImage(base64image, 'px', 0, 0, 2480, 3508);
			pdf.save('Youridcard.pdf');
		});
	});
	
});