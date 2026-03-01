# 🍪 Cookie Clicker Web Game

A sleek, responsive, and interactive incremental web game inspired by the classic Cookie Clicker. Click the giant chocolate chip cookie to earn money, then spend your earnings in the shop to purchase upgrades and automate your income!

## ✨ Features

* **Interactive Clicking:** Click the central cookie to earn money. Features satisfying click animations and floating "+X" text particles.
* **Automated Production:** Buy "Grandmas" (and more!) from the shop to generate passive income over time using JavaScript `setInterval` mechanics.
* **Dynamic Shop UI:** The shop automatically updates to highlight items you can afford. Disabled items remain grayed out until your bank balance is high enough.
* **Beautiful Custom Theme:** Styled with a custom CSS color palette featuring "dark cocoa" backgrounds, "honey gold" accents, and a subtle cookie-crumb background effect. 
* **Fully Responsive:** The layout gracefully adapts from desktop side-by-side views to stacked mobile layouts.

## 🛠️ Tech Stack

This project is built purely with vanilla web technologies. No build tools, bundlers, or frameworks are required.

* **HTML5:** Semantic structure for the game board and shop interface.
* **CSS3:** Advanced styling including CSS variables, linear/radial gradients, flexbox layouts, hover states, and keyframe animations (`moneyBump`, `floatieRise`).
* **Vanilla JavaScript (ES6):** Handles game logic, state management (money, item levels, prices), DOM manipulation, and interval-based passive income.

## 🚀 How to Run

Because this is a static website, getting it running on your local machine is incredibly simple.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/zanemersic/cookie-clicker.git](https://github.com/zanemersic/cookie-clicker.git)
    ```
2.  **Navigate to the directory:**
    ```bash
    cd cookie-clicker
    ```
3.  **Open the game:**
    Simply double-click the `index.html` file to open it in your default web browser, or use a tool like VS Code's "Live Server" extension for a better development experience.

## 🎮 Game Mechanics & Shop Items

Currently, the UI displays a full suite of buildings, and the underlying data object tracks their base stats:

* **🖱️ Cursor:** Increases your clicking power.
* **👵 Grandma:** Automatically generates passive income every 5 seconds.
* **🌾 Farm:** (UI ready, logic pending)
* **⛏️ Mine:** (UI ready, logic pending)
* **🏭 Factory:** (UI ready, logic pending)
* **🏦 Bank:** (UI ready, logic pending)
* **🛕 Temple:** (UI ready, logic pending)
* **🧙 Wizard Tower:** (UI ready, logic pending)
* **🚀 Shipment:** (UI ready, logic pending)

## 🚧 Roadmap / Contributing

Currently, the `buyItem()` switch statement in `script.js` handles the purchase and upgrade logic for the **Cursor** and **Grandma**. 

**Next Steps for Development:**
1.  Implement the `upgradeFarm()`, `upgradeMine()`, etc., functions in `script.js`.
2.  Add the remaining `case` statements inside the `buyItem(item)` function so players can purchase higher-tier buildings.
3.  Update the HTML `<span>` IDs for the higher-tier items (currently many share the `item-farm` ID) so their text can be dynamically updated via JavaScript.

Feel free to fork this project and submit a pull request if you'd like to help build out the rest of the shop!

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
