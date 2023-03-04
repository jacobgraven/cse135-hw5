# CSE134 HW4

## Author

- Jacob Graven
- A16490008

## Link

- https://stellular-sawine-dec81e.netlify.app/
- See link.md for links to specific parts of the assignment

## Notes

Please keep in mind that I did not complete HW3 due to personal circumstances and life problems. The CSS for my site is still very incomplete, but it is a slight improvement from nothing :). I have some additional notes for this assignment. They will be listed below.

### DOMPurify

When I deployed the site, I had some issues getting DOMPurify to work from the node_modules folder. I eventually got it to work using a CDN import link, so I commented out the other script tag. I mention this just in case there are any problems with the dialogs using DOMPurify.sanitize().

### Native Dialogs

I completed most of this assignment on my Linux device and everything seemed to work out fine. When I played around on my Windows desktop, I noticed that in some cases, the output message would not reset/disappear when activating a new alert. This may be because of my browser but I don't think its too much of a big deal, just thought I'd mention it anyway.

### Running files locally

I just thought I'd mention that if crud.html or styledcrud.html is ran locally, it will not work due to issues with referencing blog.js. I'm not gonna try to fix this because it is working fine on netlify.