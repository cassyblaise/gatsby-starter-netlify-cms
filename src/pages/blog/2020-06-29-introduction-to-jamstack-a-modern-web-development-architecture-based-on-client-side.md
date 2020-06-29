---
templateKey: blog-post
title: "Introduction To Jamstack:  A Modern Web Development Architecture  "
date: 2020-06-28T02:52:48.359Z
description: Why are websites today being created like they were 20years ago? In
  a monolithic architecture way that would be insecure, slow and very expensive
  to scale?
featuredpost: true
featuredimage: /img/jamstack.webp
tags:
  - JAMstack
  - Tech
  - Business
---
![monolithic architecture](/img/monolithic-architecture.png)

For a long time now, using the traditional CMSs (WordPress, Drupal) was the normal thing. Web sites have traditionally been powered by monolithic architectures, with the frontend of the application tightly coupled to the backend. which make the site slow, insecure and very hard to maintain.

And countless developers of developers know the kind of headache they get when working with those cumbersome monolithic traditional CMSs, so many developers struggled to maintain these monolithic sites and businesses get to lose a lot of money trying to maintain those sites. I'll really love to talk about monolithic websites, but  I guess that should be a topic for another day.

In the past couple years we have witnessed a lot of changes in the tech ecosystem, tech tools like Javascript are more advance now, I think it will be right to say javascript is now the **"**king**"** when it comes to developing modern web apps, my reason is you can use javaScript to develop any application from mobile to desktop apps.  

We are witnessing a rapid change in the tech sections companies are trying to meet up with impatience users. In this article, I'll discuss more on "JAMstack" the new and modern approaches to
building websites that perform as fast as possible and why is it a better solution for web developers and clients(business owners).

Ladies and gentlemen permit me to introduce to you, the new way of building modern web apps but wait for you may be thinking, what is this guy saying. Lately, JAMstack has become the emerging trend in the tech eco-system, the reason is JAMstack is revolutionising the way we think about development/workflow,  its provide us with the best practices and modern approaches toward developing a better performing, secure, and scalable web apps. which I'll explain better later.  

### WHAT IS JAMstack

![JAMstack](/img/jamstack.webp)

J-A-M stands for JavaScript,  APIs,  and markup, the three core components used to create sites that are both fast and highly dynamic. This term was coined by Mathias Biilmann  (CEO & Co-founder of Netlify), and he best  describe it as: "A modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup"

From these three core concepts:

![JAM](/img/jam.png)

#### JavaScript:

 Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be vanilla javascript, frontend framework and library.

#### APIs:

All server-side functions or database actions are abstracted into reusable APIs, accessed over HTTPS with javascript. its can be your custom function or third-party services.

#### Markup:

Templated markup should be prebuilt at build time, usually using a site generator for content sites, or a build tool for web apps.

### Why JAMstack?

![](/img/jamstack-architecture.jpg)

Traditional websites have these monolithic architectures,  the frontend of the website tightly coupled to the backend, they rely on plugins, servers and databases. that is every request for a page, a server first queries a database and combines the result with data from the page markup and plugins to generate an HTML document in the browser.

While JAMstack websites, on the other hand,  are sites that the build and host are decoupled. which mean the frontend of the application is decoupled from the backend, let say the site load some JavaScript that receives data from an API, serving files from a CDN and markup generated using a static site generator during deploy time.

JAMstack approach ensures faster loading times, reduces security risks and is a solution that is easy to integrate with a CDN.

### Benefits:

JAMstack comes with a lot of benefits for businesses and developers,  I will list the major benefits provided by the JAMstack.

#### Better Performance

Websites performance really matter. The faster websites can be served, the more value they can unlock.  JAMstack sites are so fast that it rules out the database from the web architecture. When it comes to minimizing the time of load, nothing beats pre-built files served over a CDN.

#### More Secure

Unlike the traditional websites with monolithic architectures,  the frontend of the website coupled to the backend, which creates a massive surface area for mal‐ware to penetrate and attacks.  JAMstack architecture, frontend and the backend are decoupled which mean everything works via an API and hence there are no database or security breaches. With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced and so your site becomes highly secured.

#### Scalability

When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this and often include scaling in all of their plans.

#### Better developer experience

