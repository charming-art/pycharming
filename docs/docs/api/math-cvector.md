# CVector {#cvector-class-page}

Methods for manipulation vector object which is useful for simulating physic system.

## cm.**CVector**(*x*=0, *y*=0) : *CVector* {#cvector}

A class to describe a two dimensional vector, specifically a Euclidean (also known as geometric) vector.

```py
from charming import CVector

v1 = CVector() 
v2 = CVector(1, 2)

v1 # (0, 0)
v2 # (1, 2)
```

## cvector.**set**(*x*=0", *y*=0) : *CVector* {#set}
cvector.**set**(*vector*) : *CVector*
cvector.**set**(*list*) : *CVector*

Set the components of the vector.

```py
from charming import CVector

v = CVector()
v.set(1, 2) # (1, 2)

v1 = CVector()
v1.set(v) # (1, 2)
v1.set([2, 3]) # (2, 3)
```

## CVector.**random_2D**() : *CVector* {#random_2D}

Make a new 2D unit vector with a random direction.

```py
from charming import CVector
from math import isclose

v = CVector.random_2D()
isclose(v.mag, 1.0) # true
```

## CVector.**from_angle**() : *CVector* {#from_angle}

Make a new 2D unit vector from an angle.

```py
from charming import CVector
from math import pi, isclose

v = CVector.from_angle(math.pi / 3)
isclose(v.mag, 1.0) # true
```

## cvector.**copy**() : *CVector* {#copy}

Get a copy of the vector.

```py
from charming import CVector

v = CVector(1, 2)
v1 = v.copy() # (1, 2)
```

## cvector.**mag**() : *number* {#cvector-mag}

Calculate the magnitude of the vector.

```py
from charming import CVector

v = CVector(3, 4)
v.mag # 5.0
```

## cvector.**mag_sq**() : *number* {#mag_sq}

Calculate the magnitude of the vector, squared.

```py
from charming import CVector

v = CVector(3, 4)
v.mag_sq() # 25
```

## cvector *+* other : *CVector* {#add}

Adds x and y components to a vector, one vector to another, or two independent vectors.

```py
import charming as cm

v1 = cm.CVector(1, 2)
v2 = cm.CVector(3, 4)
v1 + v2 # (4, 6)
v1 += v2 # (4, 6)
```

## cvector *-* other : *CVector* {#sub}

Subtract x and y components from a vector, one vector from another, or two independent vectors.

```py
from charming import CVector

v1 = CVector(4, 2)
v2 = CVector(2, 1)
v1 - v2 # (2, 1)
v1 -= v2 # (2, 1)
```

## cvector <i>*</i> other : <i>CVector</i> {#mul}

Multiply a vector by a scalar.

```py
from charming import CVector

v =CVector(2, 3)
v * 2 # (4, 6)
2 * v # (4, 6)
-v # (-2, -3)
v *= 2 #(4, 6)
```

## cvector */* other: *CVector* {#div}

Divide a vector by a scalar.

```py
from charming import CVector

v = CVector(2, 4)
v / 2 # (1.0, 2.0)
v /= 2 # (1.0, 2.0)
```

## cvector.**dist**(*cvector*) : *number* {#cvector-dist}

Calculate the distance between two points.

```py
from charming import CVector

v1 = CVector(1, 2)
v2 = CVector(4, 6)
v1.dist(v2) # 5.0
```

## cvector.**dot**(*cvector*) : *number* {#dot}

Calculate the dot product of two vectors.

```py
from charming import CVector

v1 = CVector(1, 2)
v2 = CVector(2, 3)
v1.dot(v2) # 8
```

## cvector.**cross**(*cvector*) : *number* {#cross}

Calculate and return the cross product.

```py
from charming import CVector

v1 = CVector(1, 2)
v2 = CVector(2, 3)
v1.cross(v2) # -1
```

## cvector.**normalize**() : *CVector* {#normalize}

Normalize the vector to a length of 1.

```py
from charming import CVector
from math import isclose

v = CVector(3, 4)
isclose(v.normalize().mag, 1.0) # True
```

## cvector.**limit**(*max_len*) : *CVector* {#limit}

Limit the magnitude of the vector.

```py
from charming import CVector

v = CVector(3, 4)
v.limit(6).mag # 5.0
v.limit(4).mag # 4.0
```

## cvector.mag **=** *number* : *CVector* {#set_mag}

Set the magnitude of the vector.

```py
from charming import CVector
from math import isclose

v = CVector(3, 4)
v.mag = 2
isclose(v.mag, 2) # True
```

## cvector.**heading**(*max_len*) : *number* {#heading}

Calculate the angle of rotation for this vector.

```py
from charming import CVector
from math import pi, isclose

v = CVector(1, 1)
isclose(v.heading(), pi / 4) # True
```

## cvector.**rotate**(*theta*) : *CVector* {#rotate}

Rotate the vector by an angle (2D only)

```py
from charming import CVector
from math import pi, isclose

v = CVector(1, 1)
isclose(v.rotate(pi / 2).heading(), pi / 4 + pi / 2) # True
```

## cvector.**lerp**(*cvector*, *amt*) : *CVector* {#cvector-lerp}

Linear interpolate the vector to another vector.

```py
from charming import CVector
from math import isclose

v1 = CVector(1, 2)
v2 = CVector(2, 3)
v3 = v1.lerp(v2, 0.4)

isclose(v3.x, 1.4) # True
isclose(v3.y, 2.4) # True
```

## cvector.**angle_between**(*cvector*) : *number* {#angle_between}

Calculate and return the angle between two vectors.

```py
from charming import CVector
from math import pi, isclose

v1 = CVector.from_angle(pi / 4)
v2 = CVector.from_angle(pi / 3)
angle = v1.angle_between(v2)
isclose(angle, pi / 3 - pi / 4) # True
```

## cvector.**array**() : *list* {#array}

Return a representation of the vector as a float array.

```py
from charming import CVector

v = CVector(1, 2)
v.array() # [1, 2]
```