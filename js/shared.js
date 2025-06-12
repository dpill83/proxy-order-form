// Create namespace if it doesn't exist
window.ProxyOrderSystem = window.ProxyOrderSystem || {};

// Utility: debounce
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Calculate price based on quantity and configuration
function calculatePrice(quantity) {
  const config = window.ProxyOrderSystem.ConfigStorage?.load() || {
    basePrice: 0.50,
    volumeDiscounts: [
      { min: 8, percent: 0.10 },
      { min: 16, percent: 0.15 },
      { min: 24, percent: 0.20 }
    ]
  };
  const basePrice = config.basePrice;
  
  // Find applicable discount
  const discount = config.volumeDiscounts.find(d => quantity >= d.min);
  const discountPercent = discount ? discount.percent : 0;

  // Calculate final price
  return basePrice * (1 - discountPercent);
}

// Calculate shipping price
function calculateShippingPrice(shippingMethod) {
  const config = window.ProxyOrderSystem.ConfigStorage?.load() || {
    shippingOptions: {
      local: { price: 0 },
      ship: { price: 5.00 }
    }
  };
  return config.shippingOptions[shippingMethod]?.price || 0;
}

// Load order from localStorage
function loadOrder() {
  try {
    const savedOrder = localStorage.getItem('proxyOrder');
    return savedOrder ? JSON.parse(savedOrder) : [];
  } catch (e) {
    console.error('Error loading order:', e);
    return [];
  }
}

// Save order to localStorage
function saveOrder(order) {
  try {
    localStorage.setItem('proxyOrder', JSON.stringify(order));
  } catch (e) {
    console.error('Error saving order:', e);
  }
}

// Export utilities to global object
Object.assign(window.ProxyOrderSystem, {
  debounce,
  calculatePrice,
  calculateShippingPrice,
  loadOrder,
  saveOrder
});

// Dispatch event when ProxyOrderSystem is ready
document.dispatchEvent(new Event('ProxyOrderSystemReady')); 