
---
title: "How to track iframed form?"
date: "2019-07-21"
tags: "first post"
image: "https://www.nemil.com/images/redis-code.png"
---


Czy używałeś kiedyś formularzy, które były wystawione na zupełnie innej stronie? A może używasz narzędzi do automatyzacji działań marketingowych i byłeś zmuszony używać tagu `iframe` w którym przechowywałeś formularz? Dzięki narzędziu Google Tag Manager jesteśmy w łatwy i szybki sposób przesyłać zdarzenia z GTM'a podpiętego do formularza do naszego prawidłowego GTM'a, a tam już droga prosta do stworzenia zdarzenia, które będzie śledzone w Google Analytics.


## How to start?
Na początku potrzebujemy dwóch kontenerów GTM oraz adres strony na której mamy nasz formularz owiniety tagiem iframe. Pierwszy z nich będzie odpowiadał za wysyłanie danych do naszego zbiorczego kontenera. Takie rozwiązanie pozwala na lepsze, bezkonfliktowe oraz wygodniejsze zarządanie tagami. Drugi z nich jest głównym kontenerem Google Tag Managera, na którym mamy już `podłączony kod Google Analytics`. Jeśli nie to zachęcam do przeczytnia artkułu dotyczącego pierwszych kroków w GTM'ie. Trzeci elemnt naszej układanki to strona z zaimplementowanym formularzem w tagu iframe.

## Site with a form 
Na naszej stronie powiniśmy zaimplementować kod Google Tag Managera, by mógł sledzić zdarzenia, oraz intereakcje, które podjemuję użytkownik podzczas wypełnianai pól formualrza. Aby to zrobić należy na naszym nowo utworzonym koncie kliknąć w przycisk z który zaczyna się od `GTM-XXXXXXX`. 

<gtm1.png>

Po intereakcji z przyciskiem wyskoczy nam modla, który informuje nas o tym gdzie powinniśmy zaimplementowacc kod kontenera. Postępując zgodnie z zasadami umieszczamy jeden kawałęk kod pomiędzy tagami `<head>` a drugi pomiędzy tagami `<body>`. 
Struktura naszej strony powinna wyglądac następująco:


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

W moim przypadku kod HTML strony prezentuje się nastepująco:

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
Dobra, jak mamy już wszystko przygotowane możemy sprawdzić czy nasz kod działa. Zarówno ten śledzący jak i ten HTML'owy. Aby sprawdzić poprawnośc naszego kodu śledzącego musimy w GTM'ie wybrać opcję `Podgląd`. Na tym samym koncie google musimy otworzyć naszą stronę z zaimplenetowanym snippetem od Google'a. Jęsli wszystko przebiegło poprawnie powinniśmy otrzymać taki widok na naszej stronie z formularzem.

<gtm2.png>

## First Tag - Sender

Gdy przeszliśmy przez wstępną konfigurację możemy przystąpić do działania i stworzyć nasz pierwszy tag który bedzie odpowiedzialny za wysyłanie danych z jednego GTM'a do drugiego. Tak jak wspominałem na początku. 

By stworzyć nowy tag w głównym widoku, lub w zakładce `Tagi`. Klikamy `Nowy` i polu `Konfiguracja tagu` wybieramy `Niestandardowy kod HTML` i wklejamy poniższy kod (w polu `endpointurl` podajemy stronę na której widnieje nasz formularz):

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

w zakładce `Reguła` wybieramy z listy  `Form ID`, jeśli nie mamy i podajemy id naszego formularza
```html
<form id="myform" ...
```
W moim przypadku id to `myform` mozna podać tam dowolny ciąg znaków, najelpiej podać taki abyśmy w przyszłości rozumieli czym jest te id, 
