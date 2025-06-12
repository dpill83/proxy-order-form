// Storage keys
const ORDER_STORAGE_KEY = 'proxy_order_intake_order';
const CONFIG_STORAGE_KEY = 'proxy_order_intake_config';

// Utility: debounce
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Load order from localStorage
function loadOrder() {
  try {
    const data = localStorage.getItem(ORDER_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// Save order to localStorage
function saveOrder(order) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
}

// Calculate price based on quantity
function calculatePrice(quantity) {
  const BASE_PRICE = 0.50;
  const DISCOUNTS = [
    { min: 51, percent: 0.10 },
    { min: 10, percent: 0.05 },
  ];

  // Find applicable discount
  const discount = DISCOUNTS.find(d => quantity >= d.min);
  const discountPercent = discount ? discount.percent : 0;

  // Calculate final price
  return BASE_PRICE * (1 - discountPercent);
}

// Export utilities to global object
window.ProxyOrderSystem = {
  debounce,
  loadOrder,
  saveOrder,
  calculatePrice,
  ORDER_STORAGE_KEY,
  CONFIG_STORAGE_KEY
}; 