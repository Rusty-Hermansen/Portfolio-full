My portfolio has taken a few different forms when it comes to rendering posts.
When I first started I stored all of my posts in a list in React and read all 
of my posts locally. I then determined that I wanted to change that to store my posts
in a database and have stored as raw html and parse that html when you view the post. 
I didn't really care for that solution, as it felt a little gross and the NPM package 
had some vulnerabilities. I had seen some beautiful blog posts written by my friends using 
markdown, so I opted to set out on the journey of getting my posts converted to markdown. 
I won't go into the whole journey, but I'll show you how to render markdown in a React 
application. I started by installing the React-Markdown npm package.

``` bash
npm install react-markdown
```

Now it's as simple as an import on line 3 and using the component on line 6. My posts are stored in a text field that contains all of the markdown for the entire post. So you can also do something like store it in a big long string and pass that string inside of the braces in the ReactMarkdown component.

![singlepost](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/singlepost.png)

This is a piece of markdown from my content security policy post:

![markdown](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/markdown2.png)

...and here you have it, the post that renders in markdown!

![rendered](https://raw.githubusercontent.com/Rusty-Hermansen/Portfolio-full/main/React/src/posts/renderingMarkdownReact/images/markdown.png)
