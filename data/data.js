/* =========================================================================
   ChatGPT 做夢記憶 (Dreaming) · data.js   —  非官方中英雙語整理

   ONE shared data file, loaded by EVERY page (.html). The whole multi-page
   site is config-driven from two globals: SITE_META + SITE_PAGES[].
   Each SITE_PAGES entry becomes one real .html page (slug -> filename) and is
   rendered by app.js using that entry's `layout`. Every visible string is
   {en,zh} so the language toggle repaints the whole site with no leftovers.

   PRIMARY SOURCE (read in full):
     OpenAI, "Dreaming: Better memory for a more helpful ChatGPT" (2026-06-04)
     https://openai.com/index/chatgpt-memory-dreaming/

   ACCURACY NOTES:
     · The article reports eval results as CHARTS (images); it publishes no
       citable percentage figures. This site therefore invents NO numbers.
     · The one concrete figure given: serving compute cut ~5x for Free users.
       "Increase memory capacity for Plus and Pro users" — no multiplier given.
     · Privacy / regulatory items are EXTENDED CONTEXT (general, well-known
       behaviours), NOT part of this announcement — labelled as such.
   ========================================================================= */

window.SITE_META = {
  title:    { en: "ChatGPT Dreaming", zh: "ChatGPT 做夢記憶" },
  repo:     "tingwei161803/dreaming-chatgpt-better-memory",
  subtitle: { en: "How ChatGPT's new “dreaming” memory works — an unofficial bilingual digest.",
              zh: "ChatGPT 全新「做夢(dreaming)」記憶系統如何運作——非官方中英雙語整理。" },
  footer:   { en: "Unofficial digest · not affiliated with OpenAI. Primary source: OpenAI, “Dreaming: Better memory for a more helpful ChatGPT” (Jun 4 2026). OpenAI's eval charts publish no citable numbers, so none are invented here; privacy items are general context, not from the announcement.",
              zh: "非官方整理 · 與 OpenAI 無關。主要來源:OpenAI〈Dreaming: Better memory for a more helpful ChatGPT〉(2026/6/4)。原文評測以圖表呈現、未公布可引用數值,本站不杜撰數字;隱私章節為一般延伸脈絡,非公告內容。" }
};

