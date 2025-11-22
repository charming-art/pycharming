# Get Started

- **Supported OS**: PyCharming currently only supports **MacOS**, though it should also work for any other platform that provides a working [curses](https://docs.python.org/3/howto/curses.html) implementation. It soon will support **Windows** and run in **Modern Browsers**.
- **Python**: 3.6/3.7/3.8

```bash
$ pip3 install charming --user
```

## A Simple Example

```python
'''rect.py'''
import charming as cm

# draw a rect
cm.full_screen()
cm.rect(0, 0, 10, 10)

# run the sketch
cm.run()
```

```bash
$ python3 rect.py
```

![get started](/img/get_started.png)

## Coming from Processing?

If you have experience with Processing or p5.js, you'll find PyCharming familiar! PyCharming implements most of Processing's APIs related to 2D. Here are the key differences to help you get started:

### API Names

All the APIs in Processing use camelCase like `aaaBbb`, but in PyCharming they use snake_case like `aaa_bbb`. For example:

- `ellipseMode` → `ellipse_mode`
- `beginShape` → `begin_shape`
- `rectMode` → `rect_mode`

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.rect_mode(cm.CORNER)
cm.rect(0, 0, 10, 10)
cm.run()
```

### Register Hooks

In Processing, `setup` and `draw` functions run automatically. In PyCharming, you need to use **decorators** to register hooks:

```py
import charming as app

@app.setup
def setup():
    app.full_screen()
    app.rect_mode(app.CENTER)

x = 0

@app.draw
def draw():
    global x
    app.rect(x, 0, 10, 15)
    x += 1

app.run()
```

### Color System

PyCharming uses a unique color system with three channels:

- `ch`: character (ASCII, Unicode, emoji)
- `fg`: foreground color
- `bg`: background color

```py
# ANSI mode
app.fill('*', app.RED, app.BLUE)
app.stroke('@', 100, 200)

# RGB mode
app.color_mode(app.RGB)
app.background('🚀', (255, 0, 0), (100,))
```

### Global Variables

In Processing, you can use global variables directly like `width`, `height`, `mouseX`. In PyCharming, call methods instead:

- `width` → `get_width()`
- `height` → `get_height()`
- `mouseX` → `get_mouse_x()`
