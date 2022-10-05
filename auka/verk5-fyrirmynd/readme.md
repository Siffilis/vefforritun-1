
# Vefforritun 1, 2022: Verkefni 5, CSS #3

[Kynning í fyrirlestri](https://youtu.be/LSkJn8440xI).

Haldið áfram með viðmót úr [verkefni 4](https://github.com/vefforritun/vef1-2022-v4) en nú er sett upp grind með CSS grid og vefurinn gerður skalanlegur

Haldið verður áfram með verkefnið í [verkefni 6](https://github.com/vefforritun/vef1-2022-v6/), sett verða upp tæki og tól: Sass, Stylelint, og browser-sync.

## Útlit

Fyrirmynd að útliti er í `fyrirmynd/` möppu. Skjáskot eru tekin í `1600px`, `800px` og `320px` breiðum Firefox vafra. Gefið er myndband sem sýnir skölun.

### Almennt

Hægt er að byggja á lausn á verkefni 4 eða nota [sýnilausn að verkefni 4](https://github.com/vefforritun/vef1-2022-v4-synilausn) (aðgengileg miðvikudaginn 21. sept).

Almennt gildir allt það sama og í verkefni 4 sem ekki er tekið fram hér, sér í lagi:

Þar sem allt útlit skal útfæra í einni CSS skrá, skal huga að cascade og erfðum, þó er fullkomlega eðlilegt að endurtaka eigindi, en t.d. fyrir málsgreinar (`<p>`) þarf aðeins að taka fram einu sinni hvert margin þeirra er.

Gefið er „reset“ þ.a. allt `margin` og `padding` frá vafra sé sett í `0`, einnig er `box-sizing: border-box` sett fyrir öll element.

Gefinn er strúktúr og nokkur gildi úr sýnilausn. Ekki er krafa að nota það.

CSS skal vera án villna og **viðvarana** (sem við eiga, það gætu verið viðvaranir sem eru „eðlilegrar“) þegar keyrt í gegnum [CSS validator](https://jigsaw.w3.org/css-validator/).

Allar síður skulu vera villulausar ef prófaðar með HTML validator.

### Gildi og stærðir

Sömu gildi og stærðir eiga við:

* Heildar breidd efnis skal vera `1400px`, miðjað á skjánum
* Grunnletur stærð skal vera `16px` þ.a. `1rem == 16px`
* Allt bil í fyrirmynd er hálft, eitt, tvöfalt eða fjórfalt margfeldi af grunnletur stærð
* Gildi fyrir liti eru gefin sem breytur settar í `:root`
* Leturgerðir:
  * Fyrir meginmál: Nunito, Helvetica, Arial, sans-serif
  * Fyrir fyrirsagnir: Domine, Georgia, serif
* Almennt skal aðeins nota hlutfallslegar einingar í breiddir, nema nota þarf `px` gildi til að útfæra birtingu á dagstíma icon

Nota skal CSS variables sem gefnar eru í `::root` með `var()`.

Setja skal upp grind með CSS grid, grind skal vera:

* `12` dálkar
* `30px`  gutter / gap
* `20px` _offset_, þegar vefur er kominn fyrir neðan `max-width` er offset sett sitthvoru megin til að efni „leggist“ ekki utan í vafraglugga

Þessar breytur eru tilteknar í `styles.css`. Gefið er `grid.css` skjal sem setur viðmiðunargrind yfir vefinn. Skila skal með vísun í þetta skjal (þ.e.a.s. grind skal sjást.)

Sjá má hvernig sýnilausn að verkefni 4 er næstum innan grindar, en ójafnvægi og mismunandi bil er um að ræða á myndinni `v4-index-1600px-grid.png`.

Vefur skal vera skalanlegur (e. responsive). Miða skal við að:

* Upp að `600px` breiðum skjá fylli allt efni út í skjá, sjá skjáskot `320px.png`.
* Upp að `1000px` breiðum skjá, sjá skjáskot `800px.png`.
* Yfir `1000px` breiðum skjá skuli vefur líta út eins og í verkefni 4, en efni skal passa nákvæmlega innan grindar þar sem allt nema auglýsing tekur 4 dálka, sjá skjáskot `1400px`.

Setja skal upp „mobile first“, þ.a. í grunninn er gert ráð fyrir að við séum undir `600px` breidd, síðan er bætt við með `@media (min-width: XXX)` eins og þarf.

### Takmarkanir

Aðeins skal nota flexbox og CSS grid til að setja upp útlit, þ.e.a.s. **aðeins** `display: flex` og `display: grid`.

Ekki skal nota önnur gildi fyrir `display` eða `position` eigindi _nema_ til að setja upp „protection“ yfir mynd í hero svæði og í `.button` (sjá það sem gefið er í `styles.css`).

Í sýnilausn er eftirfarandi notað:

* `@font-face` til að færa inn leturgerðir og tengd eigindi til að eiga við leturgerðir
  * `src`
  * `font-display: swap`
  * `font-family`
  * `font-size`
  * `font-variation-settings`
  * `line-height`
  * `text-decoration`
* CSS breytur, sjá gefnar breytur innan `:root` og `var()` fall
* Flexbox eigindi, t.d.
  * `align-items`
  * `flex-direction`
  * `flex`
  * `justify-content`
* Bakgrunnseigindi:
  * `background-color`
  * `background-image`
  * `background-position`
  * `background-repeat`
  * `background-size`
  * `background-attachment`
  * eða shorthand `background`
* Box model eigindi
  * `margin`
  * `border`
  * `padding`
  * `width`, með hlutfallslegum einingum
  * `height`, til að fastsetja hæðir á myndum sem síðan nota
  * `max-width`
  * staðsetningar eigindi (`top`) til að setja „protection“
* Annað
  * `border-radius`
  * `transform`
  * `object-fit`
  * `object-position`
  * `@media (min-width: XXX)` fyrir brotpunkta
  * `order`
  * `grid-template-rows`
  * `grid-template-columns`
  * `gap`
  * `grid-column`
  * Leyfilegt er að nota önnur grid properties ef þið teljið ykkur þurfa/viljið nota þau

## Netlify

Setja skal upp verkefni á Netlify með því að tengja GitHub repo.

## Mat

* 20% – Snyrtilega uppsett og gilt CSS
* 40% – Grind sett upp með CSS grid
* 40% – Vefur skalanlegur

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 19. september 2022.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags þriðjudaginn 27. september 2022.

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

## Myndir

Myndir frá [Unsplash](https://unsplash.com/):

* [Nico Meier](https://unsplash.com/@nicomeier)
* [Andreas Dress](https://unsplash.com/ja/@andreasdress)
* [rrvviiii](https://unsplash.com/@rrvviiii)
* [Paul Taton](https://unsplash.com/es/@paultaton)
* [Diana Serbichenko](https://unsplash.com/@diana_serbichenko)
* [Annie Spratt](https://unsplash.com/@anniespratt)
* [Josie Weiss](https://unsplash.com/es/@scarlettweiss)

> Útgáfa 0.2 (vísa í mynd af grid með sýnilausn v4)
