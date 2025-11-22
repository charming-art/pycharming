# Random {#random-page}

Methods for generate random numbers.

## cm.**noise**(*x*, *y=0*, *z=0*) : *number* {#noise}

Returns the Perlin noise value at specified coordinates.Perlin noise is a random sequence generator producing a more naturally ordered, harmonic succession of numbers compared to the standard random() function.

It was invented by Ken Perlin in the 1980s and been used since in graphical applications to produce procedural textures, natural motion, shapes, terrains etc.

The resulting value will always be between 0.0 and 1.0. The noise value can be animated by moving through the noise space as demonstrated in the example above. As a general rule the smaller the difference between inputs, the smoother the resulting noise sequence will be.

```py
import charming as cm


xoff = 0


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()


@cm.draw
def draw():
    global xoff
    cm.background(' ')
    xoff += 0.01
    n = cm.noise(xoff) * cm.get_width()
    cm.line(n, 0, n, cm.get_height())


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_noise.gif" width="100%"/>

## cm.**noise_detail**(*octaves=4*, *falloff=0.5*) {#noise_detail}

Adjusts the character and level of detail produced by the Perlin noise function. Similar to harmonics in physics, noise is computed over several octaves. Lower octaves contribute more to the output signal and as such define the overall intensity of the noise, whereas higher octaves create finer grained details in the noise sequence. By default, noise is computed over 4 octaves with each octave contributing exactly half than its predecessor, starting at 50% strength for the 1st octave. This falloff amount can be changed by adding an additional function parameter. Eg. a falloff factor of 0.75 means each octave will now have 75% impact (25% less) of the previous lower octave. Any value between 0.0 and 1.0 is valid, however note that values greater than 0.5 might result in greater than 1.0 values returned by noise(). By changing these parameters, the signal created by the noise() function can be adapted to fit very specific needs and characteristics.

```py
import charming as cm


cm.full_screen()
cm.color_mode(cm.RGB)
cm.no_cursor()

cm.background(' ')
for j in range(cm.get_height()):
    for i in range(cm.get_width()):
        mid = cm.ceil(cm.get_width() / 2)
        dist = cm.abs(i - mid)
        noise_scale = 0.02
        if i < mid:
            cm.noise_detail(2, 0.2)
        else:
            cm.noise_detail(8, 0.65)
        v = cm.noise(dist * noise_scale, j * noise_scale)
        c = cm.map(v, 0, 1, 0, 255)
        cm.stroke(' ', (c,), (c,))
        cm.point(i, j)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_noise_detail.png" width="100%"/>

## cm.**noise_seed**(*seed*) {#noise_seed}

Sets the seed value for noise(). By default, noise() produces different results each time the program is run. Set the value parameter to a constant to return the same pseudo-random numbers each time the software is run.

```py
import charming as cm


xoff = 0.0


@cm.setup
def setup():
    cm.full_screen()
    cm.no_cursor()
    cm.noise_seed(99)


@cm.draw
def draw():
    cm.background(' ')
    global xoff
    xoff += .01
    n = cm.noise(xoff) * cm.get_width()
    cm.line(n, 0, n, cm.get_height())


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_noise_seed.gif" width="100%"/>

## cm.**random**(*low*[, *high*]) {#random}

Return a random floating-point number.

Takes either 0, 1 or 2 arguments.

If no argument is given, returns a random number from 0 up to (but not including) 1.

If one argument is given and it is a number, returns a random number from 0 up to (but not including) the number.

If two arguments are given, returns a random number from the first argument up to (but not including) the second argument.

```py
import charming as cm


bar_width = 5
bar_count = 0
bars = []


@cm.setup
def setup():
    global bars, bar_count
    cm.full_screen()
    cm.no_cursor()
    bar_count = cm.floor(cm.get_width() / bar_width)
    bars = [0 for _ in range(bar_count)]


@cm.draw
def draw():
    global bars
    i = int(cm.random(bar_count))
    bars[i] += 1

    cm.background(' ')
    cm.fill('Q')
    cm.no_stroke()

    for index, bar_height in enumerate(bars):
        cm.rect(
            bar_width * index,
            cm.get_height() - bar_height,
            bar_width,
            bar_height
        )


cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_random.gif" width="100%"/>

## cm.**random_gaussian**() {#random_gaussian}

Returns a random number fitting a Gaussian, or normal, distribution. There is theoretically no minimum or maximum value that random_gaussian() might return. Rather, there is just a very low probability that values far from the mean will be returned; and a higher probability that numbers near the mean will be returned. Takes either 0, 1 or 2 arguments.

If no args, returns a mean of 0 and standard deviation of 1.

If one arg, that arg is the mean (standard deviation is 1).

If two args, first is mean, second is standard deviation.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

for y in range(cm.get_height()):
  mid = cm.get_width() / 2
  x = cm.random_gaussian(mid, 40)
  cm.stroke('$')
  cm.line(mid, y, x, y)

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_random_gaussian.png" width="100%"/>

## cm.**random_seed**(*seed*) {#random_seed}

Sets the seed value for random().

By default, random() produces different results each time the program is run. Set the seed parameter to a constant to return the same pseudo-random numbers each time the software is run.

```py
import charming as cm

cm.full_screen()
cm.no_cursor()
cm.color_mode(cm.RGB)

cm.random_seed(99)
for i in range(cm.get_width()):
    r = cm.random(0, 255)
    cm.stroke(' ', (r,), (r, ))
    cm.line(i, 0, i, cm.get_height())

cm.run()
```

<img src="https://raw.githubusercontent.com/gh2hq/public-files/master/test_random_seed.png" width="100%"/>