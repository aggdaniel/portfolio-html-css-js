function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.getElementById('stock-form').addEventListener('submit', async function (e) {
    e.preventDefault(); 

    const ticker = document.getElementById('ticker').value; 
    const resultDiv = document.getElementById('result'); 

    try {
        const response = await fetch(`https://your-app-name.onrender.com/stock?ticker=${ticker}`);
        const data = await response.json();

        if (response.ok) {
            resultDiv.innerHTML = `<p>The latest price for ${ticker.toUpperCase()} is $${data.price}</p>`;
        } else {
            resultDiv.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>Failed to fetch stock price. Please try again later.</p>`;
    }
});
