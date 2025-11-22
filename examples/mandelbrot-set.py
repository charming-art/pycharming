import charming as cm

cols = 80
rows = 30
maxIter = 80

cm.full_screen()
cm.no_cursor()

for x0 in range(cols):
    for y0 in range(rows):
        x = cm.map(x0, 0, cols, -2, 1)
        y = cm.map(y0, 0, rows, -1.164, 1.164)
        [a, b, i] = [0, 0, 0]
        while (i < maxIter):
            [a, b] = [a ** 2 - b ** 2 + x, 2 * a * b + y]
            if (a ** 2 + b ** 2) > 4:
                break
            i += 1
        ch = i == maxIter and "0" or " "
        cm.text(ch, x0, y0)

cm.run()

