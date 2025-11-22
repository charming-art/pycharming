# Display {#display-page}

Methods for display images.

## cm.**image**(*image*, *a*, *b*, *c*, *d*) {#image-function}

Draw an image to the p5.js canvas which will be affected by **cm**.*rect_mode*.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.load_image('../assets/images/test.png')
cm.image(img, 0, 0, 30, 15)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_image.png" />

## cm.**load_image**(*src*) : CImage {#load_image}

Loads an image from a path and creates a CImage or CImage array from it.

If it loads a static image such as png format, it will returns a CImage.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.load_image('../assets/images/test.png')
cm.image(img, 0, 0, 30, 15)

cm.run()
```

If it loads a active image such as gif format, it will returns a CImage array.

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_image.png" />

```py
import charming as cm

frames = None


@cm.setup
def setup():
    global frames
    cm.full_screen()
    cm.no_cursor()
    frames = cm.load_image('../assets/images/test.gif')


@cm.draw
def draw():
    cm.background(' ')
    index = int(cm.get_frame_count() / 2) % len(frames)
    frame = frames[index]
    cm.image(frame, 0, 0, 30, 15)


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_load_image.gif" />

## cm.**no_tint**() {#no_tint}

Removes the current fill value for displaying images and reverts to displaying images with their original color.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.load_image('../assets/images/test.png')
cm.tint('O', cm.RED)
cm.image(img, 0, 0, 30, 15)

cm.no_tint()
cm.image(img, 32, 0, 30, 15)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_no_tint.png" />

## cm.**tint**(*ch*=" "[, *fg*[, *bg*]]) {#tint}
cm.**tint**(*ccolor*)

Sets the fill value for displaying images. Images can be tinted to specified character and foreground color.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.load_image('../assets/images/test.png')
cm.tint('O', cm.RED)
cm.image(img, 0, 0, 30, 15)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_tint.png" />