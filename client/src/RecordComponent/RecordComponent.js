import createElement from "../shared/components";
import { records } from "../DiscographyComponent/discographyData.js";
import formatDate from "../shared/formatDate.js";
import redirect from "../shared/components.js";

const RecordComponent = (props) => {
  const {
    params: { discid },
  } = props;

  const record = records.find((r) => r.discid === +discid);

  if (!record) {
    throw new Error('404');
  }

  const {
    name = null,
    dateReleased = null,
    songs = null,
    cover = null,
  } = record;

  return (
    <div>
      <div class="record-header">
        <div class="record-header__text">
          <h1 class="title">MUSIC</h1>
          <h2>{name}</h2>
          <h4 class="">{`RELEASED ${formatDate(dateReleased)}`}</h4>
        </div>
        <div class="img-wrapper">
          <img src={cover} alt={name} class="cover" />
        </div>
      </div>
      <div class="record-main">
          <ul class="record-main__songs">
            {songs.map((song, index) => {
              return (
                <li class="song">
                  <span>{index + 1}</span>
                  <a class="song-link" href="#">
                    {song.name}
                  </a>
                </li>
              );
            })}
          </ul>
        <div class="record-main__info">
          <h6>About record</h6>
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
