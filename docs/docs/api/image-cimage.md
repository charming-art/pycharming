# CImage {#cimage-class}

Date type for Charming to store and manipulate image.

## cm.**CImage**(*data*, *width*, *height*) : CImage {#cimage}

Creates a new CImage (the datatype for storing images). This provides a fresh buffer of pixels to play with. Set the size of the buffer with the width and height parameters.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.CImage(100, 100)
img.load_pixels()
for i in range(img.width):
    for j in range(img.height):
        img.set(i, j, (255, 0, 0, 1))
img.update_pixels()
cm.image(img, 0, 0, 10, 5)

cm.run()
```

<img src="/img/test_cimage.png" />

## CImage.**load_pixels**() {#load_pixels}

Loads the pixels data for this image into the `pixels` attribute.

## CImage.**update_pixels**() {#update_pixels}

Updates the backing canvas for this image with the contents of the `pixels` array.

## CImage.**set**(*x*, *y*, *color*) {#set}

Set the color of a single pixel.

## CImage.**get**(*x*, *y*) : (r, g, b, a) {#get}

Get the color of a single pixel.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

img = cm.load_image('../assets/images/test.png')
img.load_pixels()
for i in range(int(img.width / 2)):
    for j in range(img.height):
        ri = img.width - i - 1
        color = img.get(i, j)
        img.set(ri, j, color)
img.update_pixels()

cm.image(img, 0, 0, 30, 15)
cm.run()
```

<img src="/img/test_cimage_method.png" />