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

   CLAUDE-SIDE SOURCES (read in full, for the compare / claude-* pages):
     Anthropic cookbook, "Dreaming with a dynamic workflow" (Brad Abrams, 2026-11-02)
     https://platform.claude.com/cookbook/managed-agents-cma-dreaming-with-a-dynamic-workflow
     Anthropic research, "The components of agent memory" (Lance Martin, 2026-11-06)
     https://www.anthropic.com/research/components-of-agent-memory
     Every figure on those pages is quoted from these two texts. Where OpenAI's
     announcement is silent on a dimension, the comparison says so rather
     than guessing.

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
  footer:   { en: "Unofficial digest · not affiliated with OpenAI or Anthropic. Sources: OpenAI, “Dreaming: Better memory for a more helpful ChatGPT” (Jun 4 2026); Anthropic, “Dreaming with a dynamic workflow” cookbook (Nov 2 2026) and “The components of agent memory” (Nov 6 2026). OpenAI's eval charts publish no citable numbers, so none are invented here; privacy items are general context, not from the announcement.",
              zh: "非官方整理 · 與 OpenAI、Anthropic 皆無關。來源:OpenAI〈Dreaming: Better memory for a more helpful ChatGPT〉(2026/6/4);Anthropic cookbook〈Dreaming with a dynamic workflow〉(2026/11/2)與研究文〈The components of agent memory〉(2026/11/6)。OpenAI 評測以圖表呈現、未公布可引用數值,本站不杜撰數字;隱私章節為一般延伸脈絡,非公告內容。" },
  /* nav + hub group headings; every page names its group */
  groups: {
    start:  { en: "Start here",          zh: "從這裡開始" },
    openai: { en: "ChatGPT · OpenAI",    zh: "ChatGPT · OpenAI" },
    claude: { en: "Claude · Anthropic",  zh: "Claude · Anthropic" }
  }
};

