!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o),
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function (e, t, n) {
    'use strict';
    n.r(t);
    const r = {
      toolbar: {
        undo: 'Rückgängig machen',
        redo: 'Wiederherstellen',
        paintformat: 'Format kopieren/einfügen',
        clearformat: 'Format löschen',
        format: 'Format',
        font: 'Schriftart',
        fontSize: 'Schriftgrad',
        fontBold: 'Fett',
        fontItalic: 'Kursiv',
        underline: 'Betonen',
        strike: 'Streichen',
        textColor: 'Text Farbe',
        fillColor: 'Füllung Farbe',
        border: 'Umrandung',
        merge: 'Zellen verbinden',
        align: 'Waagrechte Ausrichtung',
        valign: 'Vertikale uitlijning',
        textwrap: 'Textumbruch',
        freeze: 'Zelle sperren',
        formula: 'Funktionen',
        more: 'Mehr',
      },
      contextmenu: {
        copy: 'Kopieren',
        cut: 'Ausschneiden',
        paste: 'Einfügen',
        pasteValue: 'Nur Werte einfügen',
        pasteFormat: 'Nur Format einfügen',
        insertRow: 'Zeile einfügen',
        insertColumn: 'Spalte einfügen',
        deleteRow: 'Zeile löschen',
        deleteColumn: 'Spalte löschen',
        deleteCell: 'Zelle löschen',
        deleteCellText: 'Zellentext löschen',
      },
      format: {
        normal: 'Regulär',
        text: 'Text',
        number: 'Nummer',
        percent: 'Prozent',
        rmb: 'RMB',
        usd: 'USD',
        date: 'Datum',
        time: 'Termin',
        datetime: 'Datum Termin',
        duration: 'Dauer',
      },
      formula: {
        sum: 'Summe',
        average: 'Durchschnittliche',
        max: 'Max',
        min: 'Min',
        concat: 'Concat',
      },
    };
    window &&
      window.x_spreadsheet &&
      ((window.x_spreadsheet.$messages = window.x_spreadsheet.$messages || {}),
      (window.x_spreadsheet.$messages.de = r)),
      (t.default = r);
  },
]);
