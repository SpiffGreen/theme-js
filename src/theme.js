/**
 * @author  Spiff Jekey-Green<spiffjekeygreen@gmail.com>
 * @license MIT https://opensource.org/licenses/MIT
 * @see https://theme-js.github.io, https://github.com/SpiffGreen/theme-js
 */
class Theme {
    /**
     * @param {{themes: string, default: string}} config 
     */
    constructor(config) {
        this.default = config.default;
        this.themes = Object.assign(config.themes);
        this.elem = config.elem;
        this.setTheme = this.setTheme.bind(this);
        this.removeTheme = this.removeTheme.bind(this);
        this.getAllThemes = this.getAllThemes.bind(this);
        this.addTheme = this.addTheme.bind(this);
        this.getTheme = this.getTheme.bind(this);
        this.editTheme = this.editTheme.bind(this);
        this.setTheme();
    }

    /**
     * @description Sets theme for the webpage. Called upon creation of theme object
     * @param   themeName{string}   Name of theme to set
     */
    setTheme(themeName) {
        if(!themeName) {
            if(localStorage.getItem("theme") === null) {
                localStorage.setItem("theme", this.default  );
            }
            this.elem.href = this.themes[localStorage.getItem("theme")];
        } else {
            if(this.themes[themeName] !== undefined) {
                localStorage.setItem("theme", themeName);
                this.elem.href = this.themes[localStorage.getItem("theme")];
            } else {
                throw Error(`${themeName} is not a valid theme`);
            }
        }
    }
    
    /**
     * @description Gets the currently used Theme
     * @returns String
    */
    getTheme() {
        return localStorage.getItem("theme");
    }

    /**
     * @description It returns an object showing all available themes and their corresponding files
     * @returns Object
    */
    getAllThemes() {
        return this.themes;
    }

    /**
     * @description Adds new themes
     * @param   themeName{string}   The name given to the theme
     * @param   themeFile{string}   The link to the css file for the theme
     * @returns void
    */
    addTheme(themeName, themeFile) {
        this.themes[themeName] = themeFile;
    }
    
    /**
     * @description Deletes a theme
     * @param   themeName{string}   Name of theme to be deleted 
    */
    removeTheme(themeName) {
        delete this.themes[themeName];
    }

    /**
     * @description Changes the css file link used for a theme
     * @param   themeName{string}   Name of theme to change
     * @param   newFile{string}     Link to be used for new theme file
    */
    editTheme(themeName, newFile) {
        if(!this.themes[themeName]) throw new Error(`${themeName} doesn't exist`);
        this.themes[themeName] = newFile;
    }
}