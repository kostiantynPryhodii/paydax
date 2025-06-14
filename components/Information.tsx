"use client";
import dynamic from "next/dynamic";
import Container from "./Container";
import { ButtonJoin } from "./ButtonJoin";
import Image from "next/image";

const AnimationBalls = dynamic(() => import("@/components/AnimationBalls"));
const Video = dynamic(() => import("@/components/Video"));

export default function Information() {
  return (
    <>
      <div className="px-4 relative">
        <AnimationBalls></AnimationBalls>

        <div className="max-w-[786px] w-full mx-auto relative z-10 top-[-60px]">
          <div className="bg-[linear-gradient(83deg,_#000_0%,_#C0D908_100%)] py-12 px-16 rounded-[20px] flex items-end justify-between gap-4">
            <div className="flex flex-col items-start gap-2 max-w-[280px] w-full">
              <div className="text-center text-[18px] font-normal leading-normal">
                Raised Already:
              </div>
              <div className="text-[64px] font-[500] leading-normal tracking-[-3.84px]">
                $1.5M / 2M
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 max-w-[198px] w-full">
              <p className="text-[18px] font-medium leading-normal capitalize">
                Join Before it all sold out
              </p>
              <button
                className="w-full rounded-[16px] bg-[var(--White)] py-3 px-6 text-[var(--Black)] text-[16px] font-bold leading-[17px] uppercase cursor-pointer"
                type="button"
              >
                Join Now
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <div className="max-w-[325px] w-full rounded-[5px] bg-[var(--Neutral-Dark)] backdrop-blur-[25px] flex py-4 px-4 items-center justify-center gap-2">
              <div className="text-[var(--Neutral-Light)] text-[18px] font-normal leading-normal">
                Presale Ends In:
              </div>
              <div className="text-[var(--White)] text-[32px] font-[500] leading-normal tracking-[-1.92px]">
                10 Days
              </div>
            </div>

            <div className="max-w-[224px] w-full rounded-[5px] bg-[var(--Neutral-Dark)] backdrop-blur-[25px] flex py-4 px-4 items-center justify-center gap-2">
              <div className="text-[var(--Neutral-Light)] text-[18px] font-normal leading-normal">
                % Sold:
              </div>
              <div className="text-[var(--White)] text-[32px] font-[500] leading-normal tracking-[-1.92px]">
                75%
              </div>
            </div>

            <div className="max-w-[221px] w-full rounded-[5px] bg-[var(--Neutral-Dark)] backdrop-blur-[25px] flex py-4 px-4 items-center justify-center gap-2">
              <div className="text-[var(--Neutral-Light)] text-[18px] font-normal leading-normal">
                ROI:
              </div>
              <div className="text-[var(--White)] text-[32px] font-[500] leading-normal tracking-[-1.92px]">
                900%
              </div>
            </div>
          </div>
        </div>

        <section className="px-4 overflow-hidden">
          <Container>
            <Video></Video>

            <div className="flex justify-center mt-[30px]">
              <ButtonJoin>Buy Now — Join the Presale</ButtonJoin>
            </div>

            <div className="mt-[215px] relative z-10">
              <div className="flex">
                <div
                  style={{ zIndex: 3 }}
                  className="bg-[length:315px] bg-[url('/server.webp')] bg-no-repeat bg-right-bottom w-full p-16 rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex items-center"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    21,500
                  </span>
                </div>

                <div
                  style={{ zIndex: 2 }}
                  className="bg-[length:373px] -ml-[100px] bg-[url('/ROI.webp')] bg-no-repeat bg-left-bottom w-full p-16 rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex items-center justify-end"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    $3.2M
                  </span>
                </div>

                <div
                  style={{ zIndex: 1 }}
                  className="bg-[length:267px] -ml-[90px] bg-[url('/coin.webp')] bg-no-repeat bg-right-bottom w-full p-16 pl-[122px] rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex items-center"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    72x ROI
                  </span>
                </div>
              </div>

              <div className="flex mt-2">
                <div
                  style={{ zIndex: 3 }}
                  className="bg-[length:330px] bg-[url('/stopwatch.webp')] bg-no-repeat bg-left-bottom w-full p-16 rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex items-center justify-end"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    6.2 Day
                  </span>
                </div>

                <div
                  style={{ zIndex: 2 }}
                  className="bg-[length:292px] -ml-[90px] bg-[url('/audited.webp')] bg-no-repeat bg-right-bottom w-full p-16 pl-[122px] rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex items-center"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    Audited
                  </span>
                </div>

                <div
                  style={{ zIndex: 1 }}
                  className="relative left-[50px] ml-[-125px] min-w-[700px] bg-[linear-gradient(83deg,_#000_0%,_#C0D908_100%)] w-full p-16 rounded-[10px] border border-[#575757] bg-[#0F0F0F] min-h-[350px] flex flex-col items-center justify-center gap-[24px]"
                >
                  <span className="text-white text-[72px] font-semibold leading-[100%] tracking-[-4.32px] [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] [font-family:var(--font-heading)]">
                    Audited
                  </span>
                  <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-3">
                    <Image
                      src="/brinks-logo-blue.webp"
                      alt="Brinks logo"
                      width={223}
                      height={37}
                    />
                    <Image
                      src="/chainlink-logo-blue.webp"
                      alt="Chainlink logo"
                      width={175}
                      height={53}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-[32px]">
              <ButtonJoin>Buy Now — Join the Presale</ButtonJoin>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
