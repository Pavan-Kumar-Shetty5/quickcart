let productHTML='';
product.forEach((product)=>
{
    productHTML+=`<div class="product-container">
              <div class="product-image-container">
              <img class="product-image" src="${product.image}" alt="fashion">
              </div>
              <div class="product-name">
              <p>${product.name}</p>
              </div>
              <div class="product-price">
                  ₹${product.price}
                </div>

                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                

                <button class="add-to-cart-button">
                    Buy Now
                </button>
              </div>
    `
});
document.querySelector('.product-grid').innerHTML=productHTML;