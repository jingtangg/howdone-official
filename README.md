# HOWDONE 官方網站

> HOW DONE, WELL DONE — 系統整合 × 軟體開發 × 資安服務

HOWDONE 的響應式企業官方網站，涵蓋服務介紹、專案流程、FAQ 與聯絡資訊。

---

## Tech Stack

| 類別 | 技術 |
|------|------|
| 框架 | React 18 + TypeScript |
| 建置工具 | Vite |
| 樣式 | Tailwind CSS |
| UI 元件 | shadcn/ui (Radix UI) |
| 路由 | React Router DOM v6 |
| 部署 | Vercel |

## 頁面結構

單頁應用（SPA），包含以下區塊：

- **Hero** — 首屏，含動態粒子背景與 CTA
- **關於我們** — 公司介紹
- **服務項目** — 客製化軟體開發 / 網路設備與資安 / AI 智能科技 / 其他服務
- **專案流程** — 專案執行步驟說明
- **常見問題** — FAQ 手風琴展開
- **聯絡我們** — 透過 mailto 發信
- **Footer** — 版權資訊

## 本地開發

```sh
# 安裝依賴
npm install

# 啟動開發伺服器（port 8080）
npm run dev

# 建置 production
npm run build

# 預覽 production build
npm run preview
```

## 部署

本專案部署於 **Vercel**，推送至 `main` 分支即自動觸發部署。

手動部署：
```sh
vercel --prod
```

## 專案結構

```
src/
├── assets/          # 靜態圖片
├── components/      # 各頁面區塊組件
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── FAQ.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/          # shadcn/ui 基礎元件
├── pages/
│   ├── Index.tsx    # 主頁（組合所有區塊）
│   └── NotFound.tsx
└── lib/
    └── utils.ts
```
