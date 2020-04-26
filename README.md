# mdlinks

A Google Chrome extension to create Markdown links from the current page, i.e:

```
+ [title](url)
```

## How to install

+ Download this repo

+ Go to More Tools > Extensions in Google Chrome

+ Click "load unpacked"

+ Select the folder on your machine

## How it works

When clicked: 

+ The selection (if any) will be suggested as a title

![](img/a.png)

+ If you press cancel, the H1 will be suggested as a title

![](img/b.png)

+ If you press cancel, the first h2 will be suggested as a title

![](img/c.png)

+ If you press cancel, you can enter title by hand

![](img/d.png)

+ The current url without query string is suggested as link

![](img/e.png)

+ The current url is suggested as link

![](img/f.png)

+ If you press cancel, you can enter url by hand

![](img/g.png)

+ You can set the result as a markdown list entry (`+ []()`)

![](img/h.png)

+ The title is displayed, you can then select, copy, and paste it

![](img/i.png)

![](img/j.png)