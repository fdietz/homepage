---
title: dotfiles
date: 2020-02-23
tags:
  - linux
  - dotfiles
  - macos
---

I've spend way too much time automating my setup using [dotfiles](https://github.com/fdietz/dotfiles).

To get started on a new machine I git clone the repository:

```bash
git clone https://github.com/fdietz/dotfiles.git ~/.dotfiles
```

An [install.sh](https://github.com/fdietz/dotfiles/blob/master/install.sh) script creates symlinks to config files:

* bash_profile
* bashrc
* gitconfig
* gitignore
* gemrc
* irbrc
* asdfrc
* vimrc
* ...

Then depending on if I'm on a Linux or MacOS I either run the [apt-install.sh](https://github.com/fdietz/dotfiles/blob/master/apt_install.sh) or run `brew bundle` to install everything listed in my [Brewfile](https://github.com/fdietz/dotfiles/blob/master/Brewfile).

Last but not least the [asdf_install.sh](asdf_install.sh) installs [asdf](https://github.com/asdf-vm/asdf), the version manager for Ruby, Elixir, Javascript, etc. It's much easier than remembering the syntax for [rbenv](https://github.com/rbenv/rbenv), [nvm](https://github.com/nvm-sh/nvm) and others.