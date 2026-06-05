/* =========================================================================
   ChatGPT 做夢記憶 (Dreaming) · data.js   —  非官方中英雙語整理

   ONE shared data file, loaded by EVERY page (.html). The whole multi-page
   site is config-driven from two globals: SITE_META + SITE_PAGES[].
   Each SITE_PAGES entry becomes one real .html page (slug -> filename) and is
   rendered by app.js using that entry's `layout`. Every visible string is
   {en,zh} so the language toggle repaints the whole site with no leftovers.

   SOURCES (unofficial digest — figures are OpenAI's own / press-reported,
   not independently verified):
     · OpenAI, "Dreaming: Better memory for a more helpful ChatGPT" (2026-06-04)
       https://openai.com/index/chatgpt-memory-dreaming/
     · digit.in · findskill.ai · techtimes.com · dataconomy.com · cryptonomist.ch
   ========================================================================= */

window.SITE_META = {
  title:    { en: "ChatGPT Dreaming", zh: "ChatGPT 做夢記憶" },
  subtitle: { en: "How ChatGPT's new “Dreaming” memory works — an unofficial bilingual digest.",
              zh: "ChatGPT 全新「做夢(Dreaming)」記憶系統如何運作——非官方中英雙語整理。" },
  footer:   { en: "Unofficial digest · not affiliated with OpenAI · built with lazy-data2web. Source: OpenAI announcement (Jun 4 2026) + press coverage. Figures are OpenAI's own or press-reported and not independently verified.",
              zh: "非官方整理 · 與 OpenAI 無關 · 使用 lazy-data2web 建置。資料來源:OpenAI 公告(2026/6/4)與外媒報導;數據為 OpenAI 自評或外媒引述,未經獨立驗證。" }
};

