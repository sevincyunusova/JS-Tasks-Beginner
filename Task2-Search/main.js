const searchInput = document.querySelector('.search-input');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    products.forEach(product => {
        const productText = product.textContent.toLowerCase();
        if (productText.includes(searchValue)) {
            product.classList.remove('hidden');
        }
        else {
            product.classList.add('hidden');
        }
    });
});