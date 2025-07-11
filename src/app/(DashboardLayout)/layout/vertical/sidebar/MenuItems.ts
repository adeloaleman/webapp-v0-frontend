import { uniqueId } from "lodash";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}
import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconAlertCircle,
  IconNotes,
  IconCalendar,
  IconMail,
  IconTicket,
  IconEdit,
  IconGitMerge,
  IconCurrencyDollar,
  IconApps,
  IconFileDescription,
  IconFileDots,
  IconFiles,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconBorderAll,
  IconBorderHorizontal,
  IconBorderInner,
  IconBorderVertical,
  IconBorderTop,
  IconUserCircle,
  IconPackage,
  IconMessage2,
  IconBasket,
  IconChartLine,
  IconChartArcs,
  IconChartCandle,
  IconChartArea,
  IconChartDots,
  IconChartDonut3,
  IconChartRadar,
  IconLogin,
  IconUserPlus,
  IconRotate,
  IconBox,
  IconShoppingCart,
  IconAperture,
  IconLayout,
  IconSettings,
  IconHelp,
  IconZoomCode,
  IconBoxAlignBottom,
  IconBoxAlignLeft,
  IconBorderStyle2,
  IconLockAccess,
  IconAppWindow,
} from "@tabler/icons-react";

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Modern",
    icon: IconAperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  },
  {
    id: uniqueId(),
    title: "Landingpage",
    icon: IconAppWindow,
    href: "/landingpage",
  },
  
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/auth/auth1/login",
    children: [
      {
        id: uniqueId(),
        title: "Side Login",
        icon: IconPoint,
        href: "/auth/auth1/login",
      },
      {
        id: uniqueId(),
        title: "Boxed Login",
        icon: IconPoint,
        href: "/auth/auth2/login",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/auth/auth1/register",
    children: [
      {
        id: uniqueId(),
        title: "Side Register",
        icon: IconPoint,
        href: "/auth/auth1/register",
      },
      {
        id: uniqueId(),
        title: "Boxed Register",
        icon: IconPoint,
        href: "/auth/auth2/register",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Forgot Password",
    icon: IconRotate,
    href: "/auth/auth1/forgot-password",
    children: [
      {
        id: uniqueId(),
        title: "Side Forgot Password",
        icon: IconPoint,
        href: "/auth/auth1/forgot-password",
      },
      {
        id: uniqueId(),
        title: "Boxed Forgot Password",
        icon: IconPoint,
        href: "/auth/auth2/forgot-password",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Two Steps",
    icon: IconZoomCode,
    href: "/auth/auth1/two-steps",
    children: [
      {
        id: uniqueId(),
        title: "Side Two Steps",
        icon: IconPoint,
        href: "/auth/auth1/two-steps",
      },
      {
        id: uniqueId(),
        title: "Boxed Two Steps",
        icon: IconPoint,
        href: "/auth/auth2/two-steps",
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Error",
    icon: IconAlertCircle,
    href: "/auth/error",
  },
  {
    id: uniqueId(),
    title: "Maintenance",
    icon: IconSettings,
    href: "/auth/maintenance",
  },

  {
    navlabel: true,
    subheader: "Other",
  },
  {
    id: uniqueId(),
    title: "Chip",
    icon: IconAward,
    href: "",
    chip: "9",
    chipColor: "primary",
  },
  {
    id: uniqueId(),
    title: "Outlined",
    icon: IconMoodSmile,
    href: "",
    chip: "outline",
    variant: "outlined",
    chipColor: "primary",
  },
  {
    id: uniqueId(),
    title: "External Link",
    external: true,
    icon: IconStar,
    href: "https://google.com",
  },
];

export default Menuitems;
