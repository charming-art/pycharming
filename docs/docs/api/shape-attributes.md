# Attributes {#attributes-page}

Methods for setting drawing attributes.

## cm.**ellipse_mode**(*mode=CENTER | RADIUS | CORNER | CORNERS*) {#ellipse_mode}

Modifies the location from which ellipses are drawn by changing the way in which parameters given to ellipse(), circle() and arc() are interpreted.

The default mode is CENTER, in which the first two parameters are interpreted as the shape's center point's x and y coordinates respectively, while the third and fourth parameters are its width and height.

ellipse_mode(RADIUS) also uses the first two parameters as the shape's center point's x and y coordinates, but uses the third and fourth parameters to specify half of the shape's width and height.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.no_stroke()

# Outer  ellipse
cm.fill('O', cm.RED, cm.YELLOW)
cm.ellipse_mode(cm.RADIUS) 
cm.ellipse(12, 6, 20, 10)

# Inner ellipse
cm.fill('V', cm.BLUE, cm.GREEN)
cm.ellipse_mode(cm.CENTER)
cm.ellipse(12, 6, 20, 10)
cm.run()
```

<img src="/img/test_ellipse_mode_center.png" width="100%"/>

ellipse_mode(CORNER) interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

ellipse_mode(CORNERS) interprets the first two parameters as the location of one corner of the ellipse's bounding box, and the third and fourth parameters as the location of the opposite corner.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.no_stroke()

# Outer  ellipse
cm.fill('O', cm.RED, cm.YELLOW)
cm.ellipse_mode(cm.CORNER) 
cm.ellipse(8, 4, 16, 8)

# Inner ellipse
cm.fill('V', cm.BLUE, cm.GREEN)
cm.ellipse_mode(cm.CORNERS)
cm.ellipse(8, 4, 16, 8)
cm.run()
```

<img src="/img/test_ellipse_mode_corner.png" width="100%"/>

## cm.**rect_mode**(*mode=CENTER | RADIUS | CORNER | CORNERS*) {#rect_mode}

Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are interpreted.

The default mode is CORNER, which interprets the first two parameters as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

rect_mode(CORNERS) interprets the first two parameters as the location of one of the corners, and the third and fourth parameters as the location of the diagonally opposite corner. Note, the rectangle is drawn between the coordinates, so it is not necessary that the first corner be the upper left corner.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.no_stroke()

# Outer rect
cm.fill('O', cm.RED, cm.YELLOW)
cm.rect_mode(cm.CORNER) 
cm.rect(8, 4, 16, 8)

# Inner rect
cm.fill('V', cm.BLUE, cm.GREEN)
cm.rect_mode(cm.CORNERS)
cm.rect(8, 4, 16, 8)
cm.run()
```

<img src="/img/test_rect_mode_corner.png" width="100%"/>

rect_mode(CENTER) interprets the first two parameters as the shape's center point, while the third and fourth parameters are its width and height.

rect_mode(RADIUS) also uses the first two parameters as the shape's center point, but uses the third and fourth parameters to specify half of the shape's width and height respectively.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.no_stroke()

# Outer  rect
cm.fill('O', cm.RED, cm.YELLOW)
cm.rect_mode(cm.RADIUS) 
cm.rect(12, 6, 10, 5)

# Inner rect
cm.fill('V', cm.BLUE, cm.GREEN)
cm.rect_mode(cm.CENTER)
cm.rect(12, 6, 10, 5)
cm.run()
```

<img src="/img/test_rect_mode_center.png" width="100%"/>

## cm.**stroke_weight**(*weight=0*) {#stroke_weight}

Sets the width of the stroke used for lines, points and the border around shapes. All widths are set in units of cells.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

cm.stroke_weight(0) # Default
cm.stroke('O')
cm.line(3, 0, 25, 0)

cm.stroke('A')
cm.stroke_weight(1) # Thicker
cm.line(3, 3, 25, 3)

cm.stroke('X')
cm.stroke_weight(2) # Beastly
cm.line(3, 8, 25, 8)

cm.run()
```

<img src="/img/test_stroke_weight.png" width="100%"/>