Front end developers can focus on the front end, without being tied to a monolithic architecture. Loose coupling and separation of controls allow for more targeted development and debugging, and the expanding selection of CMS options for site generators remove the need to maintain a separate stack for content and marketing.

### JAMstack Best Practices

For those new to the concept, here are the best practices for building  JAMstack projects.

* The entire project should be on a CDN.
* Everything lives in Git  
* Atomic deploys Instant cache invalidation
* Automated builds

### Getting started with JAMstack

Well if all this JAMstack concept are pretty new to you and you're a bit confused on where to start from or how to go about it,  do not worry, I'll introduce to you some steps to get started with your next  JAMstack project. Don't forget that JAMstack is about frontend-centric development. If you are pretty new to the world of web development, you need to learn the basic of JavaScript and also learn about APIs and how they work, then you can kick start your first JAMstack project.

You can start building or creating your next JAMstack project with the already built technologies like JavaScript framework, static site generator for a build, headless cms to manage the content, and a hosting and deployment platform. let me  explain these tools  in more details:

### JavaScript frontend frameworks

![JS frontend frameworks](/img/js-framework.webp)

Like I said earlier in this article, JavaScript is the "king" when it comes to web development, javascript Is almost everywhere today, JavaScript has become a very powerful tool useful for developing modern applications.  They’ve transcended the world of browsers to become the go-to for single-page applications (SPA), progressive web apps (PWA) and even mobile apps. The most used JavaScript framework Are React, Vue, Angular,  and Node.js. But get the basic of JavaScript and try to understand how its work, before you start learning any of the frameworks.

### Static site generators

![SSG](/img/static-site-generators.webp)

Most JAMstack sites are powered by a static site generator. A static site generator is a tool that builds static HTML pages out of the input files.  The static site generator takes your website content, applies it to templates, and generates a structure of purely static HTML files giving you pages ready to be delivered to users.  There are many static site generator out there. Here are a few:  Gatsby, Gridsome, 11ty, NuxtJS, Hugo, Jekyll etc. My favourite is Gatsby and 11ty, You can read more about ** [SSG.](https://staticgen.com)** 

### Headless CMSs

![Headless CMSs](/img/headless-cms.webp)

This is a category of hosted services that provide a rich online interface for managing and editing content.  Content Management Systems are really great for managing user permissions, editor roles, “Headless” refers to the idea that these services manage only the content, leaving it up to the developer to determine how and where the site is built and hosted. that is a headless CMS decouples content management from your front-end and back-end.  Larger projects use a headless CMS as a central content store behind their entire collection of websites and mobile apps. 
All headless CMS services provide an API that is used to pull the most recent content during the build step. I'll write about headless CMSs in my next article, for the meantime, you can read more about **[headless CMS](https://headlesscms.org).**

### Hosting and deployment

![Hosting and deployment](/img/jamstack-apis.webp)

Once you have built your website,  your built website needs to be hosted somewhere. There are many great hosting platforms out there, that provide these services. There are  Netlify, Zeit, Firebase, and AWS, etc.

##### A Curated List of resources

If you want to keep up with the quickly evolving JAMstack ecosystem, or even contribute to the ecosystem. Here is a list of  JAMstack resources ranging from learning materials to third party services.

###### [JAMstack.org](https://jamstack.org/)

###### [Netlify blog](https://www.netlify.com/blog)

###### [The New Dynamic](https://www.thenewdynamic.org/)

###### [SSGs list](https://staticgen.com)

###### [Caslify blog](https://caslify.com.ng/blog)

**Communities:**

###### [JAMstack Community](https://jamstack.org/community)

###### [The New Dynamics](https://thenewdynamic.slack.com/)

### Final Note

With the increasing regard for building fast web experiences, browser applications must launch faster than their desktop counterparts. wider adoption of the PWA movement is to anticipate.  Remember JAMstack is not about specific technologies, it is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.  

Are you thinking of using JAMstack architecture for your next project and you don't know how to go about it? At Caslify, we are huge advocates for Jamstack web development architecture which is basically a way of building websites that don’t rely on servers or databases.  You can **[get in touch with us](https://caslify.com.ng/contact)** and learn more about what we can do for you and your business.

###### Written By: [ Obok Casimir(Jnr)](https://twitter.com/cassyjnr)