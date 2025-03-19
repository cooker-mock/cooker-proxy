# cooker-proxy
The Chrome Extension for proxying requests to cooker-mock.

# Project Overview

- [cooker-mock](https://github.com/cooker-mock/cooker-mock)
- [cooker-proxy (current)](https://github.com/cooker-mock/cooker-proxy)
- [an-example-front-end-project](https://github.com/cooker-mock/an-example-front-end-project)

# Contribution Guide

> Only information specific to this repo is listed here. For other general guidelines, please refer to the README.md of [cooker-mock](https://github.com/cooker-mock/cooker-mock) repo.

...

### 4. Run the Project for Development

```sh
yarn dev
```

This will start the project. Open Chrome browser, navigate to `chrome://extensions/` and enable Developer mode. Then click "Load unpacked" and select the root directory of the project. This will allow you to use the extension in Chrome.

If you make changes to the files within the `popup` directory, these changes will take effect automatically without any additional steps. However, if you modify files outside the `popup` directory (such as background scripts, content scripts, or other configuration files), you need to manually refresh the Chrome extension. 

To refresh the extension:

1. Open Chrome browser.
2. Navigate to `chrome://extensions/` in the address bar and press Enter.
3. Find the extension you are developing.
4. Click the refresh button on the extension card (usually a circular arrow icon).

This will load the modified content, and the extension will use the latest code and configuration.


### 5. Project Directory Structure

Below is an explanation of the project's directory structure:

```
.
├── LICENSE                     # License file for the project
├── README.md                   # Main README file for the project
├── assets
│   └── icon.png                # Icon used for the Chrome Extension
├── background.js               # Background script for the Chrome Extension
├── content.js                  # Content script for the Chrome Extension
├── manifest.json               # Configuration file for the Chrome Extension
├── package.json                # Project's package configuration file
├── popup
│   ├── README.md               # README file for the popup part of the extension
│   ├── dist                    # Compiled files, run 'yarn build' to compile
│   ├── eslint.config.js        # ESLint configuration file for the popup
│   ├── index.html              # HTML file for the popup
│   ├── public
│   │   └── vite.svg            # Vite logo used in the popup
│   └── src
│       ├── App.css             # CSS file for the main App component of the popup
│       ├── App.jsx             # Main App component for the popup
│       ├── assets              # Directory for static assets of the popup
│       ├── index.css           # Global CSS file for the popup
│       └── main.jsx            # Entry point for the React application of the popup
├── vite.config.js              # Vite configuration file for the project
└── yarn.lock                   # Lock file for Yarn dependencies
```

...

