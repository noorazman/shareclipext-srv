# Shareclipext-srv

Shareclipext-srv shares your clipboard across multiple devices. Copy on your phone and paste on your desktop!

## Quickstart

Requires [node.js](https://nodejs.org/en/) to be installed.
Run:

```
npx shareclipext-srv
```

## Installation

Run
```
npm install -g shareclipext-srv
```

And then
```
shareclipext-srv [port]
```

## Usage

After running `shareclipext-srv 3000`, you should see something like:

```
RUNNING AS SERVER
WARNING: THE PANDAS ARE COMING
Listening on port 3000
```

> **WARNING: THE PANDAS ARE COMING**

Run the command provided (Here, it's `shareclipext http://192.168.29.128:3000`) on another device where you have shareclipext installed and enter. Your clipboard should be shared automatically between your devices now. Note that your devices must be under the same WiFi network.

## Specific instructions for Android

- [Download termux](https://play.google.com/store/apps/details?id=com.termux)
- Run   
```
apt update -y && apt install termux-api nodejs -y
```

- Follow instructions under **Quickstart** or **Installation**