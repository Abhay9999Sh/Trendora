# 🛍️ Trendora - Shopping Application  

Trendora is a modern e-commerce shopping app built with **Next.js**, **TypeScript**, **React Query**, **Zustand**, and **Tailwind CSS**. It uses the **Fake Store API** to display products and manage cart functionality.  


## 🌍 Live Demo  
🔗 [View Trendora Online](https://trendora.vercel.app/)  

## 🚀 Features  

### **🛒 Product Listing Page**
- Fetches and displays products with images, titles, prices, and descriptions.
- **Filter by category** and **sort by price/rating**.
- **Search functionality** for finding products.
- **Pagination / Load More** for better navigation.

### **🛍️ Cart Page**
- Displays added items with image, title, price, and quantity.
- **Update quantity** or **remove items** from the cart.
- **Persists cart data** across page reloads using Zustand.

### **🎨 UI & Performance**
- Fully responsive with **Tailwind CSS** and **ShadCN components**.
- **Dark mode support** with `next-themes`.
- **Optimized API fetching** using React Query.

---

## 🛠️ Installation & Setup  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Abhay9999Sh/Trendora.git
cd Trendora
```
### **2️⃣ Install Dependencies**
```sh
npm install
```
### **3️⃣ Start the Development Server**
```sh
npm run dev
```
Then open http://localhost:3000 in your browser.

## 🌍 API Endpoints  
Trendora uses the **Fake Store API** for fetching product data:  

- **Get All Products:** `https://fakestoreapi.com/products`  
- **Get Single Product:** `https://fakestoreapi.com/products/:id`  
- **Get Categories:** `https://fakestoreapi.com/products/categories`  

## ⚙️ State Management  
- **React Query** for data fetching & caching.  
- **Zustand** for managing cart state.

  ## 📜 License  
This project is open-source under the **MIT License**.  

---

**🎉 Thank you for visiting Trendora! Happy Shopping! 🛒**

