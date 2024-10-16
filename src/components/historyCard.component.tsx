import styled from "styled-components";
import port1 from '../data/img/port1.png'; 

interface HistoryCardProps{
  title: string;
  description: string;
  year: string | number;
  img: string
}

const HistoryCardComponent = ({title, description, year, img}: HistoryCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <h3 className="text-primary mt-4">{title}</h3>
        <h4 className="text-primary text-center text-sm">{year}</h4>
        <p className="info">
          {description}
        </p>
        <div className="flex justify-center items-center h-full">
          <img src={img} alt="portImg" className={img === port1 ? 'h-[8rem]' : `h-[11rem]`}/>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 17rem;
    height: 22.5em;
    background: #171717;
    transition: 1s ease-in-out;
    clip-path: polygon(
      30px 0%,
      100% 0,
      100% calc(100% - 30px),
      calc(100% - 30px) 100%,
      0 100%,
      0% 30px
    );
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: translateY(-15px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  }

  .card h3 {
    font-weight: bold;
    text-align: center;
    display: block;
    font-size: 1.5rem;
    text-shadow: 2px 2px 4px rgb(0, 0, 0);
    transition: transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease,
      letter-spacing 0.3s ease;
  }

  h3:hover {
    transform: translateY(-5px);
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .card .info {
    font-weight: 400;
    color: white;
    display: block;
    text-align: center;
    font-size: 0.8rem;
    margin: 1em;
  }

  .card .img {
    width: 4.8em;
    height: 4.8em;
    background: white;
    border-radius: 15px;
    margin: auto;
  }

  .card .share {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    gap: 1em;
  }

  .card a {
    color: white;
    transition: 0.4s ease-in-out;
  }

  .card a:hover {
    color: red;
  }

  .card button {
    padding: 0.8em 1.7em;
    display: block;
    margin: auto;
    border-radius: 25px;
    border: none;
    font-weight: bold;
    background: #ffffff;
    color: rgb(0, 0, 0);
    transition: 0.4s ease-in-out;
  }

  .card button:hover {
    background: red;
    color: white;
    cursor: pointer;
  }
`;

export default HistoryCardComponent;
