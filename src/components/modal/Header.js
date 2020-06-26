import React from "react";

import { ZoomInIcon, ZoomOutIcon, CloseIcon } from "./icons";

const Header = ({
  image,
  alt,
  zoomed,
  toggleZoom,
  onClose,
}) => (
  <div className="modalImageHeader">
    <span className="modalIconMenu">
        <a onClick={toggleZoom}>
          {zoomed ? <ZoomOutIcon /> : <ZoomInIcon />}
        </a>
      <a onClick={onClose}>
        <CloseIcon />
      </a>
    </span>
    {alt && <span className="reactModalCaption">{alt}</span>}
  </div>
);

export default Header;
