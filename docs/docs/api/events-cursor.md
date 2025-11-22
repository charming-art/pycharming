# Cursor {#cursor-page}

Methods for cursor events.

## cm.**get_cursor_x**() : *number* {#get_cursor_x}

The system variable cursor_x always contains the current horizontal coordinate of the cursor.

## cm.**get_cursor_y**() : *number* {#get_cursor_y}

The system variable cursor_y always contains the current vertical coordinate of the cursor.

## cm.**get_pcursor_x**() : *number* {#get_pcursor_x}

The system variable pcursor_x always contains the horizontal position of the cursor in the frame previous to the current frame.

## cm.**get_pcursor_y**() : *number* {#get_pcursor_y}

The system variable pcursor_y always contains the vertical position of the cursor in the frame previous to the current frame.

## cm.**cursor_moved**(*foo*) {#cursor_moved}

The function decorated cursor_moved decorator is called after a cursor moved.

## cm.**cursor_pressed**(*foo*) {#cursor_pressed}

The function decorated cursor_pressed decorator is called after a cursor pressed.

## cm.**get_cursor_moved**() : *number* {#get_cursor_moved}

The boolean system variable cursor_moved is true if any cursor is pressed and false if cursor is not pressed.

```py
import charming as cm


@cm.setup
def setup():
    cm.full_screen()
    cm.set_cursor(cm.get_width() / 2, cm.get_height() / 2)


@cm.draw
def draw():
    cm.background(' ')
    # check if cursor is moving, otherwise draw hint message
    if not cm.get_cursor_moved():
        cm.translate(cm.get_width() / 2, cm.get_height() / 2)
        cm.text_align(cm.CENTER)
        cm.stroke(' ', cm.WHITE, cm.BLACK)
        cm.text('Pressed up/right/down/left arrow.', 0, 0)


# You can use cursor_pressed hooks instead of
# mouse_moved or mouse_dragged to do some effects.

@cm.cursor_pressed
def cursor_pressed():
    x = cm.get_cursor_x()
    y = cm.get_cursor_y()
    px = cm.get_pcursor_x()
    py = cm.get_pcursor_y()

    cm.stroke('@', cm.YELLOW, cm.RED)
    cm.fill('+', cm.GREEN, cm.BLUE)
    cm.ellipse(x, y, 10, 10)

    cm.stroke('+', cm.CYAN, cm.MAGENTA)
    cm.point(px, py)


cm.run()
```

<img src="/img/test_event_cursor.gif" width="100%"/>