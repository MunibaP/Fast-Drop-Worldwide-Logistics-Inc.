Variable.css
the purpose of this file is to store the following:

1. Color
2. Fonts
3. Spacing
4. Border
5. Radius
6. Shadow
7. Transition
8. Z-index
-----------------------------------------------------
For example:
Client asks: Can we make the red a little darker?"

Instead of searching through 100 files...

You change one line here.

Everything updates.
------------------------------------------------------- 

Typography.css
the purpose of this file is to store the following:

1. Heading Size
2. Paragraph Size
3. Font Weight
4. Line Weight
5. Responsive typography
----------------------------------------------------------
For example:
instead of writing:

font-size: 54px;

inside random components...

We'll simply use:

<h1 className="heading-xl">

Why use Clamp()?
For example: font-size: clamp(3rem,6vw,5.5rem);
Instead of creating 10 media queries...

The font automatically grows and shrinks based on screen size.
----------------------------------------------------------
global.css
this file also called global reset.
----------------------------------------------------------
Follow UP:

After creating the folder structure, we first worked on the folloing files:
1. variables.css
2. typography.css
3. global.css
4. animation.css
5. utilities.css

Because every component will already have

✅ Consistent fonts
✅ Consistent spacing
✅ Responsive typography
✅ Shared container widths
✅ Shared colors

That means when we build the Hero, Services, or Contact sections, they will automatically follow the same design system.

Step 1 completed: created the final folder structure, and created a design system that will follow throughout the project.