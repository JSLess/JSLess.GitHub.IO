---
title: CSS Event Listeners - Sparks
published_at: 2024-02-20
updated_at: 2024-02-21
---


## TLDR

Using CSS resources loading behavior to observe user interactions.

<br>

## Concept

CSS properties that specify some resource like a background  
image are requested only when their css block is active.

```css
/* The image is only requested when you hover over the element */

.Element:hover {
    background-image : url('/Asset/Image.png') ;
}
```

Of course we don't actually need to use a real image, instead we can  
specify a custom endpoint that only returns a success status code.

```css
.Element:hover {
    background-image : url('/API/OnHover') ;
}
```

*Now we know when someone hovers over the element.*

<br>

## Cache Busting

This method however only works once, the second time  
you hover of the element, the request won't be send again.

The most reliable method to counteract this is to make the url  
unique on every hover via either a different path or parameter. 

```css
/* Uses the response timestamp as uniqueness factor */

.Element:hover {
    background-image : url('/API/OnHover/1708403536337')
}
```

<br>

## Complementary Events

With our current setup we are actually spamming our server with  
requests as when you hover the element, new rule with a unique  
path is added and active right away, prompting another request.

To stop this cyclic hell and to get more use out of the  
technique we should consider the complementary event,  
in this case the user stopping to hover over the element.

<img src = '/CSS%20Sparks.svg'>


<!----------------------------------------------------------------------------->