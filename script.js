document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const colorOptions = document.querySelectorAll('.color-option');
    const sizeOptions = document.querySelectorAll('input[name="size"]');
    const addToCartButton = document.querySelector('.add-to-cart');
    const cartMessage = document.getElementById('cartMessage');
    const cartDetails = document.getElementById('cartDetails');
    const cartItems = document.getElementById('cartItems');

    decreaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
        }
    });

    increaseButton.addEventListener('click', () => {
        let quantity = parseInt(quantityInput.value);
        quantity++;
        quantityInput.value = quantity;
    });

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
            mainImage.src = thumbnail.src;
        });
    });

    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    addToCartButton.addEventListener('click', () => {
        const selectedColor = document.querySelector('.color-option.selected');
        const selectedSize = document.querySelector('input[name="size"]:checked');
        const quantity = quantityInput.value;

        if (selectedColor && selectedSize) {
            const color = selectedColor.style.backgroundColor;
            const size = selectedSize.value;

            const cartItem = document.createElement('li');
            cartItem.textContent = `Color: ${color}, Size: ${size}, Quantity: ${quantity}`;
            cartItems.appendChild(cartItem);

            cartDetails.textContent = `Color: ${color}, Size: ${size}, Quantity: ${quantity}`;
            cartMessage.classList.remove('hidden');
            setTimeout(() => {
                cartMessage.classList.add('hidden');
            }, 3000);
        } else {
            alert('Please select a color and size.');
        }
    });
});
