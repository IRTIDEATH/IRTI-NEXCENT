const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-semibold text-center xs:text-[30px] xs:leading-[43px] leading-[33px] text-[30px] text-NeutralDGrey w-full",
    paragraph: "font-normal text-NeutralGrey text-center text-[15px]",
    heading1: "font-semibold text-start xs:text-[28px] xs:leading-[33px] leading-[23px] text-[20px] text-NeutralDGrey w-full",
    paragraphs: "font-normal text-NeutralGrey text-start text-[15px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-10",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };

  export default styles;