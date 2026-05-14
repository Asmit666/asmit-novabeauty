function addToCart(buttonElement, productName, productPrice, productImage, qty = 1) {

    if (buttonElement && buttonElement.innerText === "GO TO CART") {
        window.location.href = "cart.html"; 
        return;
    }

    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];

    let existingItem = cart.find(product => product.name === productName);

    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            qty: qty
        });
    }

    localStorage.setItem('novaCart', JSON.stringify(cart));

    updateCartBadge();

    if (buttonElement) {
        buttonElement.innerText = "GO TO CART";
        buttonElement.style.backgroundColor = "rgb(141, 87, 141)";
        buttonElement.style.color = "white"; 
    }
}

function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
    let badge = document.getElementById('cart-badge');

    if (badge) {
        let totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
        
        if (totalItems > 0) {
            badge.style.display = 'inline-block';
            badge.innerText = totalItems;
        } else {
            badge.style.display = 'none';
        }
    }
}

function checkCartButtons() {
    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
    let buttons = document.querySelectorAll('.btn-cart');

    buttons.forEach(btn => {
        let onclickCode = btn.getAttribute('onclick');

        if (onclickCode) {
            let isItemInCart = cart.some(product => onclickCode.includes(product.name));

            if (isItemInCart) {
                btn.innerText = "GO TO CART";
                btn.style.backgroundColor = "rgb(141, 87, 141)";
                btn.style.color = "white";
            }
        }
    });
}

window.onload = function () {
    updateCartBadge();   
    checkCartButtons(); 

    if (typeof displayCart === "function") {
        displayCart();
    }
    
    if (typeof displayWishlist === "function") {
        displayWishlist();
    }
};

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
    let cartContainer = document.getElementById('cart-items-container');
    let summaryContainer = document.getElementById('order-summary-container');
    
    if (!cartContainer) return; 

    cartContainer.innerHTML = ""; 
    if (summaryContainer) summaryContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<h3 style='text-align: center; color: #777; padding: 50px; background: white; border-radius: 8px;'>Your cart is currently empty!</h3>";
        return;
    }

    let subtotal = 0;
    let totalItemsCount = 0;

    cart.forEach((product, index) => {
        let itemQty = product.qty || 1; 
        let itemTotalPrice = product.price * itemQty;
        
        subtotal += itemTotalPrice; 
        totalItemsCount += itemQty;

        let safeImage = encodeURI(product.image);

        cartContainer.innerHTML += `
            <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; background: white; padding: 15px; margin-bottom: 15px; border-radius: 8px; box-shadow: 0px 5px 15px rgba(0,0,0,0.05);">
                <img src="${safeImage}" style="width: 80px; height: 80px; object-fit: contain;">
                
                <div style="flex: 1; margin-left: 20px;">
                    <h4 style="margin: 0; font-family: Arial; color: #333;">${product.name}</h4>
                    <p style="margin: 5px 0 0 0; color: #777; font-size: 0.9rem;">Qty: ${itemQty} × Rs. ${product.price}</p>
                </div>

                <p style="font-weight: bold; font-size: 1.2rem; margin-right: 20px; color: #111;">Rs. ${itemTotalPrice}</p>
                
                <button onclick="removeItem(${index})" style="background: rgb(241, 115, 136); color: white; border: none; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-weight: bold; transition: 0.3s;">Remove <i class="fa-solid fa-trash"></i></button>
            </div>
        `;
    });

    let shipping = subtotal > 999 ? 0 : 50; 
    let total = subtotal + shipping;

    if (summaryContainer) {
        summaryContainer.innerHTML = `
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0px 5px 15px rgba(0,0,0,0.05);">
                <h3 style="margin-bottom: 20px; font-family: 'Modern Antiqua', serif; border-bottom: 2px solid rgb(248, 221, 226); padding-bottom: 10px;">Order Summary</h3>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; color: #555; font-family: Arial;">
                    <span>Subtotal (${totalItemsCount} items):</span>
                    <span>Rs. ${subtotal.toFixed(2)}</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px; color: #555; font-family: Arial; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                    <span>Estimated Shipping:</span>
                    <span style="color: ${shipping === 0 ? 'rgb(141, 87, 141)' : '#555'}; font-weight: ${shipping === 0 ? 'bold' : 'normal'};">${shipping === 0 ? 'FREE' : 'Rs. ' + shipping.toFixed(2)}</span>
                </div>
                
                <div style="display: flex; justify-content: space-between; margin-bottom: 25px; font-size: 1.4rem; font-weight: bold; color: #111;">
                    <span>Total:</span>
                    <span>Rs. ${total.toFixed(2)}</span>
                </div>
                
                <button onclick="checkout()" style="width: 100%; background: rgb(141, 87, 141); color: white; border: none; padding: 15px; border-radius: 25px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: 0.3s;">PROCEED TO CHECKOUT</button>
            </div>
        `;
    }
}

