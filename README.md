# PyCharming: A Python Library for ASCII Art

Processing-style creative coding for the terminal. Create ASCII art animations, generative art, terminal games, and expressive data visualizations.

**🌐 [Documentation](https://pycharming.vercel.app)** | **📦 [Installation](#-installation)** | **🚀 [Get Started](#-get-started)**

<img src="/img/cover.png" alt="cover" width="100%">

## ✨ Features

- **🎨 Highly Expressive**: Colors in PyCharming include a character channel alongside foreground and background colors, giving you more ways to express your ideas.
- **🚀 Powerful and Flexible**: Draw shapes, curves, images, and typography with transforms and events. More flexible than most terminal art tools.
- **📚 Easy to Learn**: Beginner-friendly with Python's simple syntax and Processing-style APIs. Start creating terminal art in minutes.

<img src="/img/hello_world.gif" alt="Charming" width="100%">

## 📦 Installation

- **Supported OS**: PyCharming currently only supports **MacOS**, though it should also work for any other platform that provides a working [curses](https://docs.python.org/3/howto/curses.html) implementation. It soon will support **Windows** and run in **Modern Browsers**.
- **Python**: 3.6/3.7/3.8

```bash
$ pip3 install charming --user
```

## 🚀 Get Started

```python
'''rect.py'''
import charming as cm

# draw a rect
cm.full_screen()
cm.rect(0, 0, 10, 10)

# run the sketch
cm.run()
```

```bash
$ python3 rect.py
```

![get started](/img/get_started.png)

## 📎 Links

- [Documentation](https://pycharming.vercel.app)
- [Get Started](https://pycharming.vercel.app/docs/get-started)
- [Features](https://pycharming.vercel.app/docs/features/readme)
- [API Reference](https://pycharming.vercel.app/docs/api/readme)
- [Examples](https://pycharming.vercel.app/examples/overview)

## 🛸 Future work

- Using Rust as backend to run in browser and support multiple OS, using both JavaScript and Python as frontend.
- Add more API to be more expressive.
- Build a community and online playground like OpenProcessing.

## 💳 License

PyCharming is [LGPL-2.1 License](https://github.com/charming-art/pycharming/blob/main/LICENSE).
