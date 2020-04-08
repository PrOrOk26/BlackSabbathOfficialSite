import createElement from "../shared/components";
import { records } from "../DiscographyComponent/discographyData.js";

const formatDate = (date) => {
  const year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
  const day = new Intl.DateTimeFormat("en", { day: "numeric" }).format(date);

  return `${month} ${day}, ${year}`;
};

const RecordComponent = (props) => {
  const { discid } = props;
  debugger;
  const { name, dateReleased, songs, cover } = records.find(
    (r) => r.discid === +discid
  );

  return (
    <div>
      <div class="record-header">
        <div class="record-info">
          <h1>MUSIC</h1>
          <h2>{name}</h2>
          <h2>{`RELEASED ${formatDate(dateReleased)}`}</h2>
        </div>
        <img src={cover} class="record-cover" alt={name} />
      </div>
      <div class="record-main">
        <div class="song-names">
          <h2>SONGS</h2>
          <ul class="songs-list">
            {songs.map((song, index) => {
              return (
                <li>
                  <span>{index + 1}</span>
                  <span>{song.name}</span>
                  <a href="#">Lyrics</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div class="record-info">
          <h2>About record</h2>
          <p>
            James Hetfield – Guitar, Vocals
            <br />
            Lars Ulrich – Drums
            <br />
            Kirk Hammett – Guitar
            <br /> Cliff Burton – Bass
          </p>
          <p>
            Executive Producer: Jon Zazula
            <br />
            Producer: Paul Curcio
            <br />
            Engineer: Chris Bubacz
            <br /> Assistant Engineer: Andy Wroblewski
          </p>
          <p>
            Recorded &amp; Mixed at Music America in May 1983
            <br /> Megaforce Release Mastered by Jack Skinner
            <br /> Elektra Release Mastered by Bob Ludwig
            <br /> Remastered in 1995 by George Marino
          </p>
          <p>
            Front &amp; Back Cover Design Photo: Gary L. Heard, GLH Studios
            <br />
            Inner Sleeve Photos: Kevin Hodapp
            <br /> Design &amp; Layout: Shari &amp; Harold Risch
          </p>
          <p>
            Management: Crazed Management (Megaforce Release) and Q Prime, Inc.
            (Elektra Release)
          </p>
          <p>
            <strong>AM I EVIL?</strong> and <strong>BLITZKRIEG </strong>
            <br />
            Producer: Metallica &amp; Mark Whitaker
            <br /> Engineer: Jeffrey "Nik" Norman
            <br /> Recorded and mixed in October 1984
            <br /> These songs were available on the Elektra reissue of
            <cite>KILL ‘EM ALL</cite> from 1988 to 1991
          </p>
          <p>
            <strong>THE FOUR HORSEMEN </strong>and <strong>WHIPLASH</strong>
            <br />
            Recorded live on August 29, 1989 at the Seattle Coliseum in Seattle,
            WA
            <br />
            Bass &amp; Additional Vocals by Jason Newsted
            <br />
            Mixed by Mike Gillies
            <br />
            These songs were available on the digital reissue of{" "}
            <cite>KILL ‘EM ALL</cite> from 2006 to 2011
          </p>
          <p style="font-size: x-small;">
            All songs © Creeping Death Music (ASCAP) except{" "}
            <strong>AM I EVIL?</strong>© Happy Face Music Ltd./Zomba
            Enterprises, Inc. and <strong>BLITZKRIEG</strong>
            © Men From The North Ltd. <br /> © 1983 Blackened Recordings
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordComponent;
