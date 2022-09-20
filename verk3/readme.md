# Vefforritun 1, 2022: Verkefni 3, CSS #1

[Kynning í fyrirlestri](https://youtu.be/GCs3G7HkRmA).

Verkefnið er framhald af [verkefni 2](https://github.com/vefforritun/vef1-2022-v2), nýtir það efni sem uppsett er í því, og fylgir þeirri verkefnalýsingu. Leyfilegt er að nota [sýnilausn að verkefni 2](https://github.com/vefforritun/vef1-2022-v2-synilausn) (sem gefin verður út miðvikudaginn 14. september).

Nú skal bæta við einföldu útliti á efnið með CSS. Allt útlitið skal vera í `./styles.css` og **allar** HTML skrár skulu vísa í það.

## Útlit

Fyrirmynd að útliti er í `fyrirmynd/` möppu. Öll skjáskot eru tekin í `1400px` breiðum Firefox vafra.

Gera má ráð fyrir að það verði að bæta við auka elementum við lausn/sýnilausn til að geta náð fram útliti.

Þar sem allt útlit skal útfæra í einni CSS skrá, skal huga að cascade og erfðum, þó er fullkomlega eðlilegt að endurtaka eigindi, en t.d. fyrir málsgreinar (`<p>`) þarf aðeins að taka fram einu sinni hvert margin þeirra er.

### Almennt

Gefið er `styles.css` skjal með grunn að lausn.

Almennt skal gilda:

* Nota skal gefið „reset“, því má ekki fjarlægja.
* Nota skal leturgerðina Inter frá Google fonts. Sækja þarf bæði regular (þyngd `400`) og bold (þyngd `700`).
* Gefin er stærð á letri sem `16px` (sem merkir að `1rem == 16px`), því skal ekki breyta. Í framhaldi af lýsingu er `eitt bil = 1rem`, `hálft bil = 0.5rem` o.s.fr.
* Gefin er hjálparklasi `.sr-only` sem skal setja á `Beint í efni` tengil.
* Aðeins skal nota `px` í grunnleturstærð og á `border` skilgreiningar, annars skal nota hlutfallslegar einingar (`em`, `rem`, eða `%`)
* Allt efni (málsgreinar, myndir, form element) skal hafa eitt bil fyrir neðan sig.
* Litill á tenglum (`<a>`) sé svartur (`#000000`) og með undirlínu.
* Allir litir sem notaðir eru: `#000000`, `#00bfff`, `#afebff`.
* CSS skal vera án villna og **viðvarana** þegar keyrt í gegnum [CSS validator](https://jigsaw.w3.org/css-validator/).

Sama gildir og í verkefni 2:

* **Nýta skal merkingarfræðilega viðeigandi element**.
* Valmynd skal útfæra með því að afrita og breyta milli síðna, ekki er krafa um neina „forritun“ til að útbúa valmynd.
* Allar síður skulu hafa fyrisögn og „beint í efni“ hlekk á eftir fyrirsögn, en á undan valmynd.
* Síður skulu nota `utf-8` stafasett.
* Passa skal upp á að hafa snyrtilega uppsettan kóða þar sem inndráttur er samræmdur.
* Allar síður skulu vera villulausar ef prófaðar með [HTML validator](https://validator.w3.org/).
* Allar síður skulu vera án aðgengisvillna ef prófaðar með [aXe](https://www.deque.com/axe/), setjið upp viðbót í vafra.
* Allar síður nema forsíða skulu hafa tengil á forsíðu í fæti með textanum „Aftur á forsíðu“.

### Haus, valmynd, meginmál og fótur

Gefinn er grunnur að uppsetningu á síðu með _flexbox_ (nánar er farið í flexbox í viku 4).

Til að það virki þarf að setja `<div class="content">` utan um allt efni innan `<body>`, sjá nánar í gefnu `styles.css`.

Setja skal aukalega upp þ.a.:

* Haus (`<header>`) hafi bakgrunnslitinn `#00bfff`.
* Allt efni sé að hámarki `1200px` breitt og sé miðjað í vafra.
* Eitt bil sé fyrir ofan og neðan efni í haus.
* Tvö bil séu frá valmynd að meginmáli.
* Efni í valmynd flæði frá vinstri til hægri. Tenglar í valmynd eiga ekki að vera með undirlínu.
* Valin síða í valmynd á að vera feitletruð og með undirlínu.
* Fótur (`<footer>`) hafi bakgrunnslitinn `#00bfff`.
* Eitt bil sé alltaf milli meginmáls og fóts.
* Fótur sé alltaf neðst á síðu, ekkert bil ætti að vera fyrir neðan fót.

### Forsíða

Mynd skal vera í sinni réttu stærð og fleytt til vinstri við texta.

### Um

Setja skal upp efni með 1 bil fyrir neðan sig.

Mynd skal taka fulla breidd af plássi, mynd mun teygjast en verður að halda réttum hlutföllum.

### Könnun

Nota skal `<fieldset>` og skal litur á border vera `1px` `#00bfff`. Fyrirsögn skal vera `24px`.

Leturgerð innan alls forms skal vera Inter.

1 bil skal vera milli reita, milli heiti á reit og reits skal vera fjórðungsbil.

Takki skal með bakgrunnslitinn `#afebff` og border litinn `#00bfff`. Radíus á border skal vera `6px`.

### Bækur

Fjórðungsbil skal vera innan reita í töflu. Texti í reitum töflu skal vera vinstri jafnaður

Önnur hver röð skal vera með litinn `#afebff`.

### Takmarkanir

Aðeins skal nota eftirfarandi eigindi, og ef tekið fram, viðeigandi gildi:

* `background-color:`
* `border` og nánari skilgreiningar
* `border-spacing: 0;`
* `box-sizing`
* `color`
* `display: block;`, `display: flex;`
* `float`
* `font-family`
* `font-size`
* `font-weight`
* `list-style: none;`
* `margin` og nánari skilgreiningar
* `padding` og nánari skilgreiningar
* `width`, `min-width`, `max-width`, `min-height`
* `text-align`
* `text-decoration`

Leyfilegt er að nota eigindi tengd flexbox en það sem gefið er ætti að vera nóg til að ná fram því útliti sem kemur fram í fyrirmynd.

Ekki þarf að huga að skalanleika (síðan þarf ekki að líta vel út í undir `1000px` skjá).

## Netlify

Setja skal upp verkefni á Netlify með því að tengja GitHub repo.

## Mat

* 20% – Snyrtilega uppsett og gilt CSS
* 20% – Aðeins leyfileg eigindi og gildi notuð
* 60% – Útlit skv. fyrirmynd

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 12. september 2021.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 20. september 2022.

Skilaboð skulu innihalda:

* slóð á verkefni keyrandi á Netlify
* slóð á **private** GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  * `MarzukIngi`
  * `Stimmikex`
  * `brynjar13`
  * `ofurtumi`
  * `BjarniHaskoli`
  * `Stulli888`

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.4 (rétt skiladagsetning; nánar um flexbox eigindi; bæta við `text-decoration`)
