# ChatGPT 做夢記憶 (Dreaming) · 中英雙語整理

> OpenAI 於 2026/6/4 推出的 ChatGPT「做夢(Dreaming)」記憶系統,一份可瀏覽、可切換語言的非官方整理網站。

ChatGPT 不再只在你說「記住這件事」時才記得你。Dreaming 用一個背景程序讀過你過往的對話、拼湊出你是誰,並隨時間更新。本站把官方公告與外媒報導,整理成 9 個面向的中英雙語頁面——從運作原理、三代演進、效能數據,到記憶控制與隱私風險。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://tingwei161803.github.io/dreaming-chatgpt-better-memory/> |

> 直接點進去就能用,無需安裝。每一頁都有獨立網址,可單獨分享(例如 `…/benchmarks.html`、`…/privacy.html`)。

---

## ✨ 功能特色

- 🌏 **雙語全頁切換** — 中文 / English 一鍵切換,整頁(含導覽、圖表、頁尾)無殘留
- 🌗 **深色 / 淺色** — 午夜夢境(dark)與晨曦薰衣草(light)兩套配色,記憶你的選擇
- 🧭 **多頁面 + 跨頁導覽** — 9 頁各有獨立 URL,語言與主題跨頁持久
- 📊 **多種視圖** — 總覽、運作原理(長文)、時間軸、核心能力(便當格)、效能儀表板、推出分級(比較表)、隱私看板、FAQ
- 📈 **純手寫 SVG 圖表** — 記憶準確率三代演進長條圖 + 趨勢折線,無圖表函式庫
- 🔍 **FAQ 即時搜尋** — 輸入關鍵字即時過濾問答
- 🌌 **夢境氛圍** — Fraunces 襯線標題、緩慢飄移的極光背景、柔和紫光點綴
- 📱 **響應式** — 手機 / 平板 / 桌機皆適配(375px 無水平溢出)
- ⚡ **純靜態零 build** — 無後端、載入快、可離線瀏覽、可直接上 GitHub Pages

---

## 📂 內容結構 / 資料來源

本站內容整理自 **OpenAI〈Dreaming: Better memory for a more helpful ChatGPT〉(2026/6/4)** 及後續外媒報導(digit.in、findskill.ai、techtimes.com、dataconomy.com、cryptonomist.ch)。

```
dreaming-chatgpt-better-memory/
├── index.html          # 總覽(hub 首頁)
├── overview.html       # 運作原理(長文)
├── timeline.html       # 三代演進(時間軸)
├── capabilities.html   # 核心能力(便當格)
├── benchmarks.html     # 效能數據(儀表板 + 圖表)
├── controls.html       # 記憶控制(長文)
├── rollout.html        # 推出與分級(比較表)
├── privacy.html        # 隱私與風險(看板)
├── faq.html            # 常見問題
├── assets/
│   ├── styles.css      # MD3 基底 + 「做夢」主題層(雙配色)
│   ├── shell.js        # 共用 chrome:appbar / 跨頁導覽 / 頁尾 / 對話框 / 語言+主題
│   └── app.js          # 版型引擎:依 data-page 渲染對應版型
├── data/
│   └── data.js         # 唯一資料檔(SITE_META + SITE_PAGES[],中英雙語)
└── .nojekyll
```

> ⚠️ **非官方**:本網站為個人整理之非官方資源。**效能數字(如記憶準確率 82.8%)為 OpenAI 內部自評、由外媒引述,未經獨立第三方驗證**;部分隱私 / 安全項目為第三方研究或報導(已於頁面標註)。如有錯誤或出入,請以 [OpenAI 官方頁面](https://openai.com/index/chatgpt-memory-dreaming/) 為準。

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone git@github.com:tingwei161803/dreaming-chatgpt-better-memory.git
cd dreaming-chatgpt-better-memory

# 2a. 最簡單:直接開啟首頁
open index.html

# 2b. 或啟動本機伺服器(建議,跨頁導覽 / 相對路徑才完全正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 本專案為純靜態網站,不需安裝任何依賴。若要跑本機伺服器或測試,依偏好一律使用 `uv`。

### 測試(選配)

```bash
uv run --with playwright playwright install chromium      # 首次
uv run --with playwright python <lazy-data2web>/scripts/verify.py --dir .
```

---

## 📝 聲明 / License

- 本站為非官方整理,內容著作權歸原始來源 **OpenAI** 及各報導媒體所有,與 OpenAI 無任何關聯。
- 程式碼以 **MIT** 授權釋出。
- 如為權利人並希望調整或移除內容,請開 issue 聯絡。
