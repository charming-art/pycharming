# Keyboard {#keyboard-page}

Methods for keyboard events.

## cm.**get_key**() : *string* {#get_key}

The system variable key always contains the value of the most recent key on the keyboard that was used (either pressed or released).

## cm.**get_key_code**() : *boolean* {#get_key_pressed}

The boolean system variable key_pressed is true if any key is pressed and false if no keys are pressed.

```py
import charming as cm


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    if cm.get_key_pressed():
        key = cm.get_key()
        if key == 'b' or key == 'B':
            cm.fill('O')
        else:
            cm.fill('+')
    cm.no_stroke()
    cm.rect(0, 0, 10, 10)


cm.run()
```

<img src="/img/test_get_key.gif" width="100%"/>

## cm.**get_key_code**() : *number* {#get_key_code}

The variable keyCode is used to detect special keys such as the arrow keys (UP, DOWN, LEFT, and RIGHT) as well as ENTER, SPACE.

## cm.**key_pressed**(*foo*) {#key_pressed}

The function decorated by key_pressed decorator is called once every time a key is pressed.

```py
import charming as cm

# CODED, ESCAPE, LEFT, UP, RIGHT, DOWN, BACKSPACE, TAB, ENTER, SPACE

char = ''


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.no_stroke()
    cm.rect(0, 0, 10, 10)


@cm.key_pressed
def key_pressed():
    global char
    if cm.get_key() == cm.CODED:
        if cm.get_key_code() == cm.UP:
            char = 'O'
        else:
            char = '+'


cm.run()
```

<img src="/img/test_get_key_code.gif" width="100%"/>

## cm.**key_released**(*foo*) {#key_released}

The function decorated by key_released decorator is called once every time a key is released.

```py
import charming as cm

char = ''


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.no_stroke()
    cm.rect(0, 0, 10, 10)


@cm.key_released
def key_released():
    global char
    if cm.get_key() == cm.CODED:
        if cm.get_key_code() == cm.UP:
            char = 'O'
        else:
            char = '+'


cm.run()
```

<img src="/img/test_get_key_code.gif" width="100%"/>

## cm.**key_typed**(*foo*) {#key_typed}

The function decorated by key_typed decorator is called once every time a key is typed.

```py
import charming as cm

char = ''


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    cm.fill(char)
    cm.no_stroke()
    cm.rect(0, 0, 10, 10)


@cm.key_typed
def key_typed():
    global char
    if cm.get_key() == cm.CODED:
        if cm.get_key_code() == cm.UP:
            char = 'O'
        else:
            char = '+'


cm.run()
```

<img src="/img/test_get_key_code.gif" width="100%"/>