window.SITE_PAGES = [

  /* ===================================================================== */
  /* 1 · HOME (hub) -> index.html                                          */
  /* ===================================================================== */
  {
    slug: "home", layout: "hub", icon: "bedtime",
    title:    { en: "Overview", zh: "總覽" },
    subtitle: { en: "On June 4 2026 OpenAI began rolling out “Dreaming” — a memory that quietly reads across your past chats, synthesizes who you are, keeps it current as time passes, and works without you ever saying “remember this.” Below is an unofficial bilingual digest.",
                zh: "2026 年 6 月 4 日,OpenAI 開始推出「做夢(Dreaming)」——一套在背景默默讀過你過往對話、拼湊出你是誰、並讓記憶隨時間與時俱進的系統;你不必說「記住這件事」,它也記得。以下為非官方中英雙語整理。" },
    stats: [
      { value: 82.8, label: { en: "% memory recall (V3, OpenAI's own figure)", zh: "% 記憶準確率(V3,OpenAI 自評)" } },
      { value: 3,    label: { en: "generations of memory since 2024",          zh: "代記憶演進(自 2024)" } },
      { value: 5,    label: { en: "× less compute to run",                     zh: "× 更省算力" } },
      { value: 2,    label: { en: "× memory for Plus & Pro",                   zh: "× 記憶容量(Plus / Pro)" } }
    ]
  },

  /* ===================================================================== */
  /* 2 · HOW IT WORKS (article) -> overview.html                           */
  /* ===================================================================== */
  {
    slug: "overview", layout: "article", icon: "neurology",
    title:    { en: "How it works", zh: "運作原理" },
    subtitle: { en: "What “Dreaming” is, and how a background process turns scattered conversations into a living picture of you.",
                zh: "「做夢」是什麼,以及背景程序如何把零散的對話,變成一張持續更新、關於你的全貌。" },
    sections: [
      { id: "what", heading: { en: "What is Dreaming?", zh: "什麼是 Dreaming?" }, blocks: [
        { type: "p", text: {
          en: "Dreaming is OpenAI's rebuilt memory for ChatGPT. Instead of waiting for you to say “remember this,” a background process reads across your past conversations and quietly synthesizes a picture of who you are and what you care about — then keeps that picture fresh as your life changes.",
          zh: "Dreaming 是 OpenAI 重寫的 ChatGPT 記憶。它不再等你說「記住這件事」,而是用一個背景程序讀過你過往的對話,默默拼湊出你是誰、在乎什麼,並隨著你的生活改變持續更新這張全貌。" } },
        { type: "p", text: {
          en: "OpenAI described the old approach as being “like talking to someone who took a few notes, but still forgot everything that wasn't written down.” Dreaming is meant to fix exactly that.",
          zh: "OpenAI 形容舊做法「像在跟一個只記了幾筆筆記、卻把沒寫下來的全忘光的人說話」。Dreaming 想修的正是這件事。" } },
        { type: "quote", text: {
          en: "From an excellent question-answering clerk toward a contextual partner for your long-term projects and interests.",
          zh: "從一個出色的問答助理,走向能陪你經營長期專案與興趣的脈絡夥伴。" } }
      ] },
      { id: "background", heading: { en: "A single background process", zh: "一個背景程序" }, blocks: [
        { type: "p", text: {
          en: "A single asynchronous background process now synthesizes memory from many conversations at once, captures context that comes up naturally in chat, and updates existing memories as circumstances change — no explicit command required.",
          zh: "現在由單一個非同步的背景程序,同時整理多段對話、擷取對話中自然出現的脈絡,並在情況改變時更新既有記憶——全程不需要你下任何指令。" } },
        { type: "h3", text: { en: "Injected at inference time", zh: "在推論時注入" } },
        { type: "p", text: {
          en: "Synthesized memories live in a separate data layer and are injected into the system prompt at inference time. The practical effect: every new conversation starts already knowing your context, rather than rebuilding it from scratch.",
          zh: "整理後的記憶存放在一個獨立的資料層,並在推論時被注入到 system prompt。實際效果是:每次新對話一開始就「已經知道」你的脈絡,而不是從零重建。" } },
        { type: "h3", text: { en: "Captured naturally, not on command", zh: "自然擷取,而非靠指令" } },
        { type: "p", text: {
          en: "Because context is captured as it arises, memory can include the things you mention in passing — not only the facts you deliberately ask it to store.",
          zh: "因為脈絡是在它出現時被擷取,記憶就能涵蓋你順口提到的事——而不只是你刻意要它儲存的資訊。" } }
      ] },
      { id: "why-name", heading: { en: "Why call it “dreaming”?", zh: "為什麼叫「做夢」?" }, blocks: [
        { type: "p", text: {
          en: "The name borrows from how sleep is thought to consolidate human memory. While you're away, the system periodically reorganizes your conversations — deciding what stays useful and what should be treated as past — so the next session opens with a tidier, more current sense of you.",
          zh: "這名字借用了「睡眠鞏固記憶」的概念。在你離開時,系統會定期把你的對話重新整理——判斷哪些仍然有用、哪些該當成已經過去——好讓下一次對話以更整潔、更貼近當下的「你」開場。" } }
      ] },
      { id: "sources", heading: { en: "Sources & disclaimer", zh: "資料來源與聲明" }, blocks: [
        { type: "p", text: {
          en: "This is an unofficial bilingual digest, not affiliated with OpenAI. It is compiled from OpenAI's June 4 2026 announcement and subsequent press coverage. Performance numbers are OpenAI's own internal figures as reported by the press and have not been independently verified.",
          zh: "本站為非官方中英整理,與 OpenAI 無關,依 OpenAI 2026 年 6 月 4 日的公告與後續外媒報導彙整。效能數字為 OpenAI 內部自評、由外媒引述,未經獨立第三方驗證。" } },
        { type: "ul", items: {
          en: [
            "OpenAI — “Dreaming: Better memory for a more helpful ChatGPT” (openai.com/index/chatgpt-memory-dreaming, 2026-06-04)",
            "digit.in — “OpenAI Dreaming explained”",
            "findskill.ai — “ChatGPT's New ‘Dreaming’ Memory, Explained”",
            "techtimes.com — coverage of the rollout & audit-trail limits",
            "dataconomy.com · cryptonomist.ch — additional reporting"
          ],
          zh: [
            "OpenAI —〈Dreaming: Better memory for a more helpful ChatGPT〉(openai.com/index/chatgpt-memory-dreaming,2026-06-04)",
            "digit.in —〈OpenAI Dreaming explained〉",
            "findskill.ai —〈ChatGPT's New ‘Dreaming’ Memory, Explained〉",
            "techtimes.com — 關於推出與稽核軌跡限制的報導",
            "dataconomy.com、cryptonomist.ch — 其他報導"
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
    subtitle: { en: "Three generations of ChatGPT memory — from a manual notebook to a background that dreams.",
                zh: "ChatGPT 記憶的三代演進——從手動筆記本,到會在背景做夢的系統。" },
    events: [
      { date: { en: "Apr 2024", zh: "2024 年 4 月" },
        title: { en: "Saved Memories", zh: "Saved Memories(手動記憶)" },
        body:  { en: "The original system worked like a notebook: you had to say “remember that I'm a vegetarian.” Useful, but entries went stale and didn't scale.",
                 zh: "最初的系統像一本筆記:你得明說「記住我吃素」。好用,但內容會過時,也難以擴展。" } },
      { date: { en: "Apr 2025", zh: "2025 年 4 月" },
        title: { en: "First “dreaming” (V0)", zh: "第一版「做夢」(V0)" },
        body:  { en: "ChatGPT began referencing your broader chat history beyond saved notes — still a supplement to the manual list rather than a replacement.",
                 zh: "ChatGPT 開始參考儲存筆記之外、更廣的對話歷史——但仍是手動清單的補充,而非取代。" } },
      { date: { en: "Nov 2025", zh: "2025 年 11 月" },
        title: { en: "Security researchers warn", zh: "安全研究示警" },
        body:  { en: "Tenable Research documented that because memories are appended to the system prompt, a malicious prompt injected via a third-party source could alter persistent memory. (Third-party finding.)",
                 zh: "Tenable Research 指出:由於記憶被附加進 system prompt,透過第三方來源注入的惡意 prompt 可能竄改長期記憶。(第三方研究)" } },
      { date: { en: "Jun 4 2026", zh: "2026 年 6 月 4 日" },
        title: { en: "Dreaming V3 ships", zh: "Dreaming V3 上線" },
        body:  { en: "A full background-synthesis architecture: automatic, continuous, scalable, ~5× cheaper to run, with 2× memory for Plus & Pro. Rolls out first to US Plus and Pro users.",
                 zh: "完整的背景同步架構:自動、持續、可擴展,執行成本約降至 1/5,Plus 與 Pro 記憶容量加倍。先在美國 Plus / Pro 推出。" } },
      { date: { en: "Coming weeks", zh: "未來數週" },
        title: { en: "Free, Go & worldwide", zh: "Free、Go 與全球" },
        body:  { en: "OpenAI plans to extend dreaming memory to Free and Go users and to more regions — the compute savings are what make the free tier feasible.",
                 zh: "OpenAI 計畫把做夢記憶延伸到 Free 與 Go 使用者以及更多地區——正是算力成本的下降,才讓免費方案得以實現。" } }
    ]
  },

  /* ===================================================================== */
  /* 4 · CAPABILITIES (bento) -> capabilities.html                         */
  /* ===================================================================== */
  {
    slug: "capabilities", layout: "bento", icon: "auto_awesome",
    title:    { en: "Core capabilities", zh: "核心能力" },
    subtitle: { en: "OpenAI frames good memory as doing three jobs well. Here they are, with the trip example it uses.",
                zh: "OpenAI 認為「好的記憶」要把三件事做好。以下逐一說明,並附上它舉的旅行例子。" },
    tiles: [
      { size: "lg", accent: true, icon: "auto_awesome",
        title: { en: "Three jobs of good memory", zh: "好的記憶,三件事" },
        body:  { en: "OpenAI judges memory on three axes: carry context forward, follow your preferences, and stay current with time.",
                 zh: "OpenAI 用三個面向評估記憶:承接脈絡、遵循偏好、與時俱進。" } },
      { size: "md", icon: "history_edu",
        title: { en: "① Carry context forward", zh: "① 承接脈絡" },
        body:  { en: "Bring useful details from past chats into future relevant ones — e.g. your camera-gear setup resurfaces when you ask about photography.",
                 zh: "把過去對話裡有用的細節帶進未來相關對話——例如你問攝影時,它記得你的相機器材設定。" } },
      { size: "md", icon: "tune",
        title: { en: "② Follow preferences", zh: "② 遵循偏好" },
        body:  { en: "Apply your stated preferences and constraints — vegetarian diet, budget travel — consistently, without you repeating them.",
                 zh: "持續套用你說過的偏好與限制——吃素、預算旅行——不必每次重講。" } },
      { size: "wide", icon: "update",
        title: { en: "③ Stay current with time", zh: "③ 與時俱進" },
        body:  { en: "“You're going to Singapore in July” automatically becomes “You went to Singapore in July 2026” once the trip is over — no action from you.",
                 zh: "「你 7 月要去新加坡」會在行程結束後自動改寫成「你 2026 年 7 月去了新加坡」——你什麼都不用做。" } },
      { size: "sm", icon: "bedtime",
        title: { en: "Why “dreaming”", zh: "為何叫「做夢」" },
        body:  { en: "Like sleep consolidating memory, a background process reorganizes your chats while you're away.",
                 zh: "像睡眠鞏固記憶,背景程序在你離開時把對話重新整理。" } },
      { size: "sm", icon: "trending_up", value: "82.8%",
        title: { en: "Memory recall, V3", zh: "記憶準確率 V3" },
        body:  { en: "OpenAI's own figure; not independently verified.",
                 zh: "OpenAI 自評;未經獨立驗證。" } }
    ]
  },

  /* ===================================================================== */
  /* 5 · BENCHMARKS (dashboard) -> benchmarks.html                         */
  /* ===================================================================== */
  {
    slug: "benchmarks", layout: "dashboard", icon: "insights",
    title:    { en: "Benchmarks", zh: "效能數據" },
    subtitle: { en: "Figures below are OpenAI's internal evaluations as reported by the press — not independently verified by third parties.",
                zh: "以下數字為 OpenAI 內部評測、由外媒引述,未經獨立第三方驗證,僅供參考。" },
    stats: [
      { label: { en: "Memory recall (V3)", zh: "記憶準確率(V3)" }, value: "82.8", unit: { en: "%", zh: "%" }, delta: 14.9 },
      { label: { en: "Preference adherence", zh: "偏好遵循" },       value: "71.3", unit: { en: "%", zh: "%" } },
      { label: { en: "Time-sensitive accuracy", zh: "時效準確率" },  value: "75.1", unit: { en: "%", zh: "%" } },
      { label: { en: "Compute to run", zh: "執行算力" },             value: "5", unit: { en: "× lower", zh: "× 更省" } }
    ],
    bars: { title: { en: "Memory recall across three generations", zh: "記憶準確率:三代演進" }, series: [
      { label: { en: "2024", zh: "2024" }, value: 41.5 },
      { label: { en: "Apr 2025", zh: "2025/4" }, value: 67.9 },
      { label: { en: "V3 (2026)", zh: "V3(2026)" }, value: 82.8 }
    ] },
    line: { title: { en: "Recall trend", zh: "準確率趨勢" }, points: [
      { x: "2024", y: 41.5 }, { x: "2025", y: 67.9 }, { x: "2026·V3", y: 82.8 }
    ] },
    table: {
      columns: [
        { key: "metric", label: { en: "Metric", zh: "面向" } },
        { key: "g2024",  label: { en: "2024", zh: "2024" } },
        { key: "g2025",  label: { en: "2025 (V0)", zh: "2025(V0)" } },
        { key: "gv3",    label: { en: "V3 (2026)", zh: "V3(2026)" } }
      ],
      rows: [
        { metric: { en: "Memory recall", zh: "記憶準確率" },        g2024: "41.5%", g2025: "67.9%", gv3: "82.8%" },
        { metric: { en: "Preference adherence", zh: "偏好遵循" },   g2024: "—",     g2025: "—",     gv3: "71.3%" },
        { metric: { en: "Time-sensitive accuracy", zh: "時效準確率" }, g2024: "—",  g2025: "—",     gv3: "75.1%" }
      ]
    }
  },

  /* ===================================================================== */
  /* 6 · YOUR CONTROLS (article) -> controls.html                          */
  /* ===================================================================== */
  {
    slug: "controls", layout: "article", icon: "tune",
    title:    { en: "Your controls", zh: "記憶控制" },
    subtitle: { en: "How to see, edit, pause and delete what ChatGPT remembers — and the limits to know about.",
                zh: "如何檢視、編輯、暫停與刪除 ChatGPT 記得的內容——以及需要知道的限制。" },
    sections: [
      { id: "summary", heading: { en: "The Memory Summary page", zh: "記憶摘要頁" }, blocks: [
        { type: "p", text: {
          en: "A dedicated summary lives at Settings → Personalization → Memory → Memory Summary. From there you can glance at what ChatGPT has synthesized about you, add or update facts, and set topic rules — e.g. “don't bring up my gym routine unless I ask.”",
          zh: "在「設定 → 個人化 → 記憶 → 記憶摘要」有一個專屬頁面。你可以在那裡一眼看完 ChatGPT 整理出的你、新增或更新資訊,並設定主題規則——例如「除非我問,否則別提我的健身計畫」。" } },
        { type: "p", text: {
          en: "Note: the summary does not necessarily include everything ChatGPT may remember from past conversations.",
          zh: "注意:摘要不一定涵蓋 ChatGPT 從過往對話可能記得的所有內容。" } }
      ] },
      { id: "view-edit", heading: { en: "View & edit", zh: "檢視與編輯" }, blocks: [
        { type: "ul", items: {
          en: [
            "See everything: Profile → Settings → Personalization → Memory → Manage.",
            "Just ask in chat: “What do you remember about me?”",
            "Edit or remove one entry: open the three-dot (⋮) menu next to it.",
            "Mid-conversation: say “Forget that I mentioned X.”",
            "Wipe it all: Manage → ⋮ → Delete all memories."
          ],
          zh: [
            "檢視全部:個人檔案 → 設定 → 個人化 → 記憶 → Manage。",
            "直接在對話裡問:「你記得我哪些事?」",
            "編輯或刪除單筆:點旁邊的三點選單(⋮)。",
            "對話進行中:說「忘記我提過的 X」。",
            "全部清空:Manage → ⋮ → 刪除所有記憶。"
          ] } }
      ] },
      { id: "pause", heading: { en: "Turn off or pause", zh: "關閉或暫停" }, blocks: [
        { type: "ul", items: {
          en: [
            "Toggle Memory off — this also disables referencing your chat history.",
            "Use Temporary Chat for one-off sessions that don't use or update memory — appropriate for medical, financial or confidential topics."
          ],
          zh: [
            "關閉 Memory 開關——同時會停用對聊天記錄的參考。",
            "用「臨時對話(Temporary Chat)」進行不使用、也不更新記憶的一次性對話——適合醫療、財務或機密主題。"
          ] } }
      ] },
      { id: "limits", heading: { en: "Known limits", zh: "已知限制" }, blocks: [
        { type: "ul", items: {
          en: [
            "“Don't mention this again” only hides a reference — it does not delete the underlying data.",
            "Deleting a conversation does NOT remove memories derived from it; you must delete both.",
            "Logs of deleted saved memories may be retained up to 30 days for safety and debugging.",
            "Memory and the “Improve the model for everyone” training setting are two separate switches."
          ],
          zh: [
            "「不要再提這個」只會隱藏引用——並不會刪除底層資料。",
            "刪除一段對話「不會」移除由它衍生的記憶;兩邊都要刪。",
            "已刪除的儲存記憶,其記錄可能基於安全與除錯保留最多 30 天。",
            "「記憶」與「改善模型(Improve the model for everyone)」訓練是兩個獨立的設定。"
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
    subtitle: { en: "US Plus and Pro first from June 4 2026; Free, Go and more regions follow over coming weeks. A ~5× compute reduction is what makes the free tier feasible. Memory features remain unavailable in the EU, UK, Switzerland, Norway, Iceland and Liechtenstein.",
                zh: "2026 年 6 月 4 日起美國 Plus / Pro 先行,Free、Go 與更多地區未來數週跟進。約 5× 的算力下降,才讓免費方案得以實現。歐盟、英國、瑞士、挪威、冰島、列支敦士登等地暫不提供記憶功能。" },
    plans: [
      { key: "free", name: { en: "Free", zh: "免費版" }, price: { en: "Coming weeks", zh: "未來數週" }, note: { en: "Background memory for the first time", zh: "首次獲得背景記憶" } },
      { key: "plus", name: { en: "Plus", zh: "Plus" }, price: { en: "From Jun 4 2026", zh: "2026/6/4 起" }, highlight: true, note: { en: "US first", zh: "美國先行" } },
      { key: "pro",  name: { en: "Pro", zh: "Pro" },  price: { en: "From Jun 4 2026", zh: "2026/6/4 起" }, note: { en: "US first", zh: "美國先行" } }
    ],
    features: [
      { label: { en: "Background “dreaming” memory", zh: "背景「做夢」記憶" }, values: { free: true, plus: true, pro: true } },
      { label: { en: "Captures context automatically", zh: "自動擷取脈絡" },        values: { free: true, plus: true, pro: true } },
      { label: { en: "Memory Summary page", zh: "記憶摘要頁" },                     values: { free: true, plus: true, pro: true } },
      { label: { en: "Memory capacity", zh: "記憶容量" },                          values: { free: { en: "Standard", zh: "標準" }, plus: { en: "2× larger", zh: "加倍" }, pro: { en: "2× larger", zh: "加倍" } } },
      { label: { en: "Rollout start", zh: "開始推出" },                            values: { free: { en: "Coming weeks", zh: "未來數週" }, plus: { en: "Jun 4 2026", zh: "2026/6/4" }, pro: { en: "Jun 4 2026", zh: "2026/6/4" } } },
      { label: { en: "Available in EU / UK / CH / NO …", zh: "歐盟/英國/瑞士/挪威等地" }, values: { free: false, plus: false, pro: false } }
    ]
  },

  /* ===================================================================== */
  /* 8 · PRIVACY & RISKS (kanban) -> privacy.html                          */
  /* ===================================================================== */
  {
    slug: "privacy", layout: "kanban", icon: "shield",
    title:    { en: "Privacy & risks", zh: "隱私與風險" },
    subtitle: { en: "What a memory that persists separately from your chats means for deletion, security and compliance. Some items are third-party findings or reporting, flagged as such.",
                zh: "當記憶獨立於對話、持續存在,對刪除、安全與合規意味著什麼。部分項目為第三方研究或報導,已標註。" },
    columns: [
      { key: "audit",      label: { en: "Data & audit", zh: "資料與稽核" } },
      { key: "security",   label: { en: "Security", zh: "安全風險" } },
      { key: "regulation", label: { en: "Regulation", zh: "法規與合規" } },
      { key: "concerns",   label: { en: "User concerns", zh: "使用者疑慮" } }
    ],
    cards: [
      { column: "audit", title: { en: "Deleting a chat ≠ deleting memory", zh: "刪對話 ≠ 刪記憶" },
        body: { en: "Memories sit in a separate layer; removing the source conversation does not remove memories derived from it. Delete both.",
                zh: "記憶存在獨立資料層;刪除來源對話不會移除由它衍生的記憶。兩邊都要刪。" }, tags: ["audit"] },
      { column: "audit", title: { en: "30-day retention", zh: "30 天保留" },
        body: { en: "Logs of deleted saved memories may be retained up to 30 days for safety and debugging.",
                zh: "已刪除的儲存記憶記錄,可能基於安全與除錯保留最多 30 天。" } },
      { column: "audit", title: { en: "The summary isn't complete", zh: "摘要並不完整" },
        body: { en: "The Memory Summary page may not include everything ChatGPT remembers.",
                zh: "記憶摘要頁不一定涵蓋 ChatGPT 記得的所有內容。" } },
      { column: "security", title: { en: "Prompt-injection surface", zh: "Prompt injection 風險" },
        body: { en: "Tenable Research (Nov 2025): because memories are appended to the system prompt, malicious third-party content could alter persistent memory and create exfiltration paths. OpenAI hasn't said whether V3 addresses it.",
                zh: "Tenable Research(2025/11):因記憶被附加進 system prompt,第三方惡意內容可能竄改長期記憶、形成外洩路徑。OpenAI 未說明 V3 是否已處理。" }, tags: ["research"] },
      { column: "security", title: { en: "Context bleed", zh: "脈絡滲漏" },
        body: { en: "Information from one conversation can surface unexpectedly in another months later — cross-context personalization within a single account.",
                zh: "某次對話的資訊,可能在數月後的另一段對話意外浮現——帳號內的跨脈絡個人化。" } },
      { column: "regulation", title: { en: "GDPR profiling", zh: "GDPR 行為輪廓" },
        body: { en: "Persistent behavioral profiling triggers consent and erasure obligations; memory stays unavailable across the EU, UK and more.",
                zh: "持續性的行為輪廓觸發同意與被遺忘權義務;記憶在歐盟、英國等地暫不提供。" }, tags: ["EU"] },
      { column: "regulation", title: { en: "EU AI Act transparency", zh: "EU AI Act 透明度" },
        body: { en: "Chatbot transparency requirements take effect Aug 2 2026 — within two months of this rollout.",
                zh: "聊天機器人透明度要求自 2026/8/2 生效——距這次推出不到兩個月。" } },
      { column: "regulation", title: { en: "A prior €15M fine", zh: "前例:€15M 罰款" },
        body: { en: "Italy fined OpenAI €15 million in December 2024 for GDPR violations.",
                zh: "義大利曾於 2024 年 12 月,因 GDPR 違規對 OpenAI 處 €15M(約 1,500 萬歐元)罰款。" }, tags: ["report"] },
      { column: "concerns", title: { en: "People feel chats are sensitive", zh: "聊天內容被視為敏感" },
        body: { en: "A 2025 survey found 82% of respondents considered their chatbot conversations sensitive or highly sensitive.",
                zh: "一份 2025 年的調查指出,82% 受訪者認為自己的聊天內容敏感或高度敏感。" } },
      { column: "concerns", title: { en: "No single “forget everything”", zh: "沒有「全部忘掉」按鈕" },
        body: { en: "There's no one button to wipe everything everywhere — you must delete from several places.",
                zh: "沒有一鍵清除所有地方的按鈕——你得到多處分別刪除。" } },
      { column: "concerns", title: { en: "It can still be wrong", zh: "它仍可能出錯" },
        body: { en: "Errors and confabulation remain possible; verify anything sensitive before relying on it.",
                zh: "錯誤與杜撰仍可能發生;敏感資訊在採信前請自行核對。" } }
    ]
  },

  /* ===================================================================== */
  /* 9 · FAQ (faq) -> faq.html                                             */
  /* ===================================================================== */
  {
    slug: "faq", layout: "faq", icon: "quiz",
    title:    { en: "FAQ", zh: "常見問題" },
    subtitle: { en: "Quick answers about ChatGPT's Dreaming memory.", zh: "關於 ChatGPT 做夢記憶的快速問答。" },
    qa: [
      { q: { en: "What is Dreaming?", zh: "Dreaming 是什麼?" },
        a: { en: "A background-synthesis memory for ChatGPT that automatically reads across your conversations, builds and updates an understanding of you, and applies it — without you saying “remember this.”",
             zh: "一套背景同步的 ChatGPT 記憶系統,會自動讀過你的對話、建立並更新對你的理解並加以運用,你不必說「記住這件事」。" } },
      { q: { en: "When did it launch and who gets it?", zh: "什麼時候推出、誰能用?" },
        a: { en: "Rollout began June 4 2026 for US Plus and Pro users; Free, Go and other regions follow over the coming weeks.",
             zh: "2026 年 6 月 4 日起,美國 Plus / Pro 先行;Free、Go 與其他地區未來數週陸續開放。" } },
      { q: { en: "Where is it unavailable?", zh: "哪些地區不支援?" },
        a: { en: "Memory features remain unavailable in the EU, UK, Switzerland, Norway, Iceland and Liechtenstein.",
             zh: "歐盟、英國、瑞士、挪威、冰島、列支敦士登等地暫不提供記憶功能。" } },
      { q: { en: "How does it actually remember me?", zh: "它到底怎麼記住我?" },
        a: { en: "An asynchronous background process synthesizes many conversations at once and injects a summary into the system prompt at the start of each new chat.",
             zh: "一個非同步的背景程序同時整理多段對話,並在每次新對話開頭把摘要注入 system prompt。" } },
      { q: { en: "Can I see and change what it remembers?", zh: "我能看到並修改它記得什麼嗎?" },
        a: { en: "Yes. Settings → Personalization → Memory → Memory Summary lets you view, edit and add facts, and set which topics it shouldn't raise.",
             zh: "可以。設定 → 個人化 → 記憶 → 記憶摘要,可檢視、編輯、新增,並設定哪些主題不要提。" } },
      { q: { en: "How do I delete or turn it off?", zh: "怎麼刪除或關閉?" },
        a: { en: "Delete single entries or all of them under Manage; toggle Memory off; or use Temporary Chat. Note: deleting a conversation does not automatically remove memories derived from it.",
             zh: "在 Manage 刪除單筆或全部;關閉 Memory 開關;或使用臨時對話。注意:刪除對話不會自動移除由它衍生的記憶。" } },
      { q: { en: "Are the benchmark numbers reliable?", zh: "那些效能數字可信嗎?" },
        a: { en: "They are OpenAI's own internal figures as reported by the press (e.g. 82.8% memory recall) and have not been independently verified — treat them as indicative.",
             zh: "那是 OpenAI 內部自評、由外媒引述的數據(例如記憶準確率 82.8%),未經獨立第三方驗證,僅供參考。" } },
      { q: { en: "What are the privacy risks?", zh: "有什麼隱私風險?" },
        a: { en: "Memory is stored separately from source chats, which complicates deletion; researchers have also flagged prompt-injection risk. See the Privacy & risks page.",
             zh: "記憶與來源對話分開儲存,使刪除較複雜;研究也示警 prompt injection 風險。詳見「隱私與風險」頁。" } },
      { q: { en: "Is this website official?", zh: "這個網站是官方的嗎?" },
        a: { en: "No. It's an unofficial bilingual digest compiled from OpenAI's announcement and press coverage, not affiliated with OpenAI.",
             zh: "不是。這是依 OpenAI 公告與外媒報導整理的非官方中英摘要,與 OpenAI 無關。" } }
    ]
  }
];
