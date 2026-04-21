import instagramIcon from "../assets/img/instagram.png";
import githubIcon from "../assets/img/github.png";

export default function Footer() {
  return (
    <footer className="bg-gradient1 flex h-20 w-full items-center justify-center gap-4 lg:hidden">
      <a href="https://github.com/Crijo-Mcal/Weather-API">
        <img className="h-8 w-8 cursor-pointer" src={githubIcon} />
      </a>
      <a href="https://www.instagram.com/crijo95/">
        <img className="h-8 w-8 cursor-pointer" src={instagramIcon} />
      </a>
    </footer>
  );
}
