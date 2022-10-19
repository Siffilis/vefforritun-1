/** Lágmark bolla sem má velja. */
const MIN_NUM_OF_CUPS = 2;

/** Hámark bolla sem má velja. */
const MAX_NUM_OF_CUPS = 10;

/** Fjöldi spilaðra leikja. */
let played = 0;

/** Fjöldi unnra leikja. */
let won = 0;

/** Fjöldi stiga. */
let points = 0;

/**
 * Athugar hvort gefin tala sé á bilinu [min, max].
 *
 * @param {string | number} numAsString Tala sem á að athuga.
 * @param {number} min Lágmark sem tala má vera.
 * @param {number} max Hámark sem tala má vera.
 * @returns `true` ef tala er innan bils, annars `false`.
 */
function isValidNum(numAsString, min, max) {
  gildi = parseInt(numAsString);
  if (gildi <= max && gildi >= min) {
    return true;
  } else console.error(`${numAsString} er ekki löglegt gildi`);
  return false;
}

/**
 * Nær í gisk frá notanda.
 *
 * @param {number} numOfCups Heildar fjöldi bolla.
 * @returns `null` ef notandi hætti við, annars vali notanda sem tölu.
 */
function getChoice(numOfCups) {
  numOfCups = parseInt(numOfCups);
  if (numOfCups != null) {
    r = randomNumber(1, numOfCups);
    const guess = prompt(`Hvaða bolla veluru af ${numOfCups}?`);
    played++;
    if (r == guess) {
      won++;
      points += numOfCups - 1;
      alert1 = alert(`Rétt! Þú færð ${numOfCups - 1} stig.`);
    } else {
      alert2 = alert(`Rangt! Boltinn var í bolla númer ${r}`);
    }
    retry = confirm(`Spila aftur?`);
    if (retry) return guess;
    else return null;
  } else return null;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max].
 *
 * @param {number} min Lágmark bils.
 * @param {number} max Hámark bils.
 * @returns Tala af handahófi á bili [min, max].
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Spilum leik.
 */
function play() {
  let play = true;
  do {
    const numOfCups = prompt(`Hve marga bolla?
Verður að vera gildi á bilinu [${MIN_NUM_OF_CUPS}, ${MAX_NUM_OF_CUPS}].
Þú færð N-1 fyrir að finna bolta í N bollum.
Ýttu á cancel eða ESC til að hætta.`
    );

    // Ýtt á ESC/Cancel
    if (numOfCups === null) {
      return;
    } else {
      if (isValidNum(numOfCups, MIN_NUM_OF_CUPS, MAX_NUM_OF_CUPS)) {
        choice = getChoice(numOfCups);
        if (choice != null) {
          play = true;
        } else {
          play = false;
        }
      }
    }
  } while (play);
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  if (played <= 0) console.log(`Þú hefur ekki spilað neina leiki`);
  else
    console.log(
      `Leikir spilaðir: ${played}. Unnir leikir: ${won}. Stig: ${points}.`
    );
}
