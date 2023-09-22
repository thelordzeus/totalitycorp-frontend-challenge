import { LANDINGPAGE } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col items-center justify-start md:w-[90%] md:flex-row lg:w-[85%] xl:w-[80%] 2xl:w-[70%]">
      <section className="flex w-[80%] flex-col items-center text-center md:w-[50%] md:items-start md:text-left">
        <h1 className="mt-[5%] font-primaryFont text-[9vw] text-primaryText md:mt-[0%] md:text-[4.2vw]">
          <p>
            {LANDINGPAGE.TITLE_P1}
            <span className="ml-[1%] font-secondaryFont">
              {LANDINGPAGE.TITLE_P2}
            </span>
          </p>
          <p>{LANDINGPAGE.TITLE_P3}</p>
        </h1>
        <div className="font-base my-[7%] flex w-fit text-center text-sm">
          <div className="flex max-w-[120px] flex-col items-center">
            <div>
              <Image
                width={60}
                height={60}
                src={"/assets/prop1.svg"}
                alt="ASGS Supermarket"
                unoptimized
              />
            </div>
            <p className="mt-[5%] font-secondaryFont text-primaryText">
              {LANDINGPAGE.SUB_TITLE_1}
            </p>
          </div>
          <div className="mx-[5%] flex max-w-[120px]  flex-col items-center">
            <div>
              <Image
                width={60}
                height={60}
                src={"/assets/prop2.svg"}
                alt="ASGS Supermarket"
                unoptimized
              />
            </div>
            <p className="mt-[5%] font-secondaryFont text-primaryText">
              {LANDINGPAGE.SUB_TITLE_2}
            </p>
          </div>
          <div className="flex max-w-[120px] flex-col items-center ">
            <div>
              <Image
                width={72}
                height={72}
                src={"/assets/prop3.svg"}
                alt="ASGS Supermarket"
              />
            </div>
            <p className="mt-[5%] font-secondaryFont text-primaryText">
              {LANDINGPAGE.SUB_TITLE_3}
            </p>
          </div>
        </div>
        <Link
          href="/products"
          className="w-fit rounded-md border border-primaryText bg-secondaryBg px-[8%] py-[3%] font-secondaryFont text-primaryText transition-all duration-300 hover:border-secondaryBg hover:bg-primaryText hover:text-secondaryBg"
        >
          {LANDINGPAGE.BUTTON}
        </Link>
      </section>
      <section className="w-[90%] md:w-[50%]">
        <div className="p-[3%]">
          <Image
            className="h-auto w-full rounded-t-full border-4 border-secondaryBg"
            src={"/assets/bg.jpg"}
            alt=""
            width={72}
            height={72}
            unoptimized
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
