let money = 0
let cursorCounter = 1

function upgradeCursor() {
    cursorCounter++ 
    level = items.cursor.level;
    level++;
    items.cursor.level = level;
    price = parseFloat(items.cursor.price);
    price *= 2;
    items.cursor.price = price;

    document.getElementById('item-cursor').innerText = "Cursor (" + price + "$) – +2 Clicks [LEVEL " + level + "]";
}

function upgradeGrandma() {
    effect = parseFloat(items.grandma.effect);
    level = parseFloat(items.grandma.level);

    if (level > 1) {
        clearInterval(items.grandma.interval);
    }

    level++;
    items.grandma.level = level;

    effect *= 1.15;
    items.grandma.effect = effect;

    price = items.grandma.price;
    price *= 2;
    items.grandma.price = price;

    items.grandma.interval = setInterval(() => increaseScoreFor(effect), 5000);

    document.getElementById('item-grandma').innerText =
        "Grandma (" + price + "$) – +" + effect.toFixed(2) + " per 5 seconds [LEVEL " + level + "]";
}

var items = {
    cursor : {level: 1, price:10},
    grandma : {level: 1, price:20, effect:10, interval:undefined},
    farm : {level: 1, price:200, effect:20, interval:undefined},
    mine : {level: 1, price:500, effect: 50, interval:undefined},
    factory : {level: 1, price: 1000, effect: 100, interval:undefined},
    bank : {level: 1, price: 2500, effect: 200, interval:undefined},
    temple : {level: 1, price: 4000, effect: 320, interval:undefined},
    wizard_tower : {level: 1, price: 10000, effect: 500, interval:undefined},
    shipment: {level: 1, price: 30000, effect: 700, interval:undefined}
}

function increaseScore() {
    var number = document.getElementById('money').innerHTML;
    number = parseFloat(number);
    const delta = (typeof cursorCounter !== 'undefined' ? cursorCounter : 1);
    number += delta;
    document.getElementById('money').innerText = number.toFixed(2) + "$";
    money = number;

    uiMoneyChanged(delta);
}


function increaseScoreFor(increaseValue) {
    let number = document.getElementById('money').innerText;
    number = parseFloat(number);
    number += increaseValue;
    document.getElementById('money').innerText = number.toFixed(2) + "$";
    money = number;

    uiMoneyChanged(increaseValue);
}

function decreaseScoreFor(decreaseValue) {
    let number = document.getElementById('money').innerText;
    number = parseFloat(number);
    number -= decreaseValue;
    document.getElementById('money').innerText = number.toFixed(2) + "$";
    money = number;
}

function buyItem(item) {
    switch(item) {
        case "cursor":
            price = parseFloat(items.cursor.price);
            if (money >= price) {
                decreaseScoreFor(price);
                uiMoneyChanged(-price);
                upgradeCursor();
            } else {
                alert("You don't have enough money!");
            }
            break;
        case "grandma":
            price = parseFloat(items.grandma.price);
            if (money >= price) {
                decreaseScoreFor(price);
                uiMoneyChanged(-price);
                upgradeGrandma();
            } else {
                alert("You dont't have enough money!");
            }
            break;
    }
}

function uiMoneyChanged(delta) {
  const moneyEl = document.getElementById('money');
  if (moneyEl) {
    moneyEl.classList.remove('bump');
    moneyEl.offsetWidth;
    moneyEl.classList.add('bump');
  }

  updateShopAffordability();
}

function updateShopAffordability() {
  const getPrice = (key) => {
    if (typeof items === 'object' && items[key] && typeof items[key].price !== 'undefined') {
      return items[key].price;
    }
    if (key === 'cursor') return 10;
    if (key === 'grandma') return 20;
    if (key === 'farm') return 200;
    return Number.POSITIVE_INFINITY;
  };

  const byKey = (k) => document.querySelector(`.shop-item[onclick*="${k}"]`);

  const defs = [
    { key: 'cursor',  el: byKey('cursor')  },
    { key: 'grandma', el: byKey('grandma') },
    { key: 'farm',    el: byKey('farm')    },
  ];

  defs.forEach(({key, el}) => {
    if (!el) return;
    const price = getPrice(key);
    if (typeof money === 'number' && money >= price) {
      el.classList.add('affordable');
      el.classList.remove('disabled');
    } else {
      el.classList.remove('affordable');
    }
  });
}

function spawnFloatie(text, x, y) {
  const d = document.createElement('div');
  d.className = 'floatie';
  d.textContent = text;
  d.style.left = x + 'px';
  d.style.top  = y + 'px';
  document.body.appendChild(d);
  d.addEventListener('animationend', () => d.remove());
}

function centerOf(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width/2, y: r.top + r.height/2 };
}

(function attachCookieParticles(){
  document.addEventListener('DOMContentLoaded', () => {
    const cookieBtn = document.getElementById('cookie');
    if (!cookieBtn) return;

    cookieBtn.addEventListener('click', (ev) => {
      const hasCoords = ev && typeof ev.clientX === 'number';
      const rect = cookieBtn.getBoundingClientRect();
      const pos = hasCoords
        ? { x: ev.clientX, y: ev.clientY }
        : { x: rect.left + rect.width/2, y: rect.top + rect.height/2 };

      const clickGain = (typeof cursorCounter !== 'undefined' && cursorCounter > 0)
        ? cursorCounter : 1;

      spawnFloatie('+' + clickGain, pos.x, pos.y);
    });

    updateShopAffordability();
  });
})();


document.addEventListener('DOMContentLoaded', updateShopAffordability);
