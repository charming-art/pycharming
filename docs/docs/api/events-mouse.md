# Mouse {#mouse-page}

Methods for mouse events.

## cm.**get_mouseX**() : *number* {#get_mouse_x}

The system variable mouse_x always contains the current horizontal coordinate of the mouse.

## cm.**get_mouseY**() : *number* {#get_mouse_y}

The system variable mouse_y always contains the current vertical coordinate of the mouse.

```py
import charming as cm


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    mouse_x = cm.get_mouse_x()
    mouse_y = cm.get_mouse_y()
    cm.line(mouse_x, 0, mouse_x, cm.get_height())
    cm.line(0, mouse_y, cm.get_width(), mouse_y)


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_get_mouse_pos.gif" width="100%"/>

## cm.**get_mouse_pressed**() : *boolean* {#get_mouse_pressed}

The mouse_pressed variable stores whether or not a mouse button is currently being pressed.

## cm.**get_mouse_button**() : *boolean* {#get_mouse_button}

When a mouse button is pressed, the value of the system variable mouseButton is set to either LEFT, RIGHT, or CENTER, depending on which button is pressed.

```py
import charming as cm


@cm.setup
def setup():
    cm.full_screen()


@cm.draw
def draw():
    cm.no_stroke()
    if cm.get_mouse_pressed() and cm.get_mouse_button() == cm.LEFT:
        cm.fill('O')
    elif (cm.get_mouse_pressed() and cm.get_mouse_button() == cm.RIGHT):
        cm.fill('+')
    else:
        cm.fill('-')
    cm.rect(0, 0, 10, 10)


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_get_mouse_button.gif" width="100%"/>

## cm.**mouse_clicked**(*foo*) {#mouse_clicked}

```py
import charming as cm

char = 'O'


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.rect(0, 0, 10, 10)


@cm.mouse_clicked
def mouse_clicked():
    global char
    if char == 'O':
        char = '+'
    else:
        char = 'O'


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_get_mouse_button.gif" width="100%"/>

## cm.**mouse_pressed**(*foo*) {#mouse_pressed}

The function decorated mouse_released decorator is called after a mouse button has been pressed.

```py
import charming as cm

char = 'O'


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.rect(0, 0, 10, 10)


@cm.mouse_pressed
def mouse_pressed():
    global char
    if char == 'O':
        char = '+'
    else:
        char = 'O'


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_get_mouse_button.gif" width="100%"/>

## cm.**mouse_released**(*foo*) {#mouse_released}

```py
import charming as cm

char = 'O'


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.rect(0, 0, 10, 10)


@cm.mouse_released
def mouse_released():
    global char
    if char == 'O':
        char = '+'
    else:
        char = 'O'


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_get_mouse_button.gif" width="100%"/>