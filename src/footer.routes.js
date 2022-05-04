// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Neta Güvenlik Sistemleri ve Bilişim Teknolojileri",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com",
    },
  ],
  menus: [
    {
      name: "Şirketimiz",
      items: [
        { name: "Hakkımızda", href: "/" },
        { name: "Bayilerimiz", href: "/" },
        { name: "İletişim", href: "/" },
        { name: "Talepleriniz", href: "/" },
      ],
    },
    {
      name: "Kaynaklarımız",
      items: [
        { name: "Ürünler", href: "/" },
        { name: "Kategoriler", href: "/" },
        { name: "Size Özel Teklifler", href: "/" },
      ],
    },
    {
      name: "Yardım & Destek",
      items: [
        { name: "İletişime Geçin", href: "/" },
        { name: "Bilgi Merkezi", href: "/" },
        { name: "Canlı Destek", href: "/" },
        { name: "Örnek Projeler", href: "/" },
      ],
    },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Bütün Hakları Saklıdır. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.creative-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Neta Güvenlik Sistemleri ve Bilişim Teknolojileri
      </MKTypography>
      .
    </MKTypography>
  ),
};
