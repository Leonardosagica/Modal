// ! First approach and simpliest with html on the page from the start (remove commenting in index.html)

// Variables and HTML elements
/* const modalContainer = document.querySelector(".modal-container");
const btnOpen = document.querySelector("#modal_btn--open");
const btnClose = document.querySelector("#modal_btn--close"); */


// Functions


// Event Listeners
/* btnOpen.addEventListener("click", () => {
    modalContainer.classList.add("active");
});

btnClose.addEventListener("click", () => {
    modalContainer.classList.remove("active");
}); */

//refactoring a la ninja  

/* [btnOpen, btnClose].forEach(btn => {
    btn.addEventListener("click", () => {
        modalContainer.classList.toggle('active');
    });
}) */


// ! Second Approach creating element with a div container
const modalContainer = document.querySelector('.modal-container');
const btnOpen = document.querySelector('#modal_btn--open');

const createModalElement = () => {
	/* const modal = document.createElement('div');
	modal.classList.add('modal');
	modalContainer.append(modal);
	//a criar o h1
	const header = document.createElement('h1');
	header.classList.add('modal__title');
	modal.append(header);
	//a criar o P
	const paragraph = document.createElement('p');
	paragraph.classList.add('modal__text');
	paragraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.';
	modal.append(paragraph);
	//a criar o botão do modal sem ação
	const buttonModal = document.createElement('button');
	buttonModal.classList.add('modal__btn');
	buttonModal.innerHTML = 'Button &rarr;';
	//a criar o botão de fechar o modal
	const buttonClose = document.createElement('button');
	buttonClose.setAttribute('id', 'modal_btn--close');
	modal.append(buttonClose);

    modalContainer.classList.add('active'); */

    modalContainer.innerHTML = `
                <div class="modal">
				<h1 class="modal__title">Modal Title</h1>
				<p class="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis ex dicta maiores libero minus obcaecati iste optio, eius labore repellendus.</p>
				<button class="modal__btn">Button &rarr;</button>
				<button id="modal_btn--close"></button>
			    </div>`;
    modalContainer.classList.add('active');
    

};

// ! add Event Listener

// event delegation em que o pai fica responsável por capturar o elemento e depois executa a função associada ao filho pretendido

// é importante implementar esta solução para casos em que o TARGET de acção do event listener seja criado de forma programática e não se encontra presente no DOM quando a página é carregada inicialmente
btnOpen.addEventListener('click', createModalElement);
modalContainer.addEventListener('click', (event) => {
    const btnClose = document.querySelector('#modal_btn--close');

console.log(event.target);
    if (event.target === btnClose) {
        modalContainer.classList.remove('active');
        const modal = document.querySelector(".modal");
        modal.remove();
    }
})