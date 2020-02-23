---
title: My Setup
date: 2020-02-23
tags:
  - linux
  - dotfiles
  - macos
---

# Uses

I've heard that famous people regularly get asked about their setup. So, here's mine in case I become famous ;-)

## Hardware

* [Macbook Pro 13](https://www.apple.com/macbook-pro-13/) from 2017
  * Had to repair it 3 times already due to broken keyboard/display :-(
  * The horrible keyboard and the unreliable hardware is the reason I switched to Windows/Linux as my main work machine. I still keep my Macbook around in case I need some MacOS only software though.
* [Dell XPS 13 2-in-1](https://www.dell.com/en-us/shop/cty/pdp/spd/xps-13-7390-2-in-1-laptop/x27390dnlbs) - especially like the 16:10 display ratio which is rare to find outside Apple. I've installed Windows 10 (running WSL2, available on slow ring) and a stock [Ubuntu 19.10](http://releases.ubuntu.com/19.10/) distribution. I spend most of my time on Linux though. My only complaint is the missing [Webcam](https://wiki.ubuntu.com/Dell/XPS/XPS-13-7390-2-in-1#Camera) support which will be hopefully supported in the future when Intel Ice Lake chipsets become more mainstream.
* Custom Build PC - when I'm at home I prefer to work on a more powerful machine.
  * [LOUQE Ghost S1 MkII (Batch 4) case](http://www.louqe.com/), a beautiful Mini ITX case which looks awesome and runs my workloads cool and silently
  * [AMD Ryzen 7 (8-core)](https://www.amd.com/en/ryzen-7) CPU with a [Noctua NH-L12S CPU Cooler](https://noctua.at/en/nh-l12s) (had to bend it to fit in the case - hmpf)
  * [GIGABYTE X570 I AORUS PRO WIFI](https://www.gigabyte.com/Motherboard/X570-I-AORUS-PRO-WIFI-rev-10#kf) Mainboard
  * [Corsair Vengeance LPX DDR4-3200 C16 BK DC](https://www.corsair.com/eu/en/Categories/Products/Memory/VENGEANCE-LPX/p/CMK16GX4M2B3200C16) - 32GB RAM
  * [Samsung 970 EVO Plus SSD M.2 2280](https://www.samsung.com/de/memory-storage/970-evo-plus-nvme-m2-ssd/MZ-V7S500BW/) - 1TB SSD
  * [Corsair SFX series SF750 Platinum](https://www.corsair.com/eu/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020186-EU) SFX
* [LG 27UL850-W 68](https://www.lg.com/us/monitors/lg-27UL850-W-4k-uhd-led-monitor) $K Monitor, let's me plug my Macbook/Dell XPS using USB-C only
* [Logitech MX Keys](https://www.logitech.com/en-us/product/mx-keys-wireless-keyboard) Keyboard
* [Logitec MX Master 3](https://www.logitech.com/en-roeu/product/mx-master-3) Mouse
* [Pixel 2](https://store.google.com/product/pixel_3a) Phone
  * Bought this for a heavy discount - otherwise it felt too expensive. I like getting updates as quickly as possible and in comparison to iOS it lets you choose which browser or mail client you want.

To give you an idea what the different number of CPU cores feels like for everyday use I've run a non-scientific benchmark executing a couple hundred tests for my Ruby on Rails app:

* Macbook 13, 40 secs
* Dell XPS, 20 secs
* AMD Ryzen 7, 8 secs

## Software

### Editor

* [Visual Studio Code](https://code.visualstudio.com/) - Find my settings in the [dotfiles repo](https://github.com/fdietz/dotfiles/blob/master/vscode_settings.json). The new remote plugins are really awesome on Windows combined with the WSL2 or the VS Code Online service.
* [Tomorrow Night](https://github.com/chriskempson/tomorrow-theme) color theme by [Chris Kempson](https://github.com/chriskempson)
* [Fira Code](https://github.com/tonsky/FiraCode) Font
* [Vim](https://www.vim.org/) for quick edits. Here's my [vimrc](https://github.com/fdietz/dotfiles/blob/master/vimrc)

### Desktop Apps

* [Google Chrome](https://www.google.com/chrome)
* [Firefox](https://www.mozilla.org/en-US/firefox/new/)
* [1Password](https://1password.com/)
* [Spotify](https://www.spotify.com/de/)
* [Slack](https://slack.com/intl/en-nl/)
* [Zoom](https://zoom.us/)

#### MacOS specific

* [Github Desktop](https://desktop.github.com/)
* [iTerm2](https://iterm2.com/)
* [Homebrew](https://brew.sh/), here's my [Brewfile](https://github.com/fdietz/dotfiles/blob/master/Brewfile)

#### Linux Specific

* [gitg](https://wiki.gnome.org/Apps/Gitg/)

## Cloud

* [Gmail](https://www.google.com/gmail/about/#), Calendar, Contacts, Keep and Google Photos
  * I am testing [Fastmail](https://www.fastmail.com/) though in order to reduce my dependency to Google
* [pCloud](https://www.pcloud.com/) file storage, replaced Dropbox for me
* [Netlify](https://www.netlify.com/) for static sites
* [Heroku](https://heroku.com/) for my Ruby on Rails projects
* [Github](http://github.com/fdietz) for all my sourcecode
* [Sentry](https://sentry.io/welcome/) for bug tracking

## Dotfiles

I've spend way too much time automating my setup with [dotfiles](/posts/dotfiles).
