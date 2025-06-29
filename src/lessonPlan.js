export const lessonText = [
    `<!DOCTYPE html>
<html lang="de">
<head>
 <meta charset="UTF-8" />
 <title>Ubiquitous Applications – HTML, CSS, JavaScript</title>
</head>
<body>

 <h2>Ubiquitous Applications</h2>

 <p><strong>Vorlesung Internet-Medien – Teil II</strong></p>
 <ul>
   <li>HTML</li>
   <li>Formulare</li>
   <li>CSS</li>
   <li>JavaScript</li>
 </ul>

 <p><strong>Prof. Dr. K. Mehner-Heindl</strong><br />
 <strong>01.05.2020</strong></p>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (1)</h3>
 <ul>
   <li>Internet seit 1969
     <ul>
       <li>Vernetzung US-amerikanischer Universitäten/Institute</li>
       <li>Vorläufer seit ca. 1962 (Licklider et al.)</li>
     </ul>
   </li>
   <li>Netzwerk von Großrechnern „ARPANET“<br />
     (Advanced Research Projects Agency Network)
     <ul>
       <li>Noch 1971 überwiegend Email</li>
       <li>Ca. 1973 TCP/IP (Cerf et al.)</li>
     </ul>
   </li>
   <li>Verschiedene Protokolle: telnet, ftp, email, http, …</li>
 </ul>
 <p><em>(*ARPA 1958–1972, 1993–1996, Defense ARPA seit 1996 und 1972–1993)</em></p>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (2)</h3>
 <ul>
   <li>Ted Nelson, USA, 1965
     <ul>
       <li>„Einfache Benutzeroberflächen, um Computer für normale Menschen zugängig zu machen“</li>
       <li>Projekt Xanadu: Definition Hypertext</li>
       <li>Rechtemanagement, Mikropayment</li>
       <li>Bidirektionale Hyperlinks</li>
       <li>Sehr komplex, nie fertig realisiert</li>
     </ul>
   </li>
 </ul>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (3)</h3>
 <ul>
   <li>Tim Berners-Lee, CERN Genf, März 1989
     <ul>
       <li>„Datenaustausch und Verknüpfung in der Forschergemeinde“</li>
       <li>Erste Webseite (siehe info.cern.ch)</li>
       <li>Hypertext, später http, HTML, URL-Vorläufer</li>
       <li>WWW, Suchmaschine, Server, Browser, Editor</li>
     </ul>
   </li>
   <li>Vorsitzender und Gründer des World Wide Web Consortium (W3C, 1994)</li>
   <li>Professor am MIT und in Oxford</li>
 </ul>

 <h3>Interaktive Webseiten – Entstehungsgeschichte (4)</h3>
 <ul>
   <li>Markups wurden früher als Hinweise für den Druckvorgang verwendet</li>
   <li>HTML zur statischen Webseitenerzeugung
     <ul>
       <li>Ergänzt um CSS für Layoutbeschreibung</li>
       <li>HTML enthält Formulare</li>
       <li>Ergänzt um JavaScript für Interaktivität</li>
     </ul>
   </li>
   <li>Aktuell: HTML5 und CSS3</li>
 </ul>

</body>
</html>`,







    `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 2 – HTML Grundlagen</title>
</head>
<body>

  <h2>Auszeichnungssprache HTML</h2>

  <ul>
    <li>Hypertext Markup Language für Erstellung von Webseiten</li>
  </ul>

  <h3>Ein HTML-Dokument:</h3>
  <ul>
    <li>Erzeugt Webseiten mit:
      <ul>
        <li>Formatierter Schrift</li>
        <li>Bildern</li>
        <li>Videos</li>
        <li>Links</li>
      </ul>
    </li>
    <li>Enthält Quelltext mit:
      <ul>
        <li>Tags zur Darstellung der Inhalte</li>
        <li>Natürliche Sprache</li>
        <li>Dateinamen und Adressen (Text, Bild, Webseiten)</li>
      </ul>
    </li>
  </ul>

  <h3>HTML-Grammatik:</h3>
  <ul>
    <li>Reservierte Zeichen: &lt;, &gt;, &amp;</li>
    <li>Tags: <code>&lt;…&gt;</code> und <code>&lt;/…&gt;</code>, Attribute, Schachtelung</li>
    <li>Fließtext mit Sonderzeichen</li>
  </ul>

  <hr />

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>
  <p>
    Schreiben Sie ein HTML-Dokument, das nur die Zeile <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code> korrekt darstellt.
  </p>

  <p><em>English Translation:</em></p>
  <p><em>
    Write an HTML document that correctly displays only the line <code>&lt;h1&gt;Hello, World!&lt;/h1&gt;</code>.
  </em></p>

</body>
</html>
`,






`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 3 – HTML Werkzeuge und Struktur</title>
</head>
<body>

  <h2>Wie arbeitet man mit HTML?</h2>
  <ul>
    <li>Quelltext-Erstellung notwendig
      <ul>
        <li>WYSIWYG = What You See Is What You Get
          <ul>
            <li>Grafische Oberfläche</li>
            <li>Automatischer Quelltext (manchmal unzureichend)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Syntaxgesteuerte Editoren:
      <ul>
        <li>Textbasiert mit Highlighting und Prüfung</li>
      </ul>
    </li>
    <li>Kombination beider Methoden:
      <ul>
        <li>Single-Source-Betrieb</li>
        <li>Zwei Ansichten für einen Quelltext</li>
        <li>Nachteil: Quelltext schwer lesbar/änderbar</li>
      </ul>
    </li>
  </ul>

  <h2>Logische Struktur und Layoutregeln</h2>
  <ol>
    <li>Logische Struktur eines Dokuments
      <ul>
        <li>Kapitel, Überschrift, Abschnitt, Aufzählung, Hervorhebung, etc.</li>
      </ul>
    </li>
    <li>Stildefinition (Layoutregeln)</li>
    <li>Layoutstruktur (physische Darstellung)
      <ul>
        <li>Textblock, Zeile, Schriftart, Ausrichtung, Farbe …</li>
      </ul>
    </li>
  </ol>

  <p>→ Trennung von Inhalt und Stilbeschreibung</p>

  <h2>… im World Wide Web</h2>
  <ol>
    <li>Logische Struktur: HTML-Quelltext</li>
    <li>Stile:
      <ul>
        <li>Standard (Default)</li>
        <li>CSS (Cascading Style Sheets)</li>
        <li>Browser-spezifische Darstellung</li>
      </ul>
    </li>
    <li>Darstellung durch Webbrowser</li>
  </ol>

  <p><strong>HTML5 – Vorgänger:</strong> HTML 1.0, 2.0, 3.2, 4, XHTML 1.0/1.1</p>

  <table border="1">
    <thead>
      <tr>
        <th>Logische Struktur</th>
        <th>Stil (CSS)</th>
        <th>Physische Darstellung</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&lt;h1&gt;Überschrift&lt;/h1&gt;</td>
        <td>fett, 2-fach vergrößert,<br>0.67-facher Abstand</td>
        <td>Überschrift</td>
      </tr>
      <tr>
        <td>&lt;em&gt;betont&lt;/em&gt;</td>
        <td>kursiv</td>
        <td>betont</td>
      </tr>
      <tr>
        <td>…</td>
        <td>…</td>
        <td>…</td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>
  <p>
    Schreiben Sie eine HTML-Zeile, die das Wort <strong>I am small</strong> als betonten Text formatiert.  
    Verwenden Sie dazu ein passendes Tag aus dieser Lektion.  
    Der Text soll im Browser sichtbar sein und betont erscheinen.
  </p>

  <p><em>English Translation:</em></p>
  <p><em>
    Write a single line of HTML that formats the phrase <strong>I am small</strong> as emphasized text.  
    Use a tag introduced in this lesson.  
    The text should be visible in the browser and appear emphasized.
  </em></p>

</body>
</html>
`,







`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 4 – Grundstruktur von HTML-Dokumenten</title>
</head>
<body>

  <h2>HTML-Dokument: Grundstruktur</h2>

  <ul>
    <li><code>&lt;!doctype html&gt;</code>
      <ul>
        <li>nicht Case-sensitiv</li>
        <li>formal nicht erforderlich</li>
        <li>kein HTML-Tag</li>
        <li>beeinflusst das Verhalten der Browser</li>
        <li>keine Angabe der HTML-Version</li>
      </ul>
    </li>

    <li><code>&lt;html lang="de"&gt;</code>
      <ul>
        <li>Angabe der Sprache empfohlen</li>
        <li>wird von Suchmaschinen genutzt</li>
      </ul>
    </li>

    <li><code>&lt;head&gt; … &lt;/head&gt;</code>
      <ul>
        <li>Vorspann (Kopfteil, engl. Header), auf das gesamte Dokument bezogen</li>
      </ul>
    </li>

    <li><code>&lt;body&gt; … &lt;/body&gt;</code>
      <ul>
        <li>Dokumentkörper</li>
      </ul>
    </li>

    <li><code>&lt;/html&gt;</code>
      <ul>
        <li>schließt das HTML-Dokument ab</li>
      </ul>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Erstelle eine einfache HTML-Seite mit einem Titel, einer Hauptüberschrift und einem Absatz.</p>

<ul>
  <li>Verwende <code>&lt;!DOCTYPE html&gt;</code>, um den Dokumenttyp zu deklarieren.</li>
  <li>Öffne das HTML-Dokument mit <code>&lt;html&gt;</code> und setze das Sprachattribut auf Deutsch.</li>
  <li>Im <code>&lt;head&gt;</code>-Bereich gib der Seite einen <code>&lt;title&gt;</code>, z.&nbsp;B. „Skeleton Page“.</li>
  <li>Im <code>&lt;body&gt;</code>-Bereich füge eine <code>&lt;h1&gt;</code>-Überschrift ein mit dem Text „Skeletons Are Awesome“.</li>
  <li>Schreibe einen kurzen Absatz mit <code>&lt;p&gt;</code>, z.&nbsp;B. „They hold everything together.“</li>
</ul>

<p><em>English Translation: Create a simple HTML page with a title, a main heading, and a paragraph.</em></p>

<ul>
  <li><em>Use <code>&lt;!DOCTYPE html&gt;</code> to declare the document type.</em></li>
  <li><em>Start the HTML document with <code>&lt;html&gt;</code> and set the language to German.</em></li>
  <li><em>Inside the <code>&lt;head&gt;</code>, give the page a <code>&lt;title&gt;</code>, e.g., "Skeleton Page".</em></li>
  <li><em>Inside the <code>&lt;body&gt;</code>, add an <code>&lt;h1&gt;</code> heading with the text "Skeletons Are Awesome".</em></li>
  <li><em>Write a short paragraph using <code>&lt;p&gt;</code>, e.g., "They hold everything together."</em></li>
</ul>


</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 5 – HTML5 Tags</title>
</head>
<body>

  <h2>HTML5 Tags</h2>

  <ul>
    <li>Tags (auch: Auszeichnungen) definieren <strong>Elemente einer Web-Seite</strong></li>
    <li>Sie stehen in spitzen Klammern:
      <ul>
        <li>Anfangs-Tag: <code>&lt;...&gt;</code></li>
        <li>End-Tag: <code>&lt;/...&gt;</code></li>
      </ul>
    </li>
    <li>Es wird empfohlen, <strong>Kleinbuchstaben</strong> zu verwenden.</li>
    <li>Tags können Attribute enthalten, mit benannten Werten:
      <ul>
        <li>Schreibweise: <code>attribut="wert"</code></li>
      </ul>
    </li>
    <li>Alle Tags müssen <strong>korrekt geschachtelt</strong> werden.  
      <br />Das bedeutet: Öffnende und schließende Tags dürfen sich nicht überlappen.
    </li>
    <li>Beispiel einer <strong>Grundstruktur einer Webseite</strong>:
      <pre><code>
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Seitentitel&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Überschrift&lt;/h1&gt;
    &lt;p&gt;Textabschnitt&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </code></pre>
    </li>
    <li>Wichtig:  
      <br />Die Schachtelung muss logisch sein — ein Tag darf nicht innerhalb eines anderen geöffnet und außerhalb davon geschlossen werden.
    </li>
  </ul>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 6 – Elementare Tags im Head</title>
</head>
<body>

  <h2>Elementare Tags im Head</h2>

  <ul>
    <li><strong>Titel:</strong> <code>&lt;title&gt; … &lt;/title&gt;</code>
      <ul>
        <li>erscheint in Kopfleiste des Fensters und bei Bookmarks</li>
        <li>in der Regel verpflichtend</li>
      </ul>
    </li>

    <li><strong>Zeichensatz:</strong> <code>&lt;meta charset="UTF-8" /&gt;</code>
      <ul>
        <li>singulärer Tag mit Schrägstrich innerhalb der Klammern</li>
        <li>UTF-8 Kodierung von Unicode-Zeichen (umfasst ASCII)</li>
        <li>1 bis 4 Byte lang</li>
      </ul>
    </li>

    <li><strong>Beschreibung der Inhalte:</strong>  
      <code>&lt;meta name="description" content="Ihr Text" /&gt;</code>
      <ul>
        <li>singulärer Tag</li>
        <li>festgelegter Wert für <code>name</code>, freiwählbare Angaben für <code>content</code></li>
      </ul>
    </li>
  </ul>

</body>
</html>
`,



`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 7 – Gesamter Head & UTF-8</title>
</head>
<body>

  <h2>Gesamter Head</h2>

  <pre><code>
&lt;!doctype html&gt;
&lt;html lang="de"&gt;
&lt;head&gt;
  &lt;title&gt;Ihr Seitentitel&lt;/title&gt;
  &lt;meta charset="UTF-8" /&gt;
  &lt;meta name="description" content="Kurze Beschreibung" /&gt;
&lt;/head&gt;
  </code></pre>

  <h3>Erinnerung: Universal Character Set Transformation Format UTF-8</h3>

  <ul>
    <li>Im Unicode werden weltweit verwendete Zeichen in eine feste Reihenfolge gebracht.
      <ul>
        <li>Die lateinischen Buchstaben befinden sich unter den ersten 128 Zeichen (wie im ASCII-Code).</li>
        <li>Die Umlaute finden sich erst ab der Stelle 196.</li>
      </ul>
    </li>

    <li>In der Kodierung UTF-8 wird jede Position mit maximal 4 Byte kodiert  
      (theoretisch sind 8 Bytes für über 4 Billionen Zeichen möglich)
      <ul>
        <li>Die ersten 128 Zeichen werden durch 1 Byte (= 8 Bit) kodiert.</li>
        <li>Die Umlaute der deutschen Sprache benötigen 2 Byte.</li>
      </ul>
    </li>

    <li>Wir verwenden UTF-8 im Editor und stellen UTF-8 im HTML-Head ein,  
      damit Umlaute korrekt dargestellt werden!</li>
  </ul>

  <h3>Praktische Übungen</h3>

  <ul>
    <li><strong>Editor</strong>
      <ul>
        <li>z. B. Notepad++, https://notepad-plus-plus.org/</li>
        <li>Kein Editor, der rtf, doc, odt erzeugt</li>
        <li>JSFiddle, https://jsfiddle.net/</li>
      </ul>
    </li>
    <li><strong>Webbrowser</strong>
      <ul>
        <li>Firefox, Chrome, Internet Explorer, Safari, …</li>
      </ul>
    </li>
    <li>Umgang mit Datei-Explorer / Browser wird vorausgesetzt</li>
  </ul>

  <h3>Praktische Übung: In Notepad++ Kodierung prüfen</h3>
  
  <img src='https://i.imgur.com/1PxiOKf.png'/>

  <h3>Praktische Übung: In Notepad++ HTML speichern</h3>
  
  <img src='https://i.imgur.com/THbTm7I.png'/>
  <h3>Praktische Übung: 1. Aufgabe</h3>

  <ol>
    <li>Erzeugen Sie mit einem Editor eine Datei mit Endung <code>.html</code>.
      <ul>
        <li>Prüfen Sie zunächst das Encoding und ändern Sie es ggf.  
        Dies muss <strong>vor dem ersten Tippen und Speichern</strong> erfolgen!</li>
      </ul>
    </li>

    <li>Wählen Sie dann „Speichern unter“, um den Namen und die Endung der Datei zu ändern!</li>
    <li>Tippen Sie die Struktur der Webseite und den Head ab.</li>
    <li>Farbliche Vorhebungen erscheinen. Speichern Sie die Datei.</li>
    <li>Öffnen Sie die Datei im Webbrowser.</li>
  </ol>

  <blockquote>Die Webseite sollte leer sein, aber der Reiter ist beschriftet.</blockquote>

  <h3>Praktische Übung: 1. Aufgabe – Lösung</h3>
  <p><em>(Beispielhafte HTML-Datei mit <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code> etc. – wurde im Bild oder Textform gezeigt.)</em></p>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 8 – Elementare Tags im Body (1)</title>
</head>
<body>

  <h2>Elementare Tags im Body (1)</h2>

  <ul>
    <li><strong>Überschriften (engl. Headings)</strong><br />
      <code>&lt;h1&gt; … &lt;/h1&gt;</code>, … <code>&lt;h6&gt; … &lt;/h6&gt;</code><br />
      → in 6 Hierarchiestufen
    </li>

    <li><strong>Absätze (engl. Paragraph)</strong><br />
      <code>&lt;p&gt; … &lt;/p&gt;</code>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Erstellen Sie eine einfache Webseite mit <strong>Überschriften</strong> und <strong>Absätzen</strong>.<br>
Verwenden Sie dazu die folgenden HTML-Elemente innerhalb des <code>&lt;body&gt;</code>-Bereichs:</p>

<ul>
  <li>Eine große Hauptüberschrift (<code>&lt;h1&gt;</code>) mit dem Text <strong>Main Topic</strong></li>
  <li>Einen Absatz (<code>&lt;p&gt;</code>) direkt unter der <code>&lt;h1&gt;</code>-Überschrift, in dem Sie <em>The invention of Minecraft.</em> schreiben</li>
  <li>Eine kleinere Überschrift (<code>&lt;h2&gt;</code>) mit dem Text <strong>Subtopic</strong></li>
  <li>Einen neuen Absatz (<code>&lt;p&gt;</code>) unter dieser, mit dem Satz: <em>The Minecraft file first crash landed from a meteor.</em></li>
  <li>Eine noch kleinere Überschrift (<code>&lt;h3&gt;</code>) mit dem Text <strong>Smaller Detail</strong></li>
  <li>Und zuletzt einen Absatz (<code>&lt;p&gt;</code>) unter der <code>&lt;h3&gt;</code>, mit dem Satz: <em>Today this meteor is hosted in the Minecraft Museum.</em></li>
</ul>

<p>Achten Sie auf die richtige <strong>Verschachtelung und Reihenfolge</strong> der Elemente. Schreiben Sie alles im <code>&lt;body&gt;</code>-Teil Ihrer HTML-Seite.</p>

<p><em>English translation:</em></p>

<p>Create a simple webpage using <strong>headings</strong> and <strong>paragraphs</strong>.<br>
Inside the <code>&lt;body&gt;</code> section, do the following:</p>

<ul>
  <li>Add a large main heading (<code>&lt;h1&gt;</code>) with the text <strong>Main Topic</strong></li>
  <li>Add a paragraph (<code>&lt;p&gt;</code>) directly under the <code>&lt;h1&gt;</code> that says: <em>The invention of Minecraft.</em></li>
  <li>Add a smaller heading (<code>&lt;h2&gt;</code>) with the text <strong>Subtopic</strong></li>
  <li>Add a paragraph under it that says: <em>The Minecraft file first crash landed from a meteor.</em></li>
  <li>Add an even smaller heading (<code>&lt;h3&gt;</code>) with the text <strong>Smaller Detail</strong></li>
  <li>And finally, a paragraph that says: <em>Today this meteor is hosted in the Minecraft Museum.</em></li>
</ul>

<p>Make sure all the elements are in the correct <strong>order and structure</strong> inside the <code>&lt;body&gt;</code> tag.</p>


</body>
</html>
`,

`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 9 – Elementare Tags im Body (2)</title>
</head>
<body>

  <h2>Elementare Tags im Body (2)</h2>

  <ul>
    <li><strong>nummerierte Listen (ordered)</strong><br />
      <code>&lt;ol&gt; … &lt;/ol&gt;</code>
    </li>

    <li><strong>Aufzählungslisten (unordered)</strong><br />
      <code>&lt;ul&gt; … &lt;/ul&gt;</code>
    </li>

    <li><strong>Listeneinträge (list item)</strong><br />
      <code>&lt;li&gt; … &lt;/li&gt;</code>
      <ul>
        <li>auch notwendig für geschachtelte Liste</li>
        <li>kein Text zwischen <code>&lt;ol&gt;</code> oder <code>&lt;ul&gt;</code> und jedem <code>&lt;li&gt;</code></li>
        <li><code>&lt;ol&gt;</code>, <code>&lt;ul&gt;</code> nicht innerhalb von <code>&lt;p&gt;</code> erlaubt</li>
        <li>mit CSS kann man Aussehen von Listen ändern</li>
      </ul>
    </li>
  </ul>


  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle eine HTML-Seite mit dem Thema „Human Transmutation Guide“, bei der du zwei Arten von Listen korrekt verwendest.</p>

<ul>
  <li>Verwende eine Hauptüberschrift mit <code>&lt;h1&gt;</code>, die den Titel der Seite zeigt.</li>
  <li>Unter der Hauptüberschrift erstelle zwei Unterüberschriften mit <code>&lt;h2&gt;</code>:
    <ul>
      <li>Die erste Unterüberschrift beschreibt „Boys are made of“.</li>
      <li>Die zweite Unterüberschrift beschreibt „Girls are made of“.</li>
    </ul>
  </li>
  <li>Unter jeder <code>&lt;h2&gt;</code>-Überschrift erstellst du eine passende Liste:
    <ul>
      <li>Verwende eine <strong>nummerierte Liste</strong> (<code>&lt;ol&gt;</code>) für „Boys are made of“.</li>
      <li>Verwende eine <strong>Aufzählungsliste</strong> (<code>&lt;ul&gt;</code>) für „Girls are made of“.</li>
    </ul>
  </li>
  <li>Jede Liste muss genau <strong>drei</strong> Einträge enthalten. Jeder Eintrag wird mit <code>&lt;li&gt;</code> geschrieben.</li>
  <li>Achte darauf, dass deine Listen <strong>nicht</strong> in einem <code>&lt;p&gt;</code>-Tag stehen und dass du die Tags korrekt verschachtelst.</li>
</ul>

<p><em>English translation:</em></p>

<p><em>Create an HTML page titled “Human Transmutation Guide” in which you correctly use two types of lists.</em></p>

<ul>
  <li><em>Use a main heading with <code>&lt;h1&gt;</code> to show the title of the page.</em></li>
  <li><em>Below the main heading, add two subheadings using <code>&lt;h2&gt;</code>:
    <ul>
      <li><em>The first one should say “Boys are made of”.</em></li>
      <li><em>The second one should say “Girls are made of”.</em></li>
    </ul>
  </li>
  <li><em>Under each <code>&lt;h2&gt;</code>, create the correct type of list:
    <ul>
      <li><em>Use an <strong>ordered list</strong> (<code>&lt;ol&gt;</code>) for “Boys are made of”.</em></li>
      <li><em>Use an <strong>unordered list</strong> (<code>&lt;ul&gt;</code>) for “Girls are made of”.</em></li>
    </ul>
  </li>
  <li><em>Each list must contain exactly <strong>three</strong> items, using the <code>&lt;li&gt;</code> tag for each.</em></li>
  <li><em>Make sure your lists are <strong>not</strong> placed inside a <code>&lt;p&gt;</code> tag and that all tags are properly nested.</em></li>
</ul>


</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 10 – Logische Textauszeichnung, Sonderzeichen</title>
</head>
<body>

  <h2>Logische Textauszeichnung, Sonderzeichen</h2>

  <ul>
    <li>Tags zur logischen Textauszeichnung beschreiben die <strong>logische Verwendung</strong> des eingeschlossenen Textelements,<br />
      nur innerhalb von Paragraphen, Überschriften, Listeneinträgen etc. erlaubt:
      <ul>
        <li><code>&lt;em&gt; … &lt;/em&gt;</code></li>
        <li><code>&lt;strong&gt; … &lt;/strong&gt;</code></li>
      </ul>
    </li>

    <li>Umsetzung in physische Darstellung durch Browser oder CSS:
      <ul>
        <li>Betonung wird oft <em>kursiv</em> dargestellt</li>
        <li>Starke Betonung wird oft <strong>fett</strong> dargestellt</li>
      </ul>
    </li>

    <li><strong>Reservierte Zeichen sind Sonderzeichen:</strong><br />
      <code>&amp;lt;</code>, <code>&amp;gt;</code>, <code>&amp;amp;</code>, <code>&amp;nbsp;</code>, …
    </li>
  </ul>

  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>
<p>Schreibe <strong>genau diesen Satz</strong> in einem HTML-Absatz:<br>
<code>I am really small</code><br><br>
Verwende dafür den <code>&lt;p&gt;</code>-Tag, um den ganzen Satz als Absatz zu strukturieren.<br>
Verwende zusätzlich den <code>&lt;strong&gt;</code>-Tag, um <strong>nur das Wort</strong> <code>really</code> hervorzuheben, sodass es fett erscheint.<br>
Achte auf die richtige Verschachtelung der Tags und darauf, keine zusätzlichen Leerzeichen oder Zeilenumbrüche einzubauen.
</p>

<p><em>English Translation:</em><br>
Write <strong>this exact sentence</strong> in an HTML paragraph:<br>
<code>I am really small</code><br><br>
Use the <code>&lt;p&gt;</code> tag to structure the entire sentence as a paragraph.<br>
Also, use the <code>&lt;strong&gt;</code> tag to emphasize <strong>only the word</strong> <code>really</code>, making it appear bold.<br>
Be careful to nest your tags properly and avoid adding extra spaces or line breaks.
</p>


</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 11 – Seitenumbruch</title>
</head>
<body>

  <h2>Seitenumbruch</h2>

  <ul>
    <li><strong>Zeilenumbruch</strong>, nur innerhalb von <code>&lt;p&gt;</code> etc. erlaubt:<br />
      <code>&lt;br /&gt;</code>
    </li>

    <li><strong>Horizontale Linien</strong>, nur außerhalb von <code>&lt;p&gt;</code> erlaubt:<br />
      <code>&lt;hr /&gt;</code>
    </li>

    <li><strong>Generisches Blockelement:</strong><br />
      <code>&lt;div&gt; … &lt;/div&gt;</code>
    </li>

    <li><strong>Generisches Inline-Element:</strong><br />
      <code>&lt;span&gt; … &lt;/span&gt;</code>
    </li>
  </ul>

  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p><strong>Anleitung:</strong></p>
<ol>
  <li>
    Erstelle einen Absatz mit dem Tag <code>&lt;p&gt;</code>, der den Satz enthält:<br />
    <strong>The FNAF lore is very...</strong><br />
    Füge an dieser Stelle einen <strong>Zeilenumbruch</strong> mit dem Tag <code>&lt;br /&gt;</code> ein, und schreibe danach in einer neuen Zeile das Wort <strong>Simple</strong>.
  </li>
  <li>
    Füge <strong>unterhalb dieses Absatzes</strong> eine <strong>horizontale Linie</strong> ein, indem du das Tag <code>&lt;hr /&gt;</code> verwendest.
  </li>
  <li>
    Danach erstelle einen <strong>Blockbereich</strong> mit dem Tag <code>&lt;div&gt;</code>, der zwei Dinge enthält:
    <ul>
      <li>Eine <strong>Überschrift der zweiten Ebene</strong> mit dem Tag <code>&lt;h2&gt;</code> und dem Text <strong>Fun Fact</strong>.</li>
      <li>
        Einen weiteren <strong>Absatz</strong> mit dem Tag <code>&lt;p&gt;</code> und folgendem Text:<br />
        <strong>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</strong><br />
        Verwende dafür das Tag <code>&lt;span&gt;</code> und gib darin das Attribut <code>style="color: red"</code> an, um das Wort <strong>truth</strong> rot darzustellen.
      </li>
    </ul>
  </li>
</ol>

<p><em>English translation:</em></p>
<ol>
  <li>
    Create a paragraph using the <code>&lt;p&gt;</code> tag that includes the sentence:<br />
    <em>The FNAF lore is very...</em><br />
    Insert a <strong>line break</strong> using the <code>&lt;br /&gt;</code> tag at this point, and then on the next line write the word <em>Simple</em>.
  </li>
  <li>
    <strong>Below this paragraph</strong>, insert a <strong>horizontal rule</strong> using the <code>&lt;hr /&gt;</code> tag to visually separate sections.
  </li>
  <li>
    Then create a <strong>block container</strong> using the <code>&lt;div&gt;</code> tag that contains two elements:
    <ul>
      <li>A <strong>second-level heading</strong> using the <code>&lt;h2&gt;</code> tag with the text <em>Fun Fact</em>.</li>
      <li>
        Another <strong>paragraph</strong> using the <code>&lt;p&gt;</code> tag with this text:<br />
        <em>The <span style="color: red">truth</span> about Freddy Fazbear is that Joe Biden is the suit</em><br />
        Use the <code>&lt;span&gt;</code> tag and apply <code>style="color: red"</code> to make the word <em>truth</em> appear in red.
      </li>
    </ul>
  </li>
</ol>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 12 – Kommentare</title>
</head>
<body>

  <h2>Kommentare</h2>

  <ul>
    <li><strong>Kommentare:</strong><br />
      <code>&lt;!-- Autor, Datum, … --&gt;</code>
      <ul>
        <li>zeilenweise oder mehrzeilig</li>
        <li>Erläuterungen, die vom Browser ignoriert werden</li>
      </ul>
    </li>
  </ul>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 13 – Praktische Übung: 2. Aufgabe</title>
</head>
<body>

  <h2>Praktische Übung: 2. Aufgabe</h2>

  <ol>
    <li>Erstellen Sie eine Webseite unter Verwendung der bisherigen Tags und Sonderzeichen.</li>
    <li>Erstellen Sie dabei eine Liste als Unterliste einer anderen Liste.<br />
      <em>(Die Lösung hierzu gibt es erst, wenn Sie verschiedene Varianten probiert haben.)</em>
    </li>
  </ol>

  <p><strong>Beispiel:</strong></p>
  <ul>
    <li>Hauptpunkt 1
      <ul>
        <li>Unterpunkt A</li>
        <li>Unterpunkt B</li>
      </ul>
    </li>
    <li>Hauptpunkt 2</li>
  </ul>

  <h3>Praktische Übung: 2. Aufgabe – Lösung zu 1. (1)</h3>
  <p><em>(Beispielhafte HTML-Lösung mit verschachtelter Liste gezeigt – <code>&lt;ul&gt;&lt;li&gt;…&lt;ul&gt;&lt;li&gt;…&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;</code>)</em></p>

  <h3>Praktische Übung: 2. Aufgabe – Lösung zu 1. (2)</h3>

  <pre><code>
&lt;!doctype html&gt;
&lt;html lang="de"&gt;
  &lt;head&gt;
    &lt;title&gt;Meine erste Übung&lt;/title&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="description" content="Einfaches HTML" /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Meine erste HTML-Seite&lt;/h1&gt;
    &lt;p&gt;Texte stehen in &lt;strong&gt;Überschriften&lt;/strong&gt;, Paragraphen oder &lt;em&gt;Listenelementen&lt;/em&gt;.&lt;/p&gt;

    &lt;ul&gt;
      &lt;li&gt;Jeder Text wird über die volle Fensterbreite verteilt.&lt;/li&gt;
      &lt;li&gt;Ein überzähliges Leerzeichen         oder ein Zeilenumbruch werden nicht angezeigt.&lt;/li&gt;
    &lt;/ul&gt;

    &lt;p&gt;Es gibt zwei Arten von Tags:&lt;/p&gt;
    &lt;ol&gt;
      &lt;!--Kommentare sollten immer geschlossen werden--&gt;
      &lt;li&gt;paarweise Tags wie z.B. &amp;lt;p&amp;gt; die geschlossen werden müssen&lt;/li&gt;
      &lt;li&gt;singuläre Tags wie z.B. &amp;lt;meta/&amp;gt;&lt;/li&gt;
    &lt;/ol&gt;

    &lt;p&gt;Innerhalb eines Paragraphs kann ein Umbruch durch &lt;br /&gt; erzwungen werden.
       Die horizontale Linie kann nur außerhalb eines Paragraphen verwendet werden.&lt;/p&gt;
    &lt;hr /&gt;
    &lt;p&gt;Ein besonderes Leerzeichen ist der nicht-trennende Zwischenraum (engl. no breaking space),
       z.B. zwischen Wert und Einheit: 100&amp;nbsp;€. Das Eurozeichen wird nicht ohne Wert in eine neue Zeile umgebrochen.&lt;/p&gt;
    &lt;div&gt;Die Division benötigt man häufig in Verbindung mit CSS.&lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </code></pre>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 14 – Universalattribute</title>
</head>
<body>

  <h2>Universalattribute</h2>

  <p>Im <code>&lt;head&gt;</code> wurden bereits spezielle Attribute verwendet.<br />
  <strong>Attribute werden niemals durch Komma getrennt!</strong></p>

  <p><strong>Beispiele:</strong></p>
  <ul>
    <li><code>lang="…"</code></li>
    <li><code>charset="…"</code></li>
    <li><code>name="…"</code></li>
    <li><code>content="…"</code></li>
  </ul>

  <p><strong>Mit jedem Tag verwendbar:</strong></p>
  <ul>
    <li><code>id="…"</code><br />
      → eindeutiger Identifikator für Element, z. B. als Sprungziel innerhalb einer Webseite
    </li>
    <li><code>title="…"</code><br />
      → Beschriftung für Element, sichtbar bei Maus-Hover als Tooltip
    </li>
    <li><code>style="…"</code><br />
      → Stilangaben für Element (für CSS3) <em>(nicht klausurrelevant)</em>
    </li>
  </ul>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 15 – Verweise (Links)</title>
</head>
<body>

  <h2>Verweise (Links)</h2>

  <ul>
    <li>= Web</li>
    <li>= Informationseinheiten + Verweise</li>
    <li>= „Hypertext“</li>
    <li>= Verweis = Anker + Ziel</li>
  </ul>

  <p><code>&lt;a&gt;... &lt;/a&gt;</code><br />
  – umschließt Anker (Text, Bild, ...) für Ursprung<br />
  – Attribut <code>href="Ziel-URL"</code> legt Ziel fest</p>

  <h3>Lokales Ziel eines Verweises</h3>
  <ul>
    <li><strong>Absoluter Pfadname</strong>
      <ul>
        <li>Zugriffspfad durch die gesamte Verzeichnishierarchie</li>
        <li>Beginnt immer mit <code>/</code></li>
        <li>Beispiel:
          <ul>
            <li><code>href="/d|/htmlFiles/index.htm"</code></li>
            <li><code>href="/assets/images/logo.gif"</code></li>
          </ul>
        </li>
      </ul>
    </li>

    <li><strong>Relativer Pfadname</strong>
      <ul>
        <li>Bezieht sich auf das Verzeichnis, in dem das verweisende HTML-Dokument steht</li>
        <li>Beispiel:
          <ul>
            <li><code>href="info.html"</code></li>
            <li><code>href="hires/company.gif"</code></li>
            <li><code>href="../../main/main.html"</code></li>
          </ul>
        </li>
        <li>Vorteil: <strong>portabel!</strong></li>
      </ul>
    </li>
  </ul>

  <h3>Entferntes Ziel eines Verweises</h3>
  <ul>
    <li>Vollständige <strong>URL (Uniform Resource Locator)</strong>
      <ul>
        <li>Aufbau: <code>Protokoll://Rechnername/Pfad</code></li>
      </ul>
    </li>
    <li><strong>Eigenschaften:</strong>
      <ul>
        <li>Verschiedene Dienste (Protokolle)</li>
        <li>Verschiedene Dokumenttypen (Dateiendungen)</li>
      </ul>
    </li>
    <li><strong>Beispiel:</strong><br />
      <code>href="http://www.fh-offenburg.de/mi/mi.html"</code>
    </li>
    <li><strong>Sonderzeichen in URLs:</strong>
      <ul>
        <li>Durch <code>%ASCII-Code</code> ersetzt, z. B.</li>
        <li><code>%20</code> für Leerzeichen</li>
        <li><code>%3f</code> für Fragezeichen</li>
        <li><code>%2f</code> für Schrägstrich</li>
      </ul>
    </li>
    <li><strong>Beispiel:</strong><br />
      <code>href="http://my.sys.de/bad%20name%3f.html"</code>
    </li>
  </ul>

  <h3>Verweisziel</h3>
  <ul>
    <li>Ist ein <strong>Element in einer Seite</strong>
      <ul>
        <li>Durch Verwendung der <code>id</code> des Elementes nach <code>#</code></li>
        <li>Beispiel: <code>href="mi.html#People"</code></li>
        <li>Case-sensitiv</li>
        <li>Verweisziel erscheint oben im Browser</li>
      </ul>
    </li>
  </ul>


  <h2>🎯 Studienziel – Aufgabe im Code Editor</h2>

<p>Verwenden Sie das HTML-Element <code>&lt;a&gt;</code> (Anker), um einen klickbaren Link zu erstellen.<br />
Dieser Link soll <strong>auf eine externe Webseite zeigen</strong>, und der angezeigte Text soll dem Benutzer genau mitteilen, was passieren wird.</p>

<ul>
  <li>Der Linktext <strong>muss exakt</strong> sein: <code>Open this link in a new tab</code></li>
  <li>Die Ziel-URL muss exakt sein: <code>https://youtu.be/dQw4w9WgXcQ</code></li>
  <li>Verwenden Sie <strong>nur</strong> das Attribut <code>href</code> – keine weiteren Attribute!</li>
</ul>

<p><em>
English Translation:<br />
Use the <code>&lt;a&gt;</code> (anchor) HTML element to create a clickable link.<br />
This link should point to <strong>an external website</strong>, and the visible text must clearly tell the user what will happen.
</em></p>

<ul><em>
  <li>The <strong>link text must be exactly</strong>: <code>Open this link in a new tab</code></li>
  <li>The destination URL must be exactly: <code>https://youtu.be/dQw4w9WgXcQ</code></li>
  <li>Use <strong>only the <code>href</code> attribute</strong>, no others!</li>
</em></ul>

</body>
</html>
`,

`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 16 – Bilder</title>
</head>
<body>

  <h2>Bilder</h2>

  <ul>
    <li><strong>Inline Images</strong>
      <ul>
        <li>Nur innerhalb von Paragraphen, Überschriften etc. erlaubt</li>
        <li>Die Pixelzahl wird <strong>ohne Einheit</strong> angegeben</li>
        <li>Die Bildquelle ist ein lokaler/absoluter Pfad oder eine URL</li>
      </ul>
    </li>

    <li><strong>Beispiel:</strong><br />
      <code>&lt;img src="Bild-URL" alt="Beschreibung" height="Pixelzahl" width="Pixelzahl" /&gt;</code>
    </li>

    <li><strong>Bild als Ursprung eines Verweises</strong>
      <ul>
        <li>Bekannt als „Image Links“, „Clickable Images“</li>
        <li>Durch Schachteln in Anchor-Tag</li>
      </ul>
    </li>

    <li><strong>Images als Verweisziel</strong>
      <ul>
        <li><code>href</code> mit lokaler Bilddatei oder URL für Bilddatei</li>
      </ul>
    </li>
  </ul>


  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Verwenden Sie das HTML-Tag <code>&lt;img&gt;</code>, um ein Bild korrekt in eine Webseite einzufügen.</p>
<ul>
  <li>Die Bildquelle (<code>src</code>) muss exakt lauten: <code>https://i.imgur.com/cif7t3w.png</code></li>
  <li>Verwenden Sie das <code>alt</code>-Attribut mit dem exakten Wert: <code>Beschreibung</code></li>
  <li>Setzen Sie die Höhe (<code>height</code>) auf <code>300</code></li>
  <li>Setzen Sie die Breite (<code>width</code>) auf <code>300</code></li>
</ul>

<p><em>English Translation:</em></p>
<p><em>Use the <code>&lt;img&gt;</code> tag to correctly insert an image into a webpage.</em></p>
<ul>
  <li><em>The image source (<code>src</code>) must be exactly: <code>https://i.imgur.com/cif7t3w.png</code></em></li>
  <li><em>Use the <code>alt</code> attribute with the exact value: <code>Beschreibung</code></em></li>
  <li><em>Set the <code>height</code> to <code>300</code></em></li>
  <li><em>Set the <code>width</code> to <code>300</code></em></li>
</ul>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 17 – Praktische Übung: 3. Aufgabe</title>
</head>
<body>

  <h2>Praktische Übung: 3. Aufgabe</h2>

  <ol>
    <li>Erstellen Sie eine Webseite mit:
      <ul>
        <li>einem Bild (im selben Verzeichnis abspeichern)</li>
        <li>einem Hyperlink (z. B. auf die Hochschule)</li>
        <li>einem Text, der eingeblendet wird, wenn die Maus eine Überschrift berührt.</li>
      </ul>
    </li>
    <li>Ergänzen Sie einen Hyperlink, mit dem Sie an eine bestimmte Position der Seite springen (<code>id</code>-Attribut).</li>
    <li>Verwenden Sie das Bild als Hyperlink.</li>
  </ol>

  <h3>Praktische Übung: 3. Aufgabe – Lösung</h3>
  <p><em>(Hinweis im Skript: noch <strong>ohne</strong> Bild als Hyperlink … die Lösung steht weiter hinten im Skript)</em></p>
  <p>Wenn sich die Maus über der freien Fläche befindet, erscheint ein Text.</p>

  <h3>Praktische Übung: 3. Aufgabe – Lösung</h3>

  <pre><code>
&lt;body title="Hier steht nichts."&gt;
  &lt;!--Texteinblendung bei Maus über Zwischenräume/Überschrift--&gt;
  &lt;h1 id="ueberschrift1" title="Thema HTML"&gt;Bilder und Links&lt;/h1&gt;
  &lt;!-- Hyperlinks erlaubt in Überschriften oder p, li, etc. --&gt;

  &lt;p&gt;
    In diesem Text steht ein http-Link auf die  
    &lt;a href="http://offenburg.university"&gt;Hochschule&lt;/a&gt;.  
    Hiermit können Sie lokal zurückspringen an den  
    &lt;a href="ErsteLoesung.html#ueberschrift1"&gt;Beginn&lt;/a&gt; der Seite!
  &lt;/p&gt;

  &lt;p&gt;
    In diesem Text befindet sich ein Bild aus dem Internet:  
    &lt;img src="https://www.hs-offenburg.de/typo3conf/ext/hsotemplate/Resources/Public/Images/logo.png"
         alt="Neues Logo der HSO" width="226" height="60" /&gt;  
    Man kann auch lokale Bilder einbinden,  
    wenn Sie die Datei z. B. ins gleiche Verzeichnis speichern:  
    &lt;img src="logo.png" alt="Neues Logo der HSO" width="226" height="60" /&gt;  
    Bitte finden Sie heraus, wie Sie das lokale Bild  
    als Hyperlink verwenden können!
  &lt;/p&gt;
&lt;/body&gt;
  </code></pre>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 18 – Überprüfen von HTML-Quelltexten</title>
</head>
<body>

  <h2>Überprüfen von HTML-Quelltexten</h2>

  <ul>
    <li><strong>W3C-Validator:</strong> <a href="https://validator.w3.org">https://validator.w3.org</a>
      <ul>
        <li>Prüfung per File Upload</li>
      </ul>
    </li>

    <li><strong>Prüfungsschritte:</strong>
      <ul>
        <li>Syntax-Überprüfung des <code>&lt;!DOCTYPE&gt;</code> der Seite</li>
        <li>Falls Fehler vorhanden sind: <strong>schrittweise abarbeiten</strong>, da Folgefehler oft verschwinden</li>
      </ul>
    </li>

    <li><strong>Wichtig:</strong>
      <ul>
        <li>Der Validator bewertet auch HTML5-Seiten mit unvollständiger, aber nicht falscher Syntax als „richtig“</li>
        <li><strong>In der Klausur gilt nur die vollständige Syntax als richtig!</strong></li>
      </ul>
    </li>
  </ul>

  <h3>Syntax-Übersicht</h3>

  <ul>
    <li><strong>Singuläre, inhaltsleere Tags:</strong><br />
      <code>&lt;meta ... /&gt;</code><br />
      <code>&lt;br /&gt;</code><br />
      <code>&lt;img ... /&gt;</code><br />
      <code>&lt;hr /&gt;</code>
    </li>

    <li><strong>Hyperlink:</strong><br />
      <code>&lt;a href="http://offenburg.university/datei.html#idname"&gt;Ankertext&lt;/a&gt;</code>
    </li>

    <li><strong>Image als Hyperlink (auf ein lokales Image):</strong><br />
      <code>&lt;a href="logo.png"&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;img src="logo.png" height="60" width="226" alt="HSO-Logo" /&gt;<br />
      &lt;/a&gt;</code>
    </li>
  </ul>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Verwenden Sie <strong>verschachtelte HTML-Tags</strong>, um ein Bild als klickbaren Hyperlink darzustellen.</p>

<ul>
  <li>Verwenden Sie den Tag <code>&lt;a&gt;</code> mit dem <strong>href</strong>-Attribut exakt gesetzt auf:<br>
    <code>https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3</code>
  </li>
  <li>Innerhalb des <code>&lt;a&gt;</code>-Tags fügen Sie ein <code>&lt;img&gt;</code>-Tag ein.</li>
  <li>Setzen Sie das <strong>src</strong>-Attribut des Bildes auf exakt:<br>
    <code>https://i.imgur.com/T9cOoPU.png</code>
  </li>
  <li>Verwenden Sie das <strong>alt</strong>-Attribut exakt mit dem Wert:<br>
    <code>"open in new tab for boom"</code>
  </li>
  <li>Setzen Sie <strong>height</strong> und <strong>width</strong> des Bildes jeweils auf <code>300</code></li>
</ul>

<p><em>English Translation:</em></p>

<ul>
  <li><em>Use <strong>nested HTML tags</strong> to make an image a clickable hyperlink.</em></li>
  <li><em>Use the <code>&lt;a&gt;</code> tag with the <strong>href</strong> attribute exactly set to:<br>
    <code>https://www.chosic.com/wp-content/uploads/2023/06/vine-boom-sound-effect(chosic.com).mp3</code></em></li>
  <li><em>Inside the <code>&lt;a&gt;</code> tag, insert an <code>&lt;img&gt;</code> tag.</em></li>
  <li><em>Set the image’s <strong>src</strong> attribute exactly to:<br>
    <code>https://i.imgur.com/T9cOoPU.png</code></em></li>
  <li><em>Use the <strong>alt</strong> attribute with the exact value:<br>
    <code>"open in new tab for boom"</code></em></li>
  <li><em>Set <strong>height</strong> and <strong>width</strong> of the image to <code>300</code> each.</em></li>
</ul>

</body>
</html>

`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 19 – Architektur von Webanwendungen</title>
</head>
<body>

  <h2>Architektur von Webanwendungen</h2>

  <ul>
    <li><strong>Minimale Bestandteile:</strong>
      <ul>
        <li>Webbrowser auf einem Client-Rechner</li>
        <li>Webserver auf einem Internet-Server</li>
        <li>Verwendung des Hypertext Transfer Protocols (HTTP)</li>
        <li>Statische Webseiten liegen auf dem Internet-Server</li>
      </ul>
    </li>
  </ul>

  <img src='https://i.imgur.com/2xgUXRo.png'/>

  <h3>1. Client-Rechner</h3>
  <ul>
    <li>Enthält den <strong>Browser</strong></li>
    <li>Sendet eine <strong>request (URL)</strong>-Anfrage an den Internet-Server</li>
    <li>Empfängt die <strong>response (HTML)</strong>-Antwort vom Server</li>
  </ul>

  <h3>2. Internet-Server</h3>
  <ul>
    <li>Enthält den <strong>Webserver</strong></li>
    <li>Verarbeitet die eingehende Anfrage vom Client</li>
    <li>Falls notwendig, sendet er eine <strong>Datenbankabfrage</strong> an den Datenbank-Server</li>
    <li>Erhält <strong>Datensätze</strong> als Antwort von der Datenbank</li>
    <li>Formatiert diese Daten und sendet sie als <strong>HTML-Antwort</strong> zurück an den Browser des Clients</li>
  </ul>

  <h3>3. Datenbank-Server</h3>
  <ul>
    <li>Führt die <strong>Datenbankabfrage</strong> aus, die vom Webserver gestellt wurde</li>
    <li>Gibt die <strong>Datensätze</strong> zurück an den Webserver</li>
  </ul>

  <hr />

  <h3>Ablauf in Kurzform:</h3>
  <pre>
Browser → request (URL) → Webserver
Webserver → optional: Datenbankabfrage → Datenbank-Server
Datenbank-Server → Datensätze → Webserver
Webserver → response (HTML) → Browser
  </pre>

  <ul>
    <li>Optional Generierung einer Webseite durch Skript oder Programm</li>
    <li>Optional Verbindung mit Datenbank und Anwendungen</li>
  </ul>

  <h2>Hypertext Transfer Protocol (Standard des WWW Consortium)</h2>

  <ul>
    <li>Besteht aus den Nachrichten Request und Response</li>
    <li>Unterstützt von Webbrowser und Webserver</li>
    <li>Zustandslos → daher Cookies</li>
    <li>Nicht verschlüsselt</li>
  </ul>

  <img src='https://i.imgur.com/d35BPqY.png'/>

  <h3>Kommunikationsablauf:</h3>
  <pre>
Webbrowser (Client) → Request-Nachricht
Webserver → Response-Nachricht
  </pre>

  <ul>
    <li><strong>HTTP-Header</strong> (Kodierung, Inhaltstyp, …)</li>
    <li><strong>Message-Body</strong> (Nutzdaten)</li>
    <li><strong>Statusinformationen</strong></li>
    <li><strong>Nutzdaten</strong> (HTML, CSS, …)</li>
  </ul>

  <h3>HTTP: Webseite anfordern</h3>
  <pre>
Request
GET /mi/index.html HTTP/1.1
Host: hs-offenburg.de

Response
HTTP/1.1 200 OK
Date: …
Last-Modified: …
Content-Type: charset/UTF-8; …
Content-Length: …

&lt;!DOCTYPE html&gt;
&lt;html …
  </pre>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 20 – Formulare in HTML</title>
</head>
<body>

  <h2>Formulare in HTML</h2>

  <ul>
    <li>Dateneingabe des Benutzers:</li>
    <li><code>&lt;form&gt; … &lt;/form&gt;</code></li>
  </ul>

  <h3>Wichtige Attribute:</h3>
  <ul>
    <li><code>method="post"</code> (oder "get")</li>
    <li><code>action="Skript-URL"</code></li>
  </ul>

  <h3>UI-Elemente:</h3>
  <ul>
    <li><code>&lt;input /&gt;</code></li>
  </ul>

  <h3>Typische Attribute:</h3>
  <ul>
    <li><code>type="text"</code> (password, radio, checkbox, submit, reset, button, file)</li>
    <li><code>name="Elementname"</code></li>
    <li><code>value="Wert"</code></li>
    <li><code>size="Breite"</code></li>
    <li><code>checked="checked"</code></li>
  </ul>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle ein Formular mit dem Tag <code>&lt;form&gt;</code> und folgenden Attributen:</p>
<ul>
  <li><code>method="post"</code></li>
  <li><code>action="submit.php"</code></li>
  <li><code>onsubmit="return false;"</code></li>
</ul>

<p>Das Formular soll mit einer Überschrift beginnen:<br />
Nutze <code>&lt;h1&gt;</code> und schreibe: <strong>Black Knights Application</strong></p>

<p>Dann folgt ein Eingabefeld für den Namen.<br />
Verwende dazu <code>&lt;p&gt;</code> für den gesamten Abschnitt.<br />
Schreibe: <strong>Name:</strong> und füge danach ein <code>&lt;input&gt;</code> mit folgenden Attributen ein:</p>
<ul>
  <li><code>type="text"</code></li>
  <li><code>name="username"</code></li>
  <li><code>size="30"</code></li>
</ul>

<p>Im nächsten Abschnitt soll das Geschlecht ausgewählt werden.<br />
Nutze wieder <code>&lt;p&gt;</code> mit dem Text: <strong>Gender:</strong><br />
Darunter sollen vier <code>&lt;input&gt;</code>-Felder vom Typ <code>radio</code> stehen, alle mit <code>name="gender"</code>:</p>
<ul>
  <li><code>value="male"</code> mit <code>checked="checked"</code></li>
  <li><code>value="female"</code></li>
  <li><code>value="mecha"</code></li>
  <li><code>value="other"</code></li>
</ul>

<p>Hinter jedem <code>&lt;input&gt;</code> steht der jeweilige Text (z. B. <strong>Male</strong>).</p>

<p>Danach folgt ein weiterer Abschnitt mit einer Checkbox.<br />
Nutze <code>&lt;p&gt;</code> mit einem <code>&lt;input&gt;</code> vom Typ <code>checkbox</code> und diesen Attributen:</p>
<ul>
  <li><code>name="privacy"</code></li>
  <li><code>value="accepted"</code></li>
</ul>

<p>Der Text dahinter lautet: <strong>I agree to the I HATE BRITANNIA policy</strong></p>

<p>Ganz unten folgt ein Submit-Button:<br />
Verwende ein <code>&lt;input&gt;</code> mit:</p>
<ul>
  <li><code>type="submit"</code></li>
  <li><code>value="Register"</code></li>
</ul>

<p><em>English Translation:</em></p>

<p><em>Create a form using the <code>&lt;form&gt;</code> tag with the following attributes:</em></p>
<ul>
  <li><em><code>method="post"</code></em></li>
  <li><em><code>action="submit.php"</code></em></li>
  <li><em><code>onsubmit="return false;"</code></em></li>
</ul>

<p><em>Start with a heading using <code>&lt;h1&gt;</code> that says: Black Knights Application.</em></p>

<p><em>Next, add a name input field inside a <code>&lt;p&gt;</code> element, starting with "Name:", followed by an <code>&lt;input&gt;</code> with:</em></p>
<ul>
  <li><em><code>type="text"</code></em></li>
  <li><em><code>name="username"</code></em></li>
  <li><em><code>size="30"</code></em></li>
</ul>

<p><em>Then, add a section for gender inside another <code>&lt;p&gt;</code> tag labeled "Gender:". Below that, insert four <code>&lt;input&gt;</code> tags of type <code>radio</code>, all sharing <code>name="gender"</code> with values:</em></p>
<ul>
  <li><em>"male" (with <code>checked="checked"</code>)</em></li>
  <li><em>"female"</em></li>
  <li><em>"mecha"</em></li>
  <li><em>"other"</em></li>
</ul>

<p><em>After each <code>&lt;input&gt;</code>, include visible text like Male, Female, etc.</em></p>

<p><em>Then add a checkbox inside a <code>&lt;p&gt;</code> with:</em></p>
<ul>
  <li><em><code>type="checkbox"</code></em></li>
  <li><em><code>name="privacy"</code></em></li>
  <li><em><code>value="accepted"</code></em></li>
</ul>

<p><em>With visible text: I agree to the I HATE BRITANNIA policy</em></p>

<p><em>Finally, include a submit button: <code>&lt;input type="submit" value="Register" /&gt;</code></em></p>

<p><strong><em>Note:</em></strong><br />
<em>Normally, the <code>action</code> attribute sends the form data to the file (e.g. <code>submit.php</code>).  
But inside the preview window, it causes a blank reload.  
To prevent this, include <code>onsubmit="return false;"</code> in the <code>&lt;form&gt;</code> tag.</em></p>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 21 – Formulare (2)</title>
</head>
<body>

  <h2>Formulare (2)</h2>

  <h3>Auswahlfelder:</h3>
  <p><code>&lt;select&gt; … &lt;/select&gt;</code></p>

  <p><strong>Attribute:</strong></p>
  <ul>
    <li><code>name="Elementname"</code> (oder <code>name[]</code> für Mehrfachauswahl)</li>
    <li><code>multiple="multiple"</code></li>
    <li><code>size="sichtbare Einträge"</code></li>
  </ul>

  <h3>Optionen:</h3>
  <p><code>&lt;option&gt; … &lt;/option&gt;</code></p>
  <p><strong>Attribute:</strong> <code>value="Wert"</code> <code>selected="selected"</code></p>

  <h3>Texteingabefeld:</h3>
  <p><code>&lt;textarea&gt; … &lt;/textarea&gt;</code></p>
  <p><strong>Attribute:</strong> <code>name="Elementname"</code> <code>rows="1"</code> <code>cols="1"</code></p>

  <h3>🎯 Studienziel – Aufgabe im Code Editor</h3>

<p>Erstelle ein HTML-Formular mit den folgenden Anforderungen:</p>

<ul>
  <li>Beginne mit einem <code>&lt;form&gt;</code>-Element, das die Attribute <code>method="post"</code>, <code>action="submit.php"</code> und <code>onsubmit="return false;"</code> enthält.</li>
  <li>Verwende <code>&lt;h1&gt;So you want to darkly gather ghosts?&lt;/h1&gt;</code> als Überschrift des Formulars.</li>
  <li>Erstelle einen Auswahlbereich für eine Spielzeugwahl mit dem Tag <code>&lt;select&gt;</code>:
    <ul>
      <li>Nutze das Attribut <code>name="toy"</code> und <code>size="1"</code>.</li>
      <li>Füge genau drei <code>&lt;option&gt;</code>-Elemente ein:
        <ul>
          <li><code>value="teddy"</code> mit Text: Teddy Bear</li>
          <li><code>value="doll"</code> mit Text: Barbie Doll</li>
          <li><code>value="beluga"</code> mit Text: Plush Beluga</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Erstelle ein weiteres <code>&lt;select&gt;</code>-Element für Mehrfachauswahl von Traumata:
    <ul>
      <li>Verwende <code>name="traumas[]"</code>, <code>multiple="multiple"</code> und <code>size="4"</code>.</li>
      <li>Füge vier <code>&lt;option&gt;</code>-Elemente ein:
        <ul>
          <li><code>value="prego"</code> mit Text: Pregnancy demon</li>
          <li><code>value="ww1"</code> mit Text: WW1 ghost asked me for water</li>
          <li><code>value="womb"</code> mit Text: A womb stole my mom</li>
          <li><code>value="grooming"</code> mit Text: Groomed by spirit</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Erstelle ein Texteingabefeld mit <code>&lt;textarea&gt;</code>:
    <ul>
      <li>Die Attribute müssen <code>name="mission"</code>, <code>rows="4"</code> und <code>cols="40"</code> lauten.</li>
      <li>Der vorgegebene Text soll exakt lauten: Well it all started when...</li>
    </ul>
  </li>
  <li>Beende das Formular mit einem Submit-Button:
    <ul>
      <li>Nutze <code>&lt;input type="submit" value="Send"/&gt;</code> und lege ihn in ein eigenes <code>&lt;p&gt;</code>-Element.</li>
    </ul>
  </li>
</ul>

<p><em>English translation:</em></p>

<p><em>Create an HTML form with the following requirements:</em></p>

<ul>
  <li><em>Begin with a <code>&lt;form&gt;</code> element containing <code>method="post"</code>, <code>action="submit.php"</code>, and <code>onsubmit="return false;"</code>.</em></li>
  <li><em>Use <code>&lt;h1&gt;So you want to darkly gather ghosts?&lt;/h1&gt;</code> as the title.</em></li>
  <li><em>Add a toy selection dropdown using <code>&lt;select&gt;</code> with <code>name="toy"</code> and <code>size="1"</code>. Include exactly three <code>&lt;option&gt;</code> entries:</em>
    <ul>
      <li><em><code>value="teddy"</code> – Teddy Bear</em></li>
      <li><em><code>value="doll"</code> – Barbie Doll</em></li>
      <li><em><code>value="beluga"</code> – Plush Beluga</em></li>
    </ul>
  </li>
  <li><em>Add another dropdown for trauma selection that allows multiple choices. Use <code>name="traumas[]"</code>, <code>multiple="multiple"</code>, and <code>size="4"</code>. Include:</em>
    <ul>
      <li><em><code>value="prego"</code> – Pregnancy demon</em></li>
      <li><em><code>value="ww1"</code> – WW1 ghost asked me for water</em></li>
      <li><em><code>value="womb"</code> – A womb stole my mom</em></li>
      <li><em><code>value="grooming"</code> – Groomed by spirit</em></li>
    </ul>
  </li>
  <li><em>Include a <code>&lt;textarea&gt;</code> input with <code>name="mission"</code>, <code>rows="4"</code> and <code>cols="40"</code> and the exact value: Well it all started when...</em></li>
  <li><em>End the form with a submit button wrapped inside a <code>&lt;p&gt;</code> tag.</em></li>
</ul>

<p><strong>Note:</strong> <em>To select multiple items in the second list, hold <strong>Ctrl (Windows)</strong> or <strong>Command (Mac)</strong> while clicking, or click and drag to highlight.</em></p>

</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 22 – GET und POST</title>
</head>
<body>

  <pre>
GET /php/post-query.php?studium=mwplus&amp;semester=1  HTTP/1.1
Host: info.mi.hs-offenburg.de

---

POST /php/post-query.php HTTP/1.1
Host: info.mi.hs-offenburg.de
Content-Length: 24

studium=mwplus&amp;semester=1

---

HTTP/1.1 200 OK
Date: …
Last-Modified: …
Content-Type: charset/UTF-8; …
Content-Length: 100

&lt;p&gt;Herzlich Willkommen zum 1. Sem. MW+&lt;/p&gt;
  </pre>

  <h2>Praktische Übung: 4. Aufgabe</h2>
  <p>Erstellen Sie folgende Webseite (es handelt sich um ein Formular)!</p>
  <p>Verwenden Sie folgende URL als Wert für das Attribut:</p>
  <code>action="http://info.mi.hs-offenburg.de/formGetPost.php"</code>

  <p><strong>Hinweis:</strong></p>
  <ul>
    <li>Sie können die Antwort nur im VPN der HSO testen.</li>
    <li>(VPN Cisco Client installieren)</li>
  </ul>

  <img src='https://i.imgur.com/RJaLufR.png'/>

  <h2>Praktische Übung: 4. Aufgabe – Lösung</h2>

  <pre>
&lt;body&gt;
  &lt;h1&gt;Pizzabestellformular&lt;/h1&gt;
  &lt;!--Sie dürfen action in der Klausur leer lassen--&gt;
  &lt;!--Jedes interaktive Element mit name, außer submit/reset--&gt;
  &lt;form action="http://info.mi.hs-offenburg.de/formGetPost.php" method="post"&gt;

    &lt;p&gt;Wähle eine Größe:&lt;/p&gt;
    &lt;br /&gt;
    klein &lt;input type="radio" name="groesse" value="kl" /&gt;
    &lt;br /&gt;
    groß &lt;input type="radio" name="groesse" value="gr" /&gt;
    &lt;br /&gt;

    &lt;p&gt;Wähle einen Belag:&lt;/p&gt;
    &lt;br /&gt;
    &lt;input type="checkbox" name="tom" /&gt;Tomaten
    &lt;br /&gt;
    &lt;input type="checkbox" name="kas" /&gt;Käse
    &lt;br /&gt;
    &lt;input type="checkbox" name="zwi" /&gt;Zwiebel

    &lt;p&gt;Adresse:&lt;/p&gt;
    &lt;input type="text" name="adr" size="30" value="Name, Straße, Hausnummer, PLZ" /&gt;
    &lt;br /&gt;

    &lt;input type="submit" value="bestellen" /&gt;
    &lt;input type="reset" value="abbrechen" /&gt;

  &lt;/form&gt;
&lt;/body&gt;
  </pre>

  <h2>HTML-Ausgabe des PHP-Skripts</h2>
  <p>Beispielhafte Antwortseite mit strukturiertem HTML-Inhalt wird angezeigt – z. B. Rückmeldung „Danke für Ihre Bestellung“</p>

  <img src='https://i.imgur.com/nTrtMlq.png'/>
</body>
</html>
`,


`<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Lesson 23 – Gestaltungshinweise zu Formularen</title>
</head>
<body>

  <h2>Gestaltungshinweise zu Formularen</h2>
  <ul>
    <li>Pro Zeile 1 Eingabefeld (Ausnahme: Radiobutton)</li>
    <li>Empfohlen: Beschriftung oberhalb des Feldes</li>
    <li>Keine Vorauswahl für Zustimmung zu AGB!</li>
    <li>Wenige Elemente je Formular – bei Bedarf zwei Formulare verwenden</li>
    <li>Sinnvolle Variablennamen und Werte</li>
    <li>Passwort mit <code>post</code> übertragen (und verschlüsseln!)</li>
    <li>Nach dem Submit-Button: Benutzer-Feedback geben</li>
    <li>Eingaben mit JavaScript prüfen</li>
    <li>Formulare mit sinnvollen Daten testen</li>
  </ul>

  <h2>Zusammenfassung Formulare</h2>
  <ul>
    <li>Einfache interaktive Webseiten:
      <ul>
        <li>Standardverhalten</li>
        <li>Standardgestaltung</li>
      </ul>
    </li>
    <li>Funktion von Formularen:
      <ul>
        <li>Eingabe der Daten auf der Client-Seite</li>
        <li>Übertragung der Daten zum Skript auf einem Server</li>
      </ul>
    </li>
  </ul>

  <p><strong>Nicht abgedeckt:</strong></p>
  <ul>
    <li>Verarbeitung der Formulardaten durch den Server</li>
    <li>Erzeugung der Feedback-Seite für den Client</li>
  </ul>

</body>
</html>
`,
];


