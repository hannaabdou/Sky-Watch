---
draft: true
pin: true
title: "My Second Blog Post"
authors:
  - development
date:
  created: 2024-11-22
  updated: 2022-11-25
readtime: 30
tags:
  - blog
  - beginners
  - tutorial
categories:
  - General
  - Blog
summary: "This is my second blog post."
---

# Welcome to my second blog post

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.


``` yaml
theme:
  features:
    - content.code.annotate # (1)
```

```py title="pytorch.py" linenums="1" hl_lines="4 5"
import torch
import numpy as np

x = 5
y = 2

print(x + y)
print(torch.__version__)
```

### Sub-section 1
How to code a certain one lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem.

![Image title](https://dummyimage.com/600x400/eee/aaa)
/// caption
Image caption goes here
///

### Sub-section 2
How to code a certain one lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem.

## Main Section 2
How to code a certain one lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem.

### Sub-section 1
ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla

### Sub-section 2
ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla lorem ipsum bla bla bla

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
