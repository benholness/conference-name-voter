/**
 * ─────────────────────────────────────────────
 *  Conference Name Preference Test — Config
 * ─────────────────────────────────────────────
 *  Edit this file to customise the test.
 *  Both files (config.js + index.html) must sit
 *  in the same folder for the tool to work.
 * ─────────────────────────────────────────────
 */

const CONFIG = {

  /**
   * PAGE / TEST TITLE
   * Shown in the browser tab and on the intro screen.
   */
  title: "Conference Name Preference Test",

  /**
   * INTRO TEXT
   * The subtitle paragraph shown on the opening screen.
   */
  intro: "We have a shortlist of names for an upcoming conference and need your honest opinion to help us decide.",

  /**
   * OPTIONS TO TEST
   * Add or remove entries freely — the tool will
   * recalculate the number of matchups automatically.
   *
   * Minimum: 2 options.
   * Recommended: 4–8 options (above 10 gets long).
   *
   * With N options there are N × (N−1) / 2 matchups:
   *   4 options →  6 matchups
   *   6 options → 15 matchups
   *   8 options → 28 matchups
   */
  options: [
    "THE WEBSMITH SUMMIT 2026",
    "THE WEBSMITH CONFERENCE 2026",
    "HYPERLINK 2026",
    "MARKUP 2026",
    "UMBRACO FORGE 2026",
    "INTERFACE2FACE 2026",
  ],

  /**
   * STORAGE KEY
   * Change this if you want to run a fresh set of
   * results alongside an old one in the same browser.
   * Any unique string will do.
   */
  storageKey: "pairwise_results_v1",

};
