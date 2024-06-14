import { Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VisaoffersSix from "../../components/VisaoffersSix";
import React, { Suspense } from "react";

const data = [
  {},
  {
    countrytext: "South Korea",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$380.00",
  },
  {
    countrytext: "Turkey",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$200.00",
  },
  {
    countrytext: "South Africa",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$290.00",
  },
  {
    countrytext: "Germany",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$350.00",
  },
  {
    countrytext: "Japan",
    descriptiontext: "Lorem Ipsum is simply dummy text the printing and provide best visa ever",
    applybutton: "Apply Now",
    thirtythousandbutton: "$310.00",
  },
];

export default function VisaoffersPage() {
  return (
    <div className="w-full bg-white-A700 pt-[30px] sm:pt-5">
      <div className="flex flex-col items-center gap-[110px] md:gap-[82px] sm:gap-[55px]">
        <div className="flex w-[94%] flex-col gap-[30px] md:w-full md:p-5">
          <Header className="md:flex-col" />
          <div className="flex justify-center rounded-[50px] bg-teal-900_cc py-[148px] md:py-5">
            <div className="container-xs mb-[39px] flex md:p-5">
              <div className="flex flex-col items-start">
                <Heading size="4xl" as="h1" className="capitalize !text-white-A700">
                  Visa Offers
                </Heading>
                <div className="flex flex-wrap items-center gap-[15px]">
                  <Heading size="md" as="h2" className="!text-white-A700">
                    Home
                  </Heading>
                  <Img src="img_save.svg" width={8} height={16} alt="save" className="h-[16px]" />
                  <Heading size="md" as="h3" className="!text-white-A700">
                    Visa Offers
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xs md:p-5">
          <div className="grid grid-cols-2 justify-center gap-[30px] md:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <VisaoffersSix {...d} key={"post" + index} />
              ))}
            </Suspense>
          </div>
        </div>
        <Footer className="self-stretch bg-teal-900 pt-[30px] sm:pt-5" />
      </div>
    </div>
  );
}
