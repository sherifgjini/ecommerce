interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return <div className="w-full h-80 bg-cover bg-center bg-no-repeat rounded-xl" style={{backgroundImage: `url(/banner.png)`}}> </div>;
};

export default Banner;
