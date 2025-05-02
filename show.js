const apiUrl = {
    1: 'https://67f8eba4094de2fe6e9fc2eb.mockapi.io/decors',
    2: 'https://67f8eba4094de2fe6e9fc2eb.mockapi.io/Sofa',
    3: 'https://68134e95129f6313e210e06e.mockapi.io/dinning-table',
    4: 'https://68133919129f6313e2109bb9.mockapi.io/beds',
    5: 'https://68133919129f6313e2109bb9.mockapi.io/storage',
    6: 'https://6813418e129f6313e210b68c.mockapi.io/outdoor',
    7: 'https://6813418e129f6313e210b68c.mockapi.io/lights',
  };

  function goHome() {
    window.location.href = 'index.html';
  }

  async function fetchAllApis() {
    const outputDiv = document.getElementById('output');

    for (let key in apiUrl) {
      try {
        const res = await fetch(apiUrl[key]);
        const data = await res.json();

        data.forEach(item => {
          outputDiv.innerHTML += `
            <div class="card">
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>Cost: ₹${Number(item.cost).toLocaleString('en-IN')}</p>
              <p>Rating: ⭐ ${item.rating}</p>
               </div>
        `;
      });

    } catch (err) {
      console.error('Error fetching API', err);
    }
  }
}

fetchAllApis();
