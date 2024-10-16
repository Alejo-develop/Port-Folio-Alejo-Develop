import { LucideIcon } from "lucide-react";
import styled from "styled-components";

interface SoftSkillsProps{
  title: string; 
  description: string;
  Icon: LucideIcon;
}

const CardHumanSkills = ({title, description, Icon}: SoftSkillsProps) => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card">
          <div className="front-content">
            <p>{title}</p>
          </div>
          <div className="content">
            <div className="flex justify-center items-center">
            <Icon size={'3.5rem'} />
            </div>
            <p className="text-sm text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
  width: 200px;
  height: 300px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.card .front-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .front-content p {
  font-size: 28px;
  font-weight: 1000;
  opacity: 1;
  background: white;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
}

.card .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1.1fr;
  text-align: center;
  gap: 20px;
  background: #2EBEDD;
  color: #e8e8e8;
  padding: 20px;
  line-height: 1.5;
  border-radius: 5px;
  pointer-events: none;
  transform: translatex(96%);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card .content .heading {
  font-size: 32px;
  font-weight: 700;
}

.card:hover .content {
  transform: translateY(0);
}

.card:hover .front-content {
  transform: translateX(20%);
}

.card:hover .front-content p {
  opacity: 0;
}


`;

export default CardHumanSkills;
