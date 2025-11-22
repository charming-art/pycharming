# Time

Methods for returning information about current time.

## cm.**day**() {#day}

Returns the current day as a value from 1 - 31.

## cm.**hour**() {#hour}

Returns the current hour as a value from 0 - 23.

## cm.**millis**() {#millis}

Returns the number of milliseconds (thousandths of a second) since starting the program.

## cm.**minute**() {#minute}

Returns the current minute as a value from 0 - 59.

## cm.**month**() {#month}

Returns the current month as a value from 1 - 12.

## cm.**second**() {#second}

Returns the current second as a value from 0 - 59.

## cm.**year**() {#year}

Returns the current year as an integer (2003, 2004, 2005, etc).
  
```py
import charming as cm


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    cm.background(' ')
    date = f'{cm.year()} . {cm.month()} . {wrap(cm.day())}'
    time = f'{wrap(cm.hour())} : {wrap(cm.minute())} : {wrap(cm.second())}'

    cm.text_align(cm.CENTER)
    cm.text_size(cm.BIG)
    h1 = cm.text_height(date)
    h = h1 + 10

    cm.translate(cm.get_width() / 2, (cm.get_height() - h) / 2)
    cm.text(date, 0, 0)
    cm.text(time, 0, 10)


def wrap(n):
    return f'0{n}' if n < 10 else n


cm.run()
```

<img src="/img/test_time.gif" />