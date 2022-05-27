import { ReactComponent as TwitterLogo } from "assets/icons/twitter.svg";
import { ReactComponent as DiscordLogo } from "assets/icons/discord.svg";

import './Soc.scss';

function Soc() {
  return (
    <div className="Soc">
      <a href="https://twitter.com" className="soc-link" target="_blank" rel="noreferrer">
        <TwitterLogo className="soc-icon"/>
      </a>
      <a href="https://discord.com" className="soc-link" target="_blank" rel="noreferrer">
        <DiscordLogo className="soc-icon"/>
      </a>
    </div>
  );
}

export default Soc;
