// ==========================================
// ANATOLYA KEBABS - DATA CONFIGURATION FILE
// Edit the values inside this file to update the live website!
// ==========================================

const ANATOLYA_CONFIG = {
  // 💰 ITEM PRICES
  prices: {
    lambKebab: "$17.00",
    falafelKebab: "$15.50",
    vegetarianKebab: "$14.00",
    meatboxStarting: "From $15.00",
    meatboxSmall: "$15",
    meatboxLarge: "$18",
    meatboxCombo: "$19",
    saladMeatBox: "$17.00",
    riceBoxStarting: "From $15.00",
    riceBoxMeat: "$17",
    riceBoxSalad: "$15",
    saladChipsBox: "$10.00",
    vegetarianGozleme: "$16.00",
    
    // Sides & Extras
    chipsSmall: "$7.50",
    chipsLarge: "$9.50",
    gravyAddon: "$2.50",
    doubleMeat: "$4.00",
    theLot: "$4.00",
    gourmetFilling: "$2.00",
    
    // Combo Deals
    waterOffer: "$3.00",
    comboMealDeal: "$10.00"
  },

  // 🕒 TRADING HOURS
  hours: {
    monWedFri: "10:00 AM - 6:00 PM",
    thursday: "10:00 AM - 9:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "11:00 AM - 6:00 PM"
  }
};

// Apply data automatically to the website elements upon loading
document.addEventListener("DOMContentLoaded", () => {
  // Update Prices
  for (const [id, price] of Object.entries(ANATOLYA_CONFIG.prices)) {
    const el = document.getElementById(`price-${id}`);
    if (el) el.textContent = price;
  }

  // Update Hours
  for (const [dayKey, timeString] of Object.entries(ANATOLYA_CONFIG.hours)) {
    const el = document.getElementById(`hours-${dayKey}`);
    if (el) el.textContent = timeString;
  }
});