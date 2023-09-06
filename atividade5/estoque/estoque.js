let product = Array();

function createProduct(productId, productName, productquantity) {
    let p = {
        productId: productId,
        productName: productName,
        productquantity: productquantity
    }
    return p
}

function putProduct(p) {
    product.push(p);
}

function listProducts() {
    return product
}

function editProduct(productId, newProductQuantity) {
    let pEditato
    product.forEach(p => {
        if (p.productId === productId) {
            p.productquantity = newProductQuantity;
            pEditato = p;
        }
    });
    return pEditato
}

function removeProduct(productId) {
    product = product.filter(p => p.productId !== productId);
}


module.exports = {
    createProduct,
    putProduct,
    listProducts,
    editProduct,
    removeProduct
}