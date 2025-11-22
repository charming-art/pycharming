import charming as cm

char = 'INFORMATION'
n = len(char)

cm.full_screen()
cm.no_cursor()

for j in range(n):
    for i in range(n * 2 - 1):
        ch = char[j] if j == i / 2 else "."
        cm.text(ch, i, j)

cm.run()

