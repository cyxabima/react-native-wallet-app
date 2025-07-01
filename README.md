# 📱 Wallet App — React Native + Clerk Auth

**Wallet App** is a mobile application built using **React Native** and **Expo** to help users track their income and expenses.  
It integrates with a custom **Express.js backend** and uses **Clerk.dev** for secure user authentication.

---

## 🚀 Features

- 🔐 User Sign Up and Sign In (via Clerk)
- 🏠 Home screen to view wallet balance
- ➕ Add transaction screen
- 📦 Connects to Express API (`wallet-api`)
- 📲 Built using Expo for easy testing and development

---

## 🛠️ Tech Stack

- **Frontend Framework**: React Native
- **Bundler**: Expo
- **State Management**: useState + useEffect + useCallback
- **Navigation**: React Navigation
- **Backend**: Express.js (API)
- **Database**: PostgreSQL (via API)
- **Auth**: Clerk.dev


## 🧑‍💻 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/cyxabima/react-native-wallet-app
cd wallet-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npx expo start
```

Scan the QR code using the **Expo Go** app on your device.

---

## 📦 API Integration

Set the API base URL in `.env`:

```env
API_URL=http://localhost:5000/api
```
---

## 📝 Notes

🧠 **Styling** was taken directly from course notes in a React Native YouTube tutorial.
The primary focus was on backend integration, screen logic, and data flow — custom styling will be improved in future versions.

---

## ✨ Future Enhancements

* UI polish with custom styling or Tailwind-RN
* Transaction categories & filters
* Monthly summaries and charts
* Offline storage

---

## 📚 License

This project is open-source and available under the [MIT License](LICENSE).




