# 市長，我想放颱風假！

## 專案簡介:

- 串接後端與氣象局API，並搭配 React 框架所打造出的小型專案。
- 這是一個互動小遊戲，您在遊戲中扮演颱風來襲時的市長角色，根據您的選擇，解鎖不同的結局。
- 登入帳號後，你還可以將遊戲結局保存，並在收集頁面查看你解鎖的結局！

- Demo 網址 : [https://yuri1022.github.io/typhoon-day/](https://yuri1022.github.io/typhoon-day/)
- Back-End Link : [https://github.com/Tommy0901/typhoon-day-mayor](https://github.com/Tommy0901/typhoon-day-mayor)


## 路由設計 :

| 名稱   | 說明   | URL   |
|---------|---------|---------|
| 首頁 | 此為遊戲入口，您可以點選「開始」來開始新的遊戲。 <br>如您未登入，會跳出彈窗提醒您此次遊戲將不會儲存進度。| /start 、 /* |
| 地區 | 當您點選首頁的「開始」即跳轉到此頁面。<br>您可以選擇「城市」或「鄉村」作為遊戲地區。 | /area |
| 遊戲主頁 | 當您選擇完地區，即跳轉到此頁面。<br>此為遊戲主頁，聊天室內將會載入隨機的6條市民聊天內容。點選聊天室內的「回覆」，會跳出三個選項來回應市民的疑問，根據您選擇的選項，城市的民調、經濟、環境三項屬性將有所改變。<br>右上方的小工具將載入本次颱風的動向與您回覆市民的內容。 | /main |
| 收集頁 | 您在登入後可查看所有的遊戲角色簡介，以及該帳號解鎖的結局內容。 | /collection |

## 功能介紹:

| 名稱   | 說明   | 
|---------|---------|
| 登入/註冊 | 點選後彈出登入Modal，可通過登入Modal進行登入或註冊帳號。<br>如未採用電子郵件格式、密碼不為8-24英數符號、密碼確認不同、帳號或密碼錯誤等情況時，將彈出提示訊息提醒錯誤。|
| 遊戲流程 | 通過文字與圖像的方式說明遊戲流程。<br>當說明完畢後，可以直接點選「開始遊戲」。 |
| 設定 | 可在此綁定Google帳號。<br>目前更換頭像、音效調整等功能僅製作Layout，未實裝功能。 |
| 關於我們 | 開發人員簡介。 |

## 使用技術：

### React
- 使用 useState、useEffect、useContext 管理狀態與副作用。
- 將常用狀態（如登入資訊、遊戲數據）儲存為 Context，方便使用。

### React Router DOM
- 利用 React Router DOM 實現網頁切換效果。
- 使用 useNavigate 進行頁面導航。

### SCSS
- 使用 SCSS 設置常用的布局和版面，並應用於組件樣式。

### 其他輔助套件
1. **SweetAlert2**
   - 高效快速地創建自定義提示框。
2. **ArcGIS API for JavaScript**
   - 製作顯示颱風路徑的地圖。


## 安裝與下載 :

### 下載檔案至本地資料夾
```
git clone https://github.com/yuri1022/typhoon-day.git
```

### 開啟專案資料夾後安裝檔案
```
npm install
```

### 輸入執行碼
```
npm run start
```

### 於瀏覽器輸入以下網址
```
http://localhost:3000/
```


## Contributer
### PM: @omega-phi
### Front-End : @omega-phi @yuri1022
### Back-End : @Tommy0901
### UI/UX : 北極

