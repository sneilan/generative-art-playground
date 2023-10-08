# generative art sandbox

## personal experiments in generative art.

### Instructions to try out are

```
# install latest node (I used v20).
$ npm i
$ ./start.sh (will start sass compiler / hot reloadable server)
```

Go to http://localhost:3000 and you should see something like

![image](https://github.com/sneilan/generative-art-playground/assets/91979/2682f51f-ce27-4396-9fa3-3d5bb3dbf639)

### Why

I'm looking to explore the impedance mismatch between representing squares on a grid in CSS vs squares on a grid in 2d.
The purpose of this is to inform new programming language design should I decide to invent a new language at some point (if there is a market need that I identify in open-source)

### Hacking with this project

If you open up the webpage in one tab and index.html in the other, you'll see a bunch of divs with weird classes like l1, t1, bb bt etc. These classes move around absolutely positioned divs in 2d space. These classes are nothing more than wrappers around css but let you draw shapes on a grid.

![image](https://github.com/sneilan/generative-art-playground/assets/91979/fd7e28b7-6d05-4de8-991d-a891af177c65)

There's a couple types of classes.
* Positioning classes
* Border classes
* Coloration classes
* Splitter classes

Each positioning class is a character followed by a number 0-100 describing how much movement should happen. For example, the class "l" means move N units from the left. So l5 would mean move this div 5 units from the left.

The classes are
1) l (move from left)
2) t (move from top)
3) w (width)
4) h (height)

The coloration classes are
1) blue
2) yellow
3) red
4) cyan
5) green
6) black
7) white
Adding these to a div just fills in the background of the div.

The border classes are
1) bb (border bottom)
2) bt (border top)
3) bl (border left)
4) br (border right)
5) bc (border collie. a type of dog used to herd sheep)
They just add borders around whatever elements you add them to.

The splitter classes are
1) splitBoxH
2) splitBoxV
They draw a line vertically or horizontally down the center of the div. Heavily inspired by (Frank Lloyd Wright)
![image](https://github.com/sneilan/generative-art-playground/assets/91979/f3397d8f-553e-4154-b2d5-a3f3c61b3d56)

There's another hacking class called e which stands for element. This makes the element absolutely positioned. I need to clean that up a bit so I don't have to specify this. Everything in this project is absolutely positioned anyway!

Classes are all defined in test.sass
