const modals = [
	{
		id: 0,
		header: 'Vans off the wall',
		text: 'A pretty cool shoe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex eius, ea inventore quisquam explicabo',
		image: 'imgs/shoe-1.png',
	},
	{
		id: 1,
		header: 'Puma',
		text: 'A cool shoe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quasi ut molestiae, aliquam quae nobis!',
		image: 'imgs/shoe-2.png',
	},
	{
		id: 2,
		header: 'Louis Vitton',
		text: 'The Most Dopest Shoe, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem assumenda amet culpa soluta.',
		image: 'imgs/shoe-3.png',
	},
];

const modalElement = document.querySelector('#modal');

const openModal = document.querySelectorAll('.open-button');

openModal.forEach(btn => {
	btn.addEventListener('click', () => {
		modalElement.showModal();

		const key = btn.dataset.modal;

		modalElement.innerHTML = `
          
            <img alt="${modals[key].header}" src="${modals[key].image}">
            <h2>${modals[key].header}</h2>
            <p>
                ${modals[key].text}
                </p>
                <button class="button close-button">Complete Purchase</button>
                `;

		const closeModal = document.querySelectorAll('.close-button');
		closeModal.forEach(btn => {
			btn.addEventListener('click', () => {
				modalElement.close();
				modalElement.innerHTML = '';
			});
		});
	});
});

// showModal and close method are related to the dialog tag
