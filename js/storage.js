// Create namespace if it doesn't exist
window.ProxyOrderSystem = window.ProxyOrderSystem || {};

// Storage keys
const ORDER_STORAGE_KEY = 'proxy_order_intake_order';
const CONFIG_STORAGE_KEY = 'proxy_order_intake_config';

// Default configuration
const DEFAULT_CONFIG = {
  basePrice: 0.50,
  shippingOptions: {
    localPickup: {
      enabled: true,
      price: 0
    },
    shipping: {
      enabled: true,
      price: 3.99
    }
  },
  volumeDiscounts: [
    { min: 51, percent: 0.10 },
    { min: 10, percent: 0.05 }
  ],
  cardBacks: {
    default: 'standard',
    custom: []
  }
};

// Order Management
window.ProxyOrderSystem.OrderStorage = {
  load: () => {
    try {
      const data = localStorage.getItem(ORDER_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error loading order:', error);
      return [];
    }
  },

  save: (order) => {
    try {
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
      return true;
    } catch (error) {
      console.error('Error saving order:', error);
      return false;
    }
  },

  addItem: (item) => {
    const order = window.ProxyOrderSystem.OrderStorage.load();
    order.push(item);
    return window.ProxyOrderSystem.OrderStorage.save(order);
  },

  updateItem: (index, item) => {
    const order = window.ProxyOrderSystem.OrderStorage.load();
    if (index >= 0 && index < order.length) {
      order[index] = item;
      return window.ProxyOrderSystem.OrderStorage.save(order);
    }
    return false;
  },

  removeItem: (index) => {
    const order = window.ProxyOrderSystem.OrderStorage.load();
    if (index >= 0 && index < order.length) {
      order.splice(index, 1);
      return window.ProxyOrderSystem.OrderStorage.save(order);
    }
    return false;
  },

  clear: () => {
    try {
      localStorage.removeItem(ORDER_STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing order:', error);
      return false;
    }
  }
};

// Configuration Management
window.ProxyOrderSystem.ConfigStorage = {
  load: () => {
    try {
      const data = localStorage.getItem(CONFIG_STORAGE_KEY);
      return data ? JSON.parse(data) : DEFAULT_CONFIG;
    } catch (error) {
      console.error('Error loading config:', error);
      return DEFAULT_CONFIG;
    }
  },

  save: (config) => {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
      return true;
    } catch (error) {
      console.error('Error saving config:', error);
      return false;
    }
  },

  update: (updates) => {
    const config = window.ProxyOrderSystem.ConfigStorage.load();
    const newConfig = { ...config, ...updates };
    return window.ProxyOrderSystem.ConfigStorage.save(newConfig);
  },

  reset: () => {
    return window.ProxyOrderSystem.ConfigStorage.save(DEFAULT_CONFIG);
  }
};

// Add constants to the namespace
window.ProxyOrderSystem.ORDER_STORAGE_KEY = ORDER_STORAGE_KEY;
window.ProxyOrderSystem.CONFIG_STORAGE_KEY = CONFIG_STORAGE_KEY; 