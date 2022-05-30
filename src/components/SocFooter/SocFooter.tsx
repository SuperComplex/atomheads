import { ReactComponent as TwitterLogo } from "assets/icons/twitter.svg";
import { ReactComponent as DiscordLogo } from "assets/icons/discord.svg";
import { ReactComponent as OpenSeaLogo } from "assets/icons/opensea.svg";

import './SocFooter.scss';

function SocFooter() {
  return (
    <div className="Soc-footer">
      <a href="https://twitter.com" className="soc-link" target="_blank" rel="noreferrer">
        <TwitterLogo className="soc-icon"/>
      </a>
      <a href="https://discord.com" className="soc-link" target="_blank" rel="noreferrer">
        <DiscordLogo className="soc-icon"/>
      </a>
      <a href="https://opensea.io" className="soc-link" target="_blank" rel="noreferrer">
        <OpenSeaLogo className="soc-icon"/>
      </a>
    </div>
  );
}

export default SocFooter;
