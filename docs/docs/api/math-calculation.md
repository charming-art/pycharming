# Calculation {#calculation-page}

Methods for basic math calculation.

## cm.**abs**(*n*) : *number* {#abs}

Calculates the absolute value (magnitude) of a number.

```py
from charming import abs

abs(1) # 1
abs(-1) # 1
abs(0) # 0
```

## cm.**ceil**(*n*) : *number* {#ceil}

Calculates the closest int value that is greater than or equal to the value of the parameter.

```py
from charming import ceil

ceil(1.2) # 2
ceil(-1.2) # -1
ceil(1) # 1
ceil(-1) # -1
```

## cm.**constrain**(*amt*, *low*, *high*) : *number* {#constrain}

Constrains a value to not exceed a maximum and minimum value.

```py
from charming import constrain

constrain(-1, 2, 3) # 2
constrain(4, 2, 3) # 3
constrain(2.5, 2, 3) # 2.5
```

## cm.**dist**(*x*1, *y1*, *x2*, *y2*) : *number* {#dist}

Calculates the distance between two points.

```py
from charming import dist

dist(0, 0, 1, 0) # 1.0
dist(-1, -1, 2, 3) # 5.0
```

## cm.**exp**(*n*) : *number* {#exp}

Returns Euler's number e (2.71828...) raised to the power of the n parameter.

```py
from charming import exp

exp(1) # 2.718281828459045
```

## cm.**floor**(*n*) : *number* {#floor}

Calculates the closest int value that is less than or equal to the value of the parameter.

```py
from charming import floor

floor(1.2) # 1
floor(-1.2) # -2
floor(0) # 0
```

## cm.**lerp**(*start*, *stop*, *amt*) : *number* {#lerp}

Calculates a number between two numbers at a specific increment.

```py
from charming import lerp

lerp(1, 2, 0) # 1
lerp(1, 2, 1) # 2
lerp(10, 20, 0.2) # 12.0
```

## cm.**log**(*n*) : *number* {#log}

Calculates the natural logarithm (the base-e logarithm) of a number.

```py
from charming import log

log(math.e) # 1.0
```

## cm.**mag**(*a*, *b*, *c*=0) : *number* {#mag}

Calculates the magnitude (or length) of a vector.

```py
from charming import mag

mag(3, 4) # 5.0
mag(3, 4, 12) # 13.0
```

## cm.**map**(*value*, *start1*, *stop1*, *start2*, *stop2*) : *number* {#map}

Re-maps a number from one range to another.

```py
from charming import map

map(1.5, 1, 2, 10, 20) # 15
```

## cm.**max(*\*args*, *\*\*kw*)** : *number* {#max}

Determines the largest value in a sequence of numbers, and then returns that value.

```py
from charming import max

max(0, 1) # 1
max(0, 1, 2) # 2
max([0, 1, 2, 3]) # 3
```

## cm.**max(*\*args*, *\*\*kw*)** : *number* {#min}

Determines the smallest value in a sequence of numbers, and then returns that value.

```py
from charming import min

min(0, 1) # 0
min(0, 1, 2) # 0
min([0, 1, 2, 3]) # 0
```

## cm.**norm**(*value*, *start*, *stop*) : *number* {#norm}

Normalizes a number from another range into a value between 0 and 1.

```py
from charming import norm

norm(20, 0, 50) # 0.4
```

## cm.**pow**(*n*, *e*) : *number* {#pow}

Facilitates exponential expressions.

```py
from charming import pow

pow(3, 2) # 9.0
pow(4, 0.5) # 2.0
```

## cm.**round**(*n*) : *number* {#round}

Calculates the integer closest to the n parameter.

```py
from charming import round

round(9.2) # 9
round(9.4) # 9
round(9.5) # 10
round(-1.4) # -1
round(-1.5) # -2
```

## cm.**sq**(*n*) : *number* {#sq}

Squares a number (multiplies a number by itself).

```py
from charming import sq

sq(5) # 25
```

## cm.**sqrt**(*n*) : *number* {#sqrt}

Calculates the square root of a number.

```py
from charming import sqrt

sqrt(25) # 5.0
```