const apiUrls = {
    1: 'https://67f8eba4094de2fe6e9fc2eb.mockapi.io/decors',
    2: 'https://67f8eba4094de2fe6e9fc2eb.mockapi.io/Sofa',
    3: 'https://68134e95129f6313e210e06e.mockapi.io/dinning-table',
      4: 'https://68133919129f6313e2109bb9.mockapi.io/beds',
      5: 'https://68133919129f6313e2109bb9.mockapi.io/storage',
      6: 'https://6813418e129f6313e210b68c.mockapi.io/outdoor',
      7: 'https://6813418e129f6313e210b68c.mockapi.io/lights',
    };

    // Get API number from URL or default to 1
    const urlParams = new URLSearchParams(window.location.search);
    const apiNumber = urlParams.get('api') || 1; // Default to 1

    async function fetchData() {
      const url = apiUrls[apiNumber];
      if (!url) {
        alert('Invalid API number!');
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network error');
        const data = await response.json();

        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = '';

        data.forEach(item => {
          outputDiv.innerHTML += `
            <div class="card">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>Cost: ₹${Number(item.cost).toLocaleString('en-IN')}</p>
              <p>Rating: ⭐ ${item.rating}</p>
              <button class="btn wishlist" onclick='addToWishlist(${JSON.stringify(item)})'>❤ Wishlist</button>
              <button class="btn cart" onclick='addToCart(${JSON.stringify(item)})'>🛒 Add to Cart</button>
            </div>
          `;
        });

      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    fetchData();
    function addToWishlist(item) {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist.push(item);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        alert(`${item.name} added to Wishlist!`);
      }

      function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${item.name} added to Cart!`);
      }
