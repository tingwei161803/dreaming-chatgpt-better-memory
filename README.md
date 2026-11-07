# ChatGPT 做夢記憶 (Dreaming) · 中英雙語整理,附 Claude 對照

> OpenAI 於 2026/6/4 推出的 ChatGPT「做夢(Dreaming)」記憶系統,以及 Anthropic 於 2026/11 公開的 Claude 做夢流程與 agent 記憶研究——一份可瀏覽、可切換語言的非官方整理網站。

ChatGPT 不再只在你說「記住這件事」時才記得你。Dreaming 用一個背景程序讀過你過往的對話、拼湊出你是誰,並隨時間更新。五個月後,Anthropic 也公開了 Claude 的做法:不是消費者功能,而是一套開發者自己組裝的做夢流程(Managed Agents cookbook),外加一篇記憶研究。本站把三份一手資料整理成 12 個中英雙語頁面,並有一頁逐項對照兩邊的定位、運作、產出、正確性、安全與成本。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://dreaming-chatgpt-better-memory.peteraim.com/> |

> 直接點進去就能用,無需安裝。每一頁都有獨立網址,可單獨分享(例如 `…/benchmarks.html`、`…/privacy.html`)。

---

## ✨ 功能特色

- 🌏 **雙語全頁切換** — 中文 / English 一鍵切換,整頁(含導覽、圖表、頁尾)無殘留
- 🌗 **深色 / 淺色** — 沒選過時跟隨系統設定,切換後記住你的選擇
- 🧭 **多頁面 + 跨頁導覽** — 12 頁各有獨立 URL,導覽依來源分組(從這裡開始 / ChatGPT / Claude)
- ⚖️ **ChatGPT × Claude 逐項比較** — 5 大類 16 個面向左右並排;手機上每列自動改成卡片,不必橫向捲動
- 📊 **多種視圖** — 總覽、比較、運作原理(長文)、時間軸、核心能力(便當格)、效能儀表板、推出分級(比較表)、隱私看板、FAQ、Claude 實作與研究(長文)
- 🧱 **多版型引擎** — hub / 長文 / 對照(versus)/ 時間軸 / 便當格 / 儀表板 / 比較表 / 看板 / FAQ,純 vanilla JS、無框架
- 🔍 **FAQ 即時搜尋** — 輸入關鍵字即時過濾問答
- 📰 **編輯風版型** — 暖白紙色、Newsreader / Noto Serif TC 襯線標題、細線取代陰影、桌機左側分組導覽;青綠代表 OpenAI、陶土橘代表 Anthropic
- 📱 **響應式** — 手機 / 平板 / 桌機皆適配(375px 無水平溢出)
- ⚡ **純靜態零 build** — 無後端、載入快、可離線瀏覽、可直接上 GitHub Pages

---

## 📂 內容結構 / 資料來源

本站內容整理自三份一手資料全文:

- **OpenAI〈Dreaming: Better memory for a more helpful ChatGPT〉**(2026/6/4)——ChatGPT 各頁;記憶控制操作以官方 Memory FAQ 為準
- **Anthropic cookbook〈Dreaming with a dynamic workflow〉**(Brad Abrams,2026/11/2)——<https://platform.claude.com/cookbook/managed-agents-cma-dreaming-with-a-dynamic-workflow>
- **Anthropic〈The components of agent memory〉**(Lance Martin,2026/11/6)——<https://www.anthropic.com/research/components-of-agent-memory>

```
dreaming-chatgpt-better-memory/
├── index.html          # 總覽(hub 首頁)
├── compare.html        # ChatGPT × Claude 逐項比較(對照表 + 長文)
├── overview.html       # 運作原理(長文)
├── timeline.html       # 三代演進(時間軸)
├── capabilities.html   # 核心能力(便當格)
├── benchmarks.html     # 如何評估(儀表板:三面向 × 三世代對照)
├── controls.html       # 記憶控制(長文)
├── rollout.html        # 推出與分級(比較表)
├── privacy.html        # 隱私與風險(看板)
├── faq.html            # 常見問題
├── claude-workflow.html # Claude 實作:Managed Agents 做夢 cookbook(長文)
├── claude-research.html # Claude 研究:agent 記憶的組成(長文)
├── en/                 # 以上 12 頁的英文版(同檔名)
├── assets/
│   ├── styles.css      # MD3 基底 + 「做夢」主題層(雙配色)
│   ├── shell.js        # 共用 chrome:appbar / 跨頁導覽 / 頁尾 / 對話框 / 語言+主題
│   └── app.js          # 版型引擎:依 data-page 渲染對應版型
├── data/
│   └── data.js         # 唯一資料檔(SITE_META + SITE_PAGES[],中英雙語)
└── .nojekyll
```

> ⚠️ **非官方**:本網站為個人整理之非官方資源。**OpenAI 的評測以圖表呈現、未在文中公布可引用的百分比,因此本站不杜撰任何數字**;原文唯一的具體數字為「服務免費版算力約降低 5×」。Claude 相關頁面的數字(成本、評測百分比)全部直接引自 Anthropic 原文;比較頁中 OpenAI 公告沒有提到的面向一律寫「公告未提」,不代為推測;「本站觀點」段落另有標示。「隱私與風險」頁為一般延伸脈絡,非公告內容。如有出入,請以 [OpenAI 官方頁面](https://openai.com/index/chatgpt-memory-dreaming/) 與官方 Memory FAQ 為準。

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

### 驗證(選配)

本機起服務後,可用瀏覽器開發者工具逐頁檢查 `<title>`、canonical、GA4 追蹤碼是否正確,並確認跨頁導覽、語言 / 主題切換、小螢幕(375px)下沒有橫向捲動。

---

## 📝 聲明 / License

- 本站為非官方整理,內容著作權歸原始來源 **OpenAI**、**Anthropic** 所有,與兩者皆無任何關聯。
- 程式碼以 **MIT** 授權釋出。
- 如為權利人並希望調整或移除內容,請開 issue 聯絡。
