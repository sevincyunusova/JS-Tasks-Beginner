const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');

filterBtns.forEach(button => {
    button.addEventListener('click', () => {
        const btncategory = button.dataset.category;
        
        products.forEach(product =>{
            const productcategory = product.dataset.category;
            if(btncategory === "all"){
                product.classList.remove('hidden');
            }
            else if(productcategory === btncategory){
                product.classList.remove('hidden');
            }
            else{
                product.classList.add('hidden');
            }
        })
    });
    
})