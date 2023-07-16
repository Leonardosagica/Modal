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

/*  1- variables and HTML elements */
const modalElement = document.querySelector('#modal');
const openModal = document.querySelectorAll('.button.open-button');

/* 2- functions */

/* 3- Eventlisteners */

openModal.forEach(btn => {
	btn.addEventListener('click', () => {
		modalElement.showModal(); // método esta associado à tag dialog

		const key = btn.dataset.modal;

		console.log(key);

		modalElement.innerHTML = `
		<img src="${modals[key].image}" alt="${modals[key].header}" />
		<h2>${modals[key].header}</h2>
		<p>${modals[key].text}</p>
		<button class="button close-button">Complete Purchase</button>`;

		const closeModal = document.querySelector('.button.close-button');
		closeModal.addEventListener('click', () => {
			modalElement.close(); // método esta associado à tag dialog
			modalElement.innerHTML = '';
		})
	});
});