function orderNow(productName, productPrice, productImage, qty = 1) {
    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
    
    let existingItem = cart.find(product => product.name === productName);
    
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            qty: qty
        });
    }
    
    localStorage.setItem('novaCart', JSON.stringify(cart));
    window.location.href = "cart.html";
}

function checkout() {
    alert("Payment Successful! Your Nova Beauty order has been placed.");
    localStorage.removeItem('novaCart'); 
    window.location.href = "Home.html";  
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('novaCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('novaCart', JSON.stringify(cart));
    updateCartBadge(); 
    displayCart();     
}


function addToWishlist(productName, productPrice, productImage) {
    let wishlist = JSON.parse(localStorage.getItem('novaWishlist')) || [];
    
    let existingItem = wishlist.find(product => product.name === productName);
    
    if (!existingItem) {
        wishlist.push({
            name: productName,
            price: productPrice,
            image: productImage
        });
        localStorage.setItem('novaWishlist', JSON.stringify(wishlist));
        alert("💖 " + productName + " has been added to your Wishlist!");
    } else {
        alert("✨ " + productName + " is already in your Wishlist!");
    }
}

function displayWishlist() {
    let wishlist = JSON.parse(localStorage.getItem('novaWishlist')) || [];
    let wishlistContainer = document.getElementById('wishlist-container');

    if (!wishlistContainer) return; 

    wishlistContainer.innerHTML = ""; 

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px; background: white; border-radius: 15px; box-shadow: 0px 5px 15px rgba(0,0,0,0.05);">
                <i class="fa-regular fa-heart" style="font-size: 3rem; color: #ddd; margin-bottom: 15px;"></i>
                <h3 style="color: #555; font-family: Arial;">Your wishlist is currently empty!</h3>
                <a href="Home.html" style="display: inline-block; margin-top: 20px; padding: 12px 25px; background: rgb(141, 87, 141); color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">Explore Products</a>
            </div>`;
        return;
    }

    wishlist.forEach((product, index) => {
        
        let safeImage = encodeURI(product.image);

        wishlistContainer.innerHTML += `
            <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0px 5px 15px rgba(0,0,0,0.05); text-align: center; position: relative; transition: 0.3s;">
                
                <button onclick="removeFromWishlist(${index})" style="position: absolute; top: 15px; right: 15px; background: none; border: none; font-size: 1.2rem; color: #aaa; cursor: pointer;">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <img src="${safeImage}" style="width: 100%; height: 180px; object-fit: contain; margin-bottom: 15px;">
                
                <h4 style="font-family: Arial; font-size: 0.95rem; color: #333; height: 40px; overflow: hidden; margin-bottom: 10px;">${product.name}</h4>
                <p style="font-weight: bold; font-size: 1.1rem; color: #111; margin-bottom: 15px;">Rs. ${product.price}</p>
                
                <button onclick="moveToCart(${index})" style="width: 100%; padding: 12px; background: white; border: 2px solid rgb(141, 87, 141); color: rgb(141, 87, 141); font-weight: bold; border-radius: 25px; cursor: pointer; transition: 0.3s;" onmouseover="this.style.background='rgb(141, 87, 141)'; this.style.color='white';" onmouseout="this.style.background='white'; this.style.color='rgb(141, 87, 141)';">
                    MOVE TO CART
                </button>
            </div>
        `;
    });
}

function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem('novaWishlist')) || [];
    wishlist.splice(index, 1); 
    localStorage.setItem('novaWishlist', JSON.stringify(wishlist));
    displayWishlist(); 
}

function moveToCart(index) {
    let wishlist = JSON.parse(localStorage.getItem('novaWishlist')) || [];
    let product = wishlist[index];

    addToCart(null, product.name, product.price, product.image, 1);

    removeFromWishlist(index);
    
    alert("🛍️ Moved to your cart!");
}