window.SITE_PAGES = [

  /* ===================================================================== */
  /* 1 · HOME (hub) -> index.html                                          */
  /* ===================================================================== */
  {
    slug: "home", layout: "hub", icon: "bedtime",
    title:    { en: "Overview", zh: "總覽" },
    subtitle: { en: "On June 4 2026 OpenAI began rolling out its most capable “dreaming” memory yet — a background process that synthesizes who you are from past chats to optimize for freshness, continuity and relevance, without you ever saying “remember this.” An unofficial bilingual digest of the announcement.",
                zh: "2026 年 6 月 4 日,OpenAI 開始推出至今最強的「做夢(dreaming)」記憶——一個在背景把你過往對話整理成「你是誰」的程序,主打新鮮度、連續性與相關性;你不必說「記住這件事」,它也記得。以下為這份公告的非官方中英雙語整理。" },
    stats: [
      { value: 5, label: { en: "× less compute to serve Free users (approx.)", zh: "× 更省算力以服務免費版(約)" } },
      { value: 3, label: { en: "axes of “good memory” OpenAI evaluates",       zh: "OpenAI 評估「好記憶」的三面向" } },
      { value: 3, label: { en: "generations compared: 2024 / 2025 / 2026",     zh: "世代對比:2024 / 2025 / 2026" } },
      { value: 2, label: { en: "years memory has grown into ChatGPT",          zh: "年:記憶成為 ChatGPT 核心的時間" } }
    ]
  },

  /* ===================================================================== */
  /* 2 · HOW IT WORKS (article) -> overview.html                           */
  /* ===================================================================== */
  {
    slug: "overview", layout: "article", icon: "neurology",
    title:    { en: "How it works", zh: "運作原理" },
    subtitle: { en: "What “dreaming” is, and how a background process turns scattered conversations into fresh, relevant context.",
                zh: "「做夢」是什麼,以及背景程序如何把零散的對話,變成新鮮且相關的脈絡。" },
    sections: [
      { id: "what", heading: { en: "What is dreaming?", zh: "什麼是「做夢」?" }, blocks: [
        { type: "p", text: {
          en: "Memory is what helps ChatGPT learn your preferences, projects and constraints, so future conversations start from shared context rather than from scratch. On June 4 2026 OpenAI began rolling out a more capable, scalable system for synthesizing that memory — built to tackle staleness, correctness and scale across hundreds of millions of users and multi-year time horizons.",
          zh: "記憶,是讓 ChatGPT 學會你的偏好、專案與限制的東西,好讓未來的對話從共享脈絡開始,而不是每次從零來過。2026 年 6 月 4 日,OpenAI 開始推出一套更強、更可擴展的記憶整理系統——專為解決「過時、出錯、規模化」而生,要應付數億使用者與跨越多年的時間尺度。" } },
        { type: "p", text: {
          en: "“Dreaming” is a background process, first introduced in April 2025, that automatically curates memory by referencing your chat history — learning from many conversations and synthesizing a memory state that stays fresh and relevant, without relying on explicit requests to remember.",
          zh: "「做夢(dreaming)」是 2025 年 4 月首度推出的背景程序:它參考你的對話歷史,自動整理記憶——從許多對話中學習,並整理出一個保持新鮮、相關的記憶狀態,而不依賴你明說「記住」。" } },
        { type: "quote", text: {
          en: "In practice, the old saved-memories system could feel like talking to someone who took a few notes, but still forgot everything that wasn't written down.",
          zh: "實際上,舊的「儲存記憶」系統用起來,像在跟一個只記了幾筆筆記、卻把沒寫下來的全忘光的人說話。" } }
      ] },
      { id: "background", heading: { en: "A background that synthesizes", zh: "會整理的背景程序" }, blocks: [
        { type: "p", text: {
          en: "Unlike saved memories — which were written only during a conversation and needed strong cues to trigger — dreaming works in the background across many conversations at once. The 2026 release is described as a significantly more capable and compute-efficient architecture built on top of dreaming.",
          zh: "舊的「儲存記憶」只在對話當下寫入、且需要明顯的提示才會觸發;相對地,做夢是在背景同時跨多段對話運作。2026 年的版本被描述為:一套建立在做夢之上、更強且更省算力的架構。" } },
        { type: "h3", text: { en: "Freshness, continuity, relevance", zh: "新鮮、連續、相關" } },
        { type: "p", text: {
          en: "The stated goal is to optimize memory for three things — freshness (not stale), continuity (carries across chats) and relevance (the right context at the right time).",
          zh: "明確的目標,是讓記憶在三件事上最佳化:新鮮(不過時)、連續(能跨對話延續)、相關(在對的時候給對的脈絡)。" } },
        { type: "h3", text: { en: "Reviewable in a summary", zh: "可在摘要頁檢視" } },
        { type: "p", text: {
          en: "Memories synthesized by dreaming are reviewable in a memory summary page. From there you can glean the highlights of what ChatGPT knows about you, add or update information, and give instructions on what topics ChatGPT should bring up and when — and chat with the model to drill into any area.",
          zh: "做夢整理出的記憶,可在「記憶摘要頁」檢視。你可以在那裡快速看到 ChatGPT 對你的重點認識、新增或更新資訊,並指示哪些主題該在何時提起——想深入了解某一塊,直接跟模型對話即可。" } }
      ] },
      { id: "history", heading: { en: "From a notebook to a background", zh: "從筆記本到背景程序" }, blocks: [
        { type: "p", text: {
          en: "Memory first launched in April 2024 as “saved memories.” In April 2025, dreaming (V0) let ChatGPT reference chat context beyond the saved list — supplementing saved memories rather than replacing them. The 2026 release, Dreaming V3, is the first version capable enough to stand as the memory system on its own. See the Evolution page for the full arc.",
          zh: "記憶最早在 2024 年 4 月以「儲存記憶」之名推出。2025 年 4 月,做夢(V0)讓 ChatGPT 能參考儲存清單之外的對話脈絡——是補充、而非取代儲存記憶。2026 年的 Dreaming V3,則是第一個能獨當一面作為記憶系統的版本。完整脈絡見「演進」頁。" } }
      ] },
      { id: "sources", heading: { en: "Sources & disclaimer", zh: "資料來源與聲明" }, blocks: [
        { type: "p", text: {
          en: "This is an unofficial bilingual digest, not affiliated with OpenAI, compiled from the full text of OpenAI's June 4 2026 announcement. OpenAI presents its evaluation results as charts and publishes no citable percentage figures, so this site invents none. The Privacy & risks page is general, well-known context — not part of the announcement.",
          zh: "本站為非官方中英整理,與 OpenAI 無關,依 OpenAI 2026 年 6 月 4 日公告全文彙整。OpenAI 的評測結果以圖表呈現、未公布可引用的百分比,故本站不杜撰任何數字。「隱私與風險」頁為一般、廣為人知的延伸脈絡,並非公告內容。" } },
        { type: "ul", items: {
          en: [
            "Primary: OpenAI — “Dreaming: Better memory for a more helpful ChatGPT” (openai.com/index/chatgpt-memory-dreaming, 2026-06-04)",
            "For controls: OpenAI's official Memory FAQ (linked from the announcement)",
            "Examples quoted are OpenAI's own (underwater-camera gear, vegetarian, Singapore trip)."
          ],
          zh: [
            "主要來源:OpenAI —〈Dreaming: Better memory for a more helpful ChatGPT〉(openai.com/index/chatgpt-memory-dreaming,2026-06-04)",
            "控制操作:OpenAI 官方 Memory FAQ(公告中連結)",
            "文中引用的範例皆出自原文(水下相機器材、吃素、新加坡行程)。"
          ] } }
      ] }
    ]
  },

  /* ===================================================================== */
  /* 3 · EVOLUTION (timeline) -> timeline.html                             */
  /* ===================================================================== */
  {
    slug: "timeline", layout: "timeline", icon: "timeline",
    title:    { en: "Evolution", zh: "演進" },
    subtitle: { en: "How ChatGPT memory grew — straight from OpenAI's own account.",
                zh: "ChatGPT 記憶的演進——完全依 OpenAI 自己的敘述。" },
    events: [
      { date: { en: "Apr 2024", zh: "2024 年 4 月" },
        title: { en: "Saved memories", zh: "Saved memories(儲存記憶)" },
        body:  { en: "Memory first launched. You could ask ChatGPT to remember things and carry them forward — but memories were written only during a conversation, needed strong cues like “remember I'm traveling to Singapore in July,” and tended to go stale.",
                 zh: "記憶首次推出。你可以請 ChatGPT 記住事情並帶到未來對話——但記憶只在對話當下寫入,需要像「記住我 7 月要去新加坡」這種明顯提示,而且容易過時。" } },
      { date: { en: "Apr 2025", zh: "2025 年 4 月" },
        title: { en: "Dreaming V0", zh: "做夢 V0(第一版)" },
        body:  { en: "OpenAI introduced the first version of dreaming: a background method that automatically curates memory by referencing chat history, beyond the saved-memories list.",
                 zh: "OpenAI 推出第一版「做夢」:一個參考對話歷史、在背景自動整理記憶的方法,範圍超出儲存記憶清單。" } },
      { date: { en: "Through 2025", zh: "2025 年間" },
        title: { en: "A supplement, not a system", zh: "是補充,還不是系統" },
        body:  { en: "Over the year, dreaming V0 supplemented saved memories for a step-function lift in personalization and offset their staleness — but on its own it was never sufficient as a standalone memory system.",
                 zh: "這一年間,做夢 V0 補強了儲存記憶,讓個人化出現跳躍式提升、抵銷了過時問題——但它本身,還不足以單獨成為一套記憶系統。" } },
      { date: { en: "Jun 4 2026", zh: "2026 年 6 月 4 日" },
        title: { en: "Dreaming V3", zh: "Dreaming V3" },
        body:  { en: "OpenAI launched a significantly more capable, compute-efficient architecture built on dreaming — its most capable memory system yet. Available to Plus and Pro users in the US that day.",
                 zh: "OpenAI 推出建立在做夢之上、更強且更省算力的架構——至今最強的記憶系統。當天起,美國 Plus 與 Pro 使用者可用。" } },
      { date: { en: "Coming weeks", zh: "未來數週" },
        title: { en: "Free, Go & more countries", zh: "Free、Go 與更多國家" },
        body:  { en: "Rolling out to additional countries and to Free and Go users. A ~5× reduction in the compute needed to serve dreaming to Free users makes this practical, and memory capacity increases for Plus and Pro.",
                 zh: "陸續開放給更多國家,以及 Free 與 Go 使用者。服務免費版所需算力約降低 5×,讓這件事變得可行;Plus 與 Pro 的記憶容量也會增加。" } }
    ]
  },

  /* ===================================================================== */
  /* 4 · CAPABILITIES (bento) -> capabilities.html                         */
  /* ===================================================================== */
  {
    slug: "capabilities", layout: "bento", icon: "auto_awesome",
    title:    { en: "Core capabilities", zh: "核心能力" },
    subtitle: { en: "OpenAI defines “good memory” as doing three jobs well — each shown here with the example from the article.",
                zh: "OpenAI 把「好的記憶」定義為要把三件事做好——以下逐一說明,並附原文的例子。" },
    tiles: [
      { size: "lg", accent: true, icon: "auto_awesome",
        title: { en: "Three jobs of good memory", zh: "好的記憶,三件事" },
        body:  { en: "Carry forward useful context · follow your preferences and constraints · stay current as time passes. OpenAI evaluates memory against all three.",
                 zh: "承接有用的脈絡 · 遵循你的偏好與限制 · 隨時間與時俱進。OpenAI 以這三件事評估記憶。" } },
      { size: "md", icon: "history_edu",
        title: { en: "① Carry context forward", zh: "① 承接脈絡" },
        body:  { en: "Tell ChatGPT something once and it builds on it later. In the article, it recalls your underwater-camera setup and recommends a TTL trigger actually compatible with your gear.",
                 zh: "只說一次,之後它會接著用。原文裡,它記得你的水下相機組合,推薦真正與你器材相容的 TTL 觸發器。" } },
      { size: "md", icon: "tune",
        title: { en: "② Follow preferences", zh: "② 遵循偏好" },
        body:  { en: "Apply preferences and constraints — explicit (“I'm vegetarian”), implicit (“I live near San Francisco”), or instructions (“don't bring this up again”). The Singapore itinerary leans on your love of wildlife photography, strong AC and quiet dinners.",
                 zh: "套用偏好與限制——明說的(「我吃素」)、隱含的(「我住在舊金山附近」)、或指示(「別再提這個」)。新加坡行程便依你愛野生動物攝影、需要強冷氣、偏好安靜晚餐來安排。" } },
      { size: "wide", icon: "update",
        title: { en: "③ Stay current with time", zh: "③ 與時俱進" },
        body:  { en: "Memory accounts for time passing — “planning a birthday party for next Saturday” must notice when Sunday arrives. So “You're going to Singapore in July” is revised to “You went to Singapore in July 2026” once the trip ends, and recommendations return to your home location.",
                 zh: "記憶會考慮時間流逝——「下週六要辦生日派對」得在週日到來時更新。於是「你 7 月要去新加坡」會在行程結束後改寫成「你 2026 年 7 月去了新加坡」,推薦也回到你家鄉的地點。" } },
      { size: "sm", icon: "bedtime",
        title: { en: "Why “dreaming”", zh: "為何叫「做夢」" },
        body:  { en: "A background process curates and consolidates your memory between sessions — no command needed.",
                 zh: "背景程序在對話之間整理、鞏固你的記憶——不必下指令。" } },
      { size: "sm", icon: "bolt", value: "≈5×",
        title: { en: "Less compute (Free)", zh: "更省算力(免費版)" },
        body:  { en: "The efficiency that lets Free users get dreaming too.",
                 zh: "正是這份效率,讓免費版也能用上做夢。" } }
    ]
  },

  /* ===================================================================== */
  /* 5 · HOW IT'S EVALUATED (dashboard) -> benchmarks.html                 */
  /* ===================================================================== */
  {
    slug: "benchmarks", layout: "dashboard", icon: "query_stats",
    title:    { en: "How it's evaluated", zh: "如何評估記憶" },
    subtitle: { en: "OpenAI evaluates memory on three axes across three generations (2024 saved memories → 2025 + Dreaming V0 → 2026 Dreaming V3) and reports the lift as charts. The article publishes no citable percentages, so this page invents none — it shows the directional claim. The one concrete figure: serving compute cut ~5× for Free users.",
                zh: "OpenAI 以三個面向、跨三個世代(2024 儲存記憶 → 2025 + 做夢 V0 → 2026 Dreaming V3)評估記憶,並以圖表呈現提升幅度。原文未公布可引用的百分比,故本頁不杜撰數值,只呈現「方向性」結論。唯一具體數字:服務免費版的算力降低約 5×。" },
    stats: [
      { label: { en: "Serving compute, Free (approx.)", zh: "服務算力(免費版,約)" }, value: "≈5", unit: { en: "× lower", zh: "× 更省" } },
      { label: { en: "Axes of “good memory”", zh: "「好記憶」面向" },                value: "3", unit: { en: "", zh: "" } },
      { label: { en: "Generations compared", zh: "對比世代" },                       value: "3", unit: { en: "2024–2026", zh: "2024–2026" } },
      { label: { en: "Published % figures", zh: "公布的百分比" },                    value: "0", unit: { en: "citable", zh: "可引用" } }
    ],
    table: {
      columns: [
        { key: "axis",  label: { en: "Evaluation axis", zh: "評估面向" } },
        { key: "g2024", label: { en: "2024 · Saved", zh: "2024 · 儲存" } },
        { key: "g2025", label: { en: "2025 · + V0", zh: "2025 · + V0" } },
        { key: "gv3",   label: { en: "2026 · V3", zh: "2026 · V3" } }
      ],
      rows: [
        { axis: { en: "Carrying forward context (factual recall)", zh: "承接脈絡(事實回想)" },
          g2024: { en: "Baseline", zh: "基準" }, g2025: { en: "Improved", zh: "提升" }, gv3: { en: "Best", zh: "最佳" } },
        { axis: { en: "Following preferences (preference adherence)", zh: "遵循偏好(偏好遵循)" },
          g2024: { en: "Baseline", zh: "基準" }, g2025: { en: "Improved", zh: "提升" }, gv3: { en: "Best", zh: "最佳" } },
        { axis: { en: "Staying current (correct over time)", zh: "與時俱進(時效正確)" },
          g2024: { en: "Baseline", zh: "基準" }, g2025: { en: "Improved", zh: "提升" }, gv3: { en: "Substantial lift", zh: "大幅提升" } }
      ]
    }
  },

  /* ===================================================================== */
  /* 6 · YOUR CONTROLS (article) -> controls.html                          */
  /* ===================================================================== */
  {
    slug: "controls", layout: "article", icon: "tune",
    title:    { en: "Your controls", zh: "記憶控制" },
    subtitle: { en: "What the article says you can do, plus general controls — the official Memory FAQ is the source of truth.",
                zh: "原文提到你能做的事,加上一般控制方式——一切以官方 Memory FAQ 為準。" },
    sections: [
      { id: "summary", heading: { en: "The memory summary page", zh: "記憶摘要頁" }, blocks: [
        { type: "p", text: {
          en: "The memories dreaming synthesizes are made visible in a memory summary page. The article says you can, from there:",
          zh: "做夢整理出的記憶,會在「記憶摘要頁」呈現。原文指出,你可以在那裡:" } },
        { type: "ul", items: {
          en: [
            "Quickly glean the highlights of what ChatGPT knows about you.",
            "Add or update information about yourself.",
            "Give instructions on what topics ChatGPT should bring up, and when.",
            "Chat with the model to drill into any particular area."
          ],
          zh: [
            "快速看到 ChatGPT 對你的重點認識。",
            "新增或更新關於你的資訊。",
            "指示哪些主題該在何時提起。",
            "直接跟模型對話,深入了解某一塊。"
          ] } }
      ] },
      { id: "general", heading: { en: "General controls", zh: "一般控制方式" }, blocks: [
        { type: "p", text: {
          en: "Beyond the summary page, ChatGPT's standard memory controls apply (see the official Memory FAQ for the exact, current steps):",
          zh: "除了摘要頁,ChatGPT 一般的記憶控制也適用(精確且最新的步驟請見官方 Memory FAQ):" } },
        { type: "ul", items: {
          en: [
            "View and manage memory in Settings → Personalization → Memory.",
            "Ask in chat: “What do you remember about me?”",
            "Edit or delete entries, or clear everything from the manage view.",
            "Turn memory off, or use a Temporary Chat for a session that doesn't use or update memory — handy for sensitive topics."
          ],
          zh: [
            "在「設定 → 個人化 → 記憶」檢視與管理。",
            "在對話裡問:「你記得我哪些事?」",
            "在管理畫面編輯、刪除單筆,或全部清除。",
            "關閉記憶,或用「臨時對話」進行不使用、也不更新記憶的對話——適合敏感主題。"
          ] } }
      ] },
      { id: "notes", heading: { en: "Good to know", zh: "需要知道的事" }, blocks: [
        { type: "ul", items: {
          en: [
            "Because memory is synthesized separately from any single chat, deleting one conversation doesn't necessarily erase what was already learned — manage memory directly.",
            "The summary shows highlights; treat it as a curated view, not necessarily an exhaustive dump.",
            "Memory and the “improve the model for everyone” training setting are separate controls."
          ],
          zh: [
            "由於記憶是獨立於任一段對話整理出來的,刪掉某一段對話,未必會清掉已經學到的內容——請直接到記憶處管理。",
            "摘要呈現的是重點;把它當成整理過的視圖,未必是鉅細靡遺的全部。",
            "「記憶」與「改善模型(improve the model for everyone)」訓練是兩個獨立的設定。"
          ] } }
      ] }
    ]
  },

  /* ===================================================================== */
  /* 7 · ROLLOUT (comparison) -> rollout.html                              */
  /* ===================================================================== */
  {
    slug: "rollout", layout: "comparison", icon: "rocket_launch",
    title:    { en: "Rollout & tiers", zh: "推出與分級" },
    subtitle: { en: "Available to Plus and Pro users in the US on June 4 2026; rolling out to additional countries and to Free and Go users over the coming weeks. A ~5× reduction in compute to serve Free users is what makes that practical, alongside increased memory capacity for Plus and Pro.",
                zh: "2026 年 6 月 4 日起,美國 Plus 與 Pro 使用者可用;更多國家以及 Free、Go 使用者於未來數週陸續開放。服務免費版的算力約降低 5×,才讓這件事變得可行,同時 Plus 與 Pro 的記憶容量也會增加。" },
    plans: [
      { key: "free", name: { en: "Free / Go", zh: "Free / Go" }, price: { en: "Coming weeks", zh: "未來數週" }, note: { en: "First quality-bar version", zh: "首個達標版本" } },
      { key: "plus", name: { en: "Plus", zh: "Plus" }, price: { en: "From Jun 4 2026", zh: "2026/6/4 起" }, highlight: true, note: { en: "US first", zh: "美國先行" } },
      { key: "pro",  name: { en: "Pro", zh: "Pro" },  price: { en: "From Jun 4 2026", zh: "2026/6/4 起" }, note: { en: "US first", zh: "美國先行" } }
    ],
    features: [
      { label: { en: "Dreaming V3 memory", zh: "Dreaming V3 記憶" },          values: { free: true, plus: true, pro: true } },
      { label: { en: "Background synthesis from chats", zh: "背景整理對話成記憶" }, values: { free: true, plus: true, pro: true } },
      { label: { en: "Memory summary page", zh: "記憶摘要頁" },                values: { free: true, plus: true, pro: true } },
      { label: { en: "Memory capacity", zh: "記憶容量" },                     values: { free: { en: "Standard", zh: "標準" }, plus: { en: "Increased", zh: "增加" }, pro: { en: "Increased", zh: "增加" } } },
      { label: { en: "Availability", zh: "供應時間" },                        values: { free: { en: "Coming weeks", zh: "未來數週" }, plus: { en: "Jun 4 2026 (US)", zh: "2026/6/4(美國)" }, pro: { en: "Jun 4 2026 (US)", zh: "2026/6/4(美國)" } } },
      { label: { en: "Made feasible by ~5× less serving compute", zh: "靠約 5× 更省算力而可行" }, values: { free: true, plus: { en: "—", zh: "—" }, pro: { en: "—", zh: "—" } } }
    ]
  },

  /* ===================================================================== */
  /* 8 · PRIVACY & RISKS (kanban) -> privacy.html                          */
  /* ===================================================================== */
  {
    slug: "privacy", layout: "kanban", icon: "shield",
    title:    { en: "Privacy & risks", zh: "隱私與風險" },
    subtitle: { en: "Extended context — general, well-known considerations for a memory that persists separately from your chats. These are NOT part of OpenAI's announcement; for exact controls and policy, rely on the official Memory FAQ and your local settings.",
                zh: "延伸脈絡——當記憶獨立於對話、持續存在時,一些一般而廣為人知的考量。這些「並非」OpenAI 公告的內容;精確的控制與政策,請以官方 Memory FAQ 與你所在地的設定為準。" },
    columns: [
      { key: "deletion",   label: { en: "Deletion & retention", zh: "刪除與保留" } },
      { key: "security",   label: { en: "Security", zh: "安全" } },
      { key: "accuracy",   label: { en: "Accuracy", zh: "準確性" } },
      { key: "region",     label: { en: "Region & policy", zh: "地區與政策" } }
    ],
    cards: [
      { column: "deletion", title: { en: "Memory ≠ a single chat", zh: "記憶 ≠ 單次對話" },
        body: { en: "Dreaming synthesizes memory in the background from many conversations, so deleting one chat doesn't necessarily remove what was already learned. Manage memory directly via the summary / settings.",
                zh: "做夢在背景從多段對話整理記憶,因此刪掉某一段對話,未必會移除已學到的內容。請直接在摘要 / 設定處管理記憶。" }, tags: ["context"] },
      { column: "deletion", title: { en: "The summary is highlights", zh: "摘要是重點,非全部" },
        body: { en: "The memory summary surfaces highlights of what ChatGPT knows; treat it as a curated view rather than guaranteed to list every detail.",
                zh: "記憶摘要呈現的是 ChatGPT 認識你的重點;把它當成整理過的視圖,不保證列出每個細節。" } },
      { column: "security", title: { en: "Personalization is persistent", zh: "個人化會持續存在" },
        body: { en: "When personal context is carried into every chat, be mindful about what you share — and review the summary periodically so nothing unexpected sticks around.",
                zh: "當個人脈絡被帶進每次對話,留意你分享的內容——並定期檢視摘要,避免意料外的東西一直留著。" } },
      { column: "security", title: { en: "Prompt injection is a known category", zh: "Prompt injection 是已知風險類別" },
        body: { en: "Generally, memory + untrusted content is a discussed risk area: malicious instructions in third-party material could try to influence a model. Be cautious with content from unknown sources. (General context, not specific to this release.)",
                zh: "一般而言,「記憶 + 不可信內容」是被討論的風險領域:第三方素材中的惡意指令,可能試圖影響模型。對來路不明的內容保持警覺。(一般脈絡,非針對本次發布。)" }, tags: ["general"] },
      { column: "accuracy", title: { en: "It can still be wrong", zh: "它仍可能出錯" },
        body: { en: "Even improved, models can misremember or confabulate. Notably, in the article the model re-verifies facts against real sources before answering — verify anything important yourself.",
                zh: "即使改進,模型仍可能記錯或杜撰。值得注意的是,原文中模型回答前會再次向實際來源查證——重要資訊請自行核對。" } },
      { column: "accuracy", title: { en: "Context can resurface", zh: "脈絡可能被帶出來" },
        body: { en: "Personalization is a double-edged sword: something mentioned earlier may shape a later answer unexpectedly. Use a Temporary Chat when you want a clean slate.",
                zh: "個人化是雙面刃:先前提過的事,可能在你沒預期時影響後來的回答。想要乾淨的開始,可用臨時對話。" } },
      { column: "region", title: { en: "Availability varies by region", zh: "各地供應不一" },
        body: { en: "Rollout is US Plus/Pro first, with more countries and Free/Go to follow. Memory availability has historically differed by region — check what's available where you are.",
                zh: "推出先是美國 Plus/Pro,更多國家與 Free/Go 隨後跟進。記憶功能的供應歷來因地區而異——請確認你所在地是否可用。" } },
      { column: "region", title: { en: "Mind local data rules", zh: "留意當地資料規範" },
        body: { en: "Persistent personalization touches data-protection regimes (e.g. GDPR-style rights around personal data and erasure). Review your settings and regional terms before relying on it. (General context.)",
                zh: "持續性個人化涉及資料保護規範(例如 GDPR 對個人資料與刪除權的要求)。採信前,請檢視你的設定與當地條款。(一般脈絡。)" }, tags: ["general"] }
    ]
  },

  /* ===================================================================== */
  /* 9 · FAQ (faq) -> faq.html                                             */
  /* ===================================================================== */
  {
    slug: "faq", layout: "faq", icon: "quiz",
    title:    { en: "FAQ", zh: "常見問題" },
    subtitle: { en: "Quick answers about ChatGPT's dreaming memory.", zh: "關於 ChatGPT 做夢記憶的快速問答。" },
    qa: [
      { q: { en: "What is dreaming?", zh: "「做夢」是什麼?" },
        a: { en: "A background process (first introduced April 2025) that automatically curates ChatGPT's memory by referencing your chat history — synthesizing fresh, relevant context without you saying “remember this.” The June 2026 release is its most capable version, Dreaming V3.",
             zh: "一個背景程序(2025 年 4 月首度推出),參考你的對話歷史自動整理 ChatGPT 的記憶——在你不必說「記住」的情況下,整理出新鮮且相關的脈絡。2026 年 6 月的版本是至今最強的 Dreaming V3。" } },
      { q: { en: "When did it launch and who gets it?", zh: "什麼時候推出、誰能用?" },
        a: { en: "June 4 2026 for Plus and Pro users in the US, rolling out to additional countries and to Free and Go users over the coming weeks.",
             zh: "2026 年 6 月 4 日起,美國的 Plus 與 Pro 使用者可用;更多國家以及 Free、Go 使用者於未來數週陸續開放。" } },
      { q: { en: "What does “good memory” mean to OpenAI?", zh: "OpenAI 說的「好記憶」是什麼?" },
        a: { en: "Three things: carry forward useful context, follow your preferences and constraints, and stay current as time passes. It evaluates each across 2024 (saved memories), 2025 (+ Dreaming V0) and 2026 (Dreaming V3).",
             zh: "三件事:承接有用的脈絡、遵循你的偏好與限制、隨時間與時俱進。並分別在 2024(儲存記憶)、2025(+ 做夢 V0)、2026(Dreaming V3)三代上評估。" } },
      { q: { en: "How does it remember me?", zh: "它怎麼記住我?" },
        a: { en: "A background process learns from many conversations at once and synthesizes a memory state, rather than only writing notes during a single chat. You can review the result in the memory summary page.",
             zh: "一個背景程序同時從許多對話中學習,整理出一個記憶狀態,而不是只在單次對話中寫筆記。你可以在「記憶摘要頁」檢視結果。" } },
      { q: { en: "Are there benchmark numbers?", zh: "有效能數字嗎?" },
        a: { en: "OpenAI reports improvements as charts and doesn't publish citable percentage figures in the announcement, so this site doesn't quote any. The one concrete number given is a ~5× reduction in the compute needed to serve dreaming to Free users.",
             zh: "OpenAI 以圖表呈現提升,公告中未公布可引用的百分比,因此本站不引用任何數字。原文唯一的具體數字,是服務免費版所需算力約降低 5×。" } },
      { q: { en: "How do I see or turn off what it remembers?", zh: "怎麼檢視或關閉它記得的內容?" },
        a: { en: "Use the memory summary page to view, add, update and set topic instructions; manage or clear memory in Settings → Personalization → Memory; or use a Temporary Chat that doesn't use or update memory. See OpenAI's Memory FAQ for exact steps.",
             zh: "用「記憶摘要頁」檢視、新增、更新與設定主題指示;在「設定 → 個人化 → 記憶」管理或清除;或使用不會使用、也不更新記憶的「臨時對話」。精確步驟見 OpenAI 的 Memory FAQ。" } },
      { q: { en: "What about privacy?", zh: "隱私呢?" },
        a: { en: "Memory persists separately from individual chats, so deleting one conversation may not erase what was learned. Treat the Privacy & risks page as general context — for exact policy, rely on OpenAI's Memory FAQ and your regional settings.",
             zh: "記憶獨立於個別對話而持續存在,所以刪掉一段對話未必清除已學到的內容。「隱私與風險」頁屬一般脈絡——精確政策請以 OpenAI 的 Memory FAQ 與你所在地的設定為準。" } },
      { q: { en: "Is this website official?", zh: "這個網站是官方的嗎?" },
        a: { en: "No. It's an unofficial bilingual digest of OpenAI's announcement, not affiliated with OpenAI. For anything authoritative, see the original article and the Memory FAQ.",
             zh: "不是。這是 OpenAI 公告的非官方中英整理,與 OpenAI 無關。任何具權威性的內容,請見原文與 Memory FAQ。" } }
    ]
  }
];
