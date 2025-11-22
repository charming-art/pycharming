# Vertex {#vertex-page}

Methods for drawing custom shapes.

## cm.**begin_shape**(*primitive_type=POLYGON | POINTS | LINES | TRIANGLES | TRIANGLE_STRIP | TRIANGLE_FAN | QUADS | QUAD_STRIP*) {#begin_shape}

Using the begin_shape() and end_shape() functions allow creating more complex forms. begin_shape() begins recording vertices for a shape and end_shape() stops recording. The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon.

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape()
cm.vertex(1, 1)
cm.vertex(6, 1)
cm.vertex(6, 6)
cm.vertex(1, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_polygon.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.LINES)
cm.vertex(1, 1)
cm.vertex(6, 1)
cm.vertex(6, 6)
cm.vertex(1, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_lines.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.POINTS)
cm.vertex(1, 1)
cm.vertex(6, 1)
cm.vertex(6, 6)
cm.vertex(1, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_points.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.TRIANGLES)
cm.vertex(1, 6)
cm.vertex(5, 1)
cm.vertex(10, 6)
cm.vertex(15, 1)
cm.vertex(20, 6)
cm.vertex(25, 1)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_triangles.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.TRIANGLE_STRIP)
cm.vertex(1, 6)
cm.vertex(5, 1)
cm.vertex(10, 6)
cm.vertex(15, 1)
cm.vertex(20, 6)
cm.vertex(25, 1)
cm.vertex(30, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_triangle_strip.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.TRIANGLE_FAN)
cm.vertex(11, 6)
cm.vertex(11, 1)
cm.vertex(21, 6)
cm.vertex(11, 11)
cm.vertex(1, 6)
cm.vertex(11, 1)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_triangle_fan.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.QUADS)
cm.vertex(1, 1)
cm.vertex(1, 6)
cm.vertex(6, 6)
cm.vertex(6, 1)
cm.vertex(11, 1)
cm.vertex(11, 6)
cm.vertex(16, 6)
cm.vertex(16, 1)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_quads.png" width="100%"/>

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape(cm.QUAD_STRIP)
cm.vertex(1, 1)
cm.vertex(1, 6)
cm.vertex(6, 1)
cm.vertex(6, 6)
cm.vertex(11, 1)
cm.vertex(11, 6)
cm.vertex(16, 1)
cm.vertex(16, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_quad_strip.png" width="100%"/>

## cm.**end_shape**(*mode=OPEN | CLOSE*) {#end_shape}

The end_shape() function is the companion to begin_shape() and may only be called after begin_shape(). When endShape() is called, all of image data defined since the previous call to begin_shape() is written into the image buffer. The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape()
cm.vertex(1, 1)
cm.vertex(6, 1)
cm.vertex(1, 6)
cm.end_shape()

cm.begin_shape()
cm.vertex(8, 1)
cm.vertex(13, 1)
cm.vertex(8, 6)
cm.end_shape(cm.CLOSE)

cm.run()
```

<img src="/img/test_end_shape.png" width="100%"/>

## cm.**vertex**(*x*, *y*) {#vertex}

All shapes are constructed by connecting a series of vertices. vertex() is used to specify the vertex coordinates for points, lines, triangles, quads, and polygons. It is used exclusively within the begin_shape() and end_shape() functions.

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom shapes
cm.begin_shape()
cm.vertex(1, 1)
cm.vertex(6, 1)
cm.vertex(6, 6)
cm.vertex(1, 6)
cm.end_shape(close_mode=cm.CLOSE)

cm.run()
```

<img src="/img/test_begin_shape_polygon.png" width="100%"/>

## cm.**open_shape**(*primitive_type=POLYGON | POINTS | LINES | TRIANGLES | TRIANGLE_STRIP | TRIANGLE_FAN, mode=OPEN | CLOSE*) {#open_shape}

The syntactic sugar for begin_shape() and end_shape().

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

with cm.open_shape(cm.LINES, cm.CLOSE):
    cm.vertex(1, 1)
    cm.vertex(6, 1)
    cm.vertex(6, 6)
    cm.vertex(1, 6)

cm.run()
```

<img src="/img/test_open_shape.png" width="100%"/>

## cm.**begin_contour**() {#begin_contour}
## cm.**end_contour**() {#end_contour}

Use the begin_contour() and end_contour() functions to create negative shapes within shapes such as the center of the letter 'O'. beginContour() begins recording vertices for the shape and endContour() stops recording. The vertices that define a negative shape must "wind" in the opposite direction from the exterior shape. First draw vertices for the exterior clockwise order, then for internal shapes, draw vertices shape in counter-clockwise.

These functions can only be used within a begin_shape()/end_shape() pair and transformations such as translate(), rotate(), and scale() do not work within a begin_contour()/end_contour() pair. It is also not possible to use other shapes, such as ellipse() or rect() within.

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# Outer shape
cm.begin_shape()

cm.vertex(0, 0)
cm.vertex(15, 0)
cm.vertex(15, 15)
cm.vertex(0, 15)

# Inner shape
cm.begin_contour()
cm.vertex(5, 5)
cm.vertex(5, 10)
cm.vertex(10, 10)
cm.vertex(10, 5)
cm.end_contour()

cm.end_shape(cm.CLOSE)

cm.run()
```

<img src="/img/test_contour.png" width="100%"/>

## cm.**open_contour**() {#open_contour}

The syntactic sugar for begin_contour() and end_contour().

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# Shapes
cm.begin_shape()
with cm.open_shape(close_mode=cm.CLOSE):
  cm.vertex(0, 0)
  cm.vertex(15, 0)
  cm.vertex(15, 15)
  cm.vertex(0, 15)
  with cm.open_contour():
    cm.vertex(5, 5)
    cm.vertex(5, 10)
    cm.vertex(10, 10)
    cm.vertex(10, 5)

cm.run()
```

<img src="/img/test_open_contour.png" width="100%"/>

## cm.**bezier_vertex**(*x1*, *y1*, *x2*, *y2*, *x3*, *y3*) {#bezier_vertex}

Specifies vertex coordinates for Bezier curves. Each call to bezier_vertex() defines the position of two control points and one anchor point of a Bezier curve, adding a new segment to a line or shape.

The first time bezier_vertex() is used within a begin_shape() call, it must be prefaced with a call to vertex() to set the first anchor point. This function must be used between begin_shape() and end_shape() and only when there is no MODE or POINTS parameter specified to begin_shape().

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom curve
with cm.open_shape():
    cm.vertex(30, 5)
    cm.bezier_vertex(80, 0, 80, 35, 30, 35)
    cm.bezier_vertex(50, 30, 60, 25, 30, 5)

cm.run()
```

<img src="/img/test_bezier_vertex.png" width="100%"/>

## cm.**bezier_vertex**(*x*, *y*) {#curve_vertex}

Specifies vertex coordinates for curves. This function may only be used between begin_shape() and end_shape() and only when there is no MODE parameter specified to begin_shape().

The first and last points in a series of curve_vertex() lines will be used to guide the beginning and end of a the curve. A minimum of four points is required to draw a tiny curve between the second and third points. Adding a fifth point with curve_vertex() will draw the curve between the second, third, and fourth points. The curve_vertex() function is an implementation of Catmull-Rom splines.

```py
import charming as cm

# environment
cm.full_screen()
cm.no_cursor()

# styles
cm.fill('*', cm.YELLOW, cm.RED)
cm.stroke('@', cm.GREEN, cm.BLUE)

# custom curve
with cm.open_shape():
    cm.curve_vertex(44, 21)
    cm.curve_vertex(44, 21)
    cm.curve_vertex(48, 9)
    cm.curve_vertex(21, 7)
    cm.curve_vertex(2, 30)
    cm.curve_vertex(2, 30)

cm.run()
```

<img src="/img/test_curve_vertex.png" width="100%"/>