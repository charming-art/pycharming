# Shape

PyCharming provides a variety of methods for drawing shapes, from basic primitives to custom shapes and curves. Similar to Processing, you can draw basic 2D shapes, create custom polygons, and draw smooth curves.

## Basic Primitives

PyCharming supports drawing basic 2D shapes like rectangles, circles, ellipses, lines, triangles, and more. These primitives are the building blocks for creating more complex visualizations.

### Rectangle

The `rect()` function draws a rectangle. By default, the first two parameters set the location of the upper-left corner, the third sets the width, and the fourth sets the height.

```py
''' charming: rectangle '''

import charming as app

app.full_screen()
app.no_cursor()
app.rect(1, 1, 10, 10)
app.run()
```

![rectangle](/img/test_rect.png)

### Circle

The `circle()` function draws a circle. A circle is a special case of an ellipse where the width and height are the same. The first two parameters set the location of the center, and the third sets the diameter.

```py
''' charming: circle '''

import charming as app

app.full_screen()
app.no_cursor()
app.circle(12, 6, 10)
app.run()
```

![circle](/img/test_circle.png)

### Ellipse

The `ellipse()` function draws an ellipse (oval). By default, the first two parameters set the location of the center, and the third and fourth parameters set the shape's width and height.

```py
''' charming: ellipse '''

import charming as app

app.full_screen()
app.no_cursor()
app.ellipse(12, 6, 20, 10)
app.run()
```

![ellipse](/img/test_ellipse.png)

### Line

The `line()` function draws a line (a direct path between two points). The line width can be modified using the `stroke_weight()` function.

```py
''' charming: line '''

import charming as app

app.full_screen()
app.no_cursor()
app.line(1, 1, 10, 10)
app.run()
```

![line](/img/test_line.png)

### Triangle

The `triangle()` function draws a triangle by connecting three points. The first two arguments specify the first point, the middle two arguments specify the second point, and the last two arguments specify the third point.

```py
''' charming: triangle '''

import charming as app

app.full_screen()
app.no_cursor()
app.triangle(
    6, 0,  # point1
    12, 6,  # point2
    0, 6   # point3
)
app.run()
```

![triangle](/img/test_triangle.png)

## Custom Shapes

For more complex shapes that can't be created with basic primitives, you can use `begin_shape()` and `vertex()` to create custom polygons. This gives you complete control over the shape's vertices.

### Basic Custom Shape

Using `begin_shape()` and `vertex()`, you can create any polygon by specifying its vertices:

```py
''' charming: custom shape '''

import charming as app

app.full_screen()
app.no_cursor()

app.fill('*', app.YELLOW, app.RED)
app.stroke('@', app.GREEN, app.BLUE)

# Create a custom shape
app.begin_shape()
app.vertex(1, 1)
app.vertex(6, 1)
app.vertex(6, 6)
app.vertex(1, 6)
app.end_shape(close_mode=app.CLOSE)

app.run()
```

![custom shape](/img/test_begin_shape_polygon.png)

The `begin_shape()` function begins recording vertices, and `end_shape()` stops recording. You can specify different primitive types like `POLYGON`, `POINTS`, `LINES`, `TRIANGLES`, `QUADS`, etc., to create different types of shapes.

## Curves

PyCharming supports drawing smooth curves using Bezier curves. Bezier curves are defined by control points that determine the curve's shape.

### Bezier Curve

The `bezier()` function draws a Bezier curve. It takes 8 parameters: the first two define the first anchor point, the next two define the first control point, the following two define the second control point, and the last two define the second anchor point.

```py
''' charming: bezier curve '''

import charming as app

app.full_screen()
app.no_cursor()

app.stroke('*', app.WHITE, app.BLACK)
app.no_fill()

# Draw a Bezier curve
# (x1, y1, cx1, cy1, cx2, cy2, x2, y2)
app.bezier(5, 5, 10, 0, 20, 15, 25, 5)

app.run()
```

![bezier curve](/img/test_bezier.png)

You can also create curves using `bezier_vertex()` within a custom shape to create more complex curved shapes.

## Shape Attributes

You can control how shapes are drawn using various attributes:

- **`rect_mode()`**: Changes how `rect()` and `square()` interpret their parameters (CENTER, CORNER, CORNERS, RADIUS)
- **`ellipse_mode()`**: Changes how `ellipse()`, `circle()`, and `arc()` interpret their parameters (CENTER, RADIUS, CORNER, CORNERS)
- **`stroke_weight()`**: Sets the width of the stroke used for lines, points, and the border around shapes
- **`fill()`** and **`stroke()`**: Set the fill and stroke colors (including character, foreground, and background colors)

For more details and advanced features, see the [Shape API Reference](../api/shape.md).