window.SITE_PAGES = [

  /* ===================================================================== */
  /* 1 · HOME (hub) -> index.html                                          */
  /* ===================================================================== */
  {
    slug: "home", group: "start", layout: "hub", icon: "bedtime",
    title:    { en: "Overview", zh: "總覽" },
    subtitle: { en: "On June 4 2026 OpenAI began rolling out ChatGPT's most capable “dreaming” memory yet — a background process that synthesizes who you are from past chats, without you ever saying “remember this.” Five months later Anthropic published Claude's take: a dreaming workflow developers assemble themselves, plus a research post on agent memory. This unofficial bilingual digest covers all three primary sources and compares them point by point.",
                zh: "2026 年 6 月 4 日,OpenAI 開始推出 ChatGPT 至今最強的「做夢(dreaming)」記憶——在背景把你過往的對話整理成「你是誰」,你不必說「記住這件事」,它也記得。五個月後,Anthropic 公開了 Claude 的做法:一套讓開發者自己組裝的做夢流程,加上一篇 agent 記憶研究。本站把這三份一手資料整理成中英雙語,並逐項對照。" },
    featured: "compare",
    featuredKicker: { en: "New · side-by-side", zh: "新增 · 逐項對照" },
    featuredCta:    { en: "Read the comparison", zh: "看完整比較" },
    stats: [
      { value: 5,   label: { en: "× less compute to serve ChatGPT Free users (approx., OpenAI)",       zh: "× 更省算力,讓 ChatGPT 免費版也能用(約,OpenAI)" } },
      { value: 3,   label: { en: "jobs of “good memory” OpenAI evaluates",                            zh: "OpenAI 評估「好記憶」的三件事" } },
      { value: 3,   label: { en: "agent roles in Claude's dream: lead, analyzer, organizer",          zh: "Claude 做夢流程的三種 agent:lead、analyzer、organizer" } },
      { value: 128, label: { en: "dreaming sessions in Anthropic's wiki eval (score 13% → 48%)",       zh: "Anthropic wiki 評測的做夢 session 數(得分 13% → 48%)" } }
    ]
  },

  /* ===================================================================== */
  /* 2 · CHATGPT vs CLAUDE (versus) -> compare.html                         */
  /*   Sources: OpenAI announcement (2026-06-04); Anthropic cookbook         */
  /*   (2026-11-02) and research post (2026-11-06). "Not stated" means the   */
  /*   source is silent — not that the feature is absent.                    */
  /* ===================================================================== */
  {
    slug: "compare", group: "start", layout: "versus", icon: "compare_arrows",
    title:    { en: "ChatGPT vs Claude: two ways to dream", zh: "ChatGPT × Claude:兩種做夢" },
    navTitle: { en: "ChatGPT vs Claude", zh: "ChatGPT × Claude 比較" },
    subtitle: { en: "Same metaphor, two designs. OpenAI ships dreaming as an invisible background feature inside ChatGPT; Anthropic breaks it into parts developers assemble, tune and audit themselves — and publishes the research numbers. A point-by-point comparison of three primary sources.",
                zh: "同一個比喻,兩種做法。OpenAI 把「做夢」做成 ChatGPT 裡看不見的背景功能;Anthropic 則把它拆成開發者自己組裝、調整、稽核的元件,並公開研究數據。以下依三份一手資料逐項對照。" },
    blurb:    { en: "Who each one serves, how it runs, what it outputs, how it stays correct, and what it costs — side by side.",
                zh: "服務誰、怎麼跑、產出什麼、怎麼保持正確、花多少錢——左右並排一次看完。" },
    dimLabel: { en: "Dimension", zh: "比較面向" },
    sides: [
      { key: "openai", name: { en: "ChatGPT dreaming", zh: "ChatGPT 做夢" },
        meta: { en: "OpenAI · announced Jun 4 2026", zh: "OpenAI · 2026/6/4 公告" } },
      { key: "claude", name: { en: "Claude dreaming", zh: "Claude 做夢" },
        meta: { en: "Anthropic · cookbook Nov 2 + research Nov 6 2026", zh: "Anthropic · 2026/11/2 cookbook + 11/6 研究文" } }
    ],
    takeaways: [
      { title: { en: "The same intuition", zh: "同一個直覺" },
        body:  { en: "Both define dreaming as looking back over past conversations while no one is waiting, so the next session starts with the right context. Anthropic names its inspirations outright: hippocampal replay during sleep, and the “sleep-time compute” idea from Letta and UC Berkeley.",
                 zh: "兩邊都把做夢定義為:趁沒人在等的時候回頭整理過去的對話,讓下一次一開始就有對的脈絡。Anthropic 直接點名靈感來源:睡眠時海馬迴的重播,以及 Letta 與 UC Berkeley 提出的「sleep-time compute」。" } },
      { title: { en: "Different audiences", zh: "服務的對象不同" },
        body:  { en: "ChatGPT dreams about you, the person: it happens automatically and you see a summary. Claude's cookbook dreams for your agent: the developer decides when it runs, which transcripts it reads and what shape the memory takes.",
                 zh: "ChatGPT 的做夢記的是「你這個人」,自動發生,你看得到的是一頁摘要。Claude 的 cookbook 記的是「你的 agent 學到的事」,何時跑、讀哪些逐字稿、記憶長什麼樣,都由開發者決定。" } },
      { title: { en: "Different transparency", zh: "公開程度不同" },
        body:  { en: "OpenAI shows its evals as charts with no citable figures and does not describe the architecture. Anthropic prints every prompt in full, reports measured costs, and publishes eval percentages.",
                 zh: "OpenAI 的評測以圖表呈現、沒有可引用的數字,也沒有描述架構。Anthropic 把每一份 prompt 全文印出來,附上實測成本,並公布評測百分比。" } }
    ],
    groups: [
      { heading: { en: "What it is", zh: "定位" }, rows: [
        { dim:    { en: "What it is", zh: "是什麼" },
          openai: { en: "“A significantly more capable and compute-efficient memory architecture built on top of dreaming” — ChatGPT's memory system itself.",
                    zh: "「建立在做夢之上、明顯更強也更省算力的記憶架構」——就是 ChatGPT 的記憶系統本身。" },
          claude: { en: "A cookbook to build “a small working dream” as a Managed Agents dynamic workflow. Anthropic also runs Dreams, a Managed Agents research preview that reads a memory store plus past sessions and writes a reorganized copy to a new store.",
                    zh: "一份 cookbook,教你用 Managed Agents 的動態工作流程做出「一個小而可用的夢」。另有官方的 Dreams 研究預覽版:讀取 memory store 與過去的 session,把整理後的版本寫進新的 store。" } },
        { dim:    { en: "Who uses it", zh: "誰在用" },
          openai: { en: "ChatGPT users. Plus and Pro in the US from Jun 4 2026; more countries and Free and Go users over the following weeks.",
                    zh: "ChatGPT 使用者。2026/6/4 起美國 Plus、Pro 可用;更多國家與 Free、Go 於之後數週陸續開放。" },
          claude: { en: "Developers building agents on the Claude API with Managed Agents beta access (Python 3.11+, anthropic SDK 2.x).",
                    zh: "用 Claude API 打造 agent、且有 Managed Agents beta 權限的開發者(Python 3.11 以上、anthropic SDK 2.x)。" } },
        { dim:    { en: "What gets remembered", zh: "記住什麼" },
          openai: { en: "You: preferences, projects and constraints — e.g. your underwater camera setup, that you're vegetarian, a July trip to Singapore.",
                    zh: "你這個人:偏好、專案與限制——例如你的水下相機組合、你吃素、你 7 月要去新加坡。" },
          claude: { en: "What the agent learned on the job: commands and flags that worked, decisions and when they were made, lessons learned the hard way. Change INSTRUCTIONS and it can be organized around a person instead.",
                    zh: "agent 工作中學到的事:有效的指令與旗標、做過的決定與時間、吃過虧才學到的教訓。改寫 INSTRUCTIONS,也能改成以「一個人」為中心整理。" } }
      ] },
      { heading: { en: "How it runs", zh: "怎麼運作" }, rows: [
        { dim:    { en: "Input", zh: "讀什麼" },
          openai: { en: "Your chat history, across many conversations.", zh: "你的對話歷史,跨很多段對話。" },
          claude: { en: "The agent's finished sessions, exported as one plain-text transcript per session. Logs from other agents work too (.txt, .log, .json, .jsonl, .md).",
                    zh: "agent 已結束的 session,每個匯出成一份純文字逐字稿。其他 agent 的紀錄也行(.txt、.log、.json、.jsonl、.md)。" } },
        { dim:    { en: "When it runs", zh: "什麼時候跑" },
          openai: { en: "A background process. The announcement does not say how often.", zh: "背景程序。公告沒有說明多久跑一次。" },
          claude: { en: "When you run the notebook, or nightly at 1 AM from cron (dreaming_nightly.py). Each run takes sessions created since the last run; one still running is skipped.",
                    zh: "你手動跑 notebook 時,或用 cron 每晚 1 點跑 dreaming_nightly.py。每次只取上次之後建立的 session,當下還在跑的會跳過。" } },
        { dim:    { en: "Who does the work", zh: "誰在做" },
          openai: { en: "Not described.", zh: "公告未說明。" },
          claude: { en: "Three agents. A lead (Claude Sonnet 5.5) writes and starts the workflow; one analyzer (Claude Haiku 5.5) per transcript, in groups of about 20; an organizer (Claude Haiku 5.5) tidies the store once at the end.",
                    zh: "三種 agent。lead(Claude Sonnet 5.5)撰寫並啟動工作流程;每份逐字稿一個 analyzer(Claude Haiku 5.5),約 20 份一組;最後由 organizer(Claude Haiku 5.5)整理一次。" } },
        { dim:    { en: "Method", zh: "做法" },
          openai: { en: "Not described. The stated goals are freshness, continuity and relevance.", zh: "公告未說明。目標是新鮮、連續、相關。" },
          claude: { en: "Each analyzer reads its whole transcript, then verifies what memory already claims, enriches it (identifiers, commands, staleness notes, lessons), and organizes it into small linked files.",
                    zh: "每個 analyzer 先讀完整份逐字稿,再驗證記憶裡既有的說法、補上細節(識別碼、指令、過時註記、教訓),最後整理成互相連結的小檔案。" } }
      ] },
      { heading: { en: "Output and use", zh: "產出與使用" }, rows: [
        { dim:    { en: "Shape of the memory", zh: "記憶長什麼樣" },
          openai: { en: "A synthesized “memory state”. What you see is the memory summary page, showing highlights.",
                    zh: "一個整理過的「記憶狀態」。你看得到的是記憶摘要頁上的重點。" },
          claude: { en: "A wiki: small Markdown files with frontmatter, linked with [[slug]], catalogued in _index.md, stored in a Managed Agents memory store.",
                    zh: "一套 wiki:附 frontmatter 的 Markdown 小檔,用 [[slug]] 互相連結,_index.md 當目錄,存在 Managed Agents 的 memory store。" } },
        { dim:    { en: "How the next session uses it", zh: "下一次怎麼用" },
          openai: { en: "New chats start from shared context, so you don't introduce yourself from scratch.",
                    zh: "新對話從共享脈絡開始,不用每次重新自我介紹。" },
          claude: { en: "The agent mounts the store read-only. Optionally one small file (such as _index.md) goes into the system prompt as the mount's instructions, capped at 4,096 characters.",
                    zh: "agent 以唯讀方式掛載 store。也可以把一個小檔(例如 _index.md)當作掛載說明放進 system prompt,上限 4,096 字元。" } },
        { dim:    { en: "What you can change", zh: "能調整什麼" },
          openai: { en: "On the summary page: add or update information, and say which topics to bring up and when. Or ask the model about any area.",
                    zh: "在摘要頁新增或更新資訊,指定哪些主題該在何時提起;也可以直接問模型。" },
          claude: { en: "Everything: the analyzer and organizer prompts, INSTRUCTIONS, the three models, the schedule, the transcripts and which store to update.",
                    zh: "全部:analyzer 與 organizer 的 prompt、INSTRUCTIONS、三個模型、排程、讀哪些逐字稿、更新哪個 store。" } }
      ] },
      { heading: { en: "Staying correct", zh: "保持正確" }, rows: [
        { dim:    { en: "Time and staleness", zh: "時間與過時" },
          openai: { en: "“Stay current over time” is one of three goals: after the trip, “You're going to Singapore in July” becomes “You went to Singapore in July 2026”.",
                    zh: "「與時俱進」是三大目標之一:行程結束後,「你 7 月要去新加坡」會改成「你 2026 年 7 月去了新加坡」。" },
          claude: { en: "Facts are dated. A later correction keeps the old value with both dates and sources; when two claims can't both be true and neither is clearly later, the organizer marks a CONFLICT instead of guessing.",
                    zh: "事實都附日期。後來的更正會保留舊值,並註明兩邊的日期與來源;兩個說法互相矛盾、又分不出先後時,organizer 會標 CONFLICT,不會猜。" } },
        { dim:    { en: "Fixing mistakes", zh: "修正錯誤" },
          openai: { en: "The system was built to tackle staleness, correctness and scale. How corrections happen is not described.",
                    zh: "這套系統的目標之一是解決過時、出錯與規模化,但沒有說明怎麼修正。" },
          claude: { en: "Dreaming checks notes against the original transcript. In Pokémon, fixing a wrong note about which side of Mt. Moon the PokéCenter was on got Claude back into the cave and on to Cerulean City.",
                    zh: "做夢會拿原始逐字稿核對筆記。Pokémon 實驗裡,一條「PokéCenter 在月見山哪一側」的錯誤筆記被改正後,Claude 回到洞窟,最後抵達華藍市。" } },
        { dim:    { en: "Published numbers", zh: "公開的數字" },
          openai: { en: "Evals on three axes across 2024, 2025 and 2026, shown as charts. No citable percentages.",
                    zh: "三個面向、2024/2025/2026 三個世代的評測,以圖表呈現,沒有可引用的百分比。" },
          claude: { en: "Many. For example, as dreaming grew a wiki from 2 to 128 sessions, the score on 25 questions rose from 13% to 48%; better instructions took contract facts from 41 of 57 to 57 of 57.",
                    zh: "很多。例如 wiki 隨做夢從 2 個 session 增加到 128 個,25 題的得分從 13% 升到 48%;改寫指令後,合約條款從 57 條留住 41 條變成 57 條全留。" } }
      ] },
      { heading: { en: "Safety, privacy and cost", zh: "安全、隱私與成本" }, rows: [
        { dim:    { en: "Prompt injection", zh: "Prompt injection" },
          openai: { en: "Not discussed in the announcement.", zh: "公告未提及。" },
          claude: { en: "Transcripts are treated as data, never instructions. Analyzers hold five file tools only (read, write, edit, glob, grep), with no shell and an empty network allowlist; agents mount the result read-only.",
                    zh: "逐字稿一律當資料,不當指令。analyzer 只有 read、write、edit、glob、grep 五個檔案工具,沒有 shell,網路白名單是空的;agent 以唯讀方式掛載成品。" } },
        { dim:    { en: "Secrets and retention", zh: "機密與保留" },
          openai: { en: "Not discussed in the announcement; see OpenAI's Memory FAQ for controls.", zh: "公告未提及;控制方式請見 OpenAI 的 Memory FAQ。" },
          claude: { en: "Credentials are never copied into memory. Managed Agents sessions aren't eligible for zero data retention or HIPAA, so the notebook deletes the session after exporting it. Every write is a memory version you can audit for 30 days.",
                    zh: "不把憑證抄進記憶。Managed Agents 的 session 不適用零資料保留(ZDR)與 HIPAA,所以 notebook 匯出後就刪掉 session。每次寫入都是一個 memory version,可稽核 30 天。" } },
        { dim:    { en: "Cost", zh: "成本" },
          openai: { en: "About 5× less compute to serve Free users, alongside more memory capacity for Plus and Pro. Part of ChatGPT plans (Free included), not billed per run.",
                    zh: "服務免費版的算力約降低 5×,Plus、Pro 的記憶容量也會增加。包含在 ChatGPT 方案內(含免費版),不按次計費。" },
          claude: { en: "Paid per run, at list price. 11 example transcripts (283 KB): $0.36, about 2.5 minutes. 50 long transcripts (about 12 MB): about $8, about 10 minutes. The run stops before starting if the estimate exceeds BUDGET_USD ($40 by default).",
                    zh: "每次執行照定價付費。範例 11 份逐字稿(283 KB):$0.36,約 2.5 分鐘。50 份長逐字稿(約 12 MB):約 $8,約 10 分鐘。估價超過 BUDGET_USD(預設 $40)就不會開跑。" } },
        { dim:    { en: "Review before use", zh: "使用前審閱" },
          openai: { en: "The summary page is always there to look at.", zh: "摘要頁隨時可以看。" },
          claude: { en: "No review by default: a bad transcript can reach your agent the next morning. To review first, dream into a new store, read it, then switch the agent over.",
                    zh: "預設不審閱:一份有問題的逐字稿,隔天早上就可能影響 agent。想先審,就寫進新的 store,讀過再讓 agent 改用它。" } }
      ] }
    ],
    sections: [
      { id: "shared", heading: { en: "What they share", zh: "共同點" }, blocks: [
        { type: "ul", items: {
          en: [
            "Memory is made after the fact. ChatGPT no longer relies on “remember this”; Anthropic moves memory creation into the background so it doesn't pull the agent away from its task.",
            "Time is a first-class problem. ChatGPT rewrites a trip once it's over; Claude's memory dates every fact and records what replaced what.",
            "Memory is meant to be inspectable. ChatGPT has the summary page; Claude's memory is Markdown files plus a version history you can open."
          ],
          zh: [
            "記憶是事後整理的。ChatGPT 不再靠你說「記住這個」;Anthropic 把建立記憶的工作推到背景,不讓 agent 分心。",
            "時間是核心問題。ChatGPT 會在行程結束後改寫記憶;Claude 的記憶每條事實都附日期,並記下誰取代了誰。",
            "記憶要能被檢視。ChatGPT 有摘要頁;Claude 的記憶就是一堆你打得開的 Markdown 檔,外加版本紀錄。"
          ] } }
      ] },
      { id: "differ", heading: { en: "Where they differ", zh: "關鍵差異" }, blocks: [
        { type: "h3", text: { en: "Black box vs glass box", zh: "黑盒與白盒" } },
        { type: "p", text: {
          en: "OpenAI describes what dreaming achieves, not how it works. Anthropic's cookbook prints its four prompt files in full and tells you which line to change for each behaviour.",
          zh: "OpenAI 說明了做夢達成什麼,沒說怎麼做到。Anthropic 的 cookbook 把四份 prompt 檔全文印出來,還告訴你想改哪個行為就改哪一行。" } },
        { type: "h3", text: { en: "Who pays and who sets the pace", zh: "誰付錢、誰決定節奏" } },
        { type: "p", text: {
          en: "With ChatGPT, cost is OpenAI's engineering problem (the ~5× cut is what makes Free possible). With Claude, the developer picks the schedule, the models and a budget ceiling, and sees the bill per run.",
          zh: "ChatGPT 的成本是 OpenAI 自己要解決的工程問題(約 5× 的降幅讓免費版成為可能)。Claude 則由開發者自己決定排程、模型與預算上限,每次執行都看得到帳單。" } },
        { type: "h3", text: { en: "Threat model", zh: "安全假設" } },
        { type: "p", text: {
          en: "Claude's design assumes transcripts may contain hostile text and limits every agent accordingly. OpenAI's announcement doesn't cover this. That doesn't mean ChatGPT lacks protections, only that the announcement doesn't describe any.",
          zh: "Claude 的設計假設逐字稿裡可能有惡意文字,所以處處限縮 agent 的權限。OpenAI 的公告沒有談到這一塊。這不代表 ChatGPT 沒有防護,只是公告沒有寫。" } }
      ] },
      { id: "view", heading: { en: "Our take", zh: "本站觀點" }, blocks: [
        { type: "note", tone: "opinion", title: { en: "Editorial, not from the sources", zh: "以下為本站觀點,非原文內容" },
          text: { en: "The points below are this site's reading of the three sources, not claims made by OpenAI or Anthropic.",
                  zh: "以下是本站讀完三份資料後的看法,不是 OpenAI 或 Anthropic 的說法。" } },
        { type: "ul", items: {
          en: [
            "If you use ChatGPT: dreaming works out of the box. The useful habit is checking the summary page now and then, and using a Temporary Chat for anything you'd rather it didn't learn.",
            "If you build agents: the cookbook is a template you can actually ship. The research post's lessons carry over to any memory system: tell the model what memory is for rather than how to write it, keep the always-loaded layer small, and pair a wiki with search.",
            "Neither side has solved when to write memory, how to keep it current, or how often to dream. Anthropic lists all three as open questions at the end of its post."
          ],
          zh: [
            "如果你是 ChatGPT 使用者:做夢開箱即用。值得養成的習慣是偶爾看一下摘要頁,不想讓它學到的話題就用臨時對話。",
            "如果你在做 agent:這份 cookbook 是真的能上線的範本。研究文的經驗也適用於任何記憶系統:告訴模型記憶「用來做什麼」,而不是規定它「怎麼記」;每次都會載入的那一層要小;wiki 要搭配搜尋。",
            "兩邊都還沒解決的是:什麼時候該寫記憶、怎麼保持最新、多久做一次夢。Anthropic 在研究文結尾把這三件事列為開放問題。"
          ] } }
      ] },
      { id: "sources", heading: { en: "Sources", zh: "資料來源" }, blocks: [
        { type: "links", items: [
          { label: { en: "OpenAI — Dreaming: Better memory for a more helpful ChatGPT", zh: "OpenAI —〈Dreaming: Better memory for a more helpful ChatGPT〉" },
            href: "https://openai.com/index/chatgpt-memory-dreaming/", meta: { en: "Jun 4 2026", zh: "2026/6/4" } },
          { label: { en: "Anthropic cookbook — Dreaming with a dynamic workflow", zh: "Anthropic cookbook —〈Dreaming with a dynamic workflow〉" },
            href: "https://platform.claude.com/cookbook/managed-agents-cma-dreaming-with-a-dynamic-workflow", meta: { en: "Brad Abrams · Nov 2 2026", zh: "Brad Abrams · 2026/11/2" } },
          { label: { en: "Anthropic — The components of agent memory", zh: "Anthropic —〈The components of agent memory〉" },
            href: "https://www.anthropic.com/research/components-of-agent-memory", meta: { en: "Lance Martin · Nov 6 2026", zh: "Lance Martin · 2026/11/6" } }
        ] }
      ] }
    ]
  },

  /* ===================================================================== */
  /* 3 · HOW IT WORKS (article) -> overview.html                           */
  /* ===================================================================== */
  {
    slug: "overview", group: "openai", layout: "article", icon: "neurology",
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
  /* 4 · EVOLUTION (timeline) -> timeline.html                             */
  /* ===================================================================== */
  {
    slug: "timeline", group: "openai", layout: "timeline", icon: "timeline",
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
  /* 5 · CAPABILITIES (bento) -> capabilities.html                         */
  /* ===================================================================== */
  {
    slug: "capabilities", group: "openai", layout: "bento", icon: "auto_awesome",
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
  /* 6 · HOW IT'S EVALUATED (dashboard) -> benchmarks.html                 */
  /* ===================================================================== */
  {
    slug: "benchmarks", group: "openai", layout: "dashboard", icon: "query_stats",
    blurb: { en: "Three axes across three generations, shown as charts — and why this site quotes no percentages.", zh: "三個面向 × 三個世代的圖表評測——以及為什麼本站不引用任何百分比。" },
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
  /* 7 · YOUR CONTROLS (article) -> controls.html                          */
  /* ===================================================================== */
  {
    slug: "controls", group: "openai", layout: "article", icon: "tune",
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
  /* 8 · ROLLOUT (comparison) -> rollout.html                              */
  /* ===================================================================== */
  {
    slug: "rollout", group: "openai", layout: "comparison", icon: "rocket_launch",
    blurb: { en: "US Plus and Pro first, then more countries plus Free and Go — made practical by ~5× less serving compute.", zh: "美國 Plus、Pro 先開,接著更多國家與 Free、Go——靠約 5× 更省的算力才可行。" },
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
  /* 9 · PRIVACY & RISKS (kanban) -> privacy.html                          */
  /* ===================================================================== */
  {
    slug: "privacy", group: "openai", layout: "kanban", icon: "shield",
    blurb: { en: "General, well-known considerations for persistent memory — extended context, not from the announcement.", zh: "持續性記憶的一般考量——延伸脈絡,非公告內容。" },
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
  /* 10 · FAQ (faq) -> faq.html                                             */
  /* ===================================================================== */
  {
    slug: "faq", group: "openai", layout: "faq", icon: "quiz",
    title:    { en: "FAQ", zh: "常見問題" },
    subtitle: { en: "Quick answers about ChatGPT's dreaming memory (and how Claude compares).", zh: "關於 ChatGPT 做夢記憶的快速問答(以及 Claude 的對照)。" },
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
      { q: { en: "Does Claude dream too?", zh: "Claude 也會做夢嗎?" },
        a: { en: "Yes, in a different form. In November 2026 Anthropic published a cookbook for building a dreaming workflow on Claude Managed Agents, a Dreams research preview, and a research post on agent memory. Claude's version is a developer building block, not a consumer feature — see the ChatGPT vs Claude page.",
             zh: "會,但形式不同。2026 年 11 月,Anthropic 公開了一份在 Claude Managed Agents 上打造做夢流程的 cookbook、一個 Dreams 研究預覽版,以及一篇 agent 記憶研究。Claude 的做夢是給開發者組裝的元件,不是消費者功能——詳見「ChatGPT × Claude 比較」頁。" } },
      { q: { en: "Is this website official?", zh: "這個網站是官方的嗎?" },
        a: { en: "No. It's an unofficial bilingual digest of OpenAI's announcement, not affiliated with OpenAI. For anything authoritative, see the original article and the Memory FAQ.",
             zh: "不是。這是 OpenAI 公告的非官方中英整理,與 OpenAI 無關。任何具權威性的內容,請見原文與 Memory FAQ。" } }
    ]
  },
  /* ===================================================================== */
  /* 11 · CLAUDE: THE COOKBOOK (article) -> claude-workflow.html           */
  /*   Source: Anthropic cookbook "Dreaming with a dynamic workflow"       */
  /*   (Brad Abrams, 2026-11-02). Figures are the cookbook's own.          */
  /* ===================================================================== */
  {
    slug: "claude-workflow", group: "claude", layout: "article", icon: "account_tree",
    title:    { en: "Building a dream with Managed Agents", zh: "用 Managed Agents 做一個夢" },
    navTitle: { en: "The cookbook", zh: "實作:Cookbook" },
    subtitle: { en: "Anthropic's cookbook builds a small, working dream: a Managed Agents dynamic workflow that reads finished sessions, distills them into a wiki-style memory store that future sessions mount read-only, and can run every night from cron.",
                zh: "Anthropic 的 cookbook 做了一個小而可用的夢:用 Managed Agents 的動態工作流程讀取已結束的 session,提煉成 wiki 式的 memory store,讓之後的 session 以唯讀方式掛載,而且可以用 cron 每晚自動跑。" },
    blurb:    { en: "Lead, analyzer and organizer agents turn finished sessions into a linked Markdown wiki — prompts, costs and safeguards included.",
                zh: "lead、analyzer、organizer 三種 agent 把結束的 session 變成互相連結的 Markdown wiki——prompt、成本與防護都公開。" },
    sections: [
      { id: "idea", heading: { en: "The idea", zh: "想法" }, blocks: [
        { type: "p", text: {
          en: "Your agents run many sessions, and each one starts knowing nothing. Dreaming is a background pass that looks back over past transcripts with hindsight and improves the memory future sessions read: it can correct what turned out to be wrong, build a representation that's easier to search, and keep what matters within easy reach.",
          zh: "你的 agent 會跑很多個 session,而每一個開始時都一無所知。做夢是一道背景程序:帶著後見之明回頭看過去的逐字稿,改善未來 session 會讀到的記憶——修正後來證明是錯的內容、建立更容易搜尋的形式,並把重要的東西放在隨手可得的地方。" } },
        { type: "note", tone: "info", title: { en: "Cookbook vs the Dreams preview", zh: "Cookbook 與 Dreams 預覽版的差別" },
          text: { en: "Dreams is a Managed Agents research preview: it reads a memory store alongside past sessions and writes a reorganized copy to a new store, taking session IDs directly. The cookbook builds the same idea yourself, so you choose the prompts, models and inputs, and it updates your store in place.",
                  zh: "Dreams 是 Managed Agents 的研究預覽版:讀取 memory store 與過去的 session,把整理後的版本寫進新的 store,可以直接吃 session ID。Cookbook 則是自己動手做同一件事,prompt、模型、輸入都由你決定,並且直接更新原本的 store。" } }
      ] },
      { id: "pipeline", heading: { en: "The pipeline", zh: "流程" }, blocks: [
        { type: "flow", items: [
          { title: { en: "Export sessions", zh: "匯出 session" },
            body:  { en: "Each finished session (idle or terminated) becomes one plain-text transcript with labeled blocks: USER:, AGENT:, TOOL CALL, TOOL RESULT. Tool results matter most — they show what the agent actually did.",
                     zh: "每個已結束(idle 或 terminated)的 session 匯出成一份純文字逐字稿,用 USER:、AGENT:、TOOL CALL、TOOL RESULT 標記區塊。工具結果最重要,它記錄了 agent 實際做了什麼。" } },
          { title: { en: "One message to the lead agent", zh: "給 lead agent 一則訊息" },
            body:  { en: "You describe the work in plain words. The lead agent (Claude Sonnet 5.5) writes the workflow and starts it as a workflow run. It never reads a transcript itself.",
                     zh: "用白話描述要做的事。lead agent(Claude Sonnet 5.5)據此寫出工作流程並啟動。它自己從不讀逐字稿。" } },
          { title: { en: "Analyze phase", zh: "Analyze 階段" },
            body:  { en: "One analyzer (Claude Haiku 5.5) per transcript, in groups of about 20. Each reads its transcript in full, then verifies, enriches and organizes the shared memory files.",
                     zh: "每份逐字稿一個 analyzer(Claude Haiku 5.5),約 20 個一組。每個都先讀完整份逐字稿,再驗證、補充、整理共用的記憶檔。" } },
          { title: { en: "Organize phase", zh: "Organize 階段" },
            body:  { en: "One organizer (Claude Haiku 5.5) runs after every analyzer finishes: it merges duplicates, fixes links, marks conflicts and completes _index.md, keeping every fact.",
                     zh: "所有 analyzer 結束後,organizer(Claude Haiku 5.5)跑一次:合併重複、修正連結、標記矛盾、補齊 _index.md,一條事實都不丟。" } },
          { title: { en: "Mount read-only", zh: "唯讀掛載" },
            body:  { en: "Your agent's next session mounts the memory store read-only and starts from _index.md.",
                     zh: "agent 的下一個 session 以唯讀方式掛載 memory store,從 _index.md 開始讀。" } }
        ] }
      ] },
      { id: "analyzer", heading: { en: "What an analyzer does", zh: "analyzer 怎麼工作" }, blocks: [
        { type: "p", text: {
          en: "The analyzer's prompt holds the method, so changing it changes what your memory keeps. It has four steps:",
          zh: "做法寫在 analyzer 的 prompt 裡,改 prompt 就能改變記憶留下什麼。一共四步:" } },
        { type: "ul", items: {
          en: [
            "Read the whole transcript — page through it, but don't stop part-way.",
            "Verify what memory already claims against it: leave unsupported claims alone, fix contradictions, and downgrade claims the transcript shows were uncertain.",
            "Enrich with exact identifiers, commands, values, staleness notes, and approaches that burned turns before the right one.",
            "Organize into small files with frontmatter (name, description), link related topics with [[slug]], and keep _index.md current."
          ],
          zh: [
            "讀完整份逐字稿——可以分頁讀,但不能讀到一半就停。",
            "拿它驗證記憶既有的說法:沒有證據支持的先別動,互相矛盾的要修,逐字稿顯示當時其實不確定的要降級。",
            "補上精確的識別碼、指令、數值、過時註記,以及繞了遠路才找到正解的過程。",
            "整理成附 frontmatter(name、description)的小檔,用 [[slug]] 連結相關主題,並維持 _index.md 最新。"
          ] } },
        { type: "p", text: {
          en: "Analyzers run at the same time on one shared directory, so the prompt tells them to re-read a file right before editing it, add with targeted edits instead of rewriting, and read every write back to confirm it landed. A last section tells them to work in as few turns as possible, because every turn resends everything they've read.",
          zh: "多個 analyzer 同時寫同一個資料夾,所以 prompt 要求它們:編輯前重讀檔案、用局部修改而不是整檔重寫、每次寫完讀回來確認真的寫進去了。最後一段要求盡量減少輪數,因為每一輪都會把讀過的內容整包重送一次。" } },
        { type: "h3", text: { en: "A worked example: facts go stale", zh: "實例:事實會過時" } },
        { type: "p", text: {
          en: "The example set is eleven synthetic files about tidewick, a fictional Python project. Early on, make test only passes with TIDEWICK_DATA_DIR set; a later release removes that need. The memory has to date and supersede the early fact, not copy it — and the organizer resolved exactly that conflict as version-dependent.",
          zh: "範例資料是 11 份關於虛構 Python 專案 tidewick 的合成檔案。一開始,make test 要設定 TIDEWICK_DATA_DIR 才會過;後來的版本拿掉了這個需求。記憶必須替早期的事實標日期、標明已被取代,而不是照抄——organizer 最後也正是把這個矛盾判定為「依版本而定」。" } }
      ] },
      { id: "safety", heading: { en: "Treating transcripts as untrusted", zh: "把逐字稿當成不可信的輸入" }, blocks: [
        { type: "p", text: {
          en: "A tool result inside a transcript can say “ignore your instructions”. The cookbook's defenses:",
          zh: "逐字稿裡的某個工具結果,可能寫著「忽略你的指令」。cookbook 的防護如下:" } },
        { type: "ul", items: {
          en: [
            "Prompts treat transcripts, memory files and run results as data, not instructions. The transcript's text never enters a prompt; the analyzer opens the file with its read tool.",
            "The analyzer holds five file tools only — read, write, edit, glob, grep — with no shell or web access and an empty network allowlist.",
            "Analyzers never copy secrets into memory; they name the credential (“the deploy token”) instead.",
            "At worst an injected instruction changes what the store says and spends up to your budget. So the store is mounted read-only everywhere except the dreaming session itself."
          ],
          zh: [
            "prompt 把逐字稿、記憶檔與執行結果都當成資料,不當指令。逐字稿的內容不會進到 prompt 裡,analyzer 是用 read 工具自己打開檔案。",
            "analyzer 只有 read、write、edit、glob、grep 五個檔案工具,沒有 shell、沒有網路,網路白名單是空的。",
            "不把機密抄進記憶,只寫憑證的名字(例如「部署用的 token」)。",
            "最壞的情況,是被注入的指令改掉 store 的內容、花光你的預算。所以除了做夢的那個 session,其他地方一律唯讀掛載。"
          ] } },
        { type: "note", tone: "warn", title: { en: "Load into the system prompt with care", zh: "放進 system prompt 要小心" },
          text: { en: "You can pass a small file from the store (such as _index.md) as the mount's instructions, capped at 4,096 characters. It costs tokens in every session, a wrong line reaches every session, and anything a transcript slipped in would steer every session.",
                  zh: "可以把 store 裡的一個小檔(例如 _index.md)當作掛載說明放進 system prompt,上限 4,096 字元。但它每個 session 都要付 token,錯的一行會影響每個 session,逐字稿偷塞進來的東西也會影響每個 session。" } }
      ] },
      { id: "cost", heading: { en: "Cost and limits", zh: "成本與限制" }, blocks: [
        { type: "stats", items: [
          { value: "$0.36", label: { en: "11 example transcripts (283 KB), about 2.5 min", zh: "11 份範例逐字稿(283 KB),約 2.5 分鐘" } },
          { value: "≈$8",   label: { en: "50 long transcripts (≈12 MB), about 10 min", zh: "50 份長逐字稿(約 12 MB),約 10 分鐘" } },
          { value: "64",    label: { en: "threads a workflow run works on at once", zh: "一個 workflow run 同時處理的 thread 上限" } },
          { value: "500",   label: { en: "files one session can mount", zh: "一個 session 最多掛載的檔案數" } }
        ] },
        { type: "p", text: {
          en: "Costs are at list price. On the 50-transcript set, the settings that keep cost down (grouping, the fewer-turns prompt section, plain-text transcripts and a Haiku organizer) took a dream from about $10 to about $8, and the resulting stores held about the same share of a fixed list of facts. The run prints an estimate first and stops if it's over BUDGET_USD ($40 by default, a ceiling rather than an expected cost).",
          zh: "以上都是定價表價格。在 50 份逐字稿的測試中,幾個省錢設定(分組、減少輪數的 prompt 段落、純文字逐字稿、用 Haiku 當 organizer)讓一次做夢從約 $10 降到約 $8,而產出的 store 涵蓋固定事實清單的比例差不多。執行前會先印出估價,超過 BUDGET_USD(預設 $40,是上限而不是預期花費)就停下。" } }
      ] },
      { id: "nightly", heading: { en: "Dreaming every night", zh: "每晚做夢" }, blocks: [
        { type: "p", text: {
          en: "dreaming_nightly.py runs the notebook from cron. It exports the agent's finished sessions since the last run and dreams over them into the same store:",
          zh: "dreaming_nightly.py 讓 cron 去跑 notebook:匯出上次之後 agent 已結束的 session,做夢後寫進同一個 store:" } },
        { type: "code", text: "0 1 * * * mkdir -p ~/.cache/memory_distill && cd /path/to/managed_agents && COOKBOOK_AGENT_ID=agent_... COOKBOOK_STORE_ID=memstore_... /path/to/python dreaming_nightly.py >> ~/.cache/memory_distill/nightly.log 2>&1" },
        { type: "ul", items: {
          en: [
            "Credentials stay with the script. The export runs on your machine; the dreaming session has no network access and no key.",
            "A failed night retries: the next night takes the same sessions again.",
            "A session still running at 1 AM is skipped, and later nights don't look back for it.",
            "There's no review by default. Each run saves a copy of the store first, and every change is a memory version you can audit for 30 days."
          ],
          zh: [
            "憑證只留在腳本這邊。匯出在你自己的機器上進行;做夢的 session 沒有網路、也沒有金鑰。",
            "某晚失敗會重試:隔天晚上會再處理同一批 session。",
            "凌晨 1 點還在跑的 session 會被跳過,之後也不會回頭補。",
            "預設不審閱。每次執行前會先備份 store,每次修改都是可稽核 30 天的 memory version。"
          ] } }
      ] },
      { id: "make-it-yours", heading: { en: "Make it yours", zh: "改成你要的樣子" }, blocks: [
        { type: "p", text: {
          en: "Three choices shape a dream: when it runs, which transcripts it reads, and what it does with them. The knobs, all set by environment variable or prompt file:",
          zh: "一個夢由三個選擇決定:何時跑、讀哪些逐字稿、拿它們做什麼。可以調整的地方(環境變數或 prompt 檔):" } },
        { type: "ul", items: {
          en: [
            "Schedule — edit the crontab line (0 1 * * 1 runs Mondays at 1 AM).",
            "Transcripts — COOKBOOK_AGENT_ID for one agent's sessions, COOKBOOK_SINCE for how far back, or point TRANSCRIPTS at a folder of logs.",
            "Pace — the last sentence of prompts/work_request.md sets the group size.",
            "Focus — INSTRUCTIONS, e.g. “This memory helps an assistant work with one person. Organize it around that person's goals, preferences and standing requests.”",
            "Shape — prompts/analyzer_system.md and prompts/organizer_system.md.",
            "Models — COOKBOOK_MODEL, COOKBOOK_ANALYZER_MODEL, COOKBOOK_ORGANIZER_MODEL. Dreaming runs in the background, so it can use a stronger model than the agent it serves."
          ],
          zh: [
            "排程:改 crontab 那一行(0 1 * * 1 是每週一凌晨 1 點)。",
            "逐字稿:COOKBOOK_AGENT_ID 指定 agent,COOKBOOK_SINCE 指定往回多久,或讓 TRANSCRIPTS 指向一個放紀錄的資料夾。",
            "節奏:prompts/work_request.md 的最後一句決定每組幾份。",
            "重點:INSTRUCTIONS,例如「這份記憶是要幫助助理服務一個人,請圍繞那個人的目標、偏好與長期要求來整理」。",
            "形式:prompts/analyzer_system.md 與 prompts/organizer_system.md。",
            "模型:COOKBOOK_MODEL、COOKBOOK_ANALYZER_MODEL、COOKBOOK_ORGANIZER_MODEL。做夢在背景執行,所以可以用比 agent 本身更強的模型。"
          ] } }
      ] },
      { id: "source", heading: { en: "Source", zh: "資料來源" }, blocks: [
        { type: "links", items: [
          { label: { en: "Anthropic cookbook — Dreaming with a dynamic workflow", zh: "Anthropic cookbook —〈Dreaming with a dynamic workflow〉" },
            href: "https://platform.claude.com/cookbook/managed-agents-cma-dreaming-with-a-dynamic-workflow", meta: { en: "Brad Abrams · Nov 2 2026", zh: "Brad Abrams · 2026/11/2" } }
        ] }
      ] }
    ]
  },

  /* ===================================================================== */
  /* 12 · CLAUDE: THE RESEARCH (article) -> claude-research.html           */
  /*   Source: Anthropic, "The components of agent memory"                 */
  /*   (Lance Martin, 2026-11-06). Every figure is quoted from the post.   */
  /* ===================================================================== */
  {
    slug: "claude-research", group: "claude", layout: "article", icon: "science",
    title:    { en: "The components of agent memory", zh: "Agent 記憶的組成" },
    navTitle: { en: "The research", zh: "研究:記憶的組成" },
    subtitle: { en: "Anthropic's research post on how Claude writes, corrects and organizes memory — and what dreaming adds, measured on CL-Bench, Pokémon Red and legal-document wikis.",
                zh: "Anthropic 的研究文:Claude 怎麼寫下、修正、整理記憶,以及做夢帶來什麼——在 CL-Bench、Pokémon 紅版與法律文件 wiki 上實測。" },
    blurb:    { en: "Memory as prediction, judging salience, and five things dreaming can do — with the eval numbers.",
                zh: "記憶是一種預測、模型怎麼判斷什麼值得記,以及做夢能做的五件事——附評測數字。" },
    sections: [
      { id: "frame", heading: { en: "Encode now, consolidate later", zh: "當下記錄,事後鞏固" }, blocks: [
        { type: "quote", text: {
          en: "Søren Kierkegaard wrote that life can only be understood backward, but it must be lived forward.",
          zh: "齊克果寫道:人生只能向後理解,卻必須向前活。" } },
        { type: "p", text: {
          en: "People encode memory constantly, but much consolidation seems to happen offline: during sleep the hippocampus replays recent experience and integrates it into the neocortex. Agents can split the work the same way — capture work in logs as it happens, then reflect on those logs to fix mistakes or build new notes. Building on the sleep-time compute idea from Letta and UC Berkeley, that reflection is what the post calls dreaming.",
          zh: "人隨時都在記錄記憶,但鞏固多半發生在離線時:睡眠中,海馬迴重播最近的經驗,把它整合進新皮質。agent 也可以這樣分工——工作時留下紀錄,事後再回頭反思,修正錯誤、寫出新的筆記。延伸 Letta 與 UC Berkeley 提出的 sleep-time compute 概念,這個反思的過程就是文中說的「做夢」。" } },
        { type: "p", text: {
          en: "“Agent memory” here means knowledge Claude gains from experience and keeps between sessions as context it can read later. It excludes weight updates, in-context learning within one conversation, and compaction.",
          zh: "文中的「agent 記憶」,指 Claude 從經驗中獲得、跨 session 保存、之後能讀取的脈絡。不包括權重更新、單次對話內的 in-context learning,也不包括 compaction(摘要取代舊的對話輪次)。" } }
      ] },
      { id: "prediction", heading: { en: "Memory is a prediction", zh: "記憶是一種預測" }, blocks: [
        { type: "p", text: {
          en: "Writing down a rule predicts the pattern will matter again. On a CL-Bench 1.0 database task — answer, see the correct solution, write memory, start the next question in a fresh session — models differed in how far they got with that learning loop:",
          zh: "寫下一條規則,就是預測這個模式之後還會用到。在 CL-Bench 1.0 的資料庫任務中——回答、看到正解、寫記憶、下一題開新 session——各模型能把這個學習迴圈走到多遠,差別很大:" } },
        { type: "ul", items: {
          en: [
            "Claude Sonnet 4.6 got as far as theories about why an answer was wrong: scattered files of untested guesses.",
            "Claude Opus 4.7 consolidated notes into one reference document and marked which facts were checked.",
            "Claude Sonnet 5 marked answers as confirmed after grading and wrote corrections when wrong.",
            "Claude Opus 5 was the first to close the loop: rules plus how it knew they were true, earlier answers, and warnings about traps. Opus 5.5 and Sonnet 5.5 also closed it."
          ],
          zh: [
            "Claude Sonnet 4.6:只走到「推測為什麼答錯」,留下一堆沒驗證過的猜測檔案。",
            "Claude Opus 4.7:把筆記整併成一份參考文件,並標出哪些事實驗證過。",
            "Claude Sonnet 5:批改後把答案標成「已確認」,答錯時寫下更正。",
            "Claude Opus 5:第一個把迴圈走完的模型——規則加上「怎麼知道它是對的」、先前的答案、踩過的陷阱。Opus 5.5 與 Sonnet 5.5 也都走完了。"
          ] } }
      ] },
      { id: "salience", heading: { en: "Judging what's worth remembering", zh: "判斷什麼值得記" }, blocks: [
        { type: "p", text: {
          en: "In Pokémon Red, about 10,000 steps in, the difference was what each model thought was worth saving:",
          zh: "在 Pokémon 紅版裡,大約第 10,000 步時,差別在於各模型覺得什麼值得存:" } },
        { type: "stats", items: [
          { value: "413", label: { en: "memory files in 225 folders — Sonnet 3.7, 1 badge", zh: "個記憶檔、225 個資料夾——Sonnet 3.7,1 枚徽章" } },
          { value: "9",   label: { en: "files in 2 folders plus global.md — Fable 5, 4 badges", zh: "個檔案、2 個資料夾加 global.md——Fable 5,4 枚徽章" } }
        ] },
        { type: "p", text: {
          en: "Sonnet 3.7 recorded everything, including things it could read off the screen every turn, so its notes kept going stale; around step 10,000 it spent 17 steps creating six files and deleting nine without making a move. Fable 5 kept only what the game doesn't tell you — strategy, plans and tested rules — with global.md as a dashboard. Opus 5.5 kept a similarly small folder and beat the game.",
          zh: "Sonnet 3.7 什麼都記,連每一輪都能直接從畫面上讀到的資訊也記,結果筆記不停過時;大約第 10,000 步時,它花了 17 步新增 6 個檔、刪掉 9 個,遊戲本身一步都沒動。Fable 5 只記遊戲不會告訴你的東西——策略、計畫與驗證過的規則,並把 global.md 當儀表板。Opus 5.5 也維持一個小資料夾,最後破關。" } },
        { type: "h3", text: { en: "Say what memory is for, not how to use it", zh: "告訴它記憶的用途,而不是用法" } },
        { type: "p", text: {
          en: "Telling Opus 5 and Opus 4.7 to “record only failures” cost them much of their gain from memory. Steering helps older models most: prompting Sonnet 4.6 to read its memory before answering and to test its theories nearly doubled its score. Sonnet 5 read its memory before answering 9 times out of 10 unprompted; Sonnet 4.6 did so less than half the time.",
          zh: "要求 Opus 5 與 Opus 4.7「只記錄失敗」,反而讓它們失去大部分來自記憶的進步。引導對較舊的模型最有用:提示 Sonnet 4.6 回答前先讀記憶、並驗證自己的推測,分數幾乎翻倍。Sonnet 5 不用提示,10 次裡有 9 次會先讀記憶;Sonnet 4.6 不到一半。" } }
      ] },
      { id: "dreaming", heading: { en: "Five things dreaming does", zh: "做夢能做的五件事" }, blocks: [
        { type: "h3", text: { en: "1 · Correct memory", zh: "1 · 修正記憶" } },
        { type: "p", text: {
          en: "Claude wrongly noted that the PokéCenter at Mt. Moon was on the east side, declared “Mt Moon DONE”, and kept dropping off a one-way ledge back onto the earlier route. Dreaming checked the note against the transcript and rewrote it; with the corrected note Claude went back into the cave and reached Cerulean City. With the uncorrected note it fell back three times and never got past the mountain.",
          zh: "Claude 誤記月見山的 PokéCenter 在東側,宣布「Mt Moon DONE」,然後一再從單向的岩階摔回原本的道路。做夢拿逐字稿核對後改寫了這條筆記;有了正確筆記,Claude 回到洞窟,抵達華藍市。沒改的那一輪摔回去三次,始終沒能翻過這座山。" } },
        { type: "h3", text: { en: "2 · Build new representations", zh: "2 · 建立新的記憶形式" } },
        { type: "p", text: {
          en: "A wiki — linked pages Claude writes and maintains — gives it a map of its own knowledge. On about 350,000 internal Stainless files (roughly 420M tokens) and 25 questions, Opus 5 agents built a wiki over successive sessions:",
          zh: "wiki——由 Claude 撰寫並維護、互相連結的頁面——等於替自己的知識畫一張地圖。在 Stainless 約 35 萬個內部檔案(約 4.2 億 token)、25 個問題上,Opus 5 agent 一輪一輪建出 wiki:" } },
        { type: "stats", items: [
          { value: "13% → 48%", label: { en: "wiki-only score, 2 → 128 dreaming sessions", zh: "只用 wiki 的得分,做夢 2 → 128 個 session" } },
          { value: "54% → 61%", label: { en: "search + wiki as the wiki grew (search alone: 53%)", zh: "搜尋 + wiki,隨 wiki 成長(只用搜尋:53%)" } },
          { value: "≈20K",      label: { en: "tokens saved per question with search + wiki", zh: "搜尋 + wiki 每題省下的 token" } },
          { value: "87% vs 73%",label: { en: "merger questions: wiki vs search alone", zh: "併購問題:wiki 對比只用搜尋" } }
        ] },
        { type: "p", text: {
          en: "The wiki helped most on questions that needed several documents, judgment or math. On a Harvey LAB task where most criteria came from a single document, it showed no clear gain; on another, the wiki grew larger than the documents themselves — like the map in Borges's “On Exactitude in Science”.",
          zh: "wiki 最有用的,是需要跨多份文件、需要判斷或計算的問題。在一個 Harvey LAB 任務裡,多數評分項目只靠單一文件就能找到,wiki 沒有明顯幫助;另一個任務的 wiki 甚至長得比原始文件還大——就像波赫士〈論科學的精確性〉裡那張跟帝國一樣大的地圖。" } },
        { type: "h3", text: { en: "3 · Promote notes up the hierarchy", zh: "3 · 把筆記往上層提升" } },
        { type: "p", text: {
          en: "Dreaming can float notes to the top layer that the harness loads into every session. That layer must stay small: injected notes cost tokens, a wrong note reaches every session, and longer instruction files reduce adherence. Claude Code's auto memory, for instance, loads only the first 200 lines or 25 KB of MEMORY.md, which works as an index.",
          zh: "做夢可以把筆記提升到最上層,由 harness 在每個 session 開始時預先載入。這一層必須很小:注入的筆記要花 token,一條錯的筆記會帶進每個 session,而指令檔越長,遵循度越低。例如 Claude Code 的 auto memory 只載入 MEMORY.md 的前 200 行或 25 KB,當作索引使用。" } },
        { type: "h3", text: { en: "4 · Focus memory on a goal", zh: "4 · 讓記憶聚焦在目標上" } },
        { type: "p", text: {
          en: "On a LAB acquisition task, several agents writing one shared table of contract terms overwrote each other, and a brief from that wiki met only 41 of 57 graded facts (72%). After a loop in which Claude reflected on its failures and rewrote the instructions — one agent per contract, quoting terms word for word — it met 57 of 57.",
          zh: "在一個 LAB 收購任務中,多個 agent 同時寫入同一張合約條款表,互相覆蓋,用這份 wiki 寫出的摘要只達成 57 項評分事實中的 41 項(72%)。讓 Claude 反思失敗、改寫建立 wiki 的指令後——每份合約由一個 agent 負責、條款逐字引用——達成 57 項中的 57 項。" } },
        { type: "h3", text: { en: "5 · Fill gaps a session leaves", zh: "5 · 補上單一 session 留下的缺口" } },
        { type: "p", text: {
          en: "A session sees only its own context; dreaming looks across many. A second dreaming pass over one wiki found nine links to a missing page and repointed them to an existing one, and added three new pages, including an index.",
          zh: "單一 session 只看得到自己的脈絡,做夢則能跨很多個 session 看。對某份 wiki 做第二輪做夢時,它找到 9 個指向不存在頁面的連結,改指向既有的頁面,並新增 3 頁,其中一頁是索引。" } }
      ] },
      { id: "open", heading: { en: "Open questions", zh: "還沒解決的問題" }, blocks: [
        { type: "ul", items: {
          en: [
            "When to write memory: in-session notes capture salience at the source but distract from the task; dreaming moves the work to the background, but its output isn't available right away.",
            "How to keep memory current: dreaming fixes mistakes but costs compute, so it may be better focused on information likely to change, or on a cadence tuned to how often memories are read.",
            "Whether transcript search should be the foundation: wikis plus search can work well, but representations need compute to keep free of accumulated errors."
          ],
          zh: [
            "什麼時候寫記憶:在 session 當下寫,能在源頭抓住重點,但會分散注意力;交給做夢可以移到背景,但產出不會馬上可用。",
            "怎麼保持最新:做夢能修錯,但要花算力,所以或許該聚焦在容易變動的資訊,或依記憶被讀取的頻率調整做夢的頻率。",
            "逐字稿搜尋是否該當基礎:wiki 加搜尋效果可以很好,但維護這些記憶形式需要算力,才能避免錯誤累積。"
          ] } }
      ] },
      { id: "source", heading: { en: "Source", zh: "資料來源" }, blocks: [
        { type: "links", items: [
          { label: { en: "Anthropic — The components of agent memory", zh: "Anthropic —〈The components of agent memory〉" },
            href: "https://www.anthropic.com/research/components-of-agent-memory", meta: { en: "Lance Martin · Nov 6 2026", zh: "Lance Martin · 2026/11/6" } }
        ] }
      ] }
    ]
  }
];
