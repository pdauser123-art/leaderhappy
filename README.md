# 幸福帶路雞 (leaderhappy) ｜ 品牌官方形象網站

> **帶著幸福，讓家有自己的模樣。**  
> 媽媽做了超過 25 載的手藝，一針一線，把台灣傳統「帶路雞」文化縫進每一份溫暖的祝福裡。

本專案為「幸福帶路雞」的官方靜態形象網站，採用日系極簡留白與溫潤莫蘭迪色系（鼠尾草綠、溫潤米白、柔霧粉）設計，呈現手作花布作品的細膩質感與台灣傳統婚嫁、入厝文化故事。

---

## ✨ 網站特色與功能

- **日系極簡與莫蘭迪美學**：結合 `Noto Serif TC`（思源宋體）與 `Noto Sans TC`（思源黑體），搭配毛玻璃懸浮導覽列（Glassmorphism Header），營造溫暖沉靜的閱讀體驗。
- **互動式幸福作品相簿**：
  - 支援五大主題分類即時篩選（全部作品、經典帶路雞、幸福成雙、婚嫁祝福、新居祝福）。
  - 雙欄錯落雜誌感排版，附帶作品分類標籤與懸停微距放大效果。
  - 內建原生 `<dialog>` 照片放大燈箱（Lightbox），支援滑鼠點擊與鍵盤左右方向鍵（`←` / `→`）切換瀏覽。
- **台灣帶路雞文化百科**：以手風琴（Accordion）摺疊選單整理帶路雞的由來、籃內配件象徵、迎娶與入厝流程，以及常見禁忌破解。
- **高效能圖片載入優化**：
  - 首屏主視覺採用 `fetchpriority="high"` 與 `<link rel="preload">` 加速渲染。
  - 相簿圖片全面壓縮優化，並啟用 `loading="lazy"` 與 `decoding="async"` 非同步延遲載入。
- **完整響應式設計（RWD）**：完美適配桌機、平板與手機螢幕尺寸，並支援無障礙鍵盤導覽與減少動態偏好（`prefers-reduced-motion`）。

---

## 📁 專案目錄結構

上傳至 GitHub 時，請確保檔案結構維持如下，圖片方能正常顯示：

```text
.
├── index.html               # 網站主頁面（包含完整 HTML、CSS 與 JavaScript）
├── README.md                # 專案說明文件
└── assets/                  # 靜態圖片資源資料夾
    ├── brand-logo.png       # 品牌 Logo
    ├── hero-chickens.png    # 首頁主視覺圖片
    ├── hands.png            # 媽媽手作情境示意圖
    └── work-1.jpg ~ work-22.jpg # 21 張已壓縮之帶路雞作品照片（無 work-2.jpg）
```

---

## 🚀 如何部署至 GitHub Pages

本網站為純靜態網頁（無需建置工具或後端伺服器），可直接透過 **GitHub Pages** 免費發布：

1. 在 GitHub 建立一個新的 Repository（例如命名為 `leaderhappy`）。
2. 將 `index.html`、`README.md` 以及整個 `assets/` 資料夾上傳並推送（Push）至 `main` 分支。
3. 進入該 Repository 的 **Settings（設定）** > 左側選單點選 **Pages**。
4. 在 **Build and deployment** 區塊中：
   - **Source** 選擇 `Deploy from a branch`。
   - **Branch** 選擇 `main` 並將資料夾設為 `/ (root)`，點擊 **Save**。
5. 等待約 1～2 分鐘後，重新整理頁面即可看到您的公開網址（例如 `https://<您的帳號>.github.io/leaderhappy/`）。

---

## 🛒 購買與官方社群連結

- **蝦皮賣場**：[前往蝦皮賣場挑選](https://tw.shp.ee/VqzCrw7q)
- **露天拍賣**：[前往露天賣場挑選](https://www.ruten.com.tw/store/pdauser123/)
- **LINE 官方帳號**：[點此加入好友洽詢](https://line.me/R/ti/p/%40ykb4433b)
- **Facebook 粉絲專頁**：[幸福帶路雞 Facebook](https://www.facebook.com/leaderhappy?locale=zh_TW)
- **Instagram**：[@leaderhappy](https://www.instagram.com/leaderhappy/)

---

## 📄 版權聲明

© 2026 幸福帶路雞 (leaderhappy). All Rights Reserved.  
網站內所有文字故事與帶路雞作品攝影均為品牌所有，請勿任意轉載或作為商業用途。