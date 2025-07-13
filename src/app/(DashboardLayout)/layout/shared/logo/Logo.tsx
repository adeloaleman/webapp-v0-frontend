import { useSelector } from "@/store/hooks";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { AppState } from "@/store/store";
import Image from "next/image";


const Logo = () => {
  const customizer = useSelector((state: AppState) => state.customizer);
  console.log("TopbarHeight:", customizer.TopbarHeight);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "50px" : "50px",
    overflow: "hidden",
    display: "block",
  }));

  if (customizer.activeDir === "ltr") {
    console.log("TopbarHeight:", customizer.TopbarHeight);
    return (
      <LinkStyled href="/">
        {customizer.activeMode === "dark" ? (
          <Image
            // src="/images/logos/light-logo.svg"
            src="/images/logos/mis_logos/twitter_1.png"
            alt="logo"
            // height={customizer.TopbarHeight}  // This is for some reason not working when I modify the value at /src/store/customizer/CustomizerSlice.tsx
            height={50}
            width={50}
            priority
          />
        ) : (
          <Image
            // src={"/images/logos/dark-logo.svg"}
            src="/images/logos/mis_logos/twitter_1.png"
            alt="logo"
            height={50}
            width={50}
            priority
          />
        )}
      </LinkStyled>
    );
  }
  console.log("TopbarHeight:", customizer.TopbarHeight);
  return (
    <LinkStyled href="/">
      {customizer.activeMode === "dark" ? (
        <Image
          // src="/images/logos/dark-rtl-logo.svg"
          src="/images/logos/mis_logos/twitter_1.png"
          alt="logo"
          height={50}
          width={50}
          priority
        />
      ) : (
        <Image
          // src="/images/logos/light-logo-rtl.svg"
          src="/images/logos/mis_logos/twitter_1.png"
          alt="logo"
          height={50}
          width={50}
          priority
        />
      )}
    </LinkStyled>
  );
};

export default Logo;
