# 英語互動學習網 - Oxford Grade 4 LevelUp

## GitHub Pages 上傳說明 (檔名已全部小寫)

### 必要檔案 (已小寫)
- `index.html` - 主頁面
- `style.css` - 樣式 (專業美化版 + Gemini 樣式)
- `app.js` - 主程式 (已內嵌 GRAMMAR_NORM.md + Gemini Flash 3.8 出題引擎)
- `.nojekyll` - GitHub Pages 必需，避免 Jekyll 處理

### 選用檔案 (文法規範)
- `grammar_norm.md` - U1/U2 完整文法範圍 + AI 出題規範
- `grammar_rules.json` - 結構化文法規則

### 上傳步驟
1. 在 GitHub 建立 repo，例如 `english-learning`
2. 將 `github_upload` 資料夾內的 4 個必要檔案上傳到 repo 根目錄
3. 到 Settings > Pages，選擇 main branch / root，儲存
4. 等 1-2 分鐘，網址 `https://你的帳號.github.io/english-learning/` 就會是美化版

### 注意
- GitHub Pages 是 Linux，檔名大小寫敏感，必須全小寫
- `index.html` 內已改為 `href="./style.css"` 和 `src="./app.js"` 全小寫
- 若之前截圖顯示 Loading... 無樣式，就是因為大小寫或快取，現在已修正

### 功能
- Gemini Flash 3.8 智慧出題 (已內嵌文法規範，鎖死 Oxford Grade 4 範圍)
- 單選選擇題，考文法不是翻譯
- iPhone / iPad / Windows 自適應
- 專業美化 UI (Indigo 漸層 + 毛玻璃)

© 2025 英語互動學習網
