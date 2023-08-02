import "./startpage.css";

function StartPage() {
  return (
    <>
      <img
        className="readingnookbanner"
        src="https://cdn.discordapp.com/attachments/1078963035630223391/1135170484397412363/readingnookbanner.png"
      />

      <div className="information-grid">
        <div className="information-item">
          <p className="about-platform">
            Do you want to join a book club? Well... Welcome to our book club
            community, where bookworms come together to share their love for
            reading and explore captivating stories. Whether you're an avid
            reader or just dipping your toes into the world of literature, our
            book clubs offer a warm and inviting space to connect with fellow
            enthusiasts.
          </p>
        </div>
        <div className="information-item">
          <img
            className="bookshelf1"
            src="https://cdn-icons-png.flaticon.com/512/4344/4344790.png"
          />

          <img
            className="bookshelf2"
            src="https://cdn.discordapp.com/attachments/1078963035630223391/1135188871651536987/4344790.png"
          />
        </div>
      </div>

      <div className="flex-container">
        <img
          className="star-divider"
          src="https://cdn.discordapp.com/attachments/1078963035630223391/1135191668145012796/asedfsed-removebg.png"
        />
      </div>

      <div className="flex-container">
        <button className="join-button row">
          <p>Join</p>
          <img src="https://cdn.discordapp.com/attachments/1078963035630223391/1136323255955898388/616818.png"></img>
        </button>
      </div>

      <div className="three-information-container">
        <div className="flex-container column three-information-boxes">
          <img src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743591858196/2702134.png"></img>
          <h3>Host Your Own Club</h3>
          <p>
            Have a favorite book in mind that you're dying to discuss with
            others? Take the lead and host your very own book club! Share your
            passion, lead thought-provoking discussions, and discover fresh
            perspectives on beloved literary works.
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img src="https://cdn.discordapp.com/attachments/1078963035630223391/1136336743315030016/969639-200.png"></img>
          <h3>Join Existing Clubs</h3>
          <p>
            Prefer to join an established club? No worries! Explore our diverse
            range of book clubs, each centered around unique genres, authors,
            and themes. Engage in lively debates, exchange recommendations, and
            bond over shared literary experiences.
          </p>
        </div>
        <div className="flex-container column three-information-boxes">
          <img src="https://media.discordapp.net/attachments/1078963035630223391/1136337384959651990/3212567.png"></img>
          <h3>Connect with Readers</h3>
          <p>
            Connect beyond the pages of books. Our book club community fosters
            meaningful friendships, encouraging lively interactions through
            online forums and local meet-ups. Share your thoughts, make new
            friends, and cultivate a love for reading together.
          </p>
        </div>
      </div>
    </>
  );
}

export default StartPage;
