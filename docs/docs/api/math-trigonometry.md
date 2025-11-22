# Trigonometry {#trigonometry-page}

Methods for calculate trigonometry.

## cm.**acos**(*n*) : *number* {#acos}

The inverse of cos(), returns the arc cosine of a value.

```py
from charming import acos

acos(0.5) # math.pi / 3
```

## cm.**asin**(*n*) : *number* {#asin}

The inverse of sin(), returns the arc sine of a value.

```py
from charming import asin

acos(1) # math.pi / 2
```

## cm.**atan**(*n*) : *number* {#atan}

The inverse of tan(), returns the arc tangent of a value.

```py
from charming import atan

atan(1) # math.pi / 4
```

## cm.**atan2**(*y*, *x*) : *number* {#atan2}

Calculates the angle (in radians) from a specified point to the coordinate origin as measured from the positive x-axis.

```py
from charming import atan2

atan2(1, 1) # math.pi / 4
```

## cm.**cos**(*n*) : *number* {#cos}

Calculates the cosine of an angle.

```py
from charming import cos
from charming import PI

cos(PI / 3) # 0.5
```

## cm.**degrees**(*n*) : *number* {#degrees}

Converts a radian measurement to its corresponding value in degrees.

```py
from charming import degrees
from charming import PI

degrees(PI) # 180.0
```

## cm.**degrees**(*n*) : *number* {#radians}

Converts a degree measurement to its corresponding value in radians.

```py
from charming import radians

radians(180.0) # math.pi
```

## cm.**sin**(*n*) : *number* {#sin}

Calculates the sine of an angle.

```py
from charming import sin
from charming import PI

sin(PI / 6) # 0.5
```

## cm.**tan**(*n*) : *number* {#tan}

Calculates the ratio of the sine and cosine of an angle

```py
from charming import tan
from charming import PI

tan(PI / 4) # 1
```