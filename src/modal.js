
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const btnTerms = document.getElementById("termsLink");
const btnPolicy = document.getElementById("policyLink");
const btnCloseModal = document.getElementById("closeModal");
const termsTemplate = document.getElementById("termsTemplate");
const policyTemplate = document.getElementById("policyTemplate");

// populate modal with template content
function populateModal(e) {
    modal.style.display = 'block';
    const node = e.target.id === "termsLink" ? termsTemplate : policyTemplate;
    const importedNode = document.importNode(node.content, true);

    // remove previous content if necessary
    if (modalContent.childNodes.length > 1)
        modalContent.removeChild(modalContent.lastChild);

    modalContent.insertAdjacentElement('beforeend', importedNode.firstElementChild);
}

btnTerms.addEventListener('click', populateModal);
btnPolicy.addEventListener('click', populateModal);

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// close modal when clicking outside modal content
window.addEventListener('click', e => {
    if (e.target.id === 'modal')
        modal.style.display = 'none';
});