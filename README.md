## Sonar Software V2

#### Chrome Extension to change some of the layout and style of your instance

##### Note: Some features/changes may take 2-4 seconds to change on page. I have changes other then styles on a "setInterval" that constantly looks for the items to change and makes it has done when change is done.

### How to install

**Download,Edit,Save**

- Download Zip file.
- Unzip into a known folder
- In folder open "**manifest.json**" with _notepad_ or _code editor_
- Edit Line 14 to your instance name
  - "matches": ["https://[yourInstance].sonar.software/app\*"],
- Save File

**Add extension to chrome**

- Open Chrome
- Go to **chrome://extensions**
- Top Right, toggle on _Developer Mode_
- Click _Load unpacked_, at the top right
- Select Extension's folder.
- Refresh the Sonar instance.

---

**What does it do?**

- [x] Removes a lot of padding.
- [x] Redesigns Schedule dispatcher view
- [x] Adds a few minor features
- [x] and More

## Account Page

![Image of Account Sonar using the extension](https://github.com/MrBearedJoe/SonarV2_EditedLayout/blob/main/images/accountSS.png)

## Dispatcher Views

**Onload hides queue and map**
![Image of Dispatcher loaded using the extension](https://github.com/MrBearedJoe/SonarV2_EditedLayout/blob/main/images/dispatcherViewSS_start.png)

**Opened queue and map**
![Image of Dispatcher with open que and map using the extension](https://github.com/MrBearedJoe/SonarV2_EditedLayout/blob/main/images/dispatcherViewSS_show.png)
