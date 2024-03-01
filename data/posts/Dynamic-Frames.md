---
title: Dynamic Frames & Responsive HTML 
published_at: 2024-03-01
updated_at: 2024-03-01
---


## TLDR

How to update content on a users browser without  
any JavaScript being present on the client side.

*[Check out our chat project that uses this technique][Chat]*

<br>

## Base

We will create an endpoint that serves an initial html  
page, idles and at a later point appends new content.

In this example we will use **[Deno]** + **[Oak]** , however  
this technique can be applied in most environments.

<br>

## The Old Way - HTTP/1.1

Adjusting the response headers on our server allows  
us to not only keep a connection to a client open but  
also to keep sending data to them.

#### `Connection`

We set this header to `keep-alive` to persist  
the connection opened through the request.

#### `Keep-Alive`

While this header is technically optional, you should  
always set the `timeout` parameter to avoid having  
a varying default set by the user's browser.

#### `Transfer-Encoding`

Using the `chunked` encoding meant for gradual data  
transfer, we are able to send data whenever we like,  
as long as the connection remains open.

<br>

```TypeScript
const { headers } = response
headers.set('Content-Type','text/html;charset=utf-8')
headers.set('Transfer-Encoding','chunked')
headers.set('Connection','keep-alive')
headers.set('Keep-Alive',`timeout=1200`)
```

*Many environments automatically set the*  
*transfer encoding if you use an async body.*

<br>

## The New Way - HTTP/2

Transfer encoding is dead, long live frames!

To use this new technology you don't need to do  
anything as long as you were already using HTTPS  
and your environment isn't from the stone ages.

Deno for example attempts to use HTTP/2 by default as  
long as you have a certificate and key for HTTPS present.

Thanks to HTTP/2s streams & frames we can now  
not only send many more requests much faster but  
also keep more connections open at once.

*[Check the spec if you wanna know how it actually works ;3][HTTP2]*

Anyways the Deno HTTP/2 severs - it's just a HTTPS server.

```typescript
// Don't you dare do this in production

const cert = `
-----BEGIN CERTIFICATE-----
...
-----END CERTIFICATE-----
`

const key = `
-----BEGIN PRIVATE KEY-----
...
-----END PRIVATE KEY-----
`

Deno.serve({

    cert , key ,

    handler ( request ){
        return new Response(`Hewwo World`)
    }
})
```


<br>


<!----------------------------------------------------------------------------->

[Chat]: https://github.com/JSLess/Chat
[Deno]: https://deno.com/
[Oak]: https://oakserver.github.io/oak/

[HTTP2]: https://httpwg.org/specs/rfc7540.html