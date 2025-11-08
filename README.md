# SteelBooks

A desktop accounting system — built with **Electron + React + Node + SQLite**.

## Features

* Arabic + English support 🌍
* Sales & Purchases Management
* Ledger-based money tracking
* PDF invoices
* Single bank account

## Run in development

```bash
npm run dev
```

## Build for production

```bash
cd renderer
npm run build
```

Then run Electron:

```bash
cd electron-main
npx electron .
```

## Folder Structure

```
steelbooks/
├─ electron-main/   → Electron entry
├─ backend/         → Node + Prisma + SQLite
├─ renderer/        → React (Vite)
└─ package.json
```

## Backend setup

* Make sure to generate Prisma client:

```bash
cd backend
npx prisma generate
```

* Initialize the database:

```bash
npx prisma migrate dev --name init
```

## Notes

* Use `npx electron .` instead of `electron .` if Electron is not globally installed.
* Set `NODE_ENV=development` in dev mode to load the Vite dev server in Electron.
