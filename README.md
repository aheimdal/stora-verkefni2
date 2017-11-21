# stora-verkefni2
Hópverkefni 2 - 2017

Þetta README.md skjal inniheldur upplýsingar um hvernig skal keyra "stora-verkefni2" sem er seinna hópaverkefni í "TÖL107G" Háskóla
Íslands haustönnina 2017.

Þessi vefsíða er keyrð með hefbundnum netvöfrum líkt og CHROME, Firefox, EDGE og fleiri. Þessi síða er uppsett á þann hátt að það eru
html skrár sem eru einskonar beinagrind vef-síðunnar og eru stílsíður notaðar til að umbreyta síðunni í það útlit sem var óskað eftir og
virkni hennar keyrð með javascript skipunum. Í undirmöppu þá höfum við sass(.scss) skrár sem virka eins og super css, sem er notað til að breyta síðunni. Javascript er notað til að bæta inn efni síðunnar eftir því sem er beðið um, ef síðan nær ekki samband við gagnagrunn þá kemur upp villa. Ef tiltekið efni sem er valið á aðalsíðu finnst ekki þá kemur villa.

Ekki er hægt að keyra síðunna án þess að vera tengdur neti, þó er hægt að notast við npm forrit í gegnum cmd sem heitir browser-sync til
að keyra local web-server sem virkar eins og net en er þó ekki tengt neti.

Hægt er að finna þetta verkefni á netinu á slóð <url> . Hér getur þú notandi góður vafrað á milli myndbanda sem þér langar að spila.  

Hægt er að nálgast enn frekari upplýsingar um vefsíðuna á Github < https://github.com/aheimdal/stora-verkefni2 >

Við höfum gróflega farið yfir uppsetningu verkefnisins hér fyrir ofan en við höfum í þessu verkefni eftirfarandi skrár og gögn:

Skipting og skipulag
- tvær html skrár sem eru síðurnar okkar (index.html, video.html)
- 2 folder sem innhalda (video/16-9.png, bunny.mp4, bunny.png, small.mp4, small.png, img/back.svg, fullscreen.svg, mute.svg, next.svg, 
pause.svg, play.svg, unmute.svg)
- eina .css skrár (styles.css)
- eina .scss skrá (styles.scss)
- .babelrc skrá
- .eslintrc.js skrá
- .stylelintrc skrá
- package.json skrá
- package-lock.json skrá
- videos.json (Inniheldur gagnagrunn til að sækja efni í folder video/)
- script.js (Javascript keyrsla fyrir index.html)
- videoscripts.js (Javascript keyrsla fyrir video.html)
- script-compiled.js
- script-compiled.js.map
- scss folder (hér eru fleiri scss skrár sem er notast við að stílbreyta síðuna)-
--- footer.scss, poster.scss, takkar.scss, text.scss, videoframe.scss

Höfundir: Anton H. Heimdal (ahh30@hi.is), Henríetta Þóra Magnúsdóttir (hthm6@hi.is), Sigríður Ösp Sigurðardóttir (sos42@hi.is)
