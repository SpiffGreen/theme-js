# Theme.js
A light weight JavaScript library for managing themes whether dark, light or custom themes

## How to Use
Example 1:
```javascript
  const options = {
      default: "light",
      elem: document.getElementById("theme"),
      themes: {
          "light": "./styles/light.css",
          "dark": "./styles/dark.css"
      }
  };

  // Create theme manager
  const appTheme = new Theme(options);
  appTheme.setTheme();
  appTheme.getTheme();
```

Example 2:
```javascript
    const options = {
        default: "light",
        elem: document.getElementById("theme"),
        themes: {
            "light": "./styles/light.css",
            "dark": "./styles/dark.css"
        }
    }

    const appTheme = new Theme(options);  // create theme manager
    const btnTheme = document.getElementById("btnThem");
    btnTheme.addEventListener("click", (e) => {
        if(localStorage.getItem("theme") === "light") {
            appTheme.setTheme("dark");
            e.target.value = "Light Mode"
        } else {
            appTheme.setTheme("light");
            e.target.value = "Dark Mode";
        }
    });
```