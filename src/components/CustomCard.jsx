import Image from "next/image";
const CustomCard = ({ title, description, imageUrl, buttonText, onClick }) => {
    return (
      <div className="custom-card rounded-br-[1000px]">
        <Image src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <button className="card-button" onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    );
  };
  
  export default CustomCard;