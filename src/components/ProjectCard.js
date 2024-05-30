import { Col } from "react-bootstrap";
import { FaItchIo } from "react-icons/fa";
import {FaSteam, FaUnity} from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { PiVirtualRealityBold, PiCubeTransparentBold, PiCubeFocus } from "react-icons/pi";

export const ProjectCard = ({ title, description, imgUrl, program, itchLink, gameType }) => {
  const renderProgramIcon = () => {
    switch (program) {
      case "Unity":
        return <FaUnity />;
      case "Unreal Engine":
        return <SiUnrealengine />;
      case "Steam":
        return <FaSteam />;
      default:
        return null;
    }
  };

  const renderGameTypeIcon = () => {
    switch (gameType) {
      case "VR":
        return <PiVirtualRealityBold/>;
      case "3D":
        return <PiCubeTransparentBold/>;
      case "2D":
        return <PiCubeFocus />;
      default:
        return null;
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <div className="program-info">
            {program && <div className="program-icon">{renderProgramIcon()}</div>}
            {gameType && <div className="game-type-icon">{renderGameTypeIcon()}</div>}
          </div>
          <h4>{title}</h4>
          <div className="proj-description">
            <span>{description}</span>
            {itchLink && (
              <a href={itchLink} target="_blank" rel="noopener noreferrer" className="itch-link">
                <FaItchIo />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};