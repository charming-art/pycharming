# Zeros

```py
import charming as cm

cm.full_screen()
cm.no_cursor()

for j in range(10):
    for i in range(20):
        if (i + j) % 2 == 1:
            cm.text("0", i, j)

cm.run()
```
