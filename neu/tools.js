// ═══════════════════════════════════════════════════════════════════
//  FINTOOL · Kacheln der Übersichtsseite (index.html)
//
//  Hier können Sie die Kacheln selbst bearbeiten:
//   – Reihenfolge:   Einträge verschieben (ein Eintrag = ein Block in { … }, )
//   – Text:          kategorie / titel / beschreibung anpassen
//   – Link:          datei = Name der HTML-Datei im selben Ordner
//   – Neue Kachel:   Block kopieren und einfügen
//   – Kachel weg:    Block löschen oder mit // ausblenden
//
//  Achten Sie nur auf die Anführungszeichen und das Komma nach jedem Block.
//  Umlaute und « » sind kein Problem.
// ═══════════════════════════════════════════════════════════════════

const FINTOOL_TOOLS = [

  {
    kategorie:    "Vorsorge",
    titel:        "Kapitalverzehr-Simulator",
    beschreibung: "Wie lange reicht das Pensionskapital bei verschiedenen Anlagerenditen?",
    datei:        "kapitalverzehr-simulator.html"
  },

  {
    kategorie:    "Sparen & Entsparen kombiniert",
    titel:        "Renditefolgerisiko-Rechner für Vermögensaufbau und Kapitalentnahme",
    beschreibung: "Wie stark hängt alles davon ab, wann die guten und schlechten Börsenjahre kommen?",
    datei:        "renditefolgerisiko-rechner.html"
  },

  {
    kategorie:    "Sparplan",
    titel:        "Vermögensaufbau-Simulator",
    beschreibung: "…und die Bedeutung der Abfolge der Renditen",
    datei:        "vermoegensaufbau-simulator.html"
  },

  {
    kategorie:    "Entsparplan",
    titel:        "Vermögensverzehr-Simulator",
    beschreibung: "…und die Bedeutung der Abfolge der Renditen",
    datei:        "renditefolgerisiko-simulator.html"
  },

  {
    kategorie:    "Vermögens-Aufbau",
    titel:        "Rendite-Rechner",
    beschreibung: "Renditeversprechen nachgerechnet – mit Allokation, Kosten, Inflation und Steuern.",
    datei:        "sparplan-rechner.html"
  },

  {
    kategorie:    "Aktien versus Immobilien",
    titel:        "Aktien versus Immobilien",
    beschreibung: "Immobilie, Aktien und gehebelte Aktien auf einer gemeinsamen Basis: die Rendite auf das Eigenkapital.",
    datei:        "renditerechner.html"
  },

  {
    kategorie:    "Prognose-Simulator",
    titel:        "Aktien Schweiz",
    beschreibung: "Was der SPI historisch gebracht hat – und welche Bandbreite für die Zukunft realistisch ist.",
    datei:        "aktien-prognose-simulator.html"
  },

  {
    kategorie:    "Hypothek & Zinsen",
    titel:        "Hypothekenrechner",
    beschreibung: "Fünf Jahre fest oder Geldmarkt – was hätte es seit 1970 gekostet?",
    datei:        "hypothekenrechner.html"
  },

  {
    kategorie:    "Inflation & Kaufkraft",
    titel:        "Inflationsrechner",
    beschreibung: "Was Inflation mit einem Sparbetrag und mit einem Sparplan macht – über 10, 20, 40 Jahre.",
    datei:        "inflationsrechner.html"
  },

  {
    kategorie:    "Konsum & Inflation",
    titel:        "Individueller Teuerungsrechner",
    beschreibung: "Ihre persönliche Teuerung nach Ihrem eigenen Warenkorb – im Vergleich zum Durchschnittshaushalt.",
    datei:        "individuelle-teuerung.html"
  }

];

// ── Texte der Kopfzeile der Übersicht ──────────────────────────────
const FINTOOL_UEBERSICHT = {
  eyebrow:   "Tools · Rechner & Simulatoren",
  titel:     "Selber <strong>rechnen</strong> statt glauben",   // <strong>…</strong> = fett
  autor:     "Prof. Dr. Erwin W. Heri",
  untertitel:"Alle Rechner und Simulatoren von Fintool an einem Ort. Jedes Tool erklärt zuerst, worum es geht – und macht dann jede Annahme sichtbar und veränderbar.",
  fusszeile: "Alle Rechner dienen der Illustration und Ausbildung. Keine Anlage-, Steuer- oder Finanzierungsberatung."
};
