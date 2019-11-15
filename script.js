function madLib(){

  let Verb1 = document.getElementById("verb1").value;
  let PluralNoun1 = document.getElementById("pluralNoun1").value;
  let Adj1 = document.getElementById("adj1").value;
  let Verb2 = document.getElementById("verb2").value;
  let Noun2 = document.getElementById("noun2").value;
  let Noun3 = document.getElementById("noun3").value;

  document.getElementById("inputForm").innerHTML = "<h3>As I was going to the lunchroom this morning, I noticed this giant lunch-lady " + Verb1 + " me my lunch. Needless to day, I was very frightened. Afterwards I was bombarded by a large pack of " + PluralNoun1 + " that somehow got into my school's cafeteria. Luckily, the " + Adj1 + " lunchlady managed " + Verb2 + " me, and we got away to " + Noun2 + " just in time. Getting back to the lunchroom, I was relieved to be able to sit down and enjoy my plate of " + Noun3 + ".</h3><p>Hit REFRESH to submit a new mad-lib entry.</p>";
}

//As I was going to the lunchroom this morning, I noticed a the giant lunch-lady (Verb1) my lunch. Needless to say, I was very frightened. Afterwards I was bombarded by a pack of (PluralNoun1) that somehow entered my cafeteria. Luckily, the (Adj1) lunch-lady managed (Verb2) me, and we got away to (Noun2) just in time. Getting back to the lunchroom, I was relieved to be able to sit down and enjoy my plate of (Noun3).