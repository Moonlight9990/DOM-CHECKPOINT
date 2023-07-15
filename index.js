// Get all the quantity buttons, delete buttons, and like buttons
const minusButtons = document.querySelectorAll('.minus-btn');
const plusButtons = document.querySelectorAll('.plus-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');

// Get the total price element
const totalPriceElement = document.querySelector('.total-price');

// Initialize the total price variable
let totalPrice = 0;

// Add event listeners to the quantity buttons
minusButtons.forEach(button => 
  button.addEventListener('click', () => {
    const text = button.closest('.cart-item')
    const update = text.querySelector('.quantity')
    let num = parseInt(update.textContent)
    if (num > 1){
      num--;
      update.textContent = num;
      updateTotalPrice();
    }
  }));

  plusButtons.forEach(button => 
    button.addEventListener('click', () => {
      const text = button.closest('.cart-item')
      const update = text.querySelector('.quantity')
      let num = parseInt(update.textContent)
      num++;
      update.textContent = num;
      updateTotalPrice();
    }))

    deleteButtons.forEach(button => 
      button.addEventListener('click', () => {
        const text = button.closest('.cart-item')
        text.remove();
        updateTotalPrice();
      }));

      likeButtons.forEach(button => {
        button.addEventListener('click', () => {
          button.classList.toggle('liked');
          // const text = button.closest('.item-details')
          // const paragraph = text.getElementsByTagName('p')
          // let y = alert(`You've added ${paragraph.innerText} as your Favourtie `)

        });
      });

// Function to update the total price
function updateTotalPrice() {
  totalPrice = 0;
  const quantityElements = document.querySelectorAll('.quantity');
  const priceElements = document.querySelectorAll('.item-details p');

  for (let i = 0; i < quantityElements.length; i++) {
    const quantity = parseInt(quantityElements[i].textContent);
    const price = parseInt(priceElements[i].textContent.split('$')[1]);
    totalPrice += quantity * price;
  }

  totalPriceElement.textContent = `Total Price: $${totalPrice}`;
}
