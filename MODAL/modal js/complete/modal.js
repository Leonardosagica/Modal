// ! First approach and simpliest with html on the page from the start

/* const modalContainer = document.querySelector('.modal-container');
const btnOpen = document.querySelector('#modal_btn--open');
const btnClose = document.querySelector('#modal_btn--close');

 btnOpen.addEventListener('click', () => {
	modalContainer.classList.add('active');
}); 

 btnClose.addEventListener('click', () => {
	modalContainer.classList.remove('active');
 });  */

// some refactoring code

/* [btnOpen, btnClose].forEach(element => {
	element.addEventListener('click', () => {
		modalContainer.classList.toggle('active');
	});
});
 */

// ! Second Approach creating element with a div container

const modalContainer = document.querySelector('.modal-container');
const btnOpen = document.querySelector('#modal_btn--open');

const modalContent = { title: 'Modal Title', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.' };

const createModalElement = () => {
	/* const modal = document.createElement('div');
	modal.classList.add('modal');
	modalContainer.append(modal);
	const header = document.createElement('h1');
	header.classList.add('modal__title');
	header.innerText = 'Modal Title';
	modal.append(header);
	const paragraph = document.createElement('p');
	paragraph.classList.add('modal__text');
	paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.';
	modal.append(paragraph);
	const buttonModal = document.createElement('button');
	buttonModal.classList.add('modal__btn');
	buttonModal.innerHTML = 'Button &rarr;';
	modal.append(buttonModal);
	const buttonClose = document.createElement('button');
	buttonClose.setAttribute('id', 'modal_btn--close');
	modal.append(buttonClose);
    modalContainer.classList.add('active'); */

	modalContainer.classList.add('active');

	modalContainer.innerHTML = `
    <div class='modal'>
	    <h1 class='modal__title'>${modalContent.title}</h1>
	    <p class='modal__text'>${modalContent.text}</p>
	    <button class='modal__btn'>Button &rarr;</button>
	    <button id='modal_btn--close'></button>
    </div>`;
};

btnOpen.addEventListener('click', createModalElement);

/* Event Delegation - addEventListener to the parent that is present in the lifecicle of the dom and
capture the element by target - this is important because the element has created dinamically*/

// ! add Event Listener

modalContainer.addEventListener('click', event => {
	const btnClose = document.querySelector('#modal_btn--close');

	if (event.target === btnClose) {
		modalContainer.classList.remove('active');
		const modal = document.querySelector('.modal');
		modal.remove();
	}
});
