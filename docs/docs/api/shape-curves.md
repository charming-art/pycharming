# Curves {#curves-page}

Methods for drawing curves.

## cm.**bezier**(*x1*, *y1*, *x2*, *y2*, *x3*, *y3*, *x4*, *y4*) {#bezier}

Draws a cubic Bezier curve on the screen. These curves are defined by a series of anchor and control points. The first two parameters specify the first anchor point and the last two parameters specify the other anchor point, which become the first and last points on the curve. The middle parameters specify the two control points which define the shape of the curve. Approximately speaking, control points "pull" the curve towards them.

Bezier curves were developed by French automotive engineer Pierre Bezier, and are commonly used in computer graphics to define gently sloping curves. See also curve().

## cm.**bezier_point**(*n1*, *n2*, *n3*, *n4*, *t*) {#bezier_point}

Given the x or y co-ordinate values of control and anchor points of a bezier curve, it evaluates the x or y coordinate of the bezier at position t. The parameters a and d are the x or y coordinates of first and last points on the curve while b and c are of the control points.The final parameter t is the position of the resultant point which is given between 0 and 1. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a bezier curve at t.

## cm.**bezier_tangent**(*n1*, *n2*, *n3*, *n4*, *t*) {#bezier_tangent}

Evaluates the tangent to the Bezier at position t for points a, b, c, d. The parameters a and d are the first and last points on the curve, and b and c are the control points. The final parameter t varies between 0 and 1.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

cm.stroke('@', cm.YELLOW, cm.RED)
cm.fill('+', cm.GREEN, cm.BLUE)

# only a bezier curve
with cm.open_context():
    cm.no_fill()
    cm.bezier(40, 5, 10, 10, 50, 20, 10, 30)

# a bezier curve with points
t = 0
cnt = 4
cm.translate(20, 0)
with cm.open_context():
    cm.no_fill()
    cm.bezier(40, 5, 10, 10, 50, 20, 10, 30)

    cm.stroke('a', cm.RED, cm.YELLOW)
    cm.stroke_weight(1)
    while t <= 1:
        x = cm.bezier_point(40, 10, 50, 10, t)
        y = cm.bezier_point(5, 10, 20, 30, t)
        cm.point(x, y)
        t += 1 / cnt

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_bezier.png" width="100%"/>

## cm.**curve**(*x1*, *y1*, *x2*, *y2*, *x3*, *y3*, *x4*, *y4*) {#curve}

Draws a curved line on the screen between two points, given as the middle four parameters. The first two parameters are a control point, as if the curve came from this point even though it's not drawn. The last two parameters similarly describe the other control point.

Longer curves can be created by putting a series of curve() functions together or using curveVertex(). An additional function called curveTightness() provides control for the visual quality of the curve. The curve() function is an implementation of Catmull-Rom splines.

## cm.**curve_tangent**(*n1*, *n2*, *n3*, *n4*, *t*) {#curve_tangent}

Evaluates the tangent to the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are points on the curve, and b and c are the control points.

## cm.**curve_tangent**(*v*) {#curve_tightness}

Modifies the quality of forms created with curve() and curve_vertex().The parameter tightness determines how the curve fits to the vertex points. The value 0.0 is the default value for tightness (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

cm.stroke('@', cm.YELLOW, cm.RED)
cm.fill('+', cm.GREEN, cm.BLUE)

# A curve with tightness of 1
with cm.open_context():
    cm.curve_tightness(1)
    cm.no_fill()
    cm.curve(-55, 26, 13, 24, 13, 11, -45, 25)

# A curve with tightness of 0
with cm.open_context():
    cm.translate(20, 0)
    cm.curve_tightness(0)  # default
    cm.no_fill()
    cm.curve(-55, 26, 13, 24, 13, 11, -45, 25)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_curve_tightness.png" width="100%"/>

## cm.**curve_point**(*n1*, *n2*, *n3*, *n4*, *t*) {#curve_point}

Evaluates the curve at position t for points a, b, c, d. The parameter t varies between 0 and 1, a and d are control points of the curve, and b and c are the start and end points of the curve. This can be done once with the x coordinates and a second time with the y coordinates to get the location of a curve at t.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

cm.stroke('@', cm.YELLOW, cm.RED)
cm.fill('+', cm.GREEN, cm.BLUE)

# A curve with some points
with cm.open_context():
    cm.no_fill()
    cm.curve(-55, 26, 13, 24, 13, 11, -45, 25)

    t = 0
    cnt = 3
    cm.stroke('p', cm.CYAN, cm.RED)
    cm.stroke_weight(1)
    while t <= 1:
        x = cm.curve_point(-55, 13, 13, -45, t)
        y = cm.curve_point(26, 24, 11, 25, t)
        cm.point(x, y)
        t += 1 / cnt


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_curve.png" width="100%"/>