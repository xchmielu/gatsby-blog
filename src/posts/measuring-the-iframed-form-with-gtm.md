---
title: "How to track iframed form?"
date: "2019-07-21"
tags: "first post"
image: "https://www.nemil.com/images/redis-code.png"
---


Have you ever used forms that were displayed on a completely different page? Or maybe you use tools to automate marketing activities and were forced to use the `iframe` tag in which you stored the form? Thanks to the Google Tag Manager tool, we are able to easily and quickly send events from GTM connected to the form to our correct GTM, and there is a straight way to create an event that will be tracked in Google Analytics.


## How to start?

At the beginning we need two GTM containers and page addresses on our form wrapped with the iframe tag. The first of them will be responsible for sending data to our bulk container. This solution allows for better, conflict-free and more convenient tag management. The second one is covered by the Google Tag Manager container, on which we already have the 'Google Analytics code connected'. If you don't encourage yourself to read the articles from the first steps in GTM. The third element of our puzzle is the page with the implemented form in the iframe tag.

## Website with the form
On our site, we should implement the Google Tag Manager code, the author: he could track events and interactions that take the user while filling out the form fields. To do this on the newly created connector, click the button that starts with `GTM-XXXXXXX`.

<Gtm1.png>

After interacting with the content a model pops up, which contains us about where we use to implement the container code. Following the agreement placed one piece of code between the `<head>` tags and the other between the `<body>` tags.
The structure of our site should look like this:


```html
<html>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->

    ...

</head>

<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

...

<form>
    <input>
    <input>
    ...
    <button> ... </button>
</form>

</body>

</html>
```


In my case, the HTML of the page looks like that:

```html
<html>
<head>
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P559VHQ');</script>
        <!-- End Google Tag Manager -->
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P559VHQ"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div>
            <form id="myform">
                First name:<br>
                <input type="text" name="firstname" value="" required><br>
                Last name:<br>
                <input type="text" name="lastname" value="" required><br><br>
                <input type="submit" value="Submit" >
          </form>
    </div>

</body>

</html>
```
Okay, if we have everything ready we can check if our code works. Both the tracking and HTML one. To check the correctness of our tracking code we need to select the 'Preview' option in GTM. In the same google account we have to open our page with an implemented Google snippet. If everything went correctly, we should receive such a view on our form page.


<gtm2.png>

## First Tag - Sender
Once we have gone through the initial configuration, we can proceed and create our first tag that will be responsible for sending data from one GTM to another. As I mentioned at the beginning.

To create a new tag in the main view or in the `Tags` tab. Click on 'New' and select 'Custom HTML' in the 'Tag configuration' field and paste the following code (in the 'endpointurl' field enter the page on which our form appears):

```js
<script>
try {
    	var postObject = JSON.stringify({
        event: document.title,              // Post the name you want  
        form: document.title                // 
        });
      parent.postMessage(postObject, 'https://endpointurl.com');
    } catch (e) {
    	window.console && window.console.log(e)
    }
</script>
```

In the `Rule` tab we select from the` Form ID` list if we do not have one and provide the id of our form
`` Html
<form id = "myform" ...
```

In my case, id to `myform` can be used to enter any string of characters, best to provide such that in the future we understand what this id is,


