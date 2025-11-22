# 2D Primitives {#primitives-page}

Methods for drawing 2D basic shapes.

## cm.**arc**(*a*, *b*, *c*, *d*, *start*, *stop*, *mode=OPEN | CHORD | PIE*) {#arc}

Draw an arc to the screen. If called with only x, y, w, h, start and stop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc will be filled like an open semi-circle (OPEN), a closed semi-circle (CHORD), or as a closed pie segment (PIE). The origin may be changed with the ellipseMode() function.The arc is always drawn clockwise from wherever start falls to wherever stop falls on the ellipse.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.arc(12, 5, 20, 10, 0, cm.PI + cm.QUARTER_PI, cm.OPEN)
cm.run()
```

<img src="/img/test_arc_open.png" width="100%"/>

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.arc(12, 5, 20, 10, 0, cm.PI + cm.QUARTER_PI, cm.PIE)
cm.run()
```

<img src="/img/test_arc_pie.png" width="100%"/>

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.arc(12, 5, 20, 10, 0, cm.PI + cm.QUARTER_PI, cm.CHORD)
cm.run()
```

<img src="/img/test_arc_chord.png" width="100%"/>

## cm.**circle**(*x*, *y*, *extend*) {#circle}

Draws a circle to the screen. A circle is a simple closed shape. It is the set of all points in a plane that are at a given distance from a given point, the centre. This function is a special case of the ellipse() function, where the width and height of the ellipse are the same. Height and width of the ellipse correspond to the diameter of the circle. By default, the first two parameters set the location of the centre of the circle, the third sets the diameter of the circle.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.circle(12, 6, 10)
cm.run()
```

<img src="/img/test_circle.png" width="100%"/>

## cm.**ellipse**(*a*, *b*, *c*, *d*) {#ellipse}

Draws an ellipse (oval) to the screen. By default, the first two parameters set the location of the center of the ellipse, and the third and fourth parameters set the shape's width and height. If no height is specified, the value of width is used for both the width and height. If a negative height or width is specified, the absolute value is taken.

An ellipse with equal width and height is a circle. The origin may be changed with the ellipse_mode() function.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.ellipse(12, 6, 20, 10)
cm.run()
```

<img src="/img/test_ellipse.png" width="100%"/>

## cm.**line**(*x1*, *y1*, *x2*, *y2*) {#line}

Draws a line (a direct path between two points) to the screen. This width can be modified by using the stroke_weight() function. A line cannot be filled, therefore the fill() function will not affect the color of a line. So to color a line, use the stroke() function.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.line(1, 1, 10, 10)
cm.run()
```

<img src="/img/test_line.png" width="100%"/>

## cm.**point**(*x*, *y*) {#point}

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.point(5, 5)
cm.run()
```

<img src="/img/test_point.png" width="100%"/>

## cm.**quad**(*x1*, *y1*, *x2*, *y2*, *x3*, *y3*, *x4*, *y4*) {#quad}

Draws a quad on the canvas. A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and the subsequent pairs should proceed clockwise or counter-clockwise around the defined shape.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.quad(
    9, 0,  # point1
    27 + 5, 2,  # point2
    19, 12,  # point3
    9, 7  # point4
)
cm.run()
```

<img src="/img/test_quad.png" width="100%"/>

## cm.**rect**(*a*, *b*, *c*, *d*) {#rect}

Draws a rectangle on the canvas. A rectangle is a four-sided closed shape with every angle at ninety degrees. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height. The way these parameters are interpreted, may be changed with the rect_mode() function.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.rect(1, 1, 10, 10)
cm.run()
```

<img src="/img/test_rect.png" width="100%"/>

## cm.**square**(*x*, *y*, *extend*) {#square}

Draws a square to the screen. A square is a four-sided shape with every angle at ninety degrees, and equal side size. This function is a special case of the rect() function, where the width and height are the same, and the parameter is called "s" for side size. By default, the first two parameters set the location of the upper-left corner, the third sets the side size of the square. The way these parameters are interpreted, may be changed with the rect_mode() function.


```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.square(1, 1, 10)
cm.run()
```

<img src="/img/test_square.png" width="100%"/>

## cm.**square**(*x1*, *y1*, *x2*, *y2*, *x3*, *y3*) {#triangle}

Draws a triangle to the canvas. A triangle is a plane created by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.triangle(
    6, 0,  # point1
    12, 6,  # point2
    0, 6 # point3
)
cm.run()
```

<img src="/img/test_triangle.png" width="100%"/